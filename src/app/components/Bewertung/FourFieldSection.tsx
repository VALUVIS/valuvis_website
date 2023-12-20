import Link from 'next/link';

type FourFieldSectionProps = {
    title: string;
    subtitle: string;
    fieldIconPairs: { field: string; icon: React.ComponentType<any> }[];
    onSelect: (field: string) => void;
};

const FourFieldSection: React.FC<FourFieldSectionProps> = ({ title, subtitle, fieldIconPairs, onSelect }) => {
    return (
        <div className="w-full grid place-items-center gap-4">
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <h3 className='tracking-widest text-base md:text-lg lg:text-xl'>{subtitle}</h3>
            <div className="grid grid-cols-2 gap-4">
                {fieldIconPairs.map((pair, index) => (
                    <div 
                        key={index} 
                        className="cursor-pointer grid place-items-center justify-center border pl-4 pr-4 pb-4 pt-4 md:pl-8 md:pr-8 md:pb-6 md:pt-6 lg:pl-10 lg:pr-10 lg:pb-8 lg:pt-8 shadow transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        onClick={() => onSelect(pair.field)}
                    >
                        <pair.icon />
                        <h3 className='w-full tracking-widest text-xs md:text-s lg:text-base break-words overflow-auto text-center'>{pair.field}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

type FourFieldSectionWithLinkProps = Omit<FourFieldSectionProps, 'fieldIconPairs' | 'onSelect'> & { fieldPathIconPairs: { field: string; icon: React.ComponentType<any>; path: string }[] };

const FourFieldSectionWithLink: React.FC<FourFieldSectionWithLinkProps> = ({ fieldPathIconPairs, title, subtitle }) => {
    return (
        <div className="w-full grid place-items-center gap-4">
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <h3 className='tracking-widest text-base md:text-lg lg:text-xl'>{subtitle}</h3>
            <div className="grid grid-cols-2 gap-4">
                {fieldPathIconPairs.map((pair, index) => (
                    <Link key={index} href={pair.path}>
                        <div className="grid place-items-center justify-center border pl-4 pr-4 pb-4 pt-4 md:pl-8 md:pr-8 md:pb-6 md:pt-6 lg:pl-10 lg:pr-10 lg:pb-8 lg:pt-8 shadow transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                            <pair.icon />
                            <h3 className='w-full tracking-widest text-xs md:text-s lg:text-base break-words overflow-auto text-center'>{pair.field}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export { FourFieldSection, FourFieldSectionWithLink };