
import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { translations, LanguageContext, Language } from "@/utils/language";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-amber-50">
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default Index;
