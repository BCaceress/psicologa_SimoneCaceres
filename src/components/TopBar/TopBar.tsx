import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div
      className="bg-[#A3B8B4] text-white h-28 flex justify-center items-start"
      style={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "17px",
        lineHeight: "24px",
        textAlign: "center",
        letterSpacing: "normal",
      }}
    >
      <div className="flex gap-8 mt-5">
        {/* Telefone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lg" />
          <span>(+55) 51 98142-8765</span>
        </div>
        {/* E-mail */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lg" />
          <span>psicologasimonecaceres@gmail.com</span>
        </div>
        {/* Localização */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-lg" />
          <span>Esteio, RS</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
