'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getEntryBySlug } from '../../../lib/contentful/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import Link from 'next/link';

type Field = {
    title: string;
    content: Document;
    subtitle: string;
    slug: string;
};

type Job = {
    fields: Field;
};

export default function  JobPage()  {
    const pathname = usePathname();
    const id = pathname.split('/').pop()

    const [data, setData] = useState<Job | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEntryBySlug('job', id);
            
            
            const post: Job = {
                fields: result.items[0].fields as Field,
            };

            setData(post);
        };

        fetchData();
    }, []);

    if (!data) {
        return (
            <div className='flex flex-col gap-16 m-5'>
                <section className='bg-neutral-50 flex flex-col items-center p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
                    
                    <div className='flex flex-col gap-4 md:gap-8 w-[80%] md:w-[60%] animate-pulse'>
                        
                        <div className='h-12 w-full bg-gray-200 mt-5 rounded-2xl'></div>
                        <div className='h-80 w-full bg-gray-200 rounded-2xl'></div>
                        
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-16 m-5'>
            <section className='bg-neutral-50 flex flex-col items-center p-10 md:p-15 lg:p-20 rounded-lg gap-12'>
                <div className='flex flex-col gap-4 md:gap-8 w-[80%] md:w-[60%]'>

                    <div className='flex flex-col gap-6 md:gap-8 border-b-2 pb-10'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl'>{data.fields.title}</h2>
                        <div id='richTextJobPage' className='flex flex-col gap-5'>
                            {documentToReactComponents(data.fields.content)}
                        </div>
                    </div>

                    <Link href={'/Karriere/Bewerbung'} className='inline-block border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 py-2 px-4 rounded-2xl w-64'>
                        Jetzt Initiativbewerbung senden
                    </Link>
                </div>
            </section>
        </div>
    );
};