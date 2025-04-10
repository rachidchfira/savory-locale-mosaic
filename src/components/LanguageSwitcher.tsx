import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext, Language } from "@/utils/language";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const onLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex space-x-2">
      <Button 
        size="sm"
        variant={language === 'en' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('en')}
        className={`text-sm px-3 py-1 ${
          language === 'en' 
            ? 'bg-red-700 hover:bg-red-800 text-white' 
            : 'text-red-700 hover:text-red-800'
        }`}
      >
        EN
      </Button>
      <Button 
        size="sm"
        variant={language === 'zhTW' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('zhTW')}
        className={`text-sm px-3 py-1 ${
          language === 'zhTW' 
            ? 'bg-red-700 hover:bg-red-800 text-white' 
            : 'text-red-700 hover:text-red-800'
        }`}
      >
        中
      </Button>
      <Button 
        size="sm"
        variant={language === 'vi' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('vi')}
        className={`text-sm px-3 py-1 ${
          language === 'vi' 
            ? 'bg-red-700 hover:bg-red-800 text-white' 
            : 'text-red-700 hover:text-red-800'
        }`}
      >
        VI
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
