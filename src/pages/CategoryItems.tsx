import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryData } from "@/data/categories";
import SoundPlayer from "@/components/SoundPlayer";
import ImageModal from "@/components/ImageModal";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const CategoryItems = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const { t, getCategoryName, language } = useLanguage();
  
  const decodedCategoryName = decodeURIComponent(categoryName || '');
  const items = categoryData[decodedCategoryName] || [];

  const handleBackToCategories = () => {
    navigate("/categories");
  };

  if (!categoryName || items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t('categoryItems.notFound')}</h1>
          <Button onClick={handleBackToCategories}>
            {t('categoryItems.backToCategories')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button and language toggle */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBackToCategories}
              className="gap-2 text-blue-600 border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('categoryItems.backToCategories')}
            </Button>
            <h1 className="text-3xl font-bold text-foreground">{getCategoryName(decodedCategoryName)}</h1>
          </div>
          <LanguageToggle />
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className="hover:shadow-lg transition-shadow bg-gradient-card border-border/50 relative"
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden mb-3 relative">
                  <SoundPlayer itemName={item.names ? item.names[language] || item.name : item.name} category={decodedCategoryName} />
                  {item.image ? (
                    <ImageModal 
                      src={item.image} 
                      alt={item.name}
                      className="rounded-lg"
                    />
                  ) : (
                    <span className="text-muted-foreground text-sm">Image</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-center text-foreground">
                  {item.names ? item.names[language] || item.name : item.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            {items.length} {getCategoryName(decodedCategoryName).toLowerCase()} {t('categoryItems.toLearn')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;