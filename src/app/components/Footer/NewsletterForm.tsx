'use client';
import React, {useState} from 'react';
import { apiCall } from '../../utils/api';

const NewsletterForm: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;

    const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;
    if (!apiKey) {
      console.error('API-Schlüssel ist nicht definiert!');
      return;
    }
    
    // Senden der Anfrage an Propstack
    try {
      const response = await apiCall('https://api.propstack.de/v1/contacts', 'POST', {
          client: {
            email: email,
          }
      });

      setModalContent('Vielen Dank für Ihre Anmeldung zum Newsletter!');
      setAgreedToPrivacy(false);
      setEmail('');
    } catch (error) {
      setModalContent('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Netzwerkverbindung.');
    }
  };

  return (
    <div className="mt-0 flex flex-col gap-4">
      {modalContent && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white border-orange-500 border-2 rounded shadow-lg p-8 md:p-10 lg:p-12 m-4 max-w-xs md:max-w-3xl relative">
            <span className="close-button absolute top-2 right-4 text-lg md:text-xl lg:text-2xl cursor-pointer" onClick={() => setModalContent(null)}>&times;</span>
            <p className="text-center text-sm md:text-base lg:text-lg">{modalContent}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col items-start md:flex-row gap-2 text-sm md:text-base lg:text-lg" id="propstack-form">
        <input
          type="email"
          name="email"
          placeholder="E-Mail Adresse"
          className="border pr-7 pl-3 pt-2 pb-2 rounded-lg"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={!agreedToPrivacy} 
          className={`bg-orange-500 text-white pr-3 pl-3 pt-2 pb-2 rounded-lg hover:bg-gray-200 hover:text-orange-500 border border-orange-500 ${!agreedToPrivacy ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Abonnieren
        </button>
      </form>
      <label className="inline-flex items-center text-xs md:text-sm lg:text-base">
          <input
            type="checkbox"
            checked={agreedToPrivacy}
            required
            className="form-checkbox h-3 w-3 lg:h-4 lg:w-4"
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
          />
          <span className={`ml-2 ${agreedToPrivacy ? 'text-gray-500' : 'text-red-500'}`}>
            Ich stimme den Datenschutzbestimmungen zu *
          </span>
      </label>
    </div>
  );
};

export default NewsletterForm;
