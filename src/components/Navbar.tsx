
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
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
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
