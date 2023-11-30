import Link from 'next/link';
import React from 'react';

type NavLink = {
  title: string;
  path: string;
};

type DropdownMenuProps = {
  title: string;
  path: string;
  links: NavLink[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, links, path }) => (
  <li className="relative">
    {title === "Mehr" ? (
      <div className='peer text-gray-600 hover:text-gray-900 transition-colors'>
        {title}
      </div>
    ) : (
      <Link href={path} className='peer text-gray-600 hover:text-gray-900 transition-colors'>
        {title}
      </Link>
    )}
    <ul className="hidden peer-hover:flex hover:flex
      flex-col bg-white drop-shadow-lg absolute top-[100%] left-0">
      {links.map((link) => (
        <Link key={link.title} href={link.path} className="px-5 py-3 hover:bg-gray-200">
          {link.title}
        </Link>
      ))}
    </ul>
  </li>
);

export default DropdownMenu;
