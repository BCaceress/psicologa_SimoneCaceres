"use client";
import React from "react";
import {
  FaHandsHelping,
  FaUserShield,
  FaCommentDots,
  FaCalendarCheck,
  FaUserMd,
  FaClipboardList,
  FaSpa,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-20 relative bg-[#f3ece3] bg-[url('/images/fundo_marrom.png')] bg-cover bg-no-repeat bg-blend-overlay">
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-10 opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">O que ofereço</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubra como os serviços podem ajudar você e sua família a
            encontrar equilíbrio, desenvolvimento e bem-estar em cada fase da vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-30">
          {[
            {
              title: "Terapia Ocupacional",
              icon: <FaHandsHelping className="mr-2 text-3xl" />, 
              image: "/images/psico1.jpg",
              bgColor: "bg-[#F8B642]",
              description:
                "Focada no desenvolvimento de habilidades motoras e cognitivas, promovendo autonomia e bem-estar em cada etapa da vida.",
            },
            {
              title: "Sessões Privadas",
              icon: <FaUserShield className="mr-2 text-3xl" />, 
              image: "/images/psico2.jpg",
              bgColor: "bg-[#5494c7]",
              description:
                "Atendimento individualizado, respeitando as necessidades únicas de cada pessoa, garantindo conforto e confidencialidade.",
            },
            {
              title: "Terapia de Fala",
              icon: <FaCommentDots className="mr-2 text-3xl" />, 
              image: "/images/psico3.jpg",
              bgColor: "bg-[#cc826e]",
              description:
                "Auxílio na comunicação e linguagem, fortalecendo a interação social e o desenvolvimento emocional.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${service.bgColor} text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center`}
            >
              <div className="mb-4 w-full flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-sm h-44 object-cover rounded-2xl shadow-md"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center justify-center">
                {service.icon} {service.title}
              </h3>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Nossa Abordagem
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            {[
              {
                title: "Agende uma Consulta",
                icon: <FaCalendarCheck />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
              },
              {
                title: "Encontre-se com o Terapeuta",
                icon: <FaUserMd />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
              },
              {
                title: "Avaliação Diagnóstica",
                icon: <FaClipboardList />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
              },
              {
                title: "Inicie a Terapia",
                icon: <FaSpa />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
              },
            ].map((step, index, array) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-8 flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-24 h-24 mb-4 flex items-center justify-center bg-[#5494c7] rounded-full shadow-md">
                    <span className="text-5xl text-white">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                {index < array.length - 1 && (
                  <img
                    src="/images/flecha_direita.png"
                    alt="Flecha"
                    className="h-12 w-auto mx-4 hidden md:block"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
