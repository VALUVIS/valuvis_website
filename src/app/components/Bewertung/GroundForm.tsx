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

const GroundForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [landSize, setLandSize] = useState('');
    const [useType, setUseType] = useState('');
    const [streetAndNumber, setStreetAndNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    // Vordefinierte Auswahlmöglichkeiten
    const landSizes = ['bis 500 m²', 'bis 1000 m²', 'bis 2000 m²', 'über 2000 m²', 'Ich weiß es nicht'];
    const useTypes = ['Wohnen', 'Gewerbe', 'Land- und Forstwirtschaft', 'Sonstiges', 'Ich weiß es nicht'];

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
    const handleLandSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLandSize(event.target.value);
    };

    const handleUseTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseType(event.target.value);
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
                    <ColumnFieldSection 
                        title="Erzählen Sie uns ein wenig mehr Ihr Grundstück" 
                        subtitle="Wie groß ist die Grundstücksfläche?" 
                        fields={landSizes}
                        onSelect={goToNextStep} 
                    />
                )}

                {currentStep === 2 && (
                    <ColumnFieldSection
                    title="Welche Nutzung ist für das Grundstück vorgesehen?" 
                    subtitle="Mehrfachauswhal möglich"
                    fields={useTypes}
                    onSelect={goToNextStep}
                    />
                )}

                {currentStep === 3 && (
                    <div className="w-full grid place-items-center gap-10">
                    <InputSection
                        title="Wo befindet sich Ihr Grundstück?"
                        values={['Straße und Hausnummer', 'PLZ']}
                    />
                    <button type="button" onClick={goToNextStep}>Bewertung anfordern</button>
                </div>
                )}   

                {currentStep === 4 && (
                    <ContactSection />
                )}
            </div>
             
        </form>
    );
};

export default GroundForm;