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
  <li className="relative flex flex-col items-center justify-center h-full">
    {title === "Mehr" ? (
      <div className='peer hover:text-gray-900 transition-colors h-full'>
        {title}
      </div>
    ) : (
      <Link href={path} className='peer hover:text-gray-900 transition-colors h-full'>
        {title}
      </Link>
    )}
    <ul className={`hidden z-50 peer-hover:flex hover:flex
      flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white absolute top-[100%] shadow-md`}>
      {links.map((link) => (
        <Link key={link.title} href={link.path} className={`px-5 py-3 bg-opacity-30 hover:bg-opacity-60 hover:bg-orange-500`}>
          {link.title}
        </Link>
      ))}
    </ul>
  </li>
);

export default DropdownMenu;
