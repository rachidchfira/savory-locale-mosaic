import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Facebook, Phone, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              {t.heroTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed hover:text-white transition-colors cursor-default">
              {t.addressText}
            </p>
            <p className="text-gray-300 mt-3 flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Phone className="h-4 w-4 text-amber-400" />
              +886 4 2224 0272
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-400" />
              {t.openingHours}
            </h3>
            <p className="text-gray-300 mb-2 hover:text-white transition-colors cursor-default">{t.weekdays}</p>
            <p className="text-gray-300 hover:text-white transition-colors cursor-default">{t.weekends}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t.follow}</h3>
            <motion.div 
              className="flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://www.facebook.com/profile.php?id=61573757494399&mibextid=wwXIfr&rdid=YxRAsLOiHjPc6CBo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Twpo7aZK%2F%3Fmibextid%3DwwXIfr#/"
                target="_blank"
                rel="noopener noreferrer" 
                className="group bg-amber-500/10 p-3 rounded-full hover:bg-amber-500/20 transition-colors"
              >
                <Facebook className="h-6 w-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-red-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">{t.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="text-gray-400 text-sm hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              {t.privacyPolicy}
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 text-sm hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              {t.termsOfService}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
