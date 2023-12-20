'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { apiCall } from '../../utils/api';

const PropertyPage = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop()

    const [property, setProperty] = useState<{ id: string, name: string, description: string, price: number, base_rent: number, total_rent: number, property_space_value: number, living_space: number, plot_area: number, number_of_rooms: number } | null>(null);

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
        
        <div key={property.id}>
            <h1>{property.name}</h1>
            <p>{property.description}</p>
            {property.price && <p>Price: {property.price}</p>}
            {property.base_rent && <p>Base Rent: {property.base_rent}</p>}
            {property.total_rent && <p>Total Rent: {property.total_rent}</p>}
            {property.property_space_value && <p>Property Space Value: {property.property_space_value}</p>}
            {property.living_space && <p>Living Space: {property.living_space}</p>}
            {property.plot_area && <p>Plot Area: {property.plot_area}</p>}
            {property.number_of_rooms && <p>Number of Rooms: {property.number_of_rooms}</p>}
        </div>
        
    );
};

export default PropertyPage;