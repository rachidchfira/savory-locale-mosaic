
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
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          <div className="flex items-center">
            <span className={language === "en" ? "font-bold" : ""}>English</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("tw")}>
          <div className="flex items-center">
            <span className={language === "tw" ? "font-bold" : ""}>繁體中文</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("vi")}>
          <div className="flex items-center">
            <span className={language === "vi" ? "font-bold" : ""}>Tiếng Việt</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
