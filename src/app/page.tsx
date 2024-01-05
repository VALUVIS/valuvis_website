'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentText, setCurrentText] = useState('Valuvis');
  const texts = [
    'Valuvis',
    'Vertrauenswürdig',
    'Professionell',
    'Kundenorientiert',
    'Marktkundig',
    'Qualitativ',
    'Innovativ',
    'Nachhaltig',
    'Zuverlässig',
    'Effizient',
    'Integrität'
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 3000); // Ändert den Text alle 3 Sekunden

    return () => clearInterval(intervalId); // Bereinigt den Intervall, wenn die Komponente unmountet
  }, []);

  return (
    <main className="home flex flex-col gap-16 mb-10">
      <div className='w-screen h-screen relative'>
        <Image
          src="/images/Frankfurt.webp" 
          alt="Valuvis Logo"
          layout='fill'
          objectFit='cover'
          objectPosition='center' 
        />
        <div className='relative w-screen h-screen flex flex-col items-center justify-center text-white text-4xl md:text-6xl lg:text-8xl whitespace-nowrap tracking-widest'>
          <span>Wir sind</span>
          <span className='mt-2'>{currentText}</span>
          <span className='mt-10 text-xl md:text-3xl lg:text-5xl whitespace-normal text-center'>Der Wegweiser zu Premium-Immobilien in Frankfurt</span>
        </div>
      </div>
    </main>
  )
}
