'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getEntryBySlug } from '../../../lib/contentful/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

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
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col gap-16 m-5'>
            <section className='bg-neutral-50 flex flex-col items-center p-10 md:p-15 lg:p-20 rounded-lg gap-12'>
                <div className='flex flex-col gap-4 md:gap-8 w-[80%] md:w-[60%]'>

                    <div className='flex flex-col gap-2 md:gap-4 border-b-2 pb-10'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl'>{data.fields.title}</h2>
                        <div id='richTextJobPage' className='flex flex-col gap-5'>
                            {documentToReactComponents(data.fields.content)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};