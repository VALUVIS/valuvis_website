import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LinkedinIcon from './LinkedinIcon';
import FacebookIcon from './FacebookIcon';
import NewsletterForm from './NewsletterForm';

type NavLink = {
    title: string;
    path: string;
};

const navigationLinks: NavLink[] = [
    { title: 'Über uns', path: '/UeberValuvis' },
    { title: 'Immobilienmarkt', path: '/Immobilienmarkt' },
    { title: 'Immobilien kaufen', path: '/Immobilien-kaufen' },
    { title: 'Immobilien verkaufen', path: '/Immobilien-verkaufen' },
    { title: 'Dienstleistungen', path: '/Dienstleistungen' },
    { title: 'Karriere', path: '/Karriere' },
    { title: 'FAQ', path: '/FAQ' },
    { title: 'Ratgeber', path: '/Ratgeber' },
    { title: 'Kontakt', path: '/Kontakt' },
    { title: 'Datenschutz', path: '/Datenschutz' },
    { title: 'Impressum', path: '/Impressum' },
];
  

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-16 justify-between bg-gray-200 p-10 pl-40 pr-40 text-sm">
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
            <NewsletterForm />
        </div>
        <div className="text-start mt-10 text-neutral-600">
            © 2023 Valuvis Immobilien e.K.
        </div>
    </footer>
  );
};

export default Footer;
