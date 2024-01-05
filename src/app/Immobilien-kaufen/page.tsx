'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { apiCall } from '../utils/api';
import Image from 'next/image';

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
  name: string;
  description: string;
  price: number;
  base_rent: number;
  total_rent: number;
  property_space_value: number;
  living_space: number;
  plot_area: number;
  number_of_rooms: number;
  images: ImageType[];
};

export default function ImmobilienKaufen() {

  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    apiCall('https://api.propstack.de/v1/units', 'GET')
      .then(data => setProperties(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='grid place-items-center gap-16 m-5'>
      <div className='bg-neutral-50 flex flex-col justify-center items-center w-full p-10 md:p-12 lg:p-16 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
        <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Immobilien kaufen über Valuvis</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {properties.map(property => (
            <Link href={`/Immobilien-kaufen/${property.id}`} key={property.id} className='flex flex-col gap-4 p-4 border rounded-lg hover:transform hover:scale-105 transition-transform duration-200 ease-in-out'>
              <h2>{property.name}</h2>
              
              <div className='flex items-center justify-center'>
                {property.images && property.images[0] ? 
                  <Image
                    src={property.images[0].original}
                    alt={property.name}
                    width={100}
                    height={100}
                    layout='fixed'
                    className="w-15 md:w-30 lg:w-40"
                  /> : null
                }
              </div>

              <div className='flex flex-col gap-2'>
                <p>{property.description}</p>
                {property.price ? <p>Kaufpreis: {property.price} €</p> : null}
                {property.base_rent ? <p>Kaltmiete: {property.base_rent} €</p> : null}
                {property.total_rent ? <p>Warmmiete: {property.total_rent} €</p> : null}
                {property.property_space_value ? <p>Fläche: {property.property_space_value} m²</p> : null}
                {property.living_space ? <p>Wohnfläche: {property.living_space} m²</p> : null}
                {property.plot_area ? <p>Grundstücksfläche: {property.plot_area} m²</p> : null}
                {property.number_of_rooms ? <p>Zimmer: {property.number_of_rooms}</p> : null}
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}