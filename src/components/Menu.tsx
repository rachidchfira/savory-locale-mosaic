import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <section id="menu" className="py-20 relative overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600/0.05)_1px,transparent_0)]"
        style={{ backgroundSize: '24px 24px' }}
        animate={{
          backgroundPosition: ['0px 0px', '24px 24px'],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
      <div className="container relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold text-red-800 mb-3 tracking-tight">{t.menuTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">{t.menuSubtitle}</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
            >
              <Card className="group overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-500 border border-amber-100/50 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <motion.img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${(e.target as HTMLImageElement).src}`);
                      (e.target as HTMLImageElement).src = "/lovable-uploads/menu.png";
                    }}
                  />
                </div>
                <CardHeader className="h-[120px] bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-sm">
                  <CardTitle className="text-lg font-bold text-red-800 tracking-tight">{dish.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2 line-clamp-3 leading-relaxed">{dish.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center pt-2 bg-gradient-to-b from-white/80 to-white/90 backdrop-blur-sm">
                  <p className="text-lg font-bold text-red-700">{dish.price}</p>
                  <Button 
                    variant="default" 
                    className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    {t.orderNow}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
