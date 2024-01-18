import React, { useState } from 'react';

type SliderSectionProps = {
    title: string;
    min: number;
    max: number;
    unit: string;
    initialValue: number; 
    onNext: (value: string) => void;
    onSkip: (message: string) => void;
}

const SliderSection: React.FC<SliderSectionProps> = ({ title, min, max, unit, initialValue, onNext, onSkip }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value)); 
    };

    return (
        <div className="w-full grid place-items-center gap-12">
            <label htmlFor="slider" className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</label>

            <div className="flex flex-col justify-center w-full gap-4">
                <p>{value === min ? `≤ ${value}` : value === max ? `≥ ${value}` : value} {unit}</p>

                <div className="flex justify-center w-full gap-4">
                    <p className="flex-shrink-0">{min} {unit}</p>
                    <input id="slider" type="range" min={min} max={max} value={value} onChange={handleChange} className='flex-grow slider'/> 
                    <p className="flex-shrink-0">{max} {unit}</p>
                </div>   
            </div>

            <div className='flex flex-col gap-2'>
                <button type='submit' onClick={() => onNext(`${value} ${unit}`)}  className='inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 text-center py-2 px-4 rounded-2xl'>Weiter</button>
                <button type='submit' onClick={() => onSkip("Ich weiß es nicht")}  className='inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 text-center py-2 px-4 rounded-2xl'>Ich weiß es nicht</button>
            </div>
        </div>
    );
};

export default SliderSection;