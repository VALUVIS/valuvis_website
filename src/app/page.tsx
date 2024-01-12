import Image from 'next/image';
import ScrollingText from './components/ScrollingText';

export default function Home() {
  return (
    <main className="home flex flex-col gap-16">
      <section className='w-full h-[120vh] relative'>
        <div 
          className='w-full h-full absolute'
        >
          <Image
            src="/images/Frankfurt.webp" 
            alt="Franfurt am Main"
            layout='fill'
            objectFit='cover'
            objectPosition='center' 
          />
        </div>
        <ScrollingText />
      </section>
      <section className='flex flex-col gap-16 m-5 h-[100vh]'>
      </section>
    </main>
  )
}
