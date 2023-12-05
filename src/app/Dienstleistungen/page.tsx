import React from 'react';
import Link from 'next/link';
import HeaderSection from '../components/HeaderSection';

const services = [
  {
    number: '01',
    title: 'Verkauf von Eigentumswohnungen',
    description: 'Erzielen Sie den besten Preis für Ihre Eigentumswohnung mit Valuvis Immobilien. Unser Team setzt innovative Marketingstrategien ein, um Ihre Wohnung effektiv zu präsentieren und den bestmöglichen Preis zu erzielen. Wir begleiten Sie durch jeden Schritt des Verkaufsprozesses, um eine stressfreie Erfahrung zu gewährleisten.'
  },
  {
    number: '02',
    title: 'Verkauf von Einfamilienhäusern',
    description: 'Maximieren Sie den Wert Ihres Einfamilienhauses mit Valuvis Immobilien. Wir nutzen unsere umfassende Marktkenntnis und innovative Marketingstrategien, um Ihr Haus effektiv auf dem Markt zu positionieren und den bestmöglichen Preis zu erzielen. Unser Team begleitet Sie durch den gesamten Verkaufsprozess, um eine stressfreie Erfahrung zu gewährleisten.'
  },
  {
    number: '03',
    title: 'Verkauf von Wohn- und Geschäftshäusern',
    description: 'Erzielen Sie den besten Preis für Ihr Wohn- und Geschäftshaus mit Valuvis Immobilien. Unser Team nutzt innovative Marketingstrategien und unsere umfassende Marktkenntnis, um Ihre Immobilie effektiv zu präsentieren und den bestmöglichen Preis zu erzielen. Wir begleiten Sie durch jeden Schritt des Verkaufsprozesses, um eine stressfreie Erfahrung zu gewährleisten.'
  },
  {
    number: '04',
    title: 'Kauf',
    description: 'Finden Sie Ihr Traumhaus mit Valuvis Immobilien. Wir bieten eine breite Palette an Immobilien und begleiten Sie bei jedem Schritt des Kaufprozesses. Mit unserer umfassenden Marktkenntnis und unserem Engagement für Exzellenz unterstützen wir Sie dabei, Ihre Immobilienziele zu erreichen.'
  },
  {
    number: '05',
    title: 'Vermietung',
    description: 'Machen Sie die Vermietung Ihrer Immobilie zum Kinderspiel mit Valuvis Immobilien. Wir helfen Ihnen, den perfekten Mieter zu finden und sorgen für einen reibungslosen Vermietungsprozess. Mit unserer umfassenden Branchenkenntnis und unserem Engagement für Exzellenz gestalten wir die Vermietung Ihrer Immobilie zu einem stressfreien Erlebnis.'
  },
  {
    number: '06',
    title: 'Immobilienbewertung',
    description: 'Entdecken Sie den wahren Wert Ihrer Immobilie mit Valuvis Immobilien. Unsere Experten nutzen aktuelle Marktdaten und tiefgreifende Analysen, um eine genaue und faire Bewertung Ihrer Immobilie zu liefern. Mit unserer umfassenden Marktkenntnis und unserem Engagement für Exzellenz bieten wir Ihnen eine Bewertung, auf die Sie sich verlassen können.'
  },
  {
    number: '07',
    title: 'Marktanalyse',
    description: 'Erhalten Sie tiefe Einblicke in den Immobilienmarkt mit Valuvis Immobilien. Unsere detaillierten Marktanalysen liefern Ihnen die Informationen, die Sie benötigen, um fundierte Immobilienentscheidungen zu treffen. Mit unserer umfassenden Marktkenntnis und unserem Engagement für Exzellenz bieten wir Ihnen die Einblicke, die Sie benötigen, um erfolgreich zu sein.'
  },
  {
    number: '08',
    title: 'Marketing',
    description: 'Steigern Sie Ihre Sichtbarkeit und erreichen Sie mehr potenzielle Käufer oder Mieter mit unserem innovativen digitalen Marketing-Service bei Valuvis Immobilien. Wir nutzen die neuesten digitalen Strategien, um Ihre Immobilie effektiv auf dem Markt zu positionieren und den besten Preis zu erzielen.'
  },
  {
    number: '09',
    title: 'Home Staging',
    description: 'Verwandeln Sie Ihre Immobilie in ein Must-See mit unserem Home Staging-Service bei Valuvis Immobilien. Wir helfen Ihnen, Ihre Immobilie attraktiv zu gestalten, um schneller einen Käufer oder Mieter zu finden. Mit unserer umfassenden Marktkenntnis und unserem Engagement für Exzellenz machen wir Ihre Immobilie zum Star der Show.'
  }
];

export default function Dienstleistungen() {
  return (
    <div className='flex flex-col gap-16 mr-5 ml-5 mt-10 mb-10'>

      <HeaderSection
        title="Premium Immobilienservices in Frankfurt - Valuvis Immobilien"
        subtitle="Willkommen bei Valuvis Immobilien, Ihrem erstklassigen Partner für Immobiliendienstleistungen in Frankfurt."
        content="Mit einer tiefgreifenden Kenntnis des Frankfurter Immobilienmarktes und einem unübertroffenen Engagement für Exzellenz, bietet Valuvis Immobilien eine breite Palette an Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind. Ob Sie eine Immobilie kaufen, verkaufen, vermieten oder bewerten lassen möchten, unser erfahrenes Team steht Ihnen zur Seite. Wir sind stolz darauf, unseren Kunden einen erstklassigen Service zu bieten, der auf Vertrauen, Transparenz und echter Leidenschaft für Immobilien basiert. Entdecken Sie, wie Valuvis Immobilien Ihnen helfen kann, Ihre Immobilienziele zu erreichen."
      /> 

      <section className='bg-neutral-50 grid grid-cols-1 md:grid-cols-3 p-14 gap-16 rounded-lg'>
        {services.map((service) => (
          <div key={service.number} className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl tracking-widest">
              <span className="text-orange-500 tracking-widest">{service.number}</span> {service.title}
            </h3>
            <p className='text-xs md:text-s lg:text-base tracking-widest font-thin'>{service.description}</p>
            <button className='text-xs md:text-s lg:text-base tracking-wider text-orange-500 pr-3 pl-3 pt-2 pb-2 rounded-lg hover:bg-orange-500 hover:text-white border border-orange-500'>Mehr erfahren</button>
          </div>
        ))}
      </section>
    </div>
  );
}