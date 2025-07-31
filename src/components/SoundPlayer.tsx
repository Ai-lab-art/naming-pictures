import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface SoundPlayerProps {
  itemName: string;
  category: string;
}

const SoundPlayer = ({ itemName, category }: SoundPlayerProps) => {
  const { language } = useLanguage();

  const playSound = () => {
    // Use text-to-speech to pronounce the animal name
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(itemName);
      
      // Set language based on current selection
      if (language === 'nepali') {
        utterance.lang = 'ne-NP';
      } else if (language === 'hindi') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-US';
      }
      
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      window.speechSynthesis.speak(utterance);
      console.log(`Pronouncing: ${itemName} in ${language}`);
    } else {
      console.log('Speech synthesis not supported');
    }
  };

  // Show speaker for all items now

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={playSound}
      className="absolute top-1 right-1 h-8 w-8 p-0 bg-blue-500/90 hover:bg-blue-600 text-white z-10 shadow-lg rounded-full"
    >
      <Volume2 className="h-4 w-4" />
    </Button>
  );
};

export default SoundPlayer;