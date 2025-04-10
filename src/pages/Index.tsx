
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden"
      >
        {/* Enhanced decorative elements */}
        <div className="absolute -left-20 top-1/3 w-64 h-64 bg-gradient-to-br from-red-600/10 to-amber-500/10 rounded-full blur-lg pointer-events-none"/>
        <div className="absolute -right-20 bottom-1/3 w-72 h-72 bg-gradient-to-br from-amber-500/10 to-red-600/10 rounded-full blur-lg pointer-events-none"/>
        <div className="absolute left-1/4 top-1/2 w-32 h-32 bg-gradient-to-br from-red-800/5 to-amber-600/5 rounded-full blur-md pointer-events-none"/>
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </motion.div>
  );
};

export default Index;
