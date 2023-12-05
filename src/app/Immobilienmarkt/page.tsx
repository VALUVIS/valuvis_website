import React from 'react';
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

    <div className="p-4">
      <h3 className="text-sm md:text-base lg:text-lg tracking-widest leading-normal">{titel}</h3>
      <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>{beschreibung}</p>
      <a href={link} className="text-orange-500 hover:underline text-xs md:text-s lg:text-base tracking-widest">Mehr Erfahren</a>
    </div>
  </div>
);

export default function Immobilienmarkt() {
  return (
    <div className='flex flex-col gap-16 mr-5 ml-5 mt-10 mb-10'>

      <HeaderSection
        title="Frankfurter Immobilienmarkt"
        subtitle="In der pulsierenden Metropole Frankfurt am Main trifft Innovation auf Tradition."
        content='Als eine der führenden Finanzstädte Europas und ein wichtiger Knotenpunkt für Handel und Kultur, bietet Frankfurt eine dynamische und vielfältige Immobilienlandschaft.
                Auf den folgenden Seiten finden Sie detaillierte Informationen über den Immobilienmarkt in den verschiedenen Stadtteilen von Frankfurt. Jeder Stadtteil hat seine eigene einzigartige Atmosphäre und bietet unterschiedliche Möglichkeiten für Käufer und Verkäufer. Wir laden Sie ein, mehr über diese faszinierenden Orte zu erfahren und zu entdecken, was sie zu bieten haben.
                Begleiten Sie uns auf dieser Reise durch den Immobilienmarkt in Frankfurt am Main und entdecken Sie die vielfältigen Möglichkeiten, die diese Stadt zu bieten hat. Mit Valuvis Immobilien an Ihrer Seite haben Sie einen vertrauenswürdigen Partner, der Sie bei jedem Schritt unterstützt.'
      /> 

      <section className="bg-neutral-50 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 rounded-lg p-20">
        {stadtteile.map((stadtteil, index) => (
          <StadtteilKarte key={index} {...stadtteil} />
        ))}
      </section>
    </div>
  );
}