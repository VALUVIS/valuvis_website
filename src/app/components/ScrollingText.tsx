'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollingText() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

    const [currentText, setCurrentText] = useState('Valuvis');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
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
            setIsFadingOut(true);
            setTimeout(() => {
            index = (index + 1) % texts.length;
            setCurrentText(texts[index]);
            setCurrentLetterIndex(0);
            setIsFadingOut(false);
            }, 3000); // Ändert den Text nach 3 Sekunden
        }, 6000); // Startet den Ausblendmodus alle 6 Sekunden

        return () => clearInterval(intervalId); // Bereinigt den Intervall, wenn die Komponente unmountet
    }, []);

    useEffect(() => {
        if (isFadingOut) {
            if (currentLetterIndex > 0) {
            const timeoutId = setTimeout(() => {
                setCurrentLetterIndex(currentLetterIndex - 1);
            }, 100); // Ändert den Buchstabenindex alle 100ms

            return () => clearTimeout(timeoutId); // Bereinigt den Timeout, wenn die Komponente unmountet oder der Buchstabenindex aktualisiert wird
            }
        } else {
            if (currentLetterIndex < currentText.length) {
            const timeoutId = setTimeout(() => {
                setCurrentLetterIndex(currentLetterIndex + 1);
            }, 100); // Ändert den Buchstabenindex alle 100ms

            return () => clearTimeout(timeoutId); // Bereinigt den Timeout, wenn die Komponente unmountet oder der Buchstabenindex aktualisiert wird
            }
        }
    }, [currentText, currentLetterIndex, isFadingOut]);

    return (
        <motion.div
            style={{ y: textY }} 
            className='relative w-full h-screen flex flex-col items-center justify-center pb-20 text-white text-2xl md:text-4xl lg:text-6xl whitespace-nowrap tracking-widest'
        >
            <span>Wir sind</span>
            <span className='mt-2 h-5 sm:h-8 md:h-10 lg:h-20'>
                {currentText.slice(0, currentLetterIndex)}
                <span className="blinking-cursor">|</span>
            </span>
            <span className='mt-10 text-lg md:text-2xl lg:text-4xl whitespace-normal text-center'>Der Wegweiser zu Premium-Immobilien in Frankfurt</span>
        </motion.div>
    );
}
