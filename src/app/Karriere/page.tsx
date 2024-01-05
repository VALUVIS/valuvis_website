import React from 'react';
import Link from 'next/link';

export default function Karriere() {
  return (
    <div className='flex flex-col gap-16 m-5'>
      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>Starten Sie Ihre Karriere bei Valuvis Immobilien</h2>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>Willkommen auf der Karriereseite von Valuvis Immobilien, dem Ort, an dem Immobilienträume Wirklichkeit werden. Wir sind ein dynamisches und innovatives Immobilienunternehmen, das sich auf den Verkauf und die Vermietung von Wohn- und Geschäftshäusern, Einfamilienhäusern, Eigentumswohnungen und Gewerbeimmobilien in Frankfurt am Main spezialisiert hat.</p>
        <button type='button' className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-64'>Jetzt Initiativbewerbung senden</button>
      </section>

      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <h3 className='text-lg md:text-xl lg:text-2xl tracking-widest leading-normal'>Bereit für den nächsten großen Schritt in Ihrer Karriere?</h3>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>Springen Sie auf und tauchen Sie ein in die spannende Welt der Immobilien mit Valuvis Immobilien. Entdecken Sie unsere aktuellen Stellenangebote und finden Sie die Position, die perfekt zu Ihnen passt. Ihr nächstes Abenteuer wartet nur einen Klick entfernt!</p>
      </section>

      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <h3 className='text-lg md:text-xl lg:text-2xl tracking-widest leading-normal'>Seien Sie proaktiv und ergreifen Sie die Initiative!</h3>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>Haben Sie das Gefühl, dass Sie genau das haben, was Valuvis Immobilien braucht, aber keine passende Stelle gefunden? Zögern Sie nicht, ergreifen Sie die Initiative! Wir sind immer auf der Suche nach talentierten und leidenschaftlichen Menschen, die bereit sind, uns auf unserer Reise zu begleiten.

          Schicken Sie uns Ihre Initiativbewerbung mit Ihrem Lebenslauf und einem Anschreiben, in dem Sie uns erklären, warum Sie der perfekte Kandidat für unser Team sind. Lassen Sie uns wissen, wie Sie mit Ihren Fähigkeiten und Erfahrungen dazu beitragen können, die Vision von Valuvis Immobilien zu verwirklichen.

          Bereit, den ersten Schritt zu machen? Ergreifen Sie die Initiative und bewerben Sie sich jetzt!
        </p>
        <button type='button' className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-64'>Jetzt Initiativbewerbung senden</button>
      </section>
    </div>
  );
}