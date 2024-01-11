'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getEntryBySlug, getLastTwoBlogsExcludingSlug } from '../../../lib/contentful/client';
import BlogCard from '../../components/Blog/BlogCard';
import { Entry } from 'contentful';
import { get } from 'http';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

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
                </div>

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
            </section>
        </div>
    );
};
