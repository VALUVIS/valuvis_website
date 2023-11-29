import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type NavLink = {
  title: string;
  path: string;
};

const navigationLinks: NavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'Über Valuvis', path: '/ueber-valuvis' },
  { title: 'Immobilienmarkt', path: '/immobilienmarkt' },
  { title: 'Immobilien', path: '/immobilien' },
  { title: 'Dienstleistungen', path: '/dienstleistungen' },
  { title: 'Karriere', path: '/karriere' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Ratgeber', path: '/ratgeber' },
  { title: 'Kontakt', path: '/kontakt' },
];

const Header: React.FC = () => {
  return (
    <header className="flex gap-20 items-start p-4 shadow-md">
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
            <li key={link.title}>
              <Link href={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
