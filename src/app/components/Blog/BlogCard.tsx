import React from 'react';
import Image from 'next/image'; 
import { motion } from 'framer-motion';

type BlogCardProps = {
    title: string;
    subtitle: string;
    readingTime: string;
    publishDate: string;
    coverImageURL: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, subtitle, readingTime, publishDate, coverImageURL }) => {
    const date = new Date(publishDate);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <motion.div className="blog-card flex flex-col gap-6 shadow-lg rounded-2xl"
                    whileHover={{ scale: 1.03 }}
        >
            <Image src={coverImageURL} alt={title} layout="responsive" width={200} height={200} className="rounded-t-2xl" />
            <div className='flex gap-2 text-xs md:text-sm font-light px-8'>
                <p>{formattedDate}</p>
                <span className='font-bold'>&#183;</span>
                <p>{readingTime} min</p>
            </div>
            <div className='flex flex-col gap-3 tracking-wider px-8 pb-8'>
                <h3 className='text-lg md:text-xl font-bold'>{title}</h3>
                <h4 className='text-base md:text-lg'>{subtitle}</h4>
            </div>
            
        </motion.div>
    );
};

export default BlogCard;
