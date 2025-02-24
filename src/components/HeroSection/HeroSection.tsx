"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-[#f3ece3] bg-[url('/images/fundo_marrom.png')] bg-cover bg-no-repeat bg-blend-overlay"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center h-full">
        {/* Conteúdo da esquerda animado */}
        <motion.div
          className="md:w-1/2 h-[600px] flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-[#5e667a] text-4xl md:text-6xl font-bold mb-4">
              Transforme sua vida e alcance o equilíbrio emocional
            </h1>
            <img
              src="/images/rabisco.png"
              alt="Rabisco decorativo"
              className="w-48 mb-4"
            />
            <p className="text-gray-600 mb-6">
              Descubra um espaço acolhedor de autoconhecimento, onde cada consulta é um
              passo rumo à sua melhor versão. Supere desafios, recupere sua confiança e
              viva de forma mais plena e harmoniosa.
            </p>
            <a
              href="https://wa.me/5551981428765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A3B8B4] text-white px-8 py-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Agendar Consulta
            </a>
          </div>
        </motion.div>

        {/* Conteúdo da direita com polaroids animadas */}
        <motion.div
          className="md:w-1/2 h-[600px] relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Polaroid 1 */}
          <motion.div
            className="absolute top-0 left-[15%] w-56 md:w-60 lg:w-64 bg-white shadow-lg p-3 pb-12 z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/psico1.jpg"
              alt="Psicologia 1"
              className="w-full h-48 md:h-52 lg:h-56 object-cover"
            />
          </motion.div>

          {/* Polaroid 2 */}
          <motion.div
            className="absolute top-32 left-[52%] w-56 md:w-60 lg:w-64 bg-white shadow-xl p-3 pb-12 z-20"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/images/psico2.jpg"
              alt="Psicologia 2"
              className="w-full h-48 md:h-52 lg:h-56 object-cover"
            />
          </motion.div>

          {/* Polaroid 3 */}
          <motion.div
            className="absolute top-64 left-[15%] w-56 md:w-60 lg:w-64 bg-white shadow-lg p-3 pb-12 z-30"
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="/images/psico3.jpg"
              alt="Psicologia 3"
              className="w-full h-48 md:h-52 lg:h-56 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
