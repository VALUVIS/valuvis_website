'use client';
import React, { useState } from 'react';

type KontaktFormularDaten = {
  vorname: string;
  nachname: string;
  email: string;
  telefon?: string; // Optional
  nachricht: string;
};

const KontaktFormular: React.FC = () => {
  const [formData, setFormData] = useState<KontaktFormularDaten>({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier die Logik implementieren, um die Daten zu verarbeiten und zu senden
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 md:gap-6 lg:gap-8 flex-1 text-xs md:text-s lg:text-base'>
        <div className='flex justify-center gap-2 md:gap-3 lg:gap-4 w-full'>
            <div className="border-b border-gray-400 w-full flex-1">
                <input
                    type="text"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleChange}
                    placeholder="Vorname *"
                    required
                    className="bg-transparent p-2 outline-none w-full"
                />
            </div>
            
            <div className="border-b border-gray-400 w-full flex-1">
                <input
                    type="text"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleChange}
                    placeholder="Nachname *"
                    required
                    className="bg-transparent p-2 outline-none w-full"
                />
            </div>
            
        </div>

        <div className='flex justify-center gap-2 md:gap-3 lg:gap-4 w-full'>
            <div className="border-b border-gray-400 w-full flex-1">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="bg-transparent p-2 outline-none w-full"
                />
            </div>
            
            <div className="border-b border-gray-400 w-full flex-1">
                <input
                    type="text"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="Telefon"
                    className="bg-transparent p-2 outline-none w-full"
                />
            </div>
            
        </div>
      
        <div className="border-b border-gray-400 w-full">
            <textarea
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                placeholder="Nachricht *"
                rows={1}
                required
                className="bg-transparent p-2 outline-none w-full resize-none"
            />
        </div>
        
        <button type="submit" className='border border-orange-500 text-orange-500 rounded-lg pr-4 pl-4 pt-2 pb-2 hover:bg-orange-500 hover:text-white'>ABSENDEN</button>
    </form>
  );
};

export default KontaktFormular;
