import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext, translations } from "@/utils/language";
import LanguageSwitcher from "./LanguageSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu as MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      
      timeoutId = window.setTimeout(() => {
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
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
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
      <div className={`container flex items-center justify-between relative ${isMobile ? 'h-20' : 'h-28'}`}>
        <div className="flex items-center">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/logo5.png" 
              alt="Restaurant Logo" 
              className={`${isMobile ? 'h-16 w-auto' : 'h-24 w-auto'} object-contain`}
            />
          </motion.a>
        </div>

        <div className="flex-1 flex justify-end items-center">
          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav"
                >
                  <MenuIcon className="h-6 w-6" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]" role="dialog" aria-label="Navigation menu">
                <div className="flex flex-col gap-6 pt-6">
                  <motion.a 
                    href="#" 
                    className={`text-lg font-semibold relative transition-colors duration-300 ${
                      activeSection === "home" ? "text-red-700" : "text-gray-800 hover:text-red-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t.home}
                  </motion.a>
                  <motion.a 
                    href="#menu" 
                    className={`text-lg font-semibold relative transition-colors duration-300 ${
                      activeSection === "menu" ? "text-red-700" : "text-gray-800 hover:text-red-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t.menu}
                  </motion.a>
                  <motion.a 
                    href="#about" 
                    className={`text-lg font-semibold relative transition-colors duration-300 ${
                      activeSection === "about" ? "text-red-700" : "text-gray-800 hover:text-red-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t.about}
                  </motion.a>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
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
          )}
          
          <div className="flex items-center gap-4 ml-6">
            <LanguageSwitcher />
          </div>
          
          {isMobile && isOpen && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
              onClick={() => setIsOpen(false)} 
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
