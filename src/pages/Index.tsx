import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, BookOpen, Star, Share2, Facebook, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

// Import hero and category images
import heroCover from "@/assets/hero-cover.jpg";
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            {t('home.whyChoose')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-card shadow-card hover-scale">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t('home.learnByCategories')}</h3>
              <p className="text-muted-foreground text-lg">
                {t('home.learnByCategoriesDesc')}
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-card shadow-card hover-scale">
              <Star className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t('home.realPictures')}</h3>
              <p className="text-muted-foreground text-lg">
                {t('home.realPicturesDesc')}
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-card shadow-card hover-scale">
              <Play className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t('home.interactiveFun')}</h3>
              <p className="text-muted-foreground text-lg">
                {t('home.interactiveFunDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Category Showcase */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            {t('home.exploreCategories')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryShowcase.map((category, index) => (
              <Card 
                key={category.name} 
                className="overflow-hidden hover-scale cursor-pointer group bg-gradient-card border-border/50"
                onClick={handleStartLearning}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{getCategoryName(category.name)}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Sharing Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {t('home.shareExperience')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('home.shareDesc')}
          </p>
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
        </section>
      </div>
    </div>
  );
};

export default Index;
