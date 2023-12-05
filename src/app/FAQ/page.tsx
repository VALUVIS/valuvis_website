import React from 'react';
import FAQItem from '../components/FAQItem';

export default function FAQ() {

  const faqs = [
  {
    question: 'Wie kann ich eine Besichtigung für eine der Immobilien von Valuvis Immobilien vereinbaren?',
    answer: 'Sie können uns direkt kontaktieren, um eine Besichtigung zu vereinbaren. Unser Team wird einen Termin zu einem für Sie passenden Zeitpunkt organisieren.',
  },
  {
    question: 'Bietet Valuvis Immobilien auch Beratungsdienste für Immobilieninvestoren an?',
    answer: 'Ja, wir bieten umfassende Beratungsdienste für Immobilieninvestoren an, einschließlich Marktanalyse, Portfoliostrategie und Investitionsberatung.',
  },
  {
    question: 'Wie kann ich über neue Immobilienangebote von Valuvis Immobilien informiert werden?',
    answer: 'Sie können sich für unseren Newsletter anmelden, um regelmäßige Updates über neue Immobilienangebote und andere relevante Informationen zu erhalten.',
  },
  {
    question: 'Bietet Valuvis Immobilien auch Mietdienstleistungen an?',
    answer: 'Ja, wir bieten eine Reihe von Mietdienstleistungen an, einschließlich Mieterplatzierung und Mietverwaltung.',
  },
  {
    question: 'Kann Valuvis Immobilien mir helfen, den Wert meiner Immobilie zu maximieren?',
    answer: 'Ja, unser Team von Immobilienexperten kann Ihnen strategische Beratung und praktische Lösungen anbieten, um den Wert Ihrer Immobilie zu maximieren.',
  },
  {
    question: 'Was ist Home Staging und bietet Valuvis Immobilien diesen Service an?',
    answer: 'Home Staging ist der Prozess der Vorbereitung einer Immobilie für den Verkauf, um sie attraktiver für potenzielle Käufer zu machen. Ja, wir bieten diesen Service an und können Ihnen helfen, Ihre Immobilie bestmöglich zu präsentieren.',
  },
  {
    question: 'Wie kann ich meine Immobilie bei Valuvis Immobilien listen?',
    answer: 'Sie können uns direkt kontaktieren, um Ihre Immobilie zu listen. Unser Team wird Sie durch den Prozess führen und sicherstellen, dass Ihre Immobilie effektiv vermarktet wird.',
  },
  {
    question: 'Bietet Valuvis Immobilien auch Immobilien außerhalb von Frankfurt am Main an?',
    answer: 'Unser Hauptfokus liegt auf dem Immobilienmarkt in Frankfurt am Main, aber wir können auch bei Immobilientransaktionen in den umliegenden Gebieten behilflich sein.',
  },
  {
    question: 'Kann Valuvis Immobilien mir helfen, eine Finanzierung für meine Immobilie zu finden?',
    answer: 'Während wir uns hauptsächlich auf Immobilienverkauf und -vermietung konzentrieren, können wir Sie an vertrauenswürdige Finanzpartner verweisen, die Ihnen bei der Finanzierung Ihrer Immobilie helfen können.',
  },
  {
    question: 'Wie unterscheidet sich Valuvis Immobilien von anderen Immobilienunternehmen?',
    answer: 'Valuvis Immobilien e.K. zeichnet sich durch unseren personalisierten Service, unsere umfassende Marktkenntnis und unseren innovativen Ansatz aus. Wir glauben, dass jede Immobilientransaktion einzigartig ist und erfordern daher einen maßgeschneiderten Ansatz.',
  },
  {
    question: 'Wie kann ich eine Immobilienbewertung von Valuvis Immobilien erhalten?',
    answer: 'Um eine Immobilienbewertung zu erhalten, können Sie uns direkt kontaktieren. Unser Team von Immobilienexperten wird Sie durch den Prozess führen und sicherstellen, dass Sie eine genaue und faire Bewertung Ihrer Immobilie erhalten.',
  },
  {
    question: 'Bietet Valuvis Immobilien auch Dienstleistungen für Gewerbeimmobilien an?',
    answer: 'Ja, wir bieten eine Reihe von Dienstleistungen für Gewerbeimmobilien an, einschließlich Verkauf, Vermietung und Kaufberatung. Unser erfahrenes Team kann Sie bei der Suche nach dem perfekten Standort für Ihr Unternehmen unterstützen.',
  },
  
];

  return (
    <div className='flex flex-col gap-16 mr-5 ml-5 mt-10 mb-10'>
      <section className='bg-neutral-50 flex flex-col  p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-16 rounded-lg'>
        <h2 className='text-xl md:text-2xl lg:text-3xl'>Frequently Asked Questions</h2>
        <div className='flex flex-col gap-4 md:gap-8 lg:gap-10'>
          {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        </div>
        
      </section>
    </div>
  );
}
