
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Card, CardContent } from "@/components/ui/card";

const Menu = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
  ];

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-2">{t.menuTitle}</h2>
          <p className="text-gray-700">{t.menuSubtitle}</p>
        </div>

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
        </div>
      </div>
    </section>
  );
};

export default Menu;
