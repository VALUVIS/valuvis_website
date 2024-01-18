import React from 'react';

const Datenschutz: React.FC = () => {
    const sections = [
        {
            title: 'Einleitung und Geltungsbereich',
            content: 'Diese Datenschutzerklärung gilt für die Nutzung der Webseite Dynamod.ai/Toolfinder, die von der Valuvis GmbH unter der KI-Beratungsmarke Dynamod Solutions betrieben wird. Sie informiert Sie darüber, welche Art von persönlichen Daten von uns verarbeitet werden, wenn Sie diese Webseite nutzen. Diese Erklärung gilt für alle Nutzer, unabhängig von ihrem Aufenthaltsort.'
        },
        {
            title: 'Verantwortlicher für die Datenverarbeitung',
            content: 'Verantwortlich für die Verarbeitung der personenbezogenen Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die Valuvis GmbH, vertreten durch Maximilian Rücker, Hainer Weg 49, 60599 Frankfurt am Main.'
        },
        {
            title: 'Zweck der Datenverarbeitung und Rechtsgrundlage',
            content: 'Die Datenverarbeitung erfolgt zum Zweck der Empfehlung von KI-Tools, basierend auf den Angaben und Antworten, die Sie im Chatfenster machen. Die Rechtsgrundlage für die Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Wenn Sie Ihre Einwilligung widerrufen, werden alle gespeicherten Daten gelöscht.'
        },
        {
            title: 'Datenübertragung an Dritte',
            content: 'Wir verwenden Dienste von Drittanbietern, insbesondere Cohere und OpenAI, um Empfehlungen abzugeben. Personenbezogene Daten werden dabei nicht übermittelt, es sei denn, Sie geben solche Daten unaufgefordert im Chatfenster ein. Weitere Informationen finden Sie in den Datenschutzerklärungen von Cohere und OpenAI.'
        },
        {
            title: 'Rechte der Betroffenen',
            content: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter [Kontaktinformationen].'
        },
        {
            title: 'Speicherdauer und Datenlöschung',
            content: 'Ihre Daten werden nach Beendigung des Chats gelöscht, es sei denn, Sie wählen die Option zur Speicherung des Chatverlaufs durch eine zukünftige Login-Funktion. In diesem Fall werden die Daten für [Zeitraum] gespeichert.'
        },
        {
            title: 'Sicherheitsmaßnahmen',
            content: 'Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten vor unerlaubtem Zugriff und Missbrauch zu schützen. Dazu gehören Verschlüsselung, Zugriffsbeschränkungen und regelmäßige Sicherheitsüberprüfungen.'
        }
    ];

    return (
        <div className='flex flex-col gap-16 m-5'>
        <section className='bg-neutral-50 flex flex-col p-10 md:p-15 lg:p-20 gap-8 md:gap-10 lg:gap-12 rounded-lg'>
            <h2 className='text-xl md:text-3xl lg:text-4xl tracking-widest leading-normal'>Datenschutzerklärung für Valuvis</h2>

            <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
                {sections.map((section, index) => (
                <div key={index} className='flex flex-col gap-6'>
                    <h3 className='text-lg md:text-xl lg:text-2xl tracking-widest leading-normal'>{section.title}</h3>
                    <p className='text-sm md:text-base lg:text-lg tracking-widest leading-normal'>{section.content}</p>
                </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default Datenschutz;
