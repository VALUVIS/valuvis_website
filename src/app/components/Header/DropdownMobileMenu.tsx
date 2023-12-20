import { useState } from 'react';
import Link from 'next/link';

interface DropdownMobileMenuProps {
    title: string;
    path: string;
    links: { title: string; path: string; }[];
    onClose: () => void;
}

const DropdownMobileMenu: React.FC<DropdownMobileMenuProps> = ({ title, path, links, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="flex flex-col gap-4 border-b border-gray-200 w-full">
            <div className="flex justify-between items-center pr-5">
                <Link 
                    key={title}
                    href={path}
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base"
                >
                    {title}
                </Link>
                <button type='button' onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base">
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>
            <div className='flex flex-col gap-4'>
                {isOpen && links.map((link, index) => (
                    <Link 
                        key={link.title} 
                        href={link.path} 
                        onClick={onClose}
                        className={`text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base w-full pl-4 ${index === links.length - 1 ? 'pb-4' : ''}`}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </li>
    );
};

export default DropdownMobileMenu;
