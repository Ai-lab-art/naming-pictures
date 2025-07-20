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

  // Only show speaker for animals, birds, and insects
  const showSpeaker = ['Wild Animals', 'Domestic Animals', 'Birds', 'Insects'].includes(category);
  
  if (!showSpeaker) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={playSound}
      className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background/90"
    >
      <Volume2 className="h-4 w-4" />
    </Button>
  );
};

export default SoundPlayer;