'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderSection from '../components/HeaderSection';

interface Stadtteil {
  bild: string;
  titel: string;
  beschreibung: string;
  link: string;
}

const stadtteile: Stadtteil[] = [
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Altstadt',
    beschreibung: 'Ein historisches Juwel im Herzen von Frankfurt',
    link: '/altstadt'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Bockenheim',
    beschreibung: 'Ein Stadtteil mit dynamischem Wachstum und hohem Potenzial',
    link: '/bockenheim'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Bornheim',
    beschreibung: 'Ein Stadtteil mit Charme und hoher Lebensqualität',
    link: '/bornheim'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Dornbusch',
    beschreibung: 'Ein Stadtteil mit Charme und hohem Wohnkomfort',
    link: '/dornbusch'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Gallus',
    beschreibung: 'Ein Stadtteil mit vielfältigem Charme und hohem Potenzial',
    link: '/gallus'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Griesheim',
    beschreibung: 'Ein Stadtteil mit starker Gemeinschaft und hohem Wohnkomfort',
    link: '/griesheim'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Innenstadt',
    beschreibung: 'Im Herzen von Frankfurt',
    link: '/innenstadt'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Kalbach-Riedberg',
    beschreibung: 'Ein aufstrebender Stadtteil mit hohem Wohnkomfort',
    link: '/kalbach-riedberg'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Nied',
    beschreibung: 'Ein Stadtteil mit Charme und hohem Wohnkomfort',
    link: '/nied'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Niederrad',
    beschreibung: 'Ein aufstrebender Stadtteil mit hervorragenden Immobilieninvestitionsmöglichkeiten',
    link: '/niederrad'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Nordend',
    beschreibung: 'Ein lebendiger Stadtteil mit hoher Wohnqualität',
    link: '/nordend'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Ostend',
    beschreibung: 'Ein dynamischer Stadtteil mit einer reichen Geschichte und einem lebendigen Immobilienmarkt',
    link: '/ostend'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Rödelheim',
    beschreibung: 'Ein Stadtteil mit Potenzial und hohem Wohnkomfort',
    link: '/roedelheim'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Sachsenhausen-Nord',
    beschreibung: 'Ein Stadtteil mit historischem Charme und modernem Flair',
    link: '/sachsenhausen-nord'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Sachsenhausen-Süd',
    beschreibung: 'Ein Juwel in Frankfurt',
    link: '/sachsenhausen-sued'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Schwanheim',
    beschreibung: 'Ein Stadtteil mit Charme und hohem Wohnkomfort',
    link: '/schwanheim'
  },
  {
    bild: '/images/FrankfurtCity.jpg',
    titel: 'Westend',
    beschreibung: 'Zentral im Herzen von Europa',
    link: '/westend'
  }
];

// Komponente für eine einzelne Karte
const StadtteilKarte: React.FC<Stadtteil> = ({ bild, titel, beschreibung, link }) => (
  <div className="shadow-lg rounded-lg overflow-hidden">
    <Image 
      src={bild}
      alt={titel}
      width={1024}
      height={1024}
      layout='responsive' />

    <div className="flex flex-col p-4 gap-2 md:gap-3 lg:gap-4">
      <h3 className="text-sm md:text-base lg:text-lg tracking-widest leading-normal">{titel}</h3>
      <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>{beschreibung}</p>
      <a href={link} className="text-orange-500 hover:underline text-xs md:text-s lg:text-base tracking-widest">Mehr Erfahren</a>
    </div>
  </div>
);

const Immobilienmarkt = () => {
  const [texts, setTexts] = useState<{ TextContent: string; Subtitle: string; Title: string; }[]>([]);

  useEffect(() => {
    const fetchTexts = async () => {
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`
        }
      };
    
      const request = await fetch(`http://localhost:1337/api/texts`, reqOptions);
      
      const response = await request.json();
      const texts = response.data.map((item: { attributes: any; }) => item.attributes);
      setTexts(texts);
    };

    fetchTexts();
  }, []);

  return (
    <div className='flex flex-col gap-16 m-5'>

      {texts && texts.map((text: { TextContent: string; Subtitle: string; Title: string}) => (
        <HeaderSection
          title={text.Title}
          subtitle={text.Subtitle}
          content={text.TextContent}
        />
      ))}

      <section className="bg-neutral-50 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 rounded-lg p-20">
        {stadtteile.map((stadtteil, index) => (
          <StadtteilKarte key={index} {...stadtteil} />
        ))}
      </section>
    </div>
  );
}

export default Immobilienmarkt;
