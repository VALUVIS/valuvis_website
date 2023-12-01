import React from 'react';

interface Stadtteil {
  bild: string;
  titel: string;
  beschreibung: string;
  link: string;
}

const stadtteile: Stadtteil[] = [
  {
    bild: '/pfad-zum-bild/altstadt.jpg',
    titel: 'Altstadt',
    beschreibung: 'Ein historisches Juwel im Herzen von Frankfurt',
    link: '/altstadt'
  },
  {
    bild: '/pfad-zum-bild/bockenheim.jpg',
    titel: 'Bockenheim',
    beschreibung: 'Ein Stadtteil mit dynamischem Wachstum und hohem Potenzial',
    link: '/bockenheim'
  },
  {
    bild: '/pfad-zum-bild/bornheim.jpg',
    titel: 'Bornheim',
    beschreibung: 'Ein Stadtteil mit Charme und hoher Lebensqualität',
    link: '/bornheim'
  },
  {
    bild: '/pfad-zum-bild/dornbusch.jpg',
    titel: 'Dornbusch',
    beschreibung: 'Ein Stadtteil mit Charme und hohem Wohnkomfort',
    link: '/dornbusch'
  },
  {
    bild: '/pfad-zum-bild/gallus.jpg',
    titel: 'Gallus',
    beschreibung: 'Ein Stadtteil mit vielfältigem Charme und hohem Potenzial',
    link: '/gallus'
  },
  {
    bild: '/pfad-zum-bild/griesheim.jpg',
    titel: 'Griesheim',
    beschreibung: 'Ein Stadtteil mit starker Gemeinschaft und hohem Wohnkomfort',
    link: '/griesheim'
  },
  {
    bild: '/pfad-zum-bild/innenstadt.jpg',
    titel: 'Innenstadt',
    beschreibung: 'Im Herzen von Frankfurt',
    link: '/innenstadt'
  },
  {
    bild: '/pfad-zum-bild/kalbach-riedberg.jpg',
    titel: 'Kalbach-Riedberg',
    beschreibung: 'Ein aufstrebender Stadtteil mit hohem Wohnkomfort',
    link: '/kalbach-riedberg'
  },
  {
    bild: '/pfad-zum-bild/nied.jpg',
    titel: 'Nied',
    beschreibung: 'Ein Stadtteil mit Charme und hohem Wohnkomfort',
    link: '/nied'
  },
  {
    bild: '/pfad-zum-bild/niederrad.jpg',
    titel: 'Niederrad',
    beschreibung: 'Ein aufstrebender Stadtteil mit hervorragenden Immobilieninvestitionsmöglichkeiten',
    link: '/niederrad'
  },
  {
    bild: '/pfad-zum-bild/nordend.jpg',
    titel: 'Nordend',
    beschreibung: 'Ein lebendiger Stadtteil mit hoher Wohnqualität',
    link: '/nordend'
  },
  {
    bild: '/pfad-zum-bild/ostend.jpg',
    titel: 'Ostend',
    beschreibung: 'Ein dynamischer Stadtteil mit einer reichen Geschichte und einem lebendigen Immobilienmarkt',
    link: '/ostend'
  },
  {
    bild: '/pfad-zum-bild/roedelheim.jpg',
    titel: 'Rödelheim',
    beschreibung: 'Ein Stadtteil mit Potenzial und hohem Wohnkomfort',
    link: '/roedelheim'
  },
  {
    bild: '/pfad-zum-bild/sachsenhausen-nord.jpg',
    titel: 'Sachsenhausen-Nord',
    beschreibung: 'Ein Stadtteil mit historischem Charme und modernem Flair',
    link: '/sachsenhausen-nord'
  },
  {
    bild: '/pfad-zum-bild/sachsenhausen-sued.jpg',
    titel: 'Sachsenhausen-Süd',
    beschreibung: 'Ein Juwel in Frankfurt',
    link: '/sachsenhausen-sued'
  },
  {
    bild: '/pfad-zum-bild/schwanheim.jpg',
    titel: 'Schwanheim',
    beschreibung: 'Ein Stadtteil mit Charme und hohem Wohnkomfort',
    link: '/schwanheim'
  },
  {
    bild: '/pfad-zum-bild/westend.jpg',
    titel: 'Westend',
    beschreibung: 'Zentral im Herzen von Europa',
    link: '/westend'
  }
];

// Komponente für eine einzelne Karte
const StadtteilKarte: React.FC<Stadtteil> = ({ bild, titel, beschreibung, link }) => (
  <div className="shadow-lg rounded-lg overflow-hidden">
    <img src={bild} alt={titel} />
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
      <section className='bg-neutral-50 flex flex-row p-20 gap-8 md:gap-12 lg:gap-16 rounded-lg'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Frankfurter Immobilienmarkt</h1>
          <h3 className='text-xs md:text-sm lg:text-base tracking-widest leading-normal'>In der pulsierenden Metropole Frankfurt am Main trifft Innovation auf Tradition.</h3>
        </div>
        
        <div className='flex flex-col gap-4 pr-14 pl-14 md:pr-16 md:pl-16 lg:pr-18 lg:pl-18'>
          <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>Als eine der führenden Finanzstädte Europas und ein wichtiger Knotenpunkt für Handel und Kultur, bietet Frankfurt eine dynamische und vielfältige Immobilienlandschaft.</p>
          <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>Auf den folgenden Seiten finden Sie detaillierte Informationen über den Immobilienmarkt in den verschiedenen Stadtteilen von Frankfurt. Jeder Stadtteil hat seine eigene einzigartige Atmosphäre und bietet unterschiedliche Möglichkeiten für Käufer und Verkäufer. Wir laden Sie ein, mehr über diese faszinierenden Orte zu erfahren und zu entdecken, was sie zu bieten haben.</p>
          <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>Begleiten Sie uns auf dieser Reise durch den Immobilienmarkt in Frankfurt am Main und entdecken Sie die vielfältigen Möglichkeiten, die diese Stadt zu bieten hat. Mit Valuvis Immobilien an Ihrer Seite haben Sie einen vertrauenswürdigen Partner, der Sie bei jedem Schritt unterstützt.</p>
        </div>
      </section>

      <section className="bg-neutral-50 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 rounded-lg p-20">
        {stadtteile.map((stadtteil, index) => (
          <StadtteilKarte key={index} {...stadtteil} />
        ))}
    </section>
    </div>
  );
}