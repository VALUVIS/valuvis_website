import React, { useState } from 'react';

interface InputSectionProps {
    title: string;
    values: string[];
}

const InputSection: React.FC<InputSectionProps> = ({ title, values }) => {
    const [inputValues, setInputValues] = useState<string[]>(new Array(values.length).fill(''));

    const handleInputChange = (index: number, value: string) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className='w-full grid place-items-center gap-10'>
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            {values.map((value, index) => (
                <input
                    placeholder={value}
                    key={index}
                    type="text"
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className='rounded p-2 md:p-3 lg:p-4'
                />
            ))}
        </div>
    );
};

export default InputSection;
