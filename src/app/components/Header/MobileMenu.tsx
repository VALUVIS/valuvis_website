import { useEffect } from 'react';
import Link from 'next/link';
import DropdownMobileMenu from './DropdownMobileMenu';

interface MobileMenuProps {
    isOpen: boolean;
    navigationLinks: { title: string; path: string; }[];
    onClose: () => void;
    kaufLinks: { title: string; path: string; }[];
    verkaufLinks: { title: string; path: string; }[];
    moreLinks: { title: string; path: string; }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navigationLinks, onClose, kaufLinks, verkaufLinks, moreLinks }) => {
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
        <div className={`absolute flex w-full h-full lg:hidden bg-white overflow-y-hidden z-50 `}>
          <ul className='flex flex-col gap-5 w-full pl-5'>
            {navigationLinks.map((link) => {
              if (link.title === 'Immobilien kaufen') {
                return (
                    <DropdownMobileMenu key={link.title} title={link.title} path={link.path} links={kaufLinks} onClose={onClose} />
                );
              } else if (link.title === 'Immobilien verkaufen') {
                return (
                    <DropdownMobileMenu key={link.title} title={link.title} path={link.path} links={verkaufLinks} onClose={onClose} />
                );
              } else if (link.title === 'Mehr') {
                return (
                    <DropdownMobileMenu key={link.title} title={link.title} path={link.path} links={moreLinks} onClose={onClose} />
                );
              } else {
                return (
                    <li key={link.title} className="border-b border-gray-200 w-full pb-4">
                        <Link href={link.path} onClick={onClose} className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base w-full">
                            {link.title}
                        </Link>
                    </li>
                );
              }
            })}
          </ul>
        </div>
    );
};

export default MobileMenu;