import React from 'react';
import KontaktFormular from '../components/KontaktFormular';

export default function Kontakt() {
  return (
    <div className='flex flex-col gap-16 m-5'>
      <section className='bg-neutral-50 flex flex-col md:flex-row p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>Kontakt</h2>
          <p className='text-base md:text-lg lg:text-xl tracking-widest'>Schreiben Sie uns Ihr Anliegen und wir melden uns bei Ihnen innerhalb von 1 - 2 Werktagen zurück.</p>
        </div>
        <KontaktFormular />
      </section>
    </div>
  );
}