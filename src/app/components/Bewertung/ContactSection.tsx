import React, { useState } from 'react';
import { apiCall } from '../../../lib/utils/api';
import Modal from '../Modal';

type ContactSectionProps = {
    object: string;
    streetAndNumber: string;
    postCode: string;
    useSize?: string;
    landSize?: string;
    houseAge?: string;
    houseType?: string;
    livingSpace?: string;
    useType?: string;
    industryType?: string;
};

type ContactFormularDaten = {
    vorname: string;
    nachname: string;
    email: string;
    telefon?: string; // Optional
    agreedToPrivacy: boolean;
};

const ContactSection: React.FC<ContactSectionProps> = (props) => {
    const [modalContent, setModalContent] = useState<string | null>(null);

    const [formData, setFormData] = useState<ContactFormularDaten>({
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        agreedToPrivacy: false
    });

    const messageBody = Object.entries({ ...props, ...formData })
        .filter(([key, value]) => key !== 'agreedToPrivacy' && value !== undefined)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');

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
            await apiCall('https://api.propstack.de/v1/contacts', 'POST', {
                client: {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    gdpr_status: 2,
                    accept_contact: true,
                    home_cell: telefon
                }
            });

            try {
                const response = await apiCall('https://api.propstack.de/v1/messages', 'POST', {
                    
                    message : {
                        broker_id: 125134,
                        to: ["m.ruecker@valuvis.de"],
                        subject: `Bewertungsanfrage für ${props.object}`,
                        body: messageBody,
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error data:', errorData);
                    throw new Error(`API request failed with status ${response.status}`);
                }

            } catch (error) {
                if (error instanceof Error) {
                    console.error('Error with second API call:', error);
                    console.error('Error message:', error.message);
                    console.error('Error stack:', error.stack);
                } else {
                    console.error('Caught an unknown error:', error);
                }
            }

            setFormData({
                vorname: '',
                nachname: '',
                email: '',
                telefon: '',
                agreedToPrivacy: false
            });

            setModalContent('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen über E-Mail melden.');
        } catch (error) {
            setModalContent('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Netzwerkverbindung.');
        }
    };

    return (
        <div className="mt-0">
            <Modal content={modalContent} onClose={() => setModalContent(null)} />
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-6 md:flex-row md:gap-2'>
                        <input
                            type="text"
                            name="vorname"
                            value={formData.vorname}
                            placeholder='Vorname'
                            required
                            onChange={handleChange}
                            className='rounded border p-2'
                        />
                        <input
                            type="text"
                            name="nachname"
                            value={formData.nachname}
                            placeholder='Nachname'
                            required
                            onChange={handleChange}
                            className='rounded border p-2'
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder='Email'
                        required
                        onChange={handleChange}
                        className='rounded border p-2'
                    />

                    <input
                        type="tel"
                        name="telefon"
                        value={formData.telefon}
                        placeholder='Telefonnummer'
                        required
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
                <button 
                    type="submit" 
                    className='inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 text-center py-2 px-4 rounded-2xl'
                    disabled={!formData.agreedToPrivacy}
                >
                    Submit
                </button>
            </form>
        </div>
        
    );
};

export default ContactSection;
