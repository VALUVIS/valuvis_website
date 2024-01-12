'use client';

import React, { useState } from 'react';

const Bewerbung: React.FC = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [documents, setDocuments] = useState<File[]>([]);
    const [fileCount, setFileCount] = useState(0);
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
            const newFiles = Array.from(event.target.files as FileList);
            setDocuments(prevDocuments => [...prevDocuments, ...newFiles]);
            setFileCount(prevFileCount => prevFileCount + newFiles.length);
        }
    };

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value);
    };

    const handleSend = (event: React.FormEvent) => {

        // Send the message with the form data
        // You can use a library like axios to make the HTTP request

        // Reset the form fields
        setName('');
        setLastName('');
        setEmail('');
        setNote('');
        setDocuments([]);
    };

    const handleRemoveFile = (index: number) => {
        const newDocuments = [...documents];
        newDocuments.splice(index, 1);
        setDocuments(newDocuments);
        setFileCount(prevFileCount => prevFileCount - 1);
    };

    return (
        <div className='flex flex-col gap-16 m-5'>
            <section className='bg-neutral-50 flex flex-col items-center p-6 md:p-15 lg:p-20 rounded-lg gap-12 w-full'>
                <h2 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Inititativbewerbung</h2>
                <form className='flex flex-col gap-4 max-w-full'>
                    <div className='flex gap-2 max-w-full'>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={handleNameChange} 
                            placeholder="Name *"
                            className="rounded-lg border-2 border-gray-400 p-1 max-w-[49%]"
                        />
                        
                        <input 
                            type="text" 
                            value={lastName} 
                            onChange={handleLastNameChange} 
                            placeholder="Nachname *"
                            className="rounded-lg border-2 border-gray-400 p-1  max-w-[49%]"
                        />
                    </div>
                    
                    <input 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        placeholder="Email *"
                        className="rounded-lg border-2 border-gray-400 p-1"
                    />

                    <textarea 
                        value={note} 
                        onChange={handleNoteChange} 
                        placeholder="Nachricht *"
                        className="rounded-lg border-2 border-gray-400 p-1 resize-none"
                        rows={3}
                    />
                    
                    <input 
                        type="file" 
                        multiple 
                        onChange={handleDocumentsChange} 
                        placeholder="Dokumente *"
                        className="rounded-lg border-2 border-gray-400 p-1"
                        accept='.pdf,.doc,.docx,.odt,.txt'
                    />

                    {documents && Array.from(documents).map((file, index) => (
                        <div key={index} className="rounded-lg border-2 border-gray-400 p-1 mt-2 flex justify-between items-center">
                            <span>{file.name}</span>
                            <button 
                                type='button'
                                onClick={() => handleRemoveFile(index)}
                                className="text-red-500 text-center font-bold rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                x
                            </button>
                        </div>
                    ))}

                    
                    <button 
                        type="button" 
                        onClick={handleSend} 
                        className={`inline-block border py-2 px-4 rounded-xl transition duration-300 ${
                            !name || !lastName || !email || !note || documents.length === 0
                                ? 'border-gray-500 bg-gray-500 text-white'
                                : 'border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white'
                        }`}
                        disabled={!name || !lastName || !email || !note || documents.length === 0}
                    >
                        Senden
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Bewerbung;
