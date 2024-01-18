'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';

type NavLink = {
  title: string;
  path: string;
  id?: string;
};

const navigationLinks: NavLink[] = [
  { title: 'Home', path: '/', id: 'Home' },
  { title: 'Über Valuvis', path: '/UeberValuvis', id: 'UeberValuvis' },
  { title: 'Immobilienmarkt', path: '/Immobilienmarkt', id: 'Immobilienmarkt' },
  { title: 'Immobilien kaufen', path: '/Immobilien-kaufen', id: 'Immobilienkaufen' },
  { title: 'Immobilien verkaufen', path: '/Immobilien-verkaufen', id: 'Immobilienverkaufen' },
  { title: 'Dienstleistungen', path: '/Dienstleistungen', id: 'Dienstleistungen' },
  { title: 'Mehr', path: '/Mehr', id: 'Mehr' }
];

const kaufLinks: NavLink[] = [
  { title: 'Eigentumswohnungen', path: '/Immobilien-kaufen/Eigentumswohnungen' },
  { title: 'Einfamilienhäuser', path: '/Immobilien-kaufen/Einfamilienhaeuser' },
  { title: 'Wohn- und Geschäftshäuser', path: '/Immobilien-kaufen/Wohn-undGeschaeftshaeuser' },
  { title: 'Gewerbeimmobilien', path: '/Immobilien-kaufen/Gewerbeimmobilien' }
];

const verkaufLinks: NavLink[] = [
  { title: 'Häuser', path: '/Immobilien-verkaufen/Haus-verkaufen' },
  { title: 'Wohnungen', path: '/Immobilien-verkaufen/Wohnung-verkaufen' },
  { title: 'Grundstücke', path: '/Immobilien-verkaufen/Grundstueck-verkaufen' },
  { title: 'Gewerbeimmobilien', path: '/Immobilien-verkaufen/Gewerbeimmobilie-verkaufen' }
];

const moreLinks: NavLink[] = [
  { title: 'Karriere', path: '/Karriere' },
  { title: 'FAQ', path: '/FAQ' },
  { title: 'Ratgeber', path: '/Ratgeber' },
  { title: 'Kontakt', path: '/Kontakt' },
  { title: 'Impressum', path: '/Impressum' },
  { title: 'Datenschutz', path: '/Datenschutz' }
];

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');
  const [linkPosition, setLinkPosition] = useState({ left: 0, width: 0 });
  const [dropdownContent, setDropdownContent] = useState('');
  const linkRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setLinkPosition({ left: rect.left, width: rect.width });
    }
  }, [hoveredLink]);

  useEffect(() => {
    if ((hoveredLink === 'Immobilien kaufen' || hoveredLink === 'Immobilien verkaufen' || hoveredLink === 'Mehr') && divRef.current) {
      const linkElement = document.querySelector(`#${hoveredLink.replace(' ', '')}`);
      if (linkElement) {
        const rect = linkElement.getBoundingClientRect();
        divRef.current.style.left = `${rect.left}px`;
      }
    }
  }, [hoveredLink]);

  const handleMouseEnter = (linkTitle: string) => {
    setHoveredLink(linkTitle);
    if (linkTitle === 'Immobilien kaufen' || linkTitle === 'Immobilien verkaufen' || linkTitle === 'Mehr') {
      setDropdownContent(linkTitle);
    } else {
      setDropdownContent('');
    }
  };

  const handleMouseLeave = () => {
    setDropdownContent('');
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 w-full shadow-md bg-transparent text-sm md:text-base lg:text-base`} onMouseLeave={handleMouseLeave}>
        <nav className='hidden lg:flex peer px-4 h-auto w-full items-center justify-between lg:justify-start gap-8 md:gap-14 lg:gap-10 xl:gap-20 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white'>
          <div className="logo flex flex-shrink-0 items-center">
            <Image
                src="/logos/VA-Logo.png" 
                alt="Valuvis Logo"
                width={30}
                height={22}
                layout='fixed'
                className="w-4 md:w-6 lg:w-8" />
          </div>
          
          <ul className="hidden lg:flex items-center gap-4 md:gap-6 lg:gap-2 xl:gap-4 h-auto">
            {navigationLinks.map((link) => (
              <li key={link.title} className='peer py-4'
                onMouseEnter={() => handleMouseEnter(link.title)}
                onMouseLeave={() => setHoveredLink('')}>
                {link.title === 'Mehr' ? (
                  <span id={link.id} className="lg:px-2 xl:px-3">
                    {link.title}
                  </span>
                ) : (
                  <Link id={link.id} href={link.path} className="hover:text-gray-900 transition-colors lg:px-2 xl:px-3">
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <DropdownMenu 
          divRef={divRef}
          dropdownContent={dropdownContent} 
          kaufLinks={kaufLinks} 
          verkaufLinks={verkaufLinks} 
          moreLinks={moreLinks} 
        />
      
      <nav className='flex lg:hidden peer p-4 h-auto w-full items-center justify-between lg:justify-start gap-8 md:gap-14 lg:gap-10 xl:gap-20 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white'>
          <div className="logo flex flex-shrink-0 items-center">
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
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg height="16" width="14" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
        </nav>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} navigationLinks={navigationLinks} kaufLinks={kaufLinks} verkaufLinks={verkaufLinks} moreLinks={moreLinks} />
    </>
  );
};

export default Header;
