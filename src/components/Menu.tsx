<<<<<<< HEAD

import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Card, CardContent } from "@/components/ui/card";
=======
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)

const Menu = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

<<<<<<< HEAD
  const soupDishes = [
    { name: t.phoBo, price: "NT$ 100" },
    { name: t.phoHaiSan, price: "NT$ 100" },
    { name: t.phoThitHeo, price: "NT$ 100" },
    { name: t.bunMangVit, price: "NT$ 100" },
  ];

  const otherDishes = [
    { name: t.comBoXao, price: "NT$ 110" },
    { name: t.comSuon, price: "NT$ 100" },
    { name: t.bunBoXao, price: "NT$ 110" },
    { name: t.bunThitNuong, price: "NT$ 100" },
    { name: t.bunChaLua, price: "NT$ 100" },
    { name: t.thitNuong, price: "NT$ 100" },
    { name: t.thitBoXao, price: "NT$ 120" },
    { name: t.ganBo, price: "NT$ 100" },
    { name: t.chaLua, price: "NT$ 80" },
    { name: t.caPhe, price: "NT$ 50" },
=======
  const dishes = [
    {
      name: t.phoBo,
      description: t.phoBoDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/pho-bo.jpg"
    },
    {
      name: t.phoHaiSan,
      description: t.phoHaiSanDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/pho-hai-san.jpg"
    },
    {
      name: t.bunThitNuong,
      description: t.bunThitNuongDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/bun-thit-nuong.jpg"
    },
    {
      name: t.bunChaLua,
      description: t.bunChaLuaDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/bun-cha-lua.jpg"
    },
    {
      name: t.comBoXao,
      description: t.comBoXaoDesc,
      price: "NT$ 110",
      image: "/lovable-uploads/com-bo-xao.jpg"
    },
    {
      name: t.comSuon,
      description: t.comSuonDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/com-suon.jpg"
    }
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
  ];

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-2">{t.menuTitle}</h2>
          <p className="text-gray-700">{t.menuSubtitle}</p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Food image gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden h-64">
              <img 
                src="/lovable-uploads/9be22191-7659-4d30-ab58-834660c17122.png" 
                alt="Vietnamese food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                alt="Vietnamese food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1576577445504-6af96477db52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" 
                alt="Vietnamese food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Menu items */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-700">{t.soupDishes}</h3>
              <Card className="bg-white/80 backdrop-blur border-none shadow-md">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {soupDishes.map((dish, index) => (
                      <li key={index} className="flex justify-between pb-2 border-b border-gray-200 last:border-0">
                        <span className="font-medium">{dish.name}</span>
                        <span className="text-gray-700">{dish.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">{t.otherDishes}</h3>
              <Card className="bg-white/80 backdrop-blur border-none shadow-md">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {otherDishes.map((dish, index) => (
                      <li key={index} className="flex justify-between pb-2 border-b border-gray-200 last:border-0">
                        <span className="font-medium">{dish.name}</span>
                        <span className="text-gray-700">{dish.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden bg-white/90 hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-white overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${(e.target as HTMLImageElement).src}`);
                    (e.target as HTMLImageElement).src = "/lovable-uploads/menu.png";
                  }}
                />
              </div>
              <CardHeader className="h-[120px]">
                <CardTitle className="text-lg text-red-800">{dish.name}</CardTitle>
                <CardDescription className="text-gray-600 mt-2 line-clamp-3">{dish.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center pt-2">
                <p className="text-lg font-semibold text-red-700">{dish.price}</p>
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white"
                  onClick={scrollToContact}
                >
                  {t.orderNow}
                </Button>
              </CardContent>
            </Card>
          ))}
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
        </div>
      </div>
    </section>
  );
};

export default Menu;
