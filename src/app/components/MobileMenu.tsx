import { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    navigationLinks: { title: string; path: string; }[];
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navigationLinks, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="absolute flex w-full h-full md:hidden bg-white overflow-y-hidden z-50">
            <ul className='flex flex-col gap-5 w-full pl-5'>
                {navigationLinks.map((link) => (
                    <li key={link.title} className="border-b border-gray-200 w-full">
                        <Link href={link.path} onClick={onClose} className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base w-full">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileMenu;