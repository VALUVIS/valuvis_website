'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { apiCall } from '../../utils/api';
import Image from 'next/image';

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

type ModalProps = {
    onClose: () => void;
    images: ImageType[];
    currentImageIndex: number;
}

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

    const nextImage = () => {
        if (property && property.images.length > 0) {
            setCurrentImageIndex((currentImageIndex + 1) % property.images.length);
        }
    };

    const prevImage = () => {
        if (property && property.images.length > 0) {
            setCurrentImageIndex((currentImageIndex - 1 + property.images.length) % property.images.length);
        }
    };

    if (!property) {
        return <div>Loading...</div>;
    }

    const Modal: React.FC<ModalProps> = ({ onClose, images, currentImageIndex }) => {
        const stopPropagation = (e: React.MouseEvent) => {
            e.stopPropagation();
        };

        return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={onClose}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" onClick={stopPropagation}>
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div className="mt-2">
                                        <Image
                                            src={images[currentImageIndex].url}
                                            alt="Current image"
                                            width={600}
                                            height={600}
                                        />
                                        <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>Next</button>
                                        <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}>Prev</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='grid place-items-center gap-16 m-5'>
            <div className='bg-neutral-50 flex flex-col justify-center items-start w-full p-15 md:p-16 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg' key={property.id}>
                <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>{property.name}</h2>
                
                <div className="flex gap-8 cursor-pointer" onClick={handleOpenModal}>
                    {property.images && property.images.slice(0, 1).map((image, index) => 
                        <Image
                            key={index}
                            src={image.url}
                            alt={`${property.name} image ${index + 1}`}
                            width={600}
                            height={600} 
                            layout='fixed'
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
                <Modal onClose={() => setModalOpen(false)} images={property.images} currentImageIndex={currentImageIndex} />
            )}

        </div>
    );

    
};

export default PropertyPage;
