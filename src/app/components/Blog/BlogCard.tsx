import React from 'react';
import Image from 'next/image'; 

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
        <div className="blog-card flex flex-col gap-6">
            <Image src={coverImageURL} alt={title} layout="responsive" width={200} height={200} />
            <div className='flex gap-2 text-xs md:text-sm font-light'>
                <p>{formattedDate}</p>
                <span className='font-bold'>&#183;</span>
                <p>{readingTime} min</p>
            </div>
            <div className='flex flex-col gap-3 tracking-wider'>
                <h3 className='text-lg md:text-xl font-bold'>{title}</h3>
                <h4 className='text-base md:text-lg'>{subtitle}</h4>
            </div>
            
        </div>
    );
};

export default BlogCard;
