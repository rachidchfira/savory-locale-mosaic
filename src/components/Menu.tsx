import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LanguageContext, translations } from "@/utils/language";
import menuImages from "@/assets/menu-images";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};

interface MenuItem {
  img: string;
  title: string;
  desc: string;
  price: number;
}

const Menu: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const menuItems: MenuItem[] = [
    { img: menuImages.phoBo, title: t.phoBo, desc: t.phoBoDesc, price: 100 },
    { img: menuImages.phoHaiSan, title: t.phoHaiSan, desc: t.phoHaiSanDesc, price: 100 },
    { img: menuImages.bunChaLua, title: t.bunChaLua, desc: t.bunChaLuaDesc, price: 100 },
    { img: menuImages.comBoXao, title: t.comBoXao, desc: t.comBoXaoDesc, price: 100 },
    { img: menuImages.comSuon, title: t.comSuon, desc: t.comSuonDesc, price: 100 },
    { img: menuImages.bunThitNuong, title: t.bunThitNuong, desc: t.bunThitNuongDesc, price: 100 },
    { img: menuImages.thitSuonChien, title: t.thitSuonChien, desc: t.thitSuonChienDesc, price: 100 },
    { img: menuImages.chaLua, title: t.chaLua, desc: t.chaLuaDesc, price: 80 },
    { img: menuImages.goiCuon, title: t.goiCuon, desc: t.goiCuonDesc, price: 110 },
    { img: menuImages.bunMangVit, title: t.bunMangVit, desc: t.bunMangVitDesc, price: 100 },
    { img: menuImages.vietnameseCoffee, title: t.caPheSua, desc: t.caPheSuaDesc, price: 50 }
  ];

  return (
    <section id="menu" className="py-20 relative overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-800 mb-3 tracking-tight">{t.menuTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-4" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">{t.menuSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/80 backdrop-blur-sm flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-amber-50/50">
                <div className="absolute inset-0 bg-amber-100 animate-pulse" />
                <img 
                  src={item.img}
                  alt={item.title}
                  loading="eager"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 relative z-10"
                  style={{ 
                    opacity: 0, 
                    transition: 'opacity 0.3s ease-in',
                    objectPosition: item.title === t.bunMangVit ? 'center 30%' : 'center'
                  }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = "1";
                    if (target.parentElement) {
                      const loadingDiv = target.parentElement.querySelector('div');
                      if (loadingDiv) loadingDiv.style.display = "none";
                    }
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error(`Failed to load image for ${item.title}`);
                    if (target.parentElement) {
                      const loadingDiv = target.parentElement.querySelector('div');
                      if (loadingDiv) loadingDiv.style.display = "none";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardHeader className="space-y-2 flex-grow">
                <CardTitle className="text-xl font-bold text-red-800">{item.title}</CardTitle>
                <CardDescription className="text-gray-600">{item.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-lg font-bold text-red-700">NT$ {item.price}</p>
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={scrollToContact}
                >
                  {t.orderNow}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
