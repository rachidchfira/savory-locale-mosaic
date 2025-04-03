import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext, translations } from "@/utils/language";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || "home";
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-white/50 to-amber-50/50 backdrop-blur-md" />
      <div className="container flex h-28 items-center justify-between relative">
        <div className="flex items-center">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/lovable-uploads/logo5.png" 
              alt="Restaurant Logo" 
              className="h-24 w-auto"
            />
          </motion.a>
        </div>

        <div className="flex flex-row items-center gap-8 overflow-x-auto whitespace-nowrap px-4">
          <motion.a 
            href="#" 
            className={`text-lg font-semibold relative transition-colors duration-300 ${
              activeSection === "home" ? "text-red-700" : "text-gray-800 hover:text-red-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.home}
          </motion.a>
          <motion.a 
            href="#menu" 
            className={`text-lg font-semibold relative transition-colors duration-300 ${
              activeSection === "menu" ? "text-red-700" : "text-gray-800 hover:text-red-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.menu}
          </motion.a>
          <motion.a 
            href="#about" 
            className={`text-lg font-semibold relative transition-colors duration-300 ${
              activeSection === "about" ? "text-red-700" : "text-gray-800 hover:text-red-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.about}
          </motion.a>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
