import React, { useState } from 'react';

type InputSectionProps = {
    title: string;
    values: string[];
    onSubmit: (data: { [key: string]: string }) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ title, values, onSubmit }) => {
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

    const handleInputChange = (name: string, value: string) => {
        setInputValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputValues);
    }

    return (
        <div className='w-full grid place-items-center gap-10'>
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}> 
                {values.map((value, index) => (
                    <input
                        name={value}
                        placeholder={value}
                        key={index}
                        type="text"
                        required
                        value={inputValues[value] || ''}
                        onChange={(e) => handleInputChange(value, e.target.value)}
                        className='rounded p-2 md:p-3 lg:p-4'
                    />
                ))}
                <button type="submit" className='inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 text-center py-2 px-4 rounded-2xl'>Bewertung anfordern</button>
            </form>
        </div>
    );
};

export default InputSection;