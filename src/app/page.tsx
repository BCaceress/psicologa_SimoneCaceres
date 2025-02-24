import React from "react";
import TopBar from "@/components/TopBar/TopBar";
import NavBar from "@/components/NavBar/NavBar";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F3ED] flex flex-col">
      <TopBar />
      <HeroSection />
      <NavBar />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;