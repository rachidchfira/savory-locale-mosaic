
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-red-900/70 z-10" />
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container relative h-full flex flex-col items-center justify-center text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Món Canh
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-700 hover:bg-red-800">
              {t.reserveTable}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              <a href="#menu">{t.viewMenu}</a>
            </Button>
          </div>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-10 md:h-20"
          data-name="Layer 1"
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
