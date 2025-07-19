import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import category images
import wildAnimalsImg from "@/assets/wild-animals.jpg";
import domesticAnimalsImg from "@/assets/domestic-animals.jpg";
import birdsImg from "@/assets/birds.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import insectsImg from "@/assets/insects.jpg";
import flowersImg from "@/assets/flowers.jpg";
import seaAnimalsImg from "@/assets/sea-animals.jpg";

const categories = [
  { title: "Wild Animals", image: wildAnimalsImg },
  { title: "Domestic Animals", image: domesticAnimalsImg },
  { title: "Birds", image: birdsImg },
  { title: "Fruits", image: fruitsImg },
  { title: "Insects", image: insectsImg },
  { title: "Flowers", image: flowersImg },
  { title: "Sea Animals", image: seaAnimalsImg },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle: string) => {
    // Future: Navigate to individual category pages
    console.log(`Selected category: ${categoryTitle}`);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBackToHome}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Choose a Category</h1>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Choose a category to start learning and naming pictures!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;