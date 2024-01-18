import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        <div className={`fixed top-0 left-0 flex flex-col gap-4 w-full h-full lg:hidden bg-white overflow-y-auto z-50`}>
          <div className="flex justify-between items-center border-b border-gray-200">
      
            <div className="logo flex flex-shrink-0 items-center p-4">
              <Image
                  src="/logos/VA-Logo.png" 
                  alt="Valuvis Logo"
                  width={30}
                  height={22}
                  layout='fixed'
                  className="w-4 md:w-6 lg:w-8" />
            </div>
            <button
              title='Menu'
              type='button'
              className='self-end p-4'
              onClick={onClose}
            >
              <svg height="16" width="14" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
          </div>
          <ul className='flex flex-col gap-5 w-full pl-5'>
            {navigationLinks.map((link) => {
              if (link.title === 'Immobilien verkaufen') {
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