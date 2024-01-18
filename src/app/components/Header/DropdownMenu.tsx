import Link from 'next/link';
import React from 'react';

type NavLink = {
  title: string;
  path: string;
  id?: string;
};

type DropdownMenuProps = {
  divRef: React.RefObject<HTMLDivElement>;
  dropdownContent: string;
  kaufLinks: NavLink[];
  verkaufLinks: NavLink[];
  moreLinks: NavLink[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ dropdownContent, kaufLinks, verkaufLinks, moreLinks, divRef }) => {
  return (
    <div 
      ref={divRef}
      className={`hidden peer-hover:flex hover:flex absolute flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white transition-height shadow-md`}
    >
      {dropdownContent === 'Immobilien verkaufen' && verkaufLinks.map((link, index) => (
        <Link key={index} href={link.path} className='px-5 py-3 bg-opacity-30 hover:bg-opacity-60 hover:bg-orange-500'>{link.title}</Link>
      ))}
      {dropdownContent === 'Mehr' && moreLinks.map((link, index) => (
        <Link key={index} href={link.path} className='px-5 py-3 bg-opacity-30 hover:bg-opacity-60 hover:bg-orange-500'>{link.title}</Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
