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
      <div className='peer text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base h-full'>
        {title}
      </div>
    ) : (
      <Link href={path} className='peer text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base h-full'>
        {title}
      </Link>
    )}
    <ul className="hidden z-50 peer-hover:flex hover:flex
      flex-col bg-neutral-50 absolute top-[100%] shadow-md">
      {links.map((link) => (
        <Link key={link.title} href={link.path} className="px-5 py-3 hover:bg-gray-200 text-xs md:text-sm lg:text-base">
          {link.title}
        </Link>
      ))}
    </ul>
  </li>
);

export default DropdownMenu;
