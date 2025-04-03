import { useContext, useEffect, useState } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};

const FloatingElement = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-4 h-4 bg-white/10 rounded-full backdrop-blur-sm"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    style={{ left: `${x}%`, top: `${y}%` }}
  />
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="relative h-screen">
      {/* Enhanced gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-900/50 via-red-900/40 to-amber-800/50 mix-blend-multiply z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]" />
      </motion.div>
      
      {/* Hero background */}
      <motion.div 
        className="relative h-full bg-cover bg-center overflow-hidden"
        style={{ 
          y,
          backgroundImage: "url('/lovable-uploads/pho-bo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Floating elements */}
        <FloatingElement delay={0} x={20} y={30} />
        <FloatingElement delay={0.5} x={80} y={20} />
        <FloatingElement delay={1} x={40} y={70} />
        <FloatingElement delay={1.5} x={70} y={60} />

        {/* Content */}
        <div className="container relative h-full flex flex-col items-center justify-center text-center z-20">
          <motion.div
            className="max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_4px_3px_rgb(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.heroTitle}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgb(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
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
                  className="bg-amber-800/50 text-white border-white hover:bg-amber-700/60 text-lg px-8 py-6 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300"
                >
                  <a href="#menu">{t.viewMenu}</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Wave divider */}
      <motion.div 
        className="absolute -bottom-1 left-0 w-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-amber-50 transition-transform duration-700 hover:scale-105"
          />
        </svg>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/50 rounded-full p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
