
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-amber-100">
              <img
                src="/lovable-uploads/5e5e35d4-02f0-4e8b-a353-d34536e767f1.png"
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
