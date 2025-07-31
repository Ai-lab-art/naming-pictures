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
      <SelectTrigger className="w-32 gap-2 bg-blue-500/20 backdrop-blur-sm border-blue-400/30 text-blue-100 hover:bg-blue-500/30">
        <Languages className="h-4 w-4 text-blue-300" />
        <SelectValue className="text-blue-100">{currentLanguage?.short}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white border-blue-200 z-50">
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700">
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;