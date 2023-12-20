'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FourFieldSection } from '../../components/Bewertung/FourFieldSection';
import HouseIcon from '../../components/Icons/HouseIcon';
import ColumnFieldSection from '../../components/Bewertung/ColumnFieldSection';
import HouseForm from '@/app/components/Bewertung/HouseForm';
import ApartmentForm from '@/app/components/Bewertung/ApartmentForm';
import GroundForm from '@/app/components/Bewertung/GroundForm';
import IndustryForm from '@/app/components/Bewertung/IndustryForm';

const BewertungPage: React.FC = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop() as 'Wohnung-verkaufen' | 'Haus-verkaufen' | 'Grundstueck-verkaufen' | 'Gewerbeimmobilie-verkaufen';
    const [data, setData] = useState({});

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
    };

    const renderInputsForObjectType = () => {
        let fieldIconPairs: { field: string; icon: React.ComponentType<any> }[];
        let fields: string[];

        switch (id) {
            case 'Wohnung-verkaufen':
                return <ApartmentForm />;

            case 'Grundstueck-verkaufen':
                return <GroundForm />;
                
            case 'Haus-verkaufen':
                return <HouseForm />;

            case 'Gewerbeimmobilie-verkaufen':
                return <IndustryForm />;
        }
    };

    return (
        <div className='flex flex-col gap-16 m-5'>
            <section className='bg-neutral-50 flex flex-col md:flex-row justify-center items-center w-full p-10 md:p-12 lg:p-16 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
                {renderInputsForObjectType()}
            </section>
        </div>
    );
};

export default BewertungPage;