import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { motion } from 'framer-motion';

type PropertyCardProps = {
    id: string;
    name: string;
    description: string;
    price?: number;
    base_rent?: number;
    total_rent?: number;
    property_space_value?: number;
    living_space?: number;
    plot_area?: number;
    number_of_rooms?: number;
    coverImageURL: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ id, name, description, price, base_rent, total_rent, property_space_value, living_space, plot_area, number_of_rooms, coverImageURL }) => {
    return (
        <Link href={`/Immobilien-kaufen/${id}`} key={id} passHref>
            <motion.div className="property-card flex flex-col gap-6 shadow-lg rounded-2xl h-full"
                whileHover={{ scale: 1.03 }}
            >
                <div className="relative h-40 xl:h-60 overflow-hidden rounded-t-2xl">
                    <Image src={coverImageURL} alt={name} layout="fill" objectFit="cover" className="absolute" />
                </div>
                
                <div className='flex flex-col gap-4 p-6'>
                    <div className='flex flex-col gap-3 tracking-wider'>
                        <h3 className='text-lg md:text-xl break-words'>{name}</h3>
                        {property_space_value ? <p>Fläche: {property_space_value} m²</p> : null}
                        {living_space ? <p>Wohnfläche: {living_space} m²</p> : null}
                        {plot_area ? <p>Grundstücksfläche: {plot_area} m²</p> : null}
                        {number_of_rooms ? <p>Zimmer: {number_of_rooms}</p> : null}
                    </div>

                    <div className='flex flex-col justify-end gap-2'>
                        <p>{description}</p>
                        {price ? <p>Kaufpreis: {price.toLocaleString('de-DE')} €</p> : null}
                        {base_rent ? <p>Kaltmiete: {base_rent} €</p> : null}
                        {total_rent ? <p>Gesamtmiete: {total_rent} €</p> : null}
                    </div>
                </div>
                
            </motion.div>
        </Link>
    );
}

export default PropertyCard;
