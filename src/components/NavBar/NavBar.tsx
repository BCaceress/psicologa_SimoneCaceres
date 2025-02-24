import React from "react";

const NavBar: React.FC = () => {
  return (
    <header className="absolute top-16 left-0 right-0 flex justify-center z-10">
      <div
        className="bg-white text-black w-11/12 md:w-2/3 rounded-full flex items-center justify-between py-4 px-8 shadow-lg"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          lineHeight: "16px",
          textAlign: "left",
          letterSpacing: "normal",
        }}
      >
        {/* Logo e Nome */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 mr-3" />
          <span className="font-bold">Simone Caceres</span>
        </div>
        {/* Links de Navegação */}
        <nav className="flex space-x-6 md:space-x-12">
          <a
            href="#home"
            className="text-[#5e667a] transition duration-300 ease-in-out hover:text-[#A3B8B4]"
          >
            Página Inicial
          </a>
          <a
            href="#about"
            className="text-[#5e667a] transition duration-300 ease-in-out hover:text-[#A3B8B4]"
          >
            Sobre Mim
          </a>
          <a
            href="#services"
            className="text-[#5e667a] transition duration-300 ease-in-out hover:text-[#A3B8B4]"
          >
            Especialidades
          </a>
         
          <a
            href="#blog"
            className="text-[#5e667a] transition duration-300 ease-in-out hover:text-[#A3B8B4]"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[#5e667a] transition duration-300 ease-in-out hover:text-[#A3B8B4]"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
