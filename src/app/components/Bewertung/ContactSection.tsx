import React, { useState } from 'react';
import { apiCall } from '../../../lib/utils/api';

type ContactFormularDaten = {
    vorname: string;
    nachname: string;
    email: string;
    telefon?: string; // Optional
    agreedToPrivacy: boolean;
};

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormularDaten>({
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        agreedToPrivacy: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        const form = event.currentTarget;
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        const firstName = (form.elements.namedItem('vorname') as HTMLInputElement)?.value;
        const lastName = (form.elements.namedItem('nachname') as HTMLInputElement)?.value;
        const telefon = (form.elements.namedItem('telefon') as HTMLInputElement)?.value;

        const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;
        if (!apiKey) {
            console.error('API-Schlüssel ist nicht definiert!');
            return;
        }

        // Senden der Anfrage an Propstack
        try {
            const responseData = await apiCall('https://api.propstack.de/v1/contacts', 'POST', {
                client: {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    gdpr_status: 2,
                    accept_contact: true,
                    home_cell: telefon
                }
            });
            console.log('Response:', responseData);
            const clientId = responseData.id;
            console.log('Client ID:', clientId);

            try {
                console.log('About to make second API call');
                const responseDataObject = await apiCall('https://api.propstack.de/v1/units', 'POST', {
                    property: {
                        title: 'Nice apartment',
                        description_note: 'Schöne Wohnung',
                        location_note: 'Frankfurt',
                        furnishing_note: 'Möbliert',
                        other_note: 'Schöne Aussicht',
                        long_description_note: 'Schöne Wohnung in Frankfurt mit schöner Aussicht.',
                        long_location_note: 'Frankfurt am Main Stadtmitte',
                        long_furnishing_note: 'Möbliert mit Küche',
                        long_other_note: 'Schöne Aussicht auf den Main.',
                        relationships_attributes: [{
                            internal_name: 'owner',
                            related_client_id: clientId
                        }]
                    }
                });

                console.log('Response:', responseDataObject);
            } catch (error) {
                console.error('Error with second API call:', error);
            }

            setFormData({
                vorname: '',
                nachname: '',
                email: '',
                telefon: '',
                agreedToPrivacy: false
            });

            alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen über E-Mail melden.');
        } catch (error) {
            alert('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Netzwerkverbindung.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-2'>
                    <input
                        type="text"
                        name="vorname"
                        value={formData.vorname}
                        placeholder='Vorname'
                        onChange={handleChange}
                        className='rounded border p-2'
                    />
                    <input
                        type="text"
                        name="nachname"
                        value={formData.nachname}
                        placeholder='Nachname'
                        onChange={handleChange}
                        className='rounded border p-2'
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange}
                    className='rounded border p-2'
                />

                <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    placeholder='Telefonnummer'
                    onChange={handleChange}
                    className='rounded border p-2'
                />

            </div>

            <label className='flex gap-2'>
                <input
                    type="checkbox"
                    checked={formData.agreedToPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                />
                Ich bin mit den Datenschutzbestimmungen einverstanden.
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactSection;