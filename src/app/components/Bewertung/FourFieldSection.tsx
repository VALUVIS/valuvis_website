import Link from 'next/link';

type FourFieldSectionProps = {
    title: string;
    fieldPathPairs: { field: string; path: string, icon: React.ComponentType<any> }[];
};

const FourFieldSection: React.FC<FourFieldSectionProps> = ({ title, fieldPathPairs }) => {
    return (
        <div className="w-full grid place-items-center gap-4">
            <h2 className='text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <div className="grid grid-cols-2 gap-4">
                {fieldPathPairs.map((pair, index) => (
                    <Link key={index} href={pair.path} className="grid place-items-center border pl-4 pr-4 pb-4 pt-4 md:pl-8 md:pr-8 md:pb-6 md:pt-6 lg:pl-10 lg:pr-10 lg:pb-8 lg:pt-8 shadow transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                        <pair.icon />
                        <h3>{pair.field}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FourFieldSection;