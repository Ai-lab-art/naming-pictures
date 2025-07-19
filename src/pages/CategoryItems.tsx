import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryData } from "@/data/categories";

const CategoryItems = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const decodedCategoryName = decodeURIComponent(categoryName || '');
  const items = categoryData[decodedCategoryName] || [];

  const handleBackToCategories = () => {
    navigate("/categories");
  };

  if (!categoryName || items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Button onClick={handleBackToCategories}>
            Back to Categories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBackToCategories}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Button>
          <h1 className="text-3xl font-bold text-foreground">{decodedCategoryName}</h1>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Placeholder for future image */}
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            {items.length} {decodedCategoryName.toLowerCase()} to learn and identify!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;