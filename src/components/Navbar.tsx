
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
<<<<<<< HEAD
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-semibold text-red-700">
            Món Canh
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-red-700 transition-colors">
            {t.home}
          </a>
          <a href="#menu" className="text-sm font-medium hover:text-red-700 transition-colors">
            {t.menu}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-red-700 transition-colors">
            {t.about}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-red-700 transition-colors">
            {t.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
=======
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm relative">
      <div className="container flex h-28 items-center justify-between relative">
        <div className="flex items-center">
          <a href="#">
            <img 
              src="/lovable-uploads/logo5.png" 
              alt="Restaurant Logo" 
              className="h-24 w-auto"
            />
          </a>
        </div>

        <div className="flex flex-row items-center gap-6 overflow-x-auto whitespace-nowrap px-2">
          <a href="#" className="text-lg font-semibold text-gray-800 hover:text-red-700 transition-colors">
            {t.home}
          </a>
          <a href="#menu" className="text-lg font-semibold text-gray-800 hover:text-red-700 transition-colors">
            {t.menu}
          </a>
          <a href="#about" className="text-lg font-semibold text-gray-800 hover:text-red-700 transition-colors">
            {t.about}
          </a>
        </div>

        <div className="flex items-center gap-4 ml-4">
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
