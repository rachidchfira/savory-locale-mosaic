import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext, translations } from "@/utils/language";

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-white to-amber-50/30">
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600/0.05)_1px,transparent_0)]" 
        style={{ backgroundSize: '24px 24px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-amber-50/30" />
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
              <h2 className="text-4xl font-bold text-red-800 mb-4 tracking-tight relative inline-block">
                {t.aboutTitle}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </h2>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-amber-500 to-red-500" />
            </div>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{t.aboutText}</p>
            <p className="text-gray-600 italic leading-relaxed">{t.aboutSubtext}</p>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 md:w-96 overflow-hidden rounded-2xl shadow-xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-amber-50 to-white p-2">
              <img
                src={encodeURI("/images/chef dang.jpg")}
                alt="Chef"
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 rounded-xl"
                loading="lazy"
                style={{ filter: 'contrast(1.05) brightness(1.02)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
