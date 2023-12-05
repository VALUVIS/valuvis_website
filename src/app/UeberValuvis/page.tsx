import React from 'react';
import Image from 'next/image';
import ImageTextSection from '../components/ImageTextSection';
import HeaderSection from '../components/HeaderSection';

const services = [
  {
    number: '01',
    title: 'Individuelle Beratung',
    description: 'Individuelle Beratung, maßgeschneidert auf Ihre spezifischen Immobilienziele in Frankfurt. Wir verstehen Ihre Anforderungen und bieten Lösungen, die zu Ihnen passen.'
  },
  {
    number: '02',
    title: 'Marktkenntnis',
    description: 'Fundierte Kenntnisse des Frankfurter Immobilienmarktes. Unsere Expertise ermöglicht es uns, Ihnen wertvolle Einsichten zu liefern, die Ihnen helfen, informierte Entscheidungen zu treffen.'
  },
  {
    number: '03',
    title: 'Umfassender Service',
    description: 'Kompletter Immobilienservice, von der Bewertung bis zum Verkauf. Wir kümmern uns um alle Details, damit Sie sich entspannt zurücklehnen können, während wir die gemeinsamen Ziele umsetzen.'
  },
  {
    number: '04',
    title: 'Kundenservice',
    description: 'Erstklassiger Kundenservice, der auf Ihre individuellen Bedürfnisse eingeht. Wir sind stets für Sie da, bieten schnelle Antworten und sorgen für eine reibungslose Abwicklung bis zum Schluss.'
  },
  {
    number: '05',
    title: 'Vertrauenswürdigkeit',
    description: 'Vertrauenswürdige Immobilienexperten in Frankfurt. Wir setzen auf Transparenz und Integrität, um Ihnen ein sicheres und vertrauensvolles Immobilienerlebnis zu bieten.'
  },
  {
    number: '06',
    title: 'Innovative Lösungen',
    description: 'Innovative Strategien für eine effektive Immobilienvermarktung. Wir nutzen modernste Technologien, um Ihre Immobilie bestmöglich zu präsentieren und den besten Preis zu erzielen.'
  }
];

export default function UeberValuvis() {
  return (
    <div className='flex flex-col gap-16 mr-5 ml-5 mt-10 mb-10'>

      <HeaderSection
        title="Willkommen bei Valuvis Immobilien"
        subtitle="Als Ihr Partner in allen Immobilienangelegenheiten streben wir danach, Ihre Erwartungen zu übertreffen und Ihre Ziele Wirklichkeit werden zu lassen."
        content="Valuvis Immobilien ist Ihr vertrauenswürdiger Immobilienmakler in Frankfurt am Main. Unter der Leitung von Maximilian Rücker sind wir stolz darauf, unseren Kunden eine breite Palette an maßgeschneiderten Immobiliendienstleistungen anbieten zu können. Unser erfahrenes Team ist stets bereit, Sie bei jedem Schritt Ihres Immobilienprozesses zu unterstützen, sei es beim Kauf, Verkauf oder der Vermietung von Immobilien. Mit unserer tiefen Marktkenntnis und unserem Engagement für Exzellenz sind wir bestrebt, Ihre Immobilienziele zu verwirklichen."
      /> 

      <ImageTextSection
        src="/images/ModernHouse.jpg"
        alt="Modernes Haus"
        title="Unsere Mission und Vision"
        content="Unsere Mission bei Valuvis Immobilien ist es, das gesamte Spektrum Ihrer Immobilienbedürfnisse abzudecken. Wir verstehen, dass jeder Kunde einzigartig ist und unterschiedliche Bedürfnisse und Ziele hat. Deshalb bieten wir maßgeschneiderte Dienstleistungen an, die auf Ihre spezifischen Anforderungen zugeschnitten sind. Ob Sie ein Haus kaufen, eine Immobilie verkaufen oder den idealen Mieter für Ihre Immobilie finden möchten, wir sind hier, um Sie bei jedem Schritt zu unterstützen. Unsere Vision ist es, der führende Immobilienmakler in Frankfurt zu sein, der für seinen herausragenden Kundenservice und seine tiefgreifenden Marktkenntnisse bekannt ist. Wir streben danach, in allen Aspekten des Immobilienprozesses Exzellenz zu erreichen und unseren Kunden ein nahtloses und erfüllendes Erlebnis zu bieten."
      />

      <ImageTextSection
        src="/images/Valuvis Home.png"
        alt="Valuvis Home"
        title="Unser Engagement für Exzellenz"
        content="Bei Valuvis Immobilien sind wir stolz auf unser Engagement für Exzellenz und Kundenzufriedenheit. Wir glauben, dass unser Erfolg auf der Zufriedenheit unserer Kunden basiert, und deshalb setzen wir alles daran, Ihnen den bestmöglichenService zu bieten. Mit unseren tiefen Marktkenntnissen und unserer Leidenschaft für Immobilien sind wir bestrebt, Ihnen einen erstklassigen Service zu bieten. Egal, ob Sie eine Immobilie kaufen, verkaufen oder vermieten möchten, Sie können sich darauf verlassen, dass wir alles in unserer Macht Stehende tun werden, um Ihre Erwartungen zu übertreffen. Unser Engagement geht über den reinen Immobilienverkauf hinaus - wir sind hier, um Sie bei jedem Schritt Ihrer Immobilienreise zu unterstützen und Ihre Immobilienziele Wirklichkeit werden zu lassen."
      />

      <section className='bg-neutral-50 grid grid-cols-1 md:grid-cols-3 p-14 gap-16 rounded-lg'>
        {services.map((service) => (
          <div key={service.number} className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl tracking-widest">
              <span className="text-orange-500 tracking-widest">{service.number}</span> {service.title}
            </h3>
            <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>{service.description}</p>
          </div>
        ))}
      </section>

      <ImageTextSection
        src="/images/RoomWithDog.jpg"
        alt="Raum mit Hund"
        title="Unsere umfassenden Dienstleistungen"
        content="Bei Valuvis Immobilien bieten wir eine breite Palette an Dienstleistungen an, um alle Ihre Immobilienbedürfnisse zu erfüllen. Von der Immobilienbewertung und Marktanalyse bis hin zum Verkauf, Kauf und Vermietung von Immobilien, wir decken alle Aspekte des Immobilienprozesses ab. Darüber hinaus bieten wir auch spezialisierte Dienstleistungen wie digitales Marketing und Home Staging an, um Ihre Immobilie effektiv zu bewerben und sie für potenzielle Käufer oder Mieter attraktiv zu machen. Unser Ziel ist es, Ihnen einen umfassenden Service zu bieten, der alle Aspekte des Immobilienprozesses abdeckt und Ihnen hilft, Ihre Immobilienziele zu erreichen. Mit unserer umfassenden Palette an Dienstleistungen sind wir bestrebt, Ihnen ein nahtloses und erfüllendes Immobilienerlebnis zu bieten."
      />

      <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-12 lg:gap-16 rounded-lg'>
        <h1 className='text-xl md:text-2xl lg:text-3xl tracking-widest leading-normal'>Unser Team</h1>

        <div className="flex flex-col-reverse md:flex-row border-t border-gray-400 mx-auto pt-14 gap-8 md:gap-12 lg:gap-16">
          <div className='flex flex-col pr-8 gap-4 md:gap-6 lg:gap-8 flex-1'>
            <h6 className='text-xs md:text-s lg:text-base font-light tracking-widest'>Inhaber</h6>
            <h2 className='text-lg md:text-xl lg:text-2xl tracking-widest'>Maximilian Rücker</h2>
            <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>Mit einem Jahrzehnt Erfahrung in der Immobilienbranche, ist Maximilian ein vertrauenswürdiger Partner für vermögende Privatinvestoren. Sein Fokus liegt auf der Optimierung von Portfolios, wobei er einen ausgewogenen Cash Flow, Liquidität und Risikomanagement gewährleistet. Maximilian ist nicht nur ein erfahrener Immobilienexperte, sondern auch ein begeisterter Berater, der Sie beim Kauf, Verkauf und der Entwicklung Ihrer Immobilien unterstützt. Sein fundiertes Wissen basiert auf einem Studium des International Real Estate Managements an der Technischen Hochschule Aschaffenburg.</p>
          </div>
          <div className='flex-1'>
            <Image
              src="/images/Maximilian.jpg" 
              alt="Maximilian Rücker"
              width={1024}
              height={1024}
              layout='responsive'
              className='rounded-lg' />
          </div>
        </div>
        
      </section>
    </div>
  );
}