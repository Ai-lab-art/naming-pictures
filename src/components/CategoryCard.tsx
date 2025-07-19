import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export const CategoryCard = ({ title, image, onClick }: CategoryCardProps) => {
  return (
    <Button
      variant="category"
      className="h-auto p-0 flex-col overflow-hidden group"
      onClick={onClick}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 w-full">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </Button>
  );
};