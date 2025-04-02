
import { useContext } from "react";
import { LanguageContext, Language } from "@/utils/language";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
=======
        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
          <Globe className="h-7 w-7" />
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          <div className="flex items-center">
<<<<<<< HEAD
            <span className={language === "en" ? "font-bold" : ""}>English</span>
=======
            <span className={`text-base ${language === "en" ? "font-bold" : ""}`}>English</span>
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("tw")}>
          <div className="flex items-center">
<<<<<<< HEAD
            <span className={language === "tw" ? "font-bold" : ""}>繁體中文</span>
=======
            <span className={`text-base ${language === "tw" ? "font-bold" : ""}`}>繁體中文</span>
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("vi")}>
          <div className="flex items-center">
<<<<<<< HEAD
            <span className={language === "vi" ? "font-bold" : ""}>Tiếng Việt</span>
=======
            <span className={`text-base ${language === "vi" ? "font-bold" : ""}`}>Tiếng Việt</span>
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
