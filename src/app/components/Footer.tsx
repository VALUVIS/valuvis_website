import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LinkedinIcon from './LinkedinIcon';
import FacebookIcon from './FacebookIcon';

type NavLink = {
    title: string;
    path: string;
};

const navigationLinks: NavLink[] = [
    { title: 'Über uns', path: '/ueber-valuvis' },
    { title: 'Immobilienmarkt', path: '/immobilienmarkt' },
    { title: 'Immobilien', path: '/immobilien' },
    { title: 'Dienstleistungen', path: '/dienstleistungen' },
    { title: 'Karriere', path: '/karriere' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Ratgeber', path: '/ratgeber' },
    { title: 'Kontakt', path: '/kontakt' },
    { title: 'Datenschutz', path: '/datenschutz' },
    { title: 'Impressum', path: '/impressum' },
];
  

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-16 items-start bg-gray-100 p-10 pl-40 pr-40 text-sm">
        <div className="flex flex-wrap justify-between gap-16">
            <div className="flex flex-col space-y-4">
                <Image
                    src="/logos/VA-Logo.png"
                    alt="Valuvis Immobilien e.K."
                    width={50}
                    height={37}
                    layout='fixed'
                />
                <div className="text-center mt-10">
                    Valuvis Immobilien e.K.
                </div>
            
            </div>

            <nav className="flex-grow">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-16">
                    {navigationLinks.map((link) => (
                        <li key={link.title}>
                            <Link href={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className="flex gap-4">
                <LinkedinIcon />
                <FacebookIcon />
            </div>
        </div>
      
        <div className="flex flex-col space-y-4">
            <h3 className="text-lg text-neutral-600">Newsletter abonnieren</h3>
            <form className="flex gap-2">
                <input
                type="email"
                placeholder="E-Mail Adresse"
                className="border p-2 rounded-lg"
                />
                <button className="bg-orange-500 text-white p-2 rounded-lg">Abonnieren</button>
            </form>
            </div>
        <div className="text-start mt-10 text-neutral-600">
            © 2023 Valuvis Immobilien e.K.
        </div>
    </footer>
  );
};

export default Footer;
