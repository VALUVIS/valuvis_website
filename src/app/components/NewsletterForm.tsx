'use client';
import React, {useState} from 'react';

const NewsletterForm: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

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
      const response = await fetch('https://api.propstack.de/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey
        },
        body: JSON.stringify({
           client: {
            email: email,
           }
        })
      });

      if (response.ok) {
        setModalContent('Vielen Dank für Ihre Anmeldung zum Newsletter!');
      } else {
        setModalContent('Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.');
      }

    } catch (error) {
      setModalContent('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Netzwerkverbindung.');
    }
  };

  return (
    <>
      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setModalContent(null)}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2 text-xs md:text-s lg:text-base" id="propstack-form">
        <input
          type="email"
          name="email"
          placeholder="E-Mail Adresse"
          className="border pr-7 pl-3 pt-2 pb-2 rounded-lg"
        />
        <button type="submit" className="bg-orange-500 text-white pr-3 pl-3 pt-2 pb-2 rounded-lg hover:bg-gray-200 hover:text-orange-500 border border-orange-500">
          Abonnieren
        </button>
      </form>
    </>
  );
};

export default NewsletterForm;
