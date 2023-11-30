'use client';
import React from 'react';

const NewsletterForm: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;

    const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;
    if (!apiKey) {
      console.error('API-Schlüssel ist nicht definiert!');
      return;
    }
    
    // Senden der Anfrage an Propstack
    const response = await fetch('https://api.propstack.de/v1/...', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify({ email: email })
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" id="propstack-form">
      <input
        type="email"
        name="email"
        placeholder="E-Mail Adresse"
        className="border pr-7 pl-3 pt-2 pb-2 rounded-lg"
      />
      <button type="submit" className="bg-orange-500 text-white pr-3 pl-3 pt-2 pb-2 rounded-lg hover:bg-white hover:text-orange-500 border border-orange-500">
        Abonnieren
      </button>
    </form>
  );
};

export default NewsletterForm;
