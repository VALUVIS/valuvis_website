'use client';
import React, { useState } from 'react';
import { apiCall } from '../../lib/utils/api';

type KontaktFormularDaten = {
  vorname: string;
  nachname: string;
  email: string;
  telefon?: string; // Optional
  nachricht: string;
  agreedToPrivacy: boolean;
};

const KontaktFormular: React.FC = () => {
  const [formData, setFormData] = useState<KontaktFormularDaten>({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: '',
    agreedToPrivacy: false
  });

  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const firstName = (form.elements.namedItem('vorname') as HTMLInputElement)?.value;
    const lastName = (form.elements.namedItem('nachname') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('nachricht') as HTMLInputElement)?.value;
    const telefon = (form.elements.namedItem('telefon') as HTMLInputElement)?.value;

    const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;
    if (!apiKey) {
      console.error('API-Schlüssel ist nicht definiert!');
      return;
    }

    // Senden der Anfrage an Propstack
    try {
      await apiCall('https://api.propstack.de/v1/contacts', 'POST', {
          client: {
            email: email,
            first_name: firstName,
            last_name: lastName,
            gdpr_status: 2,
            accept_contact: true,
            description: message,
            home_cell: telefon
          }
      });

      setFormData({
          vorname: '',
          nachname: '',
          email: '',
          telefon: '',
          nachricht: '',
          agreedToPrivacy: false
      });

      setModalContent('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen über E-Mail melden.');
    } catch (error) {
      setModalContent('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Netzwerkverbindung.');
    }
  };

  return (
    <div className="mt-0">
        {modalContent && (
          <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="modal-content bg-white border-orange-500 border-2 rounded shadow-lg p-8 md:p-10 lg:p-12 m-4 max-w-xs md:max-w-3xl relative">
              <span className="close-button absolute top-2 right-4 text-lg md:text-xl lg:text-2xl cursor-pointer" onClick={() => setModalContent(null)}>&times;</span>
              <p className="text-center text-sm md:text-base lg:text-lg">{modalContent}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-xl lg:text-2xl'>
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
                      placeholder="Telefonnummer"
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
          
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={formData.agreedToPrivacy}
              required
              className="form-checkbox h-3 w-3 lg:h-4 lg:w-4"
              onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
            />
            <span className={`ml-2 text-sm md:text-lg lg:text-lg ${formData.agreedToPrivacy ? 'text-gray-400' : 'text-red-500'}`}>
              Ich stimme den Datenschutzbestimmungen zu *
            </span>
          </label>
          
          <button 
            type="submit" 
            className={`border rounded-lg pr-4 pl-4 pt-2 pb-2 ${formData.agreedToPrivacy ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-gray-400 text-gray-400 cursor-default'}`} 
            disabled={!formData.agreedToPrivacy}
          >
            ABSENDEN
          </button>
      </form>
    </div>
  );
};

export default KontaktFormular;
