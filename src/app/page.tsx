import Image from 'next/image';

export default function Home() {
  return (
    <main className="home flex flex-col gap-16 m-5">
      <section className="hero bg-neutral-50 flex flex-col items-start pr-10 md:pr-15 lg:pr-20 pl-10 md:pl-15 lg:pl-20 pt-8 pb-8 gap-4 md:gap-8 lg:gap-10 rounded-lg">
        <div className='max-w-[20%]'>
          <Image
              src="/logos/Logo-Valuvis-rgb.png" 
              alt="Valuvis Logo"
              width={1200}
              height={356}
              layout='responsive' />
        </div>
        
        <h1 className= "text-xl md:text-2xl lg:text-3xl tracking-widest font-light">Der Wegweiser zu Premium-Immobilien in Frankfurt.</h1>

        <div className='flex items-start gap-4 md:gap-8 lg:gap-10'>
          <div className="rounded-xl overflow-hidden flex-1">
            <Image
                src="/images/Valuvis Home.png" 
                alt="Valuvis Logo"
                width={1024}
                height={1024}
                layout='responsive' />
          </div>
          
          <div className='flex flex-1 items-center justify-center'>
            <button className='text-xs md:text-s lg:text-base tracking-widest bg-orange-500 text-white p-2 md:p-3 lg:p-4 mt-10 rounded-xl shadow-lg'>Kostenlose Erstberatung sichern</button>
          </div>
          
        </div>
        
      </section>

      <section className="featured-properties">
        {/* Immobilienanzeigen hier */}
      </section>
    </main>
  )
}
