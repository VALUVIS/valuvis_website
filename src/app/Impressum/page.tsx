import React from 'react';

const Impressum: React.FC = () => {

    return (
        <div className='flex flex-col gap-16 m-5'>
        <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
            <h2 className='text-xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>Impressum</h2>

            <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
                
                <h3 className='text-lg md:text-xl lg:text-2xl tracking-widest leading-normal'>Valuvis GmbH i.Gr.</h3>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'>Unter der KI-Beratungsmarke Dynamod Solutions</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'>Hainer Weg 49</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'>60599 Frankfurt am Main</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'>Deutschland</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>Geschäftsführer:</strong> Maximilian Rücker</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>Telefon:</strong> +49 151 23433449</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>E-Mail:</strong> max@dynamod.ai</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>Registergericht:</strong> Frankfurt am Main</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>Registernummer:</strong> i.Gr.</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>Umsatzsteuer-Identifikationsnummer:</strong> i.Gr.</p>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'><strong>Verantwortlich für den Inhalt:</strong> Maximilian Rücker</p>
                </div>
                
            </div>
        </section>
        </div>
    );
};

export default Impressum;