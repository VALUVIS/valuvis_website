import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type BlogCardProps = {
    title: string;
    subtitle: string;
    slug: string;
}

const JobCard: React.FC<BlogCardProps> = ({ title, subtitle, slug }) => {

    return (
        <motion.div 
            className="job-card flex flex-col gap-6 shadow-lg rounded-2xl p-8 md:p-10"
            whileHover={{ scale: 1.03 }}
        >
            <div className='flex flex-col gap-3 tracking-wider'>
                <h3 className='text-lg md:text-xl'>{title}</h3>
                <h4 className='text-sm md:text-base font-light'>{subtitle}</h4>
            </div>
            <Link href={`/Karriere/${slug}`} className='inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 text-center py-2 px-4 rounded-2xl w-40'>
                Mehr Erfahren
            </Link>
        </motion.div>
    );
};

export default JobCard;
