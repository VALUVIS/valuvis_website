'use client';
import React, { useState } from 'react';

type FAQItemProps = {
    question: string,
    answer: string
  };

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="question" onClick={() => setIsOpen(!isOpen)}>
        <h3 className='text-xs md:text-s lg:text-base font-medium tracking-widest'>{question}</h3>
        <span className="inline ml-2 cursor-pointer">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p className="answer text-xs md:text-s lg:text-base tracking-wider">{answer}</p>}
    </div>
  );
};

export default FAQItem;
