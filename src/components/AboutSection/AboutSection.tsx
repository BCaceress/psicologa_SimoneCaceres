"use client";
import React from "react";
import { FaBrain } from "react-icons/fa"; // Representa pensamentos e emoções
import { GiPuzzle } from "react-icons/gi"; // Representa estratégias e desafios
import { MdSelfImprovement } from "react-icons/md"; // Representa autodesenvolvimento
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#A3B8B4] fade-in-scale">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Imagem com nova moldura lúdica sem animação */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="playful-frame">
            <img
              src="/images/simone.png"
              alt="Psicóloga"
              className="w-80 h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Conteúdo de texto */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold text-[#5e667a] mb-2">Quem irá lhe ajudar?</h2>
          <p className="text-white font-bold  mb-4">
            Simone Caceres Soares (CRP 07/31309)
          </p>
          <p className="text-gray-100 mb-6 leading-relaxed">
            Olá! Meu nome é Simone Caceres Soares, sou Psicóloga Clínica desde 2019 e
            futura Psicanalista. Desde 2022 faço a Formação em Psicanálise, e estudo os
            traumas infantis e seus impactos. Atendo presencial e online no Rio Grande do Sul.
            <br /><br />
            Fui capturada pela psicanálise antes mesmo de terminar a graduação, quando tive
            o prazer de conhecer um pouquinho sobre FREUD, o pai da psicanálise e suas teorias.
            Hoje dedico meu tempo estudando, aprimorando meus conhecimentos e trabalhando
            com a ética que a psicanálise ensina. Sou apaixonada pela minha profissão e pelo meu trabalho.
          </p>

          {/* Lista de tópicos com ícones exclusivos */}
          <ul className="mb-6 space-y-4">
            <li className="flex items-center transition-transform duration-300 hover:scale-105">
              <FaBrain className="text-white w-12 h-12 mr-4" />
              <span className="text-gray-100 text-lg">
                Entender a relação entre seus pensamentos e emoções
              </span>
            </li>
            <li className="flex items-center transition-transform duration-300 hover:scale-105">
              <GiPuzzle className="text-white w-12 h-12 mr-4" />
              <span className="text-gray-100 text-lg">
                Desenvolver estratégias personalizadas para seus desafios
              </span>
            </li>
            <li className="flex items-center transition-transform duration-300 hover:scale-105">
              <MdSelfImprovement className="text-white w-12 h-12 mr-4" />
              <span className="text-gray-100 text-lg">
                Construir uma nova forma de se relacionar consigo mesmo(a)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
