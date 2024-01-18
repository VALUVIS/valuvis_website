import React, { useState } from 'react';
import ColumnFieldSection from './ColumnFieldSection';
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

    const handleSelectLandSize = (field: string) => {
        setLandSize(field);
        goToNextStep(); 
    };

    const handleSelectUseType = (field: string) => {
        setUseType(field);
        goToNextStep(); 
    };

    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-center'>
            
            <button 
                type='button' 
                onClick={goToPreviousStep} 
                className='h-20 w-20 flex flex-col items-center justify-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-200' 
                aria-label='Zurück'
            >
                <svg height="30" viewBox="0 -960 960 960" width="30" className="fill-current">
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
                        onSelect={handleSelectLandSize} 
                    />
                )}

                {currentStep === 2 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihr Grundstück" 
                        subtitle="Welche Nutzung ist für das Grundstück vorgesehen?"
                        fields={useTypes}
                        onSelect={handleSelectUseType}
                    />
                )}

                {currentStep === 3 && (
                    <div className="w-full grid place-items-center gap-10">
                    <InputSection
                        title="Wo befindet sich Ihr Grundstück?"
                        values={['Straße und Hausnummer', 'PLZ']}
                        onSubmit={(data) => {
                            setStreetAndNumber(data["Straße und Hausnummer"]);
                            setPostCode(data["PLZ"]);
                            goToNextStep();
                        }}
                    />
                </div>
                )}   

                {currentStep === 4 && (
                    <ContactSection
                        object='Grundstück'
                        landSize={landSize}
                        useType={useType}
                        streetAndNumber={streetAndNumber}
                        postCode={postCode}
                    />
                )}
            </div>
             
        </div>
    );
};

export default GroundForm;