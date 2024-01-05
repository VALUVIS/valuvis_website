import Image from 'next/image';

type ImageTextSectionProps = {
    src: string;
    alt: string;
    title: string;
    content: string;
  };

const ImageTextSection = ({ src, alt, title, content }: ImageTextSectionProps) => {
  return (
    <section className='bg-neutral-50 flex flex-col md:flex-row p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
      <div className='flex-1'>
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          layout='responsive'
          className='rounded-lg' />
      </div>
      
      <div className='flex flex-col gap-4 md:gap-8 lg:gap-10 pr-2 pl-2 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16 flex-1'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>{title}</h2>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>{content}</p>
      </div>
    </section>
  );
};

export default ImageTextSection;
