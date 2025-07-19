import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export const CategoryCard = ({ title, image, onClick }: CategoryCardProps) => {
  const { getCategoryName } = useLanguage();
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-card border-border/50 overflow-hidden group"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
          {getCategoryName(title)}
        </CardTitle>
        <CardDescription className="text-center">
          Click to explore {getCategoryName(title).toLowerCase()}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <p className="text-sm text-muted-foreground">
          20+ items to learn and identify
        </p>
      </CardContent>
    </Card>
  );
};