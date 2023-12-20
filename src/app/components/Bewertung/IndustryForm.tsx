import React, { useState } from 'react';
import { FourFieldSection } from './FourFieldSection';
import HouseIcon from '../Icons/HouseIcon';
import ApartmentIcon from '../Icons/ApartmentIcon';
import GroundIcon from '../Icons/GroundIcon';
import FactoryIcon from '../Icons/FactoryIcon';
import ColumnFieldSection from './ColumnFieldSection';
import SliderSection from './SliderSection';
import InputSection from './InputSection';
import ContactSection from './ContactSection';

const IndustryForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [industryType, setIndustryType] = useState('');
    const [useSize, setUseSize] = useState('');
    const [landSize, setLandSize] = useState('');
    const [houseAge, setHouseAge] = useState('');
    const [streetAndNumber, setStreetAndNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    // Vordefinierte Auswahlmöglichkeiten
    const industryTypes = {
        'Büro': HouseIcon,
        'Einzelhandel': ApartmentIcon,
        'Logistik': HouseIcon,
        'Mischnutzung': HouseIcon
    };
    const houseAges = ['vor 1940', 'vor 1980', 'vor 2010', 'nach 2010', 'Ich weiß es nicht'];
    const useSizes = ['bis 500 m²', 'bis 1000 m²', 'bis 2000 m²', 'über 2000 m²', 'Ich weiß es nicht'];
    const landSizes = ['bis 500 m²', 'bis 1000 m²', 'bis 2000 m²', 'über 2000 m²', 'Ich weiß es nicht'];

    // Schritt-Wechsel-Funktionen
    const goToNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else if (currentStep === 1) {
            window.history.back();
        }
    };

    // Event-Handler
    const handleIndustryTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndustryType(event.target.value);
    };

    const handleUseSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseSize(event.target.value);
    }

    const handleLandSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLandSize(event.target.value);
    };
    
    const handleHouseAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseAge(event.target.value);
    };

    const handleStreetAndNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreetAndNumber(event.target.value);
    };

    const handlePostCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostCode(event.target.value);
    }

    // Formular absenden
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Verarbeiten der Daten
    };

    return (
        <form onSubmit={handleSubmit} className='flex'>
            
            <button type='button' onClick={goToPreviousStep} className='flex flex-col items-center justify-center'>
                <svg height="30" viewBox="0 -960 960 960" width="30">
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                </svg>
                Zurück
            </button>
            
            <div className='flex-grow'>
                {currentStep === 1 && (
                    <FourFieldSection 
                        title="Erzählen Sie uns ein wenig mehr Ihre Wohnung" 
                        subtitle="Wann wurde die Immobilie gebaut?" 
                        fieldIconPairs={Object.entries(industryTypes).map(([field, icon]) => ({ field, icon }))}
                        onSelect={goToNextStep} 
                    />
                )}

                {currentStep === 2 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie"
                        subtitle="Wie groß ist die Nutzfläche?"
                        fields={useSizes}
                        onSelect={goToNextStep}
                    />
                )}

                {currentStep === 3 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie"
                        subtitle="Wie groß ist die Grundstücksfläche?"
                        fields={landSizes}
                        onSelect={goToNextStep}
                    />
                )}

                {currentStep === 4 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie"
                        subtitle="Wann wurde die Immobilie gebaut?"
                        fields={houseAges}
                        onSelect={goToNextStep}
                    />
                )}

                {currentStep === 5 && (
                    <div className="w-full grid place-items-center gap-10">
                    <InputSection
                        title="Wo befindet sich Ihre Immobilie?"
                        values={['Straße und Hausnummer', 'PLZ']}
                    />
                    <button type="button" onClick={goToNextStep}>Bewertung anfordern</button>
                </div>
                )}   

                {currentStep === 6 && (
                    <ContactSection />
                )}
            </div>
             
        </form>
    );
};

export default IndustryForm;