import Image from 'next/image';
import ScrollingText from './components/ScrollingText';

export default function Home() {
  return (
    <main className="home flex flex-col gap-16 mb-20">
      <section className='w-screen h-[120vh] relative'>
        <div 
          className='w-screen h-full absolute'
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
    </main>
  )
}
