import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SoundPlayerProps {
  itemName: string;
  category: string;
}

const SoundPlayer = ({ itemName, category }: SoundPlayerProps) => {
  const playSound = () => {
    // Create audio context for generating simple tones
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequency ranges for different categories
    let frequency = 440; // Default A4
    
    if (category === 'Wild Animals' || category === 'Domestic Animals') {
      frequency = 200 + Math.random() * 200; // Lower frequencies for animals
    } else if (category === 'Birds') {
      frequency = 800 + Math.random() * 400; // Higher frequencies for birds
    } else if (category === 'Insects') {
      frequency = 600 + Math.random() * 300; // Mid-high frequencies for insects
    }
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
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