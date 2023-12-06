import React from 'react';
import KontaktFormular from '../components/KontaktFormular';

export default function Kontakt() {
  return (
    <div className='flex flex-col gap-16 mr-5 ml-5 mt-10 mb-10'>
      <section className='bg-neutral-50 flex flex-col md:flex-row p-10 md:p-15 lg:p-20 gap-6 md:gap-8 lg:gap-10 rounded-lg'>
        <div className='flex flex-col gap-6 md:gap-8 lg:gap-10 flex-1'>
          <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Kontakt</h2>
          <p className='text-xs md:text-s lg:text-base tracking-widest'>Schreiben Sie uns Ihr Anliegen und wir melden uns bei Ihnen innerhalb von 1 - 2 Werktagen zurück.</p>
        </div>
        <KontaktFormular />
      </section>
    </div>
  );
}