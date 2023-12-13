'use client';
import React, { useState } from 'react';
import FourFieldSection from './FourFieldSection';
import HouseIcon from '../Icons/HouseIcon';
import ApartmentIcon from '../Icons/ApartmentIcon';
import GroundIcon from '../Icons/GroundIcon';
import FactoryIcon from '../Icons/FactoryIcon';

type BewertungSectionProps = {
    object: 'Wohnung' | 'Haus' | 'Grundstück' | 'Gewerbeimmobilie' | 'Hauptseite';
};

const BewertungSection = ({ object }: BewertungSectionProps) => {
    const [data, setData] = useState({});
  
    const renderInputsForObjectType = () => {
        let fieldPathPairs: { field: string; path: string; icon: React.ComponentType<any> }[];

        switch (object) {
            case 'Wohnung':
                fieldPathPairs = [
                    { field: 'Feld 1', path: '/', icon: HouseIcon },
                    { field: 'Feld 2', path: '/', icon: HouseIcon },
                    { field: 'Feld 3', path: '/', icon: HouseIcon },
                    { field: 'Feld 4', path: '/', icon: HouseIcon },
                ];
                return <FourFieldSection title="Wann wurde die Immobilie gebaut?" fieldPathPairs={fieldPathPairs} />;

            case 'Grundstück':
                fieldPathPairs = [
                    { field: 'Feld 5', path: '/', icon: HouseIcon },
                    { field: 'Feld 6', path: '/', icon: HouseIcon },
                    { field: 'Feld 7', path: '/', icon: HouseIcon },
                    { field: 'Feld 8', path: '/', icon: HouseIcon },
                ];
                return <FourFieldSection title="Wie groß ist die Grundstücksfläche?" fieldPathPairs={fieldPathPairs} />;

            case 'Haus':
                fieldPathPairs = [
                    { field: 'Einfammilienhaus', path: '/', icon: HouseIcon },
                    { field: 'Mehrfammilienhaus', path: '/', icon: HouseIcon },
                    { field: 'Reihenhaus', path: '/', icon: HouseIcon },
                    { field: 'Doppelhaushälfte', path: '/', icon: HouseIcon },
                ];
                return <FourFieldSection title="Um welche Art von Haus handelt es sich bei Ihrer Immobilie?" fieldPathPairs={fieldPathPairs} />;

            case 'Gewerbeimmobilie':
                fieldPathPairs = [
                    { field: 'Büro', path: '/', icon: HouseIcon },
                    { field: 'Einzelhandel', path: '/', icon: HouseIcon },
                    { field: 'Logistik', path: '/', icon: HouseIcon },
                    { field: 'Mischnutzung', path: '/', icon: HouseIcon },
                ];
                return <FourFieldSection title="Um welche Art von Gewerbe handelt es sich bei Ihrer Immobilie?" fieldPathPairs={fieldPathPairs} />;

            default:
                fieldPathPairs = [
                    { field: 'Haus', path: '/Immobilien-verkaufen/Haus', icon: HouseIcon },
                    { field: 'Wohnung', path: '/Immobilien-verkaufen/Wohnung', icon: ApartmentIcon },
                    { field: 'Grundstück', path: '/Immobilien-verkaufen/Grundstück', icon: GroundIcon },
                    { field: 'Gewerbe', path: '/Immobilien-verkaufen/Gewerbe', icon: FactoryIcon },
                ];
                return <FourFieldSection title="Was für ein Objekt möchten Sie bewerten lassen?" fieldPathPairs={fieldPathPairs} />;
        }
    };
  
    return (
      <section className='bg-neutral-50 flex flex-col md:flex-row justify-center items-center w-full p-10 md:p-12 lg:p-16 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
        {renderInputsForObjectType()}
      </section>
    );
  };
  
  export default BewertungSection;