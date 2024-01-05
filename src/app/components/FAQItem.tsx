'use client';
import React, { useState } from 'react';

type FAQItemProps = {
    question: string,
    answer: string
  };

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item flex flex-col gap-4 border-b border-gray-200 pb-6">
      <div className="question flex gap-4" onClick={() => setIsOpen(!isOpen)}>
        <h3 className='text-lg md:text-xl lg:text-2xl font-medium tracking-widest'>{question}</h3>
        <span className="inline ml-2 cursor-pointer">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p className="answer text-lg md:text-xl lg:text-2xl tracking-wider">{answer}</p>}
    </div>
  );
};

export default FAQItem;
