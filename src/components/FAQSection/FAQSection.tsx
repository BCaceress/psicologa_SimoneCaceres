"use client";
import React, { useState } from "react";
import "./FAQSection.css"; // Importa o CSS com as animações

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "O que é a psicanálise?",
    answer:
      "A psicanálise é uma abordagem teórica e terapêutica que investiga os processos inconscientes, buscando compreender e tratar conflitos emocionais e comportamentais.",
  },
  {
    question: "Como a psicoterapia pode ajudar?",
    answer:
      "A psicoterapia oferece um espaço seguro para explorar emoções, melhorar o autoconhecimento e desenvolver estratégias para lidar com desafios emocionais e comportamentais.",
  },
  {
    question: "Qual a diferença entre psicologia e psiquiatria?",
    answer:
      "Enquanto a psicologia se concentra no estudo dos processos mentais e comportamentais, a psiquiatria é uma especialidade médica que também envolve o tratamento farmacológico de transtornos mentais.",
  },
  // Adicione mais FAQs conforme necessário
];

const FAQSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="faq" className="py-16 bg-white fade-in-scale">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-md">
                <button
                  className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-gray-800 font-medium">
                    {faq.question}
                  </span>
                  <span className="text-gray-500">
                    {openIndexes.includes(index) ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`answer-content ${
                    openIndexes.includes(index) ? "expanded" : ""
                  }`}
                >
                  <div className="px-4 py-3 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
