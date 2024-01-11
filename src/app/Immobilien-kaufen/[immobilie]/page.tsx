'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { apiCall } from '../../../lib/utils/api';
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

type DocumentType = {
    url: string;
    title: string;
};

type OptionalField = {
    key: string;
    name: string;
    value: string;
};

type PropertyType = {
    id: string;
    name: string;
    title: string;
    short_address: string;
    description_note: string;
    marketing_type: string;
    rs_type: string;
    price: number;
    base_rent: number;
    total_rent: number;
    living_space: number;
    number_of_rooms: number;
    optional_fields: OptionalField[];
    images: ImageType[];
    location_note: string;
    documents: DocumentType[];
    furnishing_note: string;
};

type TranslationKeys = 'BUY' | 'RENT' | 'APARTMENT' | 'HOUSE' | 'TRADE_SITE' | 'GARAGE' | 'SHORT_TERM_ACCOMODATION' | 'OFFICE' | 'GASTRONOMY' | 'INDUSTRY' | 'STORE' | 'SPECIAL_PURPOSE' | 'INVESTMENT';

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
                .then(data => {
                    console.log(data);
                    setProperty(data)} )
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!property) {
        return (
            <div className='grid place-items-center gap-16 m-5'>
                <div className='bg-neutral-50 flex flex-col justify-center items-start w-full p-15 md:p-16 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
                    <div className='h-6 w-full bg-gray-200 animate-pulse'></div>

                    <div className='w-full h-20 bg-gray-200 animate-pulse'></div>

                    <div className='h-6 w-full bg-gray-200 animate-pulse'></div>
                    <div className="grid grid-flow-col auto-cols-auto gap-6 text-base md:text-lg lg:text-xl tracking-widest leading-normal">
                        <div className='h-6 w-full bg-gray-200 animate-pulse'></div>
                    </div>
                    
                </div>
            </div>
        );
    }

    

    const translations: Record<TranslationKeys, string> = {
        BUY: 'Kauf',
        RENT: 'Miete',
        APARTMENT: 'Wohnung',
        HOUSE: 'Haus',
        TRADE_SITE: 'Handelsplatz',
        GARAGE: 'Garage',
        SHORT_TERM_ACCOMODATION: 'Kurzzeitunterkunft',
        OFFICE: 'Büro',
        GASTRONOMY: 'Gastronomie',
        INDUSTRY: 'Industrie',
        STORE: 'Laden',
        SPECIAL_PURPOSE: 'Sonderzweck',
        INVESTMENT: 'Investition'
    };

    const propertyCrutialDetails = [
        { label: 'Kaltmiete', value: property.base_rent, unit: '€' },
        { label: 'Preis', value: property.price, unit: '€' },
        { label: 'Zimmer', value: property.number_of_rooms },
        { label: 'Wohnfläche', value: property.living_space, unit: 'm²' },
      ];

    return (
        <div className='flex justify-center m-3 md:m-5 max-w-full'>
            <div className='max-w-full bg-neutral-50 flex flex-col justify-center p-5 md:p-16 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg' key={property.id}>
                <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>{property.title}</h2>
                <h3 className='text-base md:text-lg lg:text-xl tracking-widest leading-normal'>{property.short_address}</h3>
                
                <div className="flex flex-col sm:flex-row gap-12 max-w-full">
                    {property.images && property.images.slice(0, 1).map((image, index) => 
                        <div className="flex-1 max-w-full">
                            <Image
                                key={index}
                                src={image.url}
                                alt={`${property.name} image ${index + 1}`}
                                width={500}
                                height={500} 
                                layout='responsive'
                                className='cursor-pointer'
                                onClick={handleOpenModal}
                            />
                        </div>
                    )}
                    
                    {property.description_note &&
                        <div className='flex flex-col gap-4 flex-1'> 
                            <h3 className='text-base md:text-lg lg:text-xl tracking-widest leading-normal'>Beschreibung</h3>
                            <p>{property.description_note} </p>
                        </div>
                    }
                </div>

                <div className='flex flex-col gap-10 lg:w-[50%] max-w-full'>

                    

                    {property.documents &&
                        <div className='flex flex-col gap-4'> 
                            <h3 className='text-base md:text-lg lg:text-xl tracking-widest leading-normal'>Dokumente</h3>
                            {property.documents.map((document, index) => (
                                <div className='flex justify-between'>
                                    <p className='text-sm md:text-base'>{document.title}</p>
                                    <a 
                                        href={document.url} 
                                        download 
                                        key={index} 
                                        className='flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-2 md:py-2 md:px-4 rounded h-[2.5rem] text-sm md:text-base'
                                    >
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    }

                    <h3 className='text-base md:text-lg lg:text-xl tracking-widest leading-normal'>Objektdaten</h3>
                    <div className="flex flex-col gap-10 max-w-full">
                        { (property.marketing_type || property.rs_type) && 
                            <section className='flex border-t justify-between'>
                                <p>Kategorie</p>
                                <p>{translations[property.marketing_type as TranslationKeys]} - {translations[property.rs_type as TranslationKeys]}</p>
                            </section>
                        }

                        <section className='flex flex-col gap-4'>
                            {propertyCrutialDetails.map((detail) => 
                                detail.value && (
                                    <div className='flex border-t justify-between'> 
                                    <p>{detail.label}</p> 
                                    <p>{detail.value} {detail.unit}</p>
                                    </div>
                                )
                            )}
                        </section>

                        <section className='flex flex-col gap-4 max-w-full'>
                            {property.optional_fields.map((field: OptionalField, index: number) => {
                                if (field.name === 'Bewertungslink' || field.name === 'Bewertungs-ID') {
                                    return null;
                                }

                                return (
                                    <div key={field.key} className={`flex gap-12 border-t justify-between max-w-full ${index % 5 === 4 ? 'mb-6' : ''}`}>
                                        <h3>{field.name}</h3>
                                        <p>{typeof field.value === 'boolean' && field.value === true ? 'Ja' : field.value}</p>
                                    </div>
                                );
                            })}
                        </section>
                    </div>

                    {property.furnishing_note &&
                        <div className='flex flex-col gap-4'> 
                            <h3 className='text-base md:text-lg lg:text-xl tracking-widest leading-normal'>Ausstattung</h3>
                            <p>{property.furnishing_note} </p>
                        </div>
                    }


                    {property.location_note &&
                        <div className='flex flex-col gap-4'> 
                            <h3 className='text-base md:text-lg lg:text-xl tracking-widest leading-normal'>Lage</h3>
                            <p>{property.location_note} </p>
                        </div>
                    } 
                </div>
                  
            </div>

            {modalOpen && (
                <ImageGalleryModal onClose={() => setModalOpen(false)} images={property.images} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
            )}

        </div>
    );

    
};

export default PropertyPage;
