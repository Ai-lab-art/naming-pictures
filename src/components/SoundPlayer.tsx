import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SoundPlayerProps {
  itemName: string;
  category: string;
}

const SoundPlayer = ({ itemName, category }: SoundPlayerProps) => {
  const playSound = () => {
    // Create audio context for generating realistic animal sounds
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create different sound patterns based on category and animal
    let soundPattern = [];
    
    if (category === 'Wild Animals') {
      if (itemName.toLowerCase().includes('lion')) {
        soundPattern = [{ freq: 150, duration: 0.8 }, { freq: 120, duration: 0.6 }]; // Roar
      } else if (itemName.toLowerCase().includes('elephant')) {
        soundPattern = [{ freq: 80, duration: 1.2 }]; // Trumpet
      } else if (itemName.toLowerCase().includes('bear')) {
        soundPattern = [{ freq: 180, duration: 0.7 }]; // Growl
      } else {
        soundPattern = [{ freq: 200 + Math.random() * 150, duration: 0.6 }];
      }
    } else if (category === 'Domestic Animals') {
      if (itemName.toLowerCase().includes('dog')) {
        soundPattern = [{ freq: 400, duration: 0.2 }, { freq: 300, duration: 0.3 }]; // Bark
      } else if (itemName.toLowerCase().includes('cat')) {
        soundPattern = [{ freq: 500, duration: 0.4 }]; // Meow
      } else if (itemName.toLowerCase().includes('cow')) {
        soundPattern = [{ freq: 150, duration: 0.8 }]; // Moo
      } else {
        soundPattern = [{ freq: 250 + Math.random() * 200, duration: 0.5 }];
      }
    } else if (category === 'Birds') {
      if (itemName.toLowerCase().includes('crow') || itemName.toLowerCase().includes('raven')) {
        soundPattern = [{ freq: 600, duration: 0.3 }]; // Caw
      } else if (itemName.toLowerCase().includes('owl')) {
        soundPattern = [{ freq: 400, duration: 0.5 }]; // Hoot
      } else {
        soundPattern = [{ freq: 800 + Math.random() * 600, duration: 0.3 }]; // Chirp
      }
    } else if (category === 'Insects') {
      if (itemName.toLowerCase().includes('bee') || itemName.toLowerCase().includes('wasp')) {
        soundPattern = [{ freq: 1200, duration: 0.4 }]; // Buzz
      } else if (itemName.toLowerCase().includes('cricket')) {
        soundPattern = [{ freq: 3000, duration: 0.2 }, { freq: 2800, duration: 0.2 }]; // Chirp
      } else {
        soundPattern = [{ freq: 1000 + Math.random() * 800, duration: 0.3 }];
      }
    }
    
    // Play the sound pattern
    soundPattern.forEach((sound, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = sound.freq;
      oscillator.type = 'sine';
      
      const startTime = audioContext.currentTime + (index * 0.1);
      const endTime = startTime + sound.duration;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);
      
      oscillator.start(startTime);
      oscillator.stop(endTime);
    });
    
    console.log(`Playing realistic sound for ${itemName} (${category})`);
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