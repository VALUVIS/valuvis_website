'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { apiCall } from '../../lib/utils/api';
import Image from 'next/image';
import PropertyCard from '../components/Immobilien-Kaufen/PropertyCard';

type ImageType = {
  original: string;
  big: string;
  medium: string;
  thumb: string;
  tags: null | string;
  is_floorplan: boolean;
  is_private: boolean;
};

type PropertyType = {
  id: string;
  title: string;
  description_note: string;
  price: number;
  base_rent: number;
  total_rent: number;
  property_space_value: number;
  living_space: number;
  plot_area: number;
  number_of_rooms: number;
  images: ImageType[];
  status: { name: string };
};

export default function ImmobilienKaufen() {

  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
      apiCall('https://api.propstack.de/v1/units', 'GET')
        .then(data => {
          const inVermarktungProperties = data.filter((property: PropertyType) => 
            property.status.name === 'In Vermarktung'
          );
          setProperties(inVermarktungProperties);
        })
        .catch(error => console.error(error));
  }, []);

  if (!properties.length) {
    return (
      <div className='grid place-items-center gap-16 m-5'>
        <div className='bg-neutral-50 flex flex-col justify-center items-start w-full p-15 md:p-16 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
          <div className='h-6 w-full bg-gray-200 animate-pulse'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full'>
            <div className='bg-gray-200 animate-pulse h-64 xl:h-80 w-full rounded-2xl'></div>
            <div className='bg-gray-200 animate-pulse h-64 xl:h-80 w-full rounded-2xl'></div>
            <div className='bg-gray-200 animate-pulse h-64 xl:h-80 w-full rounded-2xl'></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='grid place-items-center gap-16 m-5'>
      <div className='bg-neutral-50 flex flex-col justify-center items-center w-full p-10 md:p-12 lg:p-16 gap-10 lg:gap-16 rounded-lg'>
        <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Immobilien kaufen über Valuvis</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
          {properties.map(property => (
              <PropertyCard
                key={property.id}
                id={property.id}
                name={property.title}
                description={property.description_note}
                price={property.price}
                base_rent={property.base_rent}
                total_rent={property.total_rent}
                property_space_value={property.property_space_value}
                living_space={property.living_space}
                plot_area={property.plot_area}
                number_of_rooms={property.number_of_rooms}
                coverImageURL={property.images[0].original} />
          ))}
        </div>
      </div>
    </div>
  );
}