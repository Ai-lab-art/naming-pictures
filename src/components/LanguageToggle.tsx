import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { value: 'english', label: 'English', short: 'EN' },
    { value: 'nepali', label: 'नेपाली', short: 'नेपाली' },
    { value: 'hindi', label: 'हिन्दी', short: 'हिन्दी' }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-32 gap-2 bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
        <Languages className="h-4 w-4" />
        <SelectValue>{currentLanguage?.short}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-background border-border">
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className="text-foreground hover:bg-muted">
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;