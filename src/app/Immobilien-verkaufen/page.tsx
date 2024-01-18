import React from 'react';
import { FourFieldSectionWithLink } from '../components/Bewertung/FourFieldSection';

const ImmobilienVerkaufen: React.FC = () => {
  const renderInputsForObjectType = () => {
    let fieldPathImagePairs: { field: string; path: string; image: string }[] = [
      { field: 'Haus', path: '/Immobilien-verkaufen/Haus-verkaufen', image: '/gifs/house.gif' },
      { field: 'Wohnung', path: '/Immobilien-verkaufen/Wohnung-verkaufen', image: '/gifs/apartment.gif' },
      { field: 'Grundstück', path: '/Immobilien-verkaufen/Grundstueck-verkaufen', image: '/gifs/grass.gif' },
      { field: 'Gewerbe', path: '/Immobilien-verkaufen/Gewerbeimmobilie-verkaufen', image: '/gifs/factory.gif' },
    ];
    return <FourFieldSectionWithLink title="Kostenfreie & Unverbindliche Einschätzung" subtitle="Was für ein Objekt möchten Sie bewerten lassen?" fieldPathImagePairs={fieldPathImagePairs} />;
  };

  return (
    <div className='grid place-items-center gap-16 m-5'>
      <section className='bg-neutral-50 flex flex-col md:flex-row justify-center items-center w-full p-10 md:p-12 lg:p-16 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
        {renderInputsForObjectType()}
      </section>
    </div>
  );
}

export default ImmobilienVerkaufen;
