type HeaderSectionProps = {
    title: string;
    subtitle: string;
    content: string;
  };
  
const HeaderSection: React.FC<HeaderSectionProps> = ({ title, subtitle, content }) => {
  // Aufteilen des Inhalts in separate Absätze
  const paragraphs = content.split('\n').map((paragraph, index) => {
      // Nur rendern, wenn der Absatz nicht leer ist
      if (paragraph.length > 0) {
          return (
              <p key={index} className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>
                  {paragraph.trim()}
              </p>
          );
      }
      return null;
  });

  return (
    <section className='bg-neutral-50 flex flex-col md:flex-row p-10 md:p-15 lg:p-20 gap-6 md:gap-8 lg:gap-10 rounded-lg'>
      <div className="flex flex-col flex-1 pr-2 pl-2 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16 gap-6 md:gap-8 lg:gap-10">
        <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>{title}</h2>
        <p className='text-sm md:text-base lg:text-xl font-medium tracking-widest'>{subtitle}</p>
      </div>
      
      <div className='flex flex-col gap-4 flex-1 pr-2 pl-2 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16'>
        {paragraphs}
      </div>
    </section>
  );
};

export default HeaderSection;
  