import Link from 'next/link';
import Image from 'next/image';

type FourFieldSectionProps = {
    title: string;
    subtitle: string;
    fieldImagePairs: { field: string; image: string }[];
    onSelect: (field: string) => void;
};

const FourFieldSection: React.FC<FourFieldSectionProps> = ({ title, subtitle, fieldImagePairs, onSelect }) => {
    return (
        <div className="w-full grid place-items-center gap-4">
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <h3 className='tracking-widest text-base md:text-lg lg:text-xl'>{subtitle}</h3>
            <div className="grid grid-cols-2 gap-4">
                {fieldImagePairs.map((pair, index) => (
                    <div 
                        key={index} 
                        className="cursor-pointer grid place-items-center justify-center border pl-4 pr-4 pb-4 pt-4 md:pl-8 md:pr-8 md:pb-6 md:pt-6 lg:pl-10 lg:pr-10 lg:pb-8 lg:pt-8 shadow transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        onClick={() => onSelect(pair.field)}
                    >
                        <Image src={pair.image} alt={pair.field} width={75} height={75} />
                        <h3 className='w-full tracking-widest text-xs md:text-s lg:text-base break-words overflow-auto text-center'>{pair.field}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

type FourFieldSectionWithLinkProps = Omit<FourFieldSectionProps, 'fieldImagePairs' | 'onSelect'> & { fieldPathImagePairs: { field: string; image: string; path: string }[] };

const FourFieldSectionWithLink: React.FC<FourFieldSectionWithLinkProps> = ({ fieldPathImagePairs, title, subtitle }) => {
    return (
        <div className="w-full grid place-items-center gap-4">
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <h3 className='tracking-widest text-base md:text-lg lg:text-xl'>{subtitle}</h3>
            <div className="grid grid-cols-2 gap-4">
                {fieldPathImagePairs.map((pair, index) => (
                    <Link key={index} href={pair.path}>
                        <div className="grid place-items-center justify-center border pl-4 pr-4 pb-4 pt-4 md:pl-8 md:pr-8 md:pb-6 md:pt-6 lg:pl-10 lg:pr-10 lg:pb-8 lg:pt-8 shadow transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                            <Image src={pair.image} alt={pair.field} width={75} height={75} />
                            <h3 className='w-full tracking-widest text-xs md:text-s lg:text-base break-words overflow-auto text-center'>{pair.field}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export { FourFieldSection, FourFieldSectionWithLink };
