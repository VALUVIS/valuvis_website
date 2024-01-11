'use client';

import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { getEntryBySlug, getLastTwoBlogsExcludingSlug } from '../../../lib/contentful/client';
import BlogCard from '../../components/Blog/BlogCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

// Icons
import Facebook from '../../../../public/logos/facebook.svg';
import Twitter from '../../../../public/logos/twitter.svg';
import LinkedIn from '../../../../public/logos/linkedin.svg';
import LinkIcon from '../../../../public/logos/link.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';


type Field = {
    title: string;
    content: Document;
    publishDate: string;
    readingTime: string;
    cover: Cover;
    subtitle: string;
    slug: string;
};

type Post = {
    fields: Field;
};

type File = {
    url: string;
};

type CoverFields = {
    file: File;
};

type Cover = {
    fields: CoverFields;
};

export default function  BlogPostPage()  {
    const pathname = usePathname();
    const id = pathname.split('/').pop()

    const [data, setData] = useState<Post | null>(null);
    const [otherBlogs, setOtherBlogs] = useState<Post[]>([]);
    const [copySuccess, setCopySuccess] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const [isFacebookHovered, setFacebookHovered] = useState(false);
    const [isCopyLinkHovered, setCopyLinkHovered] = useState(false);
    const [isLinkedInHovered, setLinkedInHovered] = useState(false);
    const [isTwitterHovered, setTwitterHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEntryBySlug('blogPost', id);
            
            
            const post: Post = {
                fields: result.items[0].fields as Field,
            };

            setData(post);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchOtherBlogs = async () => {
            if (id) {
                try {
                    const entries = await getLastTwoBlogsExcludingSlug('blogPost', id);
                    const blogs: Post[] = entries.map(entry => ({
                        fields: entry.fields as Field,
                    }));
                    setOtherBlogs(blogs);
                } catch (err) {
                    console.error(err);
                }
            }
        };

        fetchOtherBlogs();
    }, [id]); 
    
    const handleCopyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(document.URL);
            setCopySuccess(true);
            const id = setTimeout(() => setCopySuccess(false), 3000); // Hide after 3 seconds
            setTimeoutId(id);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
            }
        };
    }, [timeoutId]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const date = new Date(data.fields.publishDate);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <div className='flex flex-col gap-16 m-5'>
            <section className='bg-neutral-50 flex flex-col items-center p-10 md:p-15 lg:p-20 rounded-lg gap-12'>
                <div className='flex flex-col gap-4 md:gap-8 w-[80%] md:w-[60%]'>
                    <div className='flex gap-2 text-xs md:text-sm font-light'>
                        <p>{formattedDate}</p>
                        <span className='font-bold'>&#183;</span>
                        <p>{data.fields.readingTime} min</p>
                    </div>

                    <div className='flex flex-col gap-2 md:gap-4 border-b-2 pb-10'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl'>{data.fields.title}</h2>
                        <div id='richtTextBlogPage'>
                            {documentToReactComponents(data.fields.content)}
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.URL)}`} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" width="20" height="20"
                                className={`${isFacebookHovered ? 'text-orange-500' : 'text-current'} fill-current hover:text-orange-500`}
                                onMouseEnter={() => setFacebookHovered(true)}
                                onMouseLeave={() => setFacebookHovered(false)}
                            >
                                <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
                                    c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
                                    v20.341H37.29v27.585h23.814v70.761H89.584z">
                                </path>
                            </svg>
                        </Link>
                        <Link href={`https://twitter.com/share?url=${encodeURIComponent(document.URL)}`} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 1226.37 1226.37" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                className={`${isTwitterHovered ? 'text-orange-500' : 'text-current'} fill-current hover:text-orange-500`}
                                onMouseEnter={() => setTwitterHovered(true)}
                                onMouseLeave={() => setTwitterHovered(false)}
                            >
                                <path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"></path>
                            </svg>
                        </Link>
                        <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(document.URL)}`} target="_blank" rel="noopener noreferrer">
                            <svg height="20" viewBox="0 0 100 100" width="20" xmlns="http://www.w3.org/2000/svg"
                                className={`${isLinkedInHovered ? 'text-orange-500' : 'text-current'} fill-current hover:text-orange-500`}
                                onMouseEnter={() => setLinkedInHovered(true)}
                                onMouseLeave={() => setLinkedInHovered(false)}
                            >
                                <path d="m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z"></path><path d="m11.3 36.6h16.6v53.4h-16.6z"></path><path d="m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"></path>
                            </svg>
                        </Link>
                        <button type='button' title='Copy-Link' onClick={handleCopyLink}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 277.279 277.279" 
                                width="20" 
                                height="20"
                                className={`${copySuccess || isCopyLinkHovered ? 'text-orange-500' : 'text-current'} fill-current hover:text-orange-500`}
                                onMouseEnter={() => setCopyLinkHovered(true)}
                                onMouseLeave={() => setCopyLinkHovered(false)}
                            >

                                <path d="M149.245,191.671l-42.425,42.426c0,0,0,0.001-0.001,0.001c0,0,0,0.001-0.001,0.001
                                    c-17.544,17.545-46.092,17.546-63.638,0c-8.5-8.5-13.18-19.801-13.18-31.82c0-12.018,4.68-23.317,13.177-31.817
                                    c0.001-0.001,0.002-0.002,0.003-0.003l42.425-42.426c5.857-5.858,5.857-15.356-0.001-21.213c-5.857-5.857-15.355-5.857-21.213,0
                                    l-42.425,42.426c-0.003,0.003-0.006,0.007-0.009,0.01C7.798,163.42,0,182.251,0,202.279c0,20.033,7.801,38.867,21.967,53.033
                                    C36.589,269.933,55.794,277.244,75,277.244c19.206,0,38.412-7.311,53.032-21.932c0,0,0-0.001,0-0.001
                                    c0.001,0,0.001-0.001,0.001-0.001l42.425-42.426c5.857-5.857,5.857-15.355-0.001-21.213
                                    C164.601,185.814,155.104,185.814,149.245,191.671z"></path>
                                <path d="M277.279,75c0-20.033-7.802-38.867-21.968-53.033c-29.243-29.242-76.824-29.241-106.065,0
                                    c-0.001,0.002-0.003,0.003-0.004,0.005l-42.424,42.423c-5.858,5.857-5.858,15.356,0,21.213c2.93,2.93,6.768,4.394,10.607,4.394
                                    c3.838,0,7.678-1.465,10.606-4.394l42.424-42.423c0.001-0.002,0.003-0.003,0.005-0.005c17.544-17.544,46.092-17.545,63.638,0
                                    c8.499,8.5,13.181,19.801,13.181,31.82c0,12.018-4.68,23.317-13.178,31.817c-0.001,0.001-0.002,0.002-0.003,0.003l-42.425,42.426
                                    c-5.857,5.857-5.857,15.355,0.001,21.213c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l42.425-42.426
                                    c0.003-0.003,0.006-0.007,0.009-0.01C269.48,113.859,277.279,95.028,277.279,75z"></path>
                                <path d="M85.607,191.671c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l84.852-84.852
                                    c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0l-84.852,84.851
                                    C79.749,176.316,79.749,185.814,85.607,191.671z"></path>

                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4 w-[90%] md:w-[80%]'>
                    <h3 className='text-lg md:text-xl lg:text-2xl'>Weitere Beiträge</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12'>
                        {otherBlogs.map((blog: Post) => {
                            let coverImageURL = '';
                            if (blog.fields.cover && blog.fields.cover.fields && blog.fields.cover.fields.file && blog.fields.cover.fields.file.url) {
                                coverImageURL = `https:${blog.fields.cover.fields.file.url}?fit=thumb&f=top_left&h=200&w=300`;
                            }

                            return (
                                <Link href={`/Ratgeber/${blog.fields.slug}`}>
                                
                                    <BlogCard 
                                    title={blog.fields.title}
                                    subtitle={blog.fields.subtitle}
                                    publishDate={blog.fields.publishDate}
                                    readingTime={blog.fields.readingTime}
                                    coverImageURL={coverImageURL}
                                    />
                                
                                </Link>
                            );
                        })}
                    </div>
                </div>
                
            </section>

            <AnimatePresence>
                {copySuccess && (
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 mx-auto bg-orange-500 text-white text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Link in die Zwischenablage kopiert
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
