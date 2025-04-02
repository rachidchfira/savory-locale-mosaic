import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-red-800 mb-6">{t.aboutTitle}</h2>
            <p className="text-gray-700 mb-4">{t.aboutText}</p>
            <p className="text-gray-700">{t.aboutSubtext}</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 md:w-80 overflow-hidden border-4 border-amber-100 rounded-lg">
              <img
                src="/lovable-uploads/chef dang.jpg"
                alt="Chef"
                className="w-full h-auto object-contain"
              />
            </div>
=======
            <p className="text-gray-700">{t.aboutSubtext}</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 md:w-80 overflow-hidden border-4 border-amber-100 rounded-lg">
              <img
                src="/lovable-uploads/chef dang.jpg"
                alt="Chef"
                className="w-full h-auto object-contain"
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
