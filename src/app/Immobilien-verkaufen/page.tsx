import React from 'react';
import { FourFieldSectionWithLink } from '../components/Bewertung/FourFieldSection';
import HouseIcon from '../components/Icons/HouseIcon';
import ApartmentIcon from '../components/Icons/ApartmentIcon';
import GroundIcon from '../components/Icons/GroundIcon';
import FactoryIcon from '../components/Icons/FactoryIcon';

const ImmobilienVerkaufen: React.FC = () => {
  const renderInputsForObjectType = () => {
    let fieldPathIconPairs: { field: string; path: string; icon: React.ComponentType<any> }[] = [
      { field: 'Haus', path: '/Immobilien-verkaufen/Haus-verkaufen', icon: HouseIcon },
      { field: 'Wohnung', path: '/Immobilien-verkaufen/Wohnung-verkaufen', icon: ApartmentIcon },
      { field: 'Grundstück', path: '/Immobilien-verkaufen/Grundstueck-verkaufen', icon: GroundIcon },
      { field: 'Gewerbe', path: '/Immobilien-verkaufen/Gewerbeimmobilie-verkaufen', icon: FactoryIcon },
    ];
    return <FourFieldSectionWithLink title="Kostenfreie & Unverbindliche Einschätzung" subtitle="Was für ein Objekt möchten Sie bewerten lassen?" fieldPathIconPairs={fieldPathIconPairs} />;
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