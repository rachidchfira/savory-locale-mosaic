import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReviewsSection from "./ui/reviews-section";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};

const Menu = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const dishes = [
    {
      id: "pho-bo",
      name: t.phoBo,
      description: t.phoBoDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/pho-bo.jpg"
    },
    {
      id: "pho-hai-san",
      name: t.phoHaiSan,
      description: t.phoHaiSanDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/pho-hai-san.jpg"
    },
    {
      id: "bun-thit-nuong",
      name: t.bunThitNuong,
      description: t.bunThitNuongDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/bun-thit-nuong.jpg"
    },
    {
      id: "bun-cha-lua",
      name: t.bunChaLua,
      description: t.bunChaLuaDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/bun-cha-lua.jpg"
    },
    {
      id: "com-bo-xao",
      name: t.comBoXao,
      description: t.comBoXaoDesc,
      price: "NT$ 110",
      image: "/lovable-uploads/com-bo-xao.jpg"
    },
    {
      id: "com-suon",
      name: t.comSuon,
      description: t.comSuonDesc,
      price: "NT$ 100",
      image: "/lovable-uploads/com-suon.jpg"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-2">{t.menuTitle}</h2>
          <p className="text-gray-700">{t.menuSubtitle}</p>
        </div>

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
              <div className="px-6 pb-4">
                <ReviewsSection dishId={dish.id} dishName={dish.name} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
