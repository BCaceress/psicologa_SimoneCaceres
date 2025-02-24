"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white bg-opacity-80 shadow-md z-50">
      <div className="flex justify-between items-center">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={50} 
            height={40} 
          />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#about"
                onClick={() => handleSetActive('about')}
                className={`hover:text-[#A3B8B4] ${
                  activeSection === 'about' ? 'text-[#A3B8B4]' : 'text-black'
                }`}
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={() => handleSetActive('services')}
                className={`hover:text-[#A3B8B4] ${
                  activeSection === 'services' ? 'text-[#A3B8B4]' : 'text-black'
                }`}
              >
                Especialidades
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={() => handleSetActive('services')}
                className={`hover:text-[#A3B8B4] ${
                  activeSection === 'services' ? 'text-[#A3B8B4]' : 'text-black'
                }`}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => handleSetActive('contact')}
                className={`hover:text-[#A3B8B4] ${
                  activeSection === 'contact' ? 'text-[#A3B8B4]' : 'text-black'
                }`}
              >
                Contato-me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
