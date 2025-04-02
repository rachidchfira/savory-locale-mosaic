import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Facebook } from "lucide-react";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.heroTitle}</h3>
            <p className="text-gray-300">
              {t.addressText}
            </p>
            <p className="text-gray-300 mt-2">+886 4 2224 0272</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.openingHours}</h3>
            <p className="text-gray-300 mb-1">{t.weekdays}</p>
            <p className="text-gray-300">{t.weekends}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.follow}</h3>
            <div className="flex">
              <a 
                href="https://www.facebook.com/profile.php?id=61573757494399&mibextid=wwXIfr&rdid=YxRAsLOiHjPc6CBo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Twpo7aZK%2F%3Fmibextid%3DwwXIfr#/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-white hover:text-amber-200 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-red-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">{t.copyright}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
              {t.privacyPolicy}
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
              {t.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
