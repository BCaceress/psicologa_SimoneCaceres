import React from "react";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp 
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#A3B8B4] text-white py-8"
      style={{
        fontFamily: '"Signika Negative", sans-serif',
        fontSize: "19.2px",
        lineHeight: "28.8px",
        textAlign: "start",
        letterSpacing: "normal",
      }}
    >
      <div className="max-w-7xl mx-auto px-16">
        {/* Parte superior do rodapé */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Localização */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Esteio, RS</span>
          </div>
          {/* Telefone */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>(+55) 51 98142-8765</span>
          </div>
          {/* E-mail */}
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>psicologasimonecaceres@gmail.com</span>
          </div>
          {/* Redes Sociais */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/simone-caceres-59070b79/" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://www.facebook.com/psicaceres" 
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.instagram.com/psicocaceres" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/5551981428765" 
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Linha pontilhada que se repete até quase toda a largura */}
        <div className="my-4 flex justify-center">
          <div
            className="w-full h-4"
            style={{
              backgroundImage: 'url("/svg/pontilhados.svg")',
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              filter: "brightness(0) invert(1)",
              //filter: "invert(0.48)",
            }}
          />
        </div>

        {/* Texto de direitos autorais centralizado */}
        <p className="text-center">
        &copy; {new Date().getFullYear()} BC Design • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
