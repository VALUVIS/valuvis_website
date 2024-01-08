'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { apiCall } from '../../utils/api';
import Image from 'next/image';
import ImageGalleryModal from '@/app/components/Immobilien-Kaufen/ImageGalleryModal';

type ImageType = {
    url: string;
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

const PropertyPage = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop()

    const [property, setProperty] = useState<PropertyType | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    useEffect(() => {
        if (id) {
            apiCall(`https://api.propstack.de/v1/units/${id}`, 'GET')
                .then(data => setProperty(data))
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className='grid place-items-center gap-16 m-5'>
            <div className='bg-neutral-50 flex flex-col justify-center items-start w-full p-15 md:p-16 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg' key={property.id}>
                <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>{property.name}</h2>
                
                <div className="flex gap-8">
                    {property.images && property.images.slice(0, 1).map((image, index) => 
                        <Image
                            key={index}
                            src={image.url}
                            alt={`${property.name} image ${index + 1}`}
                            width={600}
                            height={600} 
                            layout='fixed'
                            className='cursor-pointer'
                            onClick={handleOpenModal}
                        />
                    )}
                    <div className="flex flex-col gap-4">
                        {property.images && property.images.slice(1, 3).map((image, index) => 
                            <Image
                                key={index + 1}
                                src={image.url}
                                alt={`${property.name} image ${index + 2}`}
                                width={300} 
                                height={300} 
                                layout='fixed'
                                className='cursor-pointer'
                                onClick={handleOpenModal}
                            />
                        )}
                    </div>
                </div>

                <p>{property.description}</p>
                <div className="grid grid-flow-col auto-cols-auto gap-6 text-base md:text-lg lg:text-xl tracking-widest leading-normal">
                    {property.price && <p>Preis: {property.price} €</p>}
                    {property.base_rent && <p>Kaltmiete: {property.base_rent} €</p>}
                    {property.total_rent && <p>Warmmiete: {property.total_rent} €</p>}
                    {property.property_space_value && <p>Fläche: {property.property_space_value} m²</p>}
                    {property.living_space && <p>Wohnfläche: {property.living_space} m²</p>}
                    {property.plot_area && <p>Grundstücksfläche: {property.plot_area} m²</p>}
                    {property.number_of_rooms && <p>Zimmer: {property.number_of_rooms}</p>}
                </div>
                
            </div>

            {modalOpen && (
                <ImageGalleryModal onClose={() => setModalOpen(false)} images={property.images} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
            )}

        </div>
    );

    
};

export default PropertyPage;
