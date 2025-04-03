import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext, translations } from "@/utils/language";

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-white to-amber-50/30">
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600/0.03)_1px,transparent_0)]" 
        style={{ backgroundSize: '24px 24px' }}
      />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8">
              <h2 className="text-4xl font-bold text-red-800 mb-2 tracking-tight">{t.aboutTitle}</h2>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-amber-500 to-red-500" />
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{t.aboutText}</p>
            <p className="text-gray-600 italic">{t.aboutSubtext}</p>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 md:w-96 overflow-hidden rounded-2xl shadow-xl group transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/lovable-uploads/chef dang.jpg"
                alt="Chef"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
