'use client';

import React, { useState } from 'react';

const Bewerbung: React.FC = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [documents, setDocuments] = useState<FileList | null>(null);
    const [note, setNote] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleDocumentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setDocuments(event.target.files);
        }
    };

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Send the message with the form data
        // You can use a library like axios to make the HTTP request

        // Reset the form fields
        setName('');
        setLastName('');
        setEmail('');
        setNote('');
        setDocuments(null);
    };

    return (
        <div className='flex flex-col gap-16 m-5'>
            <section className='bg-neutral-50 flex flex-col items-center p-6 md:p-15 lg:p-20 rounded-lg gap-12 w-full'>
                <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Inititativbewerbung</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-full'>
                    <div className='flex gap-2 max-w-full'>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={handleNameChange} 
                            placeholder="Name"
                            className="rounded-lg border-2 border-gray-400 p-1 flex-grow"
                        />
                        
                        <input 
                            type="text" 
                            value={lastName} 
                            onChange={handleLastNameChange} 
                            placeholder="Last Name"
                            className="rounded-lg border-2 border-gray-400 p-1 flex-grow"
                        />
                    </div>
                    
                    <input 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        placeholder="Email"
                        className="rounded-lg border-2 border-gray-400 p-1"
                    />

                    <textarea 
                        value={note} 
                        onChange={handleNoteChange} 
                        placeholder="Nachricht"
                        className="rounded-lg border-2 border-gray-400 p-1 resize-none"
                        rows={3}
                    />
                    
                    <input 
                        type="file" 
                        multiple 
                        onChange={handleDocumentsChange} 
                        placeholder="Documents"
                        className="rounded-lg border-2 border-gray-400 p-1"
                    />
                    
                    <button type="submit" className='inline-block border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 py-2 px-4 rounded-xl'>Senden</button>
                </form>
            </section>
        </div>
    );
};

export default Bewerbung;
