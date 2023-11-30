import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import DropdownMenu from './DropdownMenu';

type NavLink = {
  title: string;
  path: string;
};

const navigationLinks: NavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'Über Valuvis', path: '/UeberValuvis' },
  { title: 'Immobilienmarkt', path: '/Immobilienmarkt' },
  { title: 'Immobilien kaufen', path: '/Immobilien-kaufen' },
  { title: 'Immobilien verkaufen', path: '/Immobilien-verkaufen' },
  { title: 'Dienstleistungen', path: '/Dienstleistungen' },
  { title: 'Mehr', path: '/Mehr' }
];

const kaufLinks: NavLink[] = [
  { title: 'Eigentumswohnungen', path: '/Immobilien-kaufen/Eigentumswohnungen' },
  { title: 'Einfamilienhäuser', path: '/Immobilien-kaufen/Einfamilienhaeuser' },
  { title: 'Wohn- und Geschäftshäuser', path: '/Immobilien-kaufen/Wohn-undGeschaeftshaeuser' },
  { title: 'Gewerbeimmobilien', path: '/Immobilien-kaufen/Gewerbeimmobilien' }
];

const verkaufLinks: NavLink[] = [
  { title: 'Eigentumswohnungen', path: '/Immobilien-verkaufen/Eigentumswohnungen' },
  { title: 'Einfamilienhäuser', path: '/Immobilien-verkaufen/Einfamilienhaeuser' },
  { title: 'Wohn- und Geschäftshäuser', path: '/Immobilien-verkaufen/Wohn-undGeschaeftshaeuser' },
  { title: 'Gewerbeimmobilien', path: '/Immobilien-verkaufen/Gewerbeimmobilien' }
];

const moreLinks: NavLink[] = [
  { title: 'Karriere', path: '/Karriere' },
  { title: 'FAQ', path: '/FAQ' },
  { title: 'Ratgeber', path: '/Ratgeber' },
  { title: 'Kontakt', path: '/Kontakt' }
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
          {navigationLinks.map((link) => {
            if (link.title === 'Immobilien kaufen') {
              return <DropdownMenu key={link.title} title={link.title} links={kaufLinks} />;
            } else if (link.title === 'Immobilien verkaufen') {
              return <DropdownMenu key={link.title} title={link.title} links={verkaufLinks} />;
            } else if (link.title === 'Mehr') {
              return <DropdownMenu key={link.title} title={link.title} links={moreLinks} />;
            } else {
             return (
                <li key={link.title}>
                  <Link href={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.title}
                  </Link>
                </li>
              );
          }
        })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
