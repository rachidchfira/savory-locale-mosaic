import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="relative">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 to-red-900/60 z-10" />
      
      {/* Hero background - updated to ensure full image display */}
      <div 
        className="relative h-[85vh] bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/pho-bo.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container relative h-full flex flex-col items-center justify-center text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-red-700 hover:bg-red-800 text-lg px-8 py-6"
                  onClick={scrollToContact}
                >
                  {t.reserveTable}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-amber-800/50 text-white border-white hover:bg-amber-700 text-lg px-8 py-6"
                >
                  <a href="#menu">{t.viewMenu}</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Improved wave divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-amber-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
