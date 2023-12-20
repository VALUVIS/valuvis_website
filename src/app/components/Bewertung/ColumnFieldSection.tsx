type ColumnFieldSectionProps = {
    title: string;
    subtitle: string;
    fields: string [];
    onSelect?: (field: string) => void;
};

const ColumnFieldSection: React.FC<ColumnFieldSectionProps> = ({ title, subtitle, fields, onSelect }) => {
    const handleClick = (field: string) => {
        if (onSelect) {
            onSelect(field);
        }
    };

    return (
        <div className="w-full grid place-items-center gap-4">
            <h2 className='tracking-widest font-medium text-lg md:text-xl lg:text-2xl'>{title}</h2>
            <h3 className='text-base md:text-lg lg:text-xl tracking-widest'>{subtitle}</h3>
            <div className="grid grid-cols-1">
                {fields.map((field) => (
                    <div 
                        className="cursor-pointer grid place-items-center border pl-4 pr-4 pb-2 pt-2 md:pl-8 md:pr-8 md:pb-4 md:pt-4 lg:pl-10 lg:pr-10 lg:pb-6 lg:pt-6 shadow transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                        onClick={() => handleClick(field)}
                    >
                        <p className='tracking-widest text-xs md:text-s lg:text-base'>{field}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColumnFieldSection;