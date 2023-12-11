import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    navigationLinks: { title: string; path: string; }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navigationLinks }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="absolute flex w-full md:hidden bg-white">
            <ul className=''>
                {navigationLinks.map((link) => (
                    <li key={link.title}>
                        <Link href={link.path} className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm lg:text-base">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileMenu;