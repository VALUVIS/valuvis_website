'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getEntriesByContentType } from '../../lib/contentful/client';
import BlogCard from '../components/Blog/BlogCard';
import { Entry } from 'contentful';

type Post = {
  fields: Field;
};

type Field = {
  title: string;
  subtitle: string;
  publishDate: string;
  readingTime: string;
  cover: Cover;
  slug: string;
};

type DataType = {
  items: Post[];
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

export default function Ratgeber() {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEntriesByContentType('blogPost');
      
      const posts: Post[] = result.items.map((item: Entry<any>) => {
        return {
          sys: item.sys,
          fields: item.fields as Field,
        };
      });

      setData({ items: posts });
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className='flex flex-col gap-16 m-5'>
        <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
          <div className='h-6 w-full bg-gray-200 animate-pulse rounded-2xl'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
            <div className='animate-pulse'>
              <div className='h-64 w-full bg-gray-200 animate-pulse rounded-2xl'></div>
              <div className='h-6 w-full bg-gray-200 mt-5 animate-pulse rounded-2xl'></div>
              <div className='h-4 w-1/2 bg-gray-200 mt-5 animate-pulse rounded-2xl'></div>
            </div>
            <div className='animate-pulse'>
              <div className='h-64 w-full bg-gray-200 animate-pulse rounded-2xl'></div>
              <div className='h-6 w-full bg-gray-200 mt-5 animate-pulse rounded-2xl'></div>
              <div className='h-4 w-1/2 bg-gray-200 mt-5 animate-pulse rounded-2xl'></div>
            </div>
            <div className='animate-pulse'>
              <div className='h-64 w-full bg-gray-200 animate-pulse rounded-2xl'></div>
              <div className='h-6 w-full bg-gray-200 mt-5 animate-pulse rounded-2xl'></div>
              <div className='h-4 w-1/2 bg-gray-200 mt-5 animate-pulse rounded-2xl'></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Rest of your code...

  return (
    <div className='flex flex-col gap-16 m-5'>
      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        
        <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>Ratgeber</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>

          {data.items.map((post: Post) => {
            let coverImageURL = '';
            if (post.fields.cover && post.fields.cover.fields && post.fields.cover.fields.file && post.fields.cover.fields.file.url) {
              coverImageURL = `https:${post.fields.cover.fields.file.url}?fit=thumb&f=top_left&h=200&w=300`;
            }

            return (
              <Link key={post.fields.slug} href={`/Ratgeber/${post.fields.slug}`}>
                
                  <BlogCard 
                    title={post.fields.title}
                    subtitle={post.fields.subtitle}
                    publishDate={post.fields.publishDate}
                    readingTime={post.fields.readingTime}
                    coverImageURL={coverImageURL}
                  />
                
              </Link>
            );
          })}

        </div>
        
      </section>
    </div>
  );
}
