'use client';
import { usePathname } from 'next/navigation';
import BewertungSection from '../../components/Bewertung/BewertungSection';

const BewertungPage: React.FC = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // Now you can use `id` to render dynamic content
    // ...
    return (
        <div className='flex flex-col gap-16 m-5'>
            <BewertungSection object={id as 'Wohnung' | 'Haus' | 'Grundstück' | 'Gewerbeimmobilie' | 'Hauptseite'} />
        </div>
    );
};

export default BewertungPage;