import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type NavLink = {
  title: string;
  path: string;
};

const navigationLinks: NavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'Über Valuvis', path: '/UeberValuvis' },
  { title: 'Immobilienmarkt', path: '/Immobilienmarkt' },
  { title: 'Immobilien', path: '/Immobilien' },
  { title: 'Dienstleistungen', path: '/Dienstleistungen' },
  { title: 'Karriere', path: '/Karriere' },
  { title: 'FAQ', path: '/FAQ' },
  { title: 'Ratgeber', path: '/Ratgeber' },
  { title: 'Kontakt', path: '/Kontakt' },
];

const Header: React.FC = () => {
  return (
    <header className="flex gap-20 items-start p-4 shadow-md bg-neutral-50">
      <div className="logo flex-shrink-0">
        <Image
            src="/logos/VA-Logo.png" 
            alt="Valuvis Logo"
            width={30}
            height={22}
            layout='fixed' />
      </div>
      <nav className="flex-grow">
        <ul className="flex flex-wrap space-x-8">
          {navigationLinks.map((link) => (
            link.title === 'Immobilien' ? (
              <li key={link.title} className="relative">
                <div className='peer'>
                  <Link href={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {link.title}
                  </Link>
                </div>
                
                <ul className="hidden peer-hover:flex hover:flex
                  w-[200px] flex-col bg-white drop-shadow-lg absolute">
                  <li className="px-5 py-3 hover:bg-gray-200"><Link href="/Immobilien/Eigentumswohnungen">Eigentumswohnungen</Link></li>
                  <li className="px-5 py-3 hover:bg-gray-200"><Link href="/Immobilien/Einfamilienhaeuser">Einfamilienhäuser</Link></li>
                  <li className="px-5 py-3 hover:bg-gray-200"><Link href="/Immobilien/Wohn-undGeschaeftshaeuser">Wohn- und Geschäftshäuser</Link></li>
                  <li className="px-5 py-3 hover:bg-gray-200"><Link href="/Immobilien/Gewerbeimmobilien">Gewerbeimmobilien</Link></li>
                </ul>
              </li>
            ) : (
              <li key={link.title}>
                <Link href={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {link.title}
                </Link>
              </li>
            )  
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;