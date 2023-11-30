import Image from 'next/image';

export default function Home() {
  return (
    <main className="home">
      <section className="hero flex flex-col items-start pt-10 pr-8 pb-8 pl-8 gap-16">
        <Image
              src="/logos/Logo-Valuvis-rgb.png" 
              alt="Valuvis Logo"
              width={300}
              height={20}
              layout='fixed' />
        <h1 className= "text-4xl font-light">Der Wegweiser zu Premium-Immobilien in Frankfurt.</h1>
        <div className="rounded-xl overflow-hidden">
          <Image
              src="/logos/Valuvis Home.png" 
              alt="Valuvis Logo"
              width={800}
              height={20}
              layout='fixed' />
        </div>
        
        <button>Los Geht's</button>
      </section>

      <section className="featured-properties">
        {/* Immobilienanzeigen hier */}
      </section>
    </main>
  )
}
