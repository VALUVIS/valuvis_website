import React, { useState } from 'react';
import { FourFieldSection } from './FourFieldSection';
import ColumnFieldSection from './ColumnFieldSection';
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
        'Büro': '/gifs/offices.gif',
        'Einzelhandel': '/gifs/shop.gif',
        'Logistik': '/gifs/warehouse.gif',
        'Mischnutzung': '/gifs/doublehouse.gif',
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

    const handleSelectIndustryType = (field: string) => {
        setIndustryType(field);
        goToNextStep(); 
    };

    const handleSelectUseSize = (field: string) => {
        setUseSize(field);
        goToNextStep(); 
    };

    const handleSelectLandSize = (field: string) => {
        setLandSize(field);
        goToNextStep(); 
    };

    const handleSelectHouseAge = (field: string) => {
        setHouseAge(field);
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
                    <FourFieldSection 
                        title="Erzählen Sie uns ein wenig mehr Ihre Wohnung" 
                        subtitle="Um welche Art von Gewerbe handelt es sich bei Ihrer Immobilie?" 
                        fieldImagePairs={Object.entries(industryTypes).map(([field, image]) => ({ field, image }))}
                        onSelect={handleSelectIndustryType} 
                    />
                )}

                {currentStep === 2 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie"
                        subtitle="Wie groß ist die Nutzfläche?"
                        fields={useSizes}
                        onSelect={handleSelectUseSize}
                    />
                )}

                {currentStep === 3 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie"
                        subtitle="Wie groß ist die Grundstücksfläche?"
                        fields={landSizes}
                        onSelect={handleSelectLandSize}
                    />
                )}

                {currentStep === 4 && (
                    <ColumnFieldSection
                        title="Erzählen Sie uns ein wenig mehr Ihre Immobilie"
                        subtitle="Wann wurde die Immobilie gebaut?"
                        fields={houseAges}
                        onSelect={handleSelectHouseAge}
                    />
                )}

                {currentStep === 5 && (
                    <div className="w-full grid place-items-center gap-10">
                    <InputSection
                        title="Wo befindet sich Ihre Immobilie?"
                        values={['Straße und Hausnummer', 'PLZ']}
                        onSubmit={(data) => {
                            setStreetAndNumber(data["Straße und Hausnummer"]);
                            setPostCode(data["PLZ"]);
                            goToNextStep();
                        }}
                    />
                </div>
                )}   

                {currentStep === 6 && (
                    <ContactSection 
                        object='Gewerbeimmobilie'
                        industryType={industryType}
                        useSize={useSize}
                        landSize={landSize}
                        houseAge={houseAge}
                        streetAndNumber={streetAndNumber}
                        postCode={postCode}
                    />
                )}
            </div>
             
        </div>
    );
};

export default IndustryForm;