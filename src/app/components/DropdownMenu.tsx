import Link from 'next/link';
import React from 'react';

type NavLink = {
  title: string;
  path: string;
};

type DropdownMenuProps = {
  title: string;
  links: NavLink[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, links }) => (
  <li className="relative">
    <div className='peer text-gray-600 hover:text-gray-900 transition-colors'>
      {title}
    </div>
    <ul className="hidden peer-hover:flex hover:flex
      w-[200px] flex-col bg-white drop-shadow-lg absolute">
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          <li className="px-5 py-3 hover:bg-gray-200">{link.title}</li>
        </Link>
      ))}
    </ul>
  </li>
);

export default DropdownMenu;
