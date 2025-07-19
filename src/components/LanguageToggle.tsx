import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState<'english' | 'nepali'>('english');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'nepali' : 'english');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
    >
      <Languages className="h-4 w-4" />
      {language === 'english' ? 'EN' : 'नेपाली'}
    </Button>
  );
};

export default LanguageToggle;