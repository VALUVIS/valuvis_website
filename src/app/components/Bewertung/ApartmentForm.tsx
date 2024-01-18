import React, { useState } from 'react';
import { FourFieldSection } from './FourFieldSection';
import ColumnFieldSection from './ColumnFieldSection';
import SliderSection from './SliderSection';
import InputSection from './InputSection';
import ContactSection from './ContactSection';

const ApartmentForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [houseAge, setHouseAge] = useState('');
    const [livingSpace, setLivingSpace] = useState('');
    const [streetAndNumber, setStreetAndNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    // Vordefinierte Auswahlmöglichkeiten
    const houseAges = ['vor 1940', 'vor 1980', 'vor 2010', 'nach 2010', 'Ich weiß es nicht'];
    const livingSpacesMin = 25;
    const livingSpacesMax = 300;
    const livingSpacesUnit = 'm²';
    const livingSpacesInitialValue = 105;

    // Schritt-Wechsel-Funktionen
    const goToNextStep = () => {
        setCurrentStep(currentStep + 1);
        console.log(streetAndNumber, postCode);
    };

    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else if (currentStep === 1) {
            window.history.back();
        }
    };

    const handleSelectHouseAge = (field: string) => {
        setHouseAge(field);
        goToNextStep(); 
    };

    const handleSelectLivingSpace = (value: string) => {
        setLivingSpace(value);
        goToNextStep(); 
    };

    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-center items-center w-full'>
                    
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
                    
            <div>
                {currentStep === 1 && (
                    <ColumnFieldSection 
                        title="Erzählen Sie uns ein wenig mehr Ihre Wohnung" 
                        subtitle="Wann wurde die Immobilie gebaut?" 
                        fields={houseAges}
                        onSelect={handleSelectHouseAge} 
                    />
                )}

                {currentStep === 2 && (
                    <SliderSection
                        title="Und wie groß ist die Wohnfläche?" 
                        min={livingSpacesMin}
                        max={livingSpacesMax}
                        unit={livingSpacesUnit}
                        initialValue={livingSpacesInitialValue}
                        onNext={handleSelectLivingSpace} 
                        onSkip={handleSelectLivingSpace}
                    />
                )}

                {currentStep === 3 && (
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

                {currentStep === 4 && (
                    <ContactSection
                        object='Wohnung'
                        houseAge={houseAge}
                        livingSpace={livingSpace}
                        streetAndNumber={streetAndNumber}
                        postCode={postCode}
                    />
                )}
            </div>
                     
        </div>
    );
};

export default ApartmentForm;
