import { Button } from "@/components/ui/button";
import { Play, BookOpen, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/categories");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Naming Picture
              <span className="block text-primary mt-2">Learning App</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover and learn to identify amazing creatures, beautiful nature, and delicious fruits 
              through interactive picture naming games!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Learn by Categories</h3>
              <p className="text-muted-foreground">
                Explore 7 different categories from wild animals to beautiful flowers
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card">
              <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real Pictures</h3>
              <p className="text-muted-foreground">
                High-quality, real images to help you learn and remember better
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card">
              <Play className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Interactive Fun</h3>
              <p className="text-muted-foreground">
                Engaging and educational experience for learners of all ages
              </p>
            </div>
          </div>

          {/* Start Button */}
          <Button
            variant="hero"
            size="xl"
            onClick={handleStartLearning}
            className="gap-3 text-xl px-12 py-6"
          >
            <Play className="h-6 w-6" />
            Start Learning
          </Button>

          {/* Categories Preview */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Available Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              {["Wild Animals", "Domestic Animals", "Birds", "Fruits", "Insects", "Flowers", "Sea Animals"].map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
