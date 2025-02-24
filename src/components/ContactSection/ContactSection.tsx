import React from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaBuilding,
  FaClock
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#A3B8B4] text-white"
      style={{ fontFamily: '"Signika Negative", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-16 py-10">
        {/* Seção Superior: 3 colunas com ícone, título, texto e botão */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Telefone */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">(+55) 51 98142-8765</h3>
            <p className="text-sm text-white/80 mb-2">
              Converse conosco e inicie sua jornada rumo ao equilíbrio e à transformação pessoal.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition hover:bg-white/10"
            >
              <span className="w-6 h-6 bg-[#F8B642] rounded-full flex items-center justify-center">
                <FaArrowRight className="text-white text-xs" />
              </span>
              <span className="text-white transition">Entre em Contato</span>
            </a>
          </div>
          {/* Coluna 2 - E-mail */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <FaEnvelope className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">psicologasimonecaceres@gmail.com</h3>
            <p className="text-sm text-white/80 mb-2">
              Envie-nos um e-mail para receber atendimento personalizado.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition hover:bg-white/10"
            >
              <span className="w-6 h-6 bg-[#F8B642] rounded-full flex items-center justify-center">
                <FaArrowRight className="text-white text-xs" />
              </span>
              <span className="text-white transition">Enviar E-mail</span>
            </a>
          </div>
          {/* Coluna 3 - Localização */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Esteio, RS</h3>
            <p className="text-sm text-white/80 mb-2">
              Visite nosso consultório e sinta o ambiente acolhedor que preparamos para você.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition hover:bg-white/10"
            >
              <span className="w-6 h-6 bg-[#F8B642] rounded-full flex items-center justify-center">
                <FaArrowRight className="text-white text-xs" />
              </span>
              <span className="text-white transition">Ver Mapa</span>
            </a>
          </div>
        </div>

        {/* Linha pontilhada (SVG repetido horizontalmente) */}
        <div className="my-4 flex justify-center">
          <div
            className="w-full h-4"
            style={{
              backgroundImage: 'url("/svg/pontilhados.svg")',
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* Seção Inferior: Texto + Formulário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
         {/* Coluna Esquerda: Texto e Informações */}
<div>
  <h2 className="text-5xl font-semibold mb-4 text-left">
    O Melhor Aliado no Cuidado do Seu Filho
  </h2>
  <p className="text-white/90 mb-6 text-left">
    Estamos aqui para oferecer um atendimento humanizado e especializado, transformando a vida do seu filho com carinho e dedicação.
  </p>
  <div className="flex flex-col sm:flex-row gap-8">
    <div className="flex flex-col items-start flex-1">
      <FaBuilding className="text-4xl mb-4" />
      <h3
        className="font-semibold text-left mb-2 text-[24px] leading-[24px]"
        style={{ letterSpacing: "normal", fontFamily: '"Signika Negative", sans-serif' }}
      >
        Meus Endereços
      </h3>
      <p
        className="text-white/80 text-left mt-2 mb-2 text-[16px] leading-[24px]"
        style={{ letterSpacing: "normal", fontFamily: '"Signika Negative", sans-serif' }}
      >
        Rua: Fernando Ferrari, 1002 - Sala 204, Centro, Esteio - RS
        <br /><br />
        Av. Presidente Vargas, 2730, Centro, Esteio - RS
      </p>
    </div>
    <div className="flex flex-col items-start flex-1">
      <FaClock className="text-4xl mb-4" />
      <h3
        className="font-semibold text-left mb-2 text-[24px] leading-[24px]"
        style={{ letterSpacing: "normal", fontFamily: '"Signika Negative", sans-serif' }}
      >
        Meus Horários
      </h3>
      <p
        className="text-white/80 text-left mt-2 mb-2 text-[16px] leading-[24px]"
        style={{ letterSpacing: "normal", fontFamily: '"Signika Negative", sans-serif' }}
      >
        Seg a Sáb: 9h - 17h
        <br /><br />
        Seg a Sáb: 9h - 17h
      </p>
    </div>
  </div>
</div>


          {/* Coluna Direita: Formulário */}
          <div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-[rgba(255,255,255,0.44)] border border-gray-300 rounded p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#F8B642]"
              />
              <input
                type="text"
                placeholder="Nome"
                className="bg-[rgba(255,255,255,0.44)] border border-gray-300 rounded p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#F8B642]"
              />
              <select
                defaultValue=""
                className="bg-[rgba(255,255,255,0.44)] border border-gray-300 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F8B642]"
              >
                <option value="" disabled style={{ color: "white" }}>
                  Selecione o Serviço
                </option>
                <option style={{ color: "black" }}>Terapia Infantil</option>
                <option style={{ color: "black" }}>Terapia Adolescente</option>
                <option style={{ color: "black" }}>Terapia Adulto</option>
              </select>
              <textarea
                placeholder="Digite sua mensagem aqui..."
                rows={4}
                className="bg-[rgba(255,255,255,0.44)] border border-gray-300 rounded p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#F8B642]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#F8B642] to-[#FFA535] text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
