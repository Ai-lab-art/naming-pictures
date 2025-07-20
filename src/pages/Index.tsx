import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, BookOpen, Star, Share2, Facebook, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

// Import hero and category images
import heroCover from "@/assets/learning-hero-cover.jpg";
import lionImg from "@/assets/lion.jpg";
import dogImg from "@/assets/dog.jpg";
import parrotImg from "@/assets/parrot.jpg";
import fruitMixImg from "@/assets/fruit-mix.jpg";
import butterflyImg from "@/assets/butterfly.jpg";
import flowerGardenImg from "@/assets/flower-garden.jpg";
import seaLifeImg from "@/assets/sea-life.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { t, getCategoryName } = useLanguage();

  const handleStartLearning = () => {
    navigate("/categories");
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this amazing Picture Learning App!";
    
    let shareUrl = "";
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'messenger':
        shareUrl = `https://www.messenger.com/t/?link=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const categoryShowcase = [
    { name: "Wild Animals", image: lionImg, description: t('category.wildAnimals') },
    { name: "Domestic Animals", image: dogImg, description: t('category.domesticAnimals') },
    { name: "Birds", image: parrotImg, description: t('category.birds') },
    { name: "Fruits", image: fruitMixImg, description: t('category.fruits') },
    { name: "Insects", image: butterflyImg, description: t('category.insects') },
    { name: "Flowers", image: flowerGardenImg, description: t('category.flowers') },
    { name: "Sea Animals", image: seaLifeImg, description: t('category.seaAnimals') },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Developer Credit */}
      <div className="text-center py-4 bg-background/10 backdrop-blur-sm">
        <p className="text-sm text-muted-foreground">
          {t('home.developerCredit')} <span className="font-semibold text-foreground">Hom Bahadur Thapa</span>
        </p>
      </div>

      {/* Hero Cover Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        {/* Language Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <LanguageToggle />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            {t('home.title')}
            <span className="block text-primary mt-2 animate-fade-in">{t('home.subtitle')}</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
            {t('home.description')}
          </p>
          
          <Button
            variant="hero"
            size="xl"
            onClick={handleStartLearning}
            className="gap-3 text-2xl px-16 py-8 hover-scale animate-scale-in"
          >
            <Play className="h-8 w-8" />
            {t('home.startLearning')}
          </Button>
        </div>
      </section>

      {/* Social Sharing Section */}
      <section className="text-center mb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleShare('facebook')}
              className="gap-2 hover-scale"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
              {t('common.facebook')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleShare('twitter')}
              className="gap-2 hover-scale"
            >
              <Share2 className="h-5 w-5 text-blue-400" />
              {t('common.twitter')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleShare('whatsapp')}
              className="gap-2 hover-scale"
            >
              <MessageCircle className="h-5 w-5 text-green-500" />
              {t('common.whatsapp')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleShare('messenger')}
              className="gap-2 hover-scale"
            >
              <MessageCircle className="h-5 w-5 text-blue-500" />
              {t('common.messenger')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
