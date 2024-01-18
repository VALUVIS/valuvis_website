'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getEntriesByContentType } from '../../lib/contentful/client';
import { Entry } from 'contentful';
import JobCard from '../components/Karriere/JobCard';

type Job = {
  fields: Field;
};

type Field = {
  title: string;
  subtitle: string;
  content: string;
  slug: string;
};

type DataType = {
  items: Job[];
};

export default function Karriere() {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEntriesByContentType('job');
      
      const jobs: Job[] = result.items.map((item: Entry<any>) => {
        return {
          sys: item.sys,
          fields: item.fields as Field,
        };
      });

      setData({ items: jobs });
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-16 m-5'>
      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>Starten Sie Ihre Karriere bei Valuvis Immobilien</h2>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>Willkommen auf der Karriereseite von Valuvis Immobilien, dem Ort, an dem Immobilienträume Wirklichkeit werden. Wir sind ein dynamisches und innovatives Immobilienunternehmen, das sich auf den Verkauf und die Vermietung von Wohn- und Geschäftshäusern, Einfamilienhäusern, Eigentumswohnungen und Gewerbeimmobilien in Frankfurt am Main spezialisiert hat.</p>
        <Link href={'/Karriere/Bewerbung'} className='inline-block border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 py-2 px-4 rounded-2xl w-64'>
          Jetzt Initiativbewerbung senden
        </Link>
      </section>

      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <h3 className='text-lg md:text-xl lg:text-2xl tracking-widest leading-normal'>Bereit für den nächsten großen Schritt in Ihrer Karriere?</h3>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>Springen Sie auf und tauchen Sie ein in die spannende Welt der Immobilien mit Valuvis Immobilien. Entdecken Sie unsere aktuellen Stellenangebote und finden Sie die Position, die perfekt zu Ihnen passt. Ihr nächstes Abenteuer wartet nur einen Klick entfernt!</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
          {data?.items.map((job: Job) => (
            <div key={job.fields.slug}>
              <JobCard title={job.fields.title} subtitle={job.fields.subtitle} slug={job.fields.slug} />
            </div>
          ))}
        </div>
      </section>

      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
        <h3 className='text-lg md:text-xl lg:text-2xl tracking-widest leading-normal'>Seien Sie proaktiv und ergreifen Sie die Initiative!</h3>
        <p className='text-sm md:text-base lg:text-xl tracking-widest font-thin'>Haben Sie das Gefühl, dass Sie genau das haben, was Valuvis Immobilien braucht, aber keine passende Stelle gefunden? Zögern Sie nicht, ergreifen Sie die Initiative! Wir sind immer auf der Suche nach talentierten und leidenschaftlichen Menschen, die bereit sind, uns auf unserer Reise zu begleiten.

          Schicken Sie uns Ihre Initiativbewerbung mit Ihrem Lebenslauf und einem Anschreiben, in dem Sie uns erklären, warum Sie der perfekte Kandidat für unser Team sind. Lassen Sie uns wissen, wie Sie mit Ihren Fähigkeiten und Erfahrungen dazu beitragen können, die Vision von Valuvis Immobilien zu verwirklichen.

          Bereit, den ersten Schritt zu machen? Ergreifen Sie die Initiative und bewerben Sie sich jetzt!
        </p>
        <Link href={'/Karriere/Bewerbung'} className='inline-block border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 py-2 px-4 rounded-2xl w-64'>
          Jetzt Initiativbewerbung senden
        </Link>
      </section>
    </div>
  );
}