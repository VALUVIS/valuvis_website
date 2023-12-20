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
import { apiCall } from '@/app/utils/api';

const HouseForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [houseType, setHouseType] = useState('');
    const [landSize, setLandSize] = useState('');
    const [houseAge, setHouseAge] = useState('');
    const [livingSpace, setLivingSpace] = useState('');

    // Vordefinierte Auswahlmöglichkeiten
    const houseTypes = {
        'Einfamilienhaus': HouseIcon,
        'Mehrfamilienhaus': ApartmentIcon,
        'Reihenhaus': HouseIcon,
        'Doppelhaushälfte': HouseIcon
    };
    const landSizes = ['bis 500 m²', 'bis 1000 m²', 'bis 2000 m²', 'über 2000 m²', 'Ich weiß es nicht'];
    const houseAges = ['vor 1940', 'vor 1980', 'vor 2010', 'nach 2010', 'Ich weiß es nicht'];
    const livingSpacesMin = 50;
    const livingSpacesMax = 500;
    const livingSpacesUnit = 'm²';
    const livingSpacesInitialValue = 200;

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
    const handleHouseTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseType(event.target.value);
    };

    const handleLandSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLandSize(event.target.value);
    };

    const handleHouseAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseType(event.target.value);
    };

    const handleLivingSpaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseType(event.target.value);
    };

    return (
        <div className='flex'>
            
            <button type='button' onClick={goToPreviousStep} className='flex flex-col items-center justify-center'>
                <svg height="30" viewBox="0 -960 960 960" width="30">
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                </svg>
                Zurück
            </button>
            
            <div className='flex-grow'>
                {currentStep === 1 && (
                    <FourFieldSection 
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie" 
                        subtitle="Um welche Art von Haus handelt es sich bei Ihrer Immobilie?" 
                        fieldIconPairs={Object.entries(houseTypes).map(([field, icon]) => ({ field, icon }))}
                        onSelect={goToNextStep} 
                    />
                )}

                {currentStep === 2 && (
                    <ColumnFieldSection 
                    title="Erzählen Sie uns ein wenig mehr Ihr Haus" 
                    subtitle="Wie groß ist die Grundstücksfläche?" 
                    fields={landSizes}
                    onSelect={goToNextStep} 
                    />
                )}

                {currentStep === 3 && (
                    <ColumnFieldSection 
                    title="Erzählen Sie uns ein wenig mehr Ihr Haus" 
                    subtitle="Wann wurde die Immobilie gebaut?" 
                    fields={houseAges}
                    onSelect={goToNextStep} 
                    />
                )}

                {currentStep === 4 && (
                    <SliderSection 
                        title="Erzählen Sie uns ein wenig mehr Ihr Haus" 
                        min={livingSpacesMin}
                        max={livingSpacesMax}
                        unit={livingSpacesUnit}
                        initialValue={livingSpacesInitialValue}
                        onNext={goToNextStep} 
                        onSkip={goToNextStep}
                    />
                )}

                {currentStep === 5 && (
                    <div className="w-full grid place-items-center gap-10">
                        <InputSection
                            title="Erzählen Sie uns ein wenig mehr Ihr Haus"
                            values={['Straße und Hausnummer', 'PLZ']}
                        />
                        <button type="button" onClick={goToNextStep}>Bewertung anfordern</button>
                    </div>
                )}   

                {currentStep === 6 && (
                    <ContactSection />
                )}
            </div>
             
        </div>
    );
};

export default HouseForm;
