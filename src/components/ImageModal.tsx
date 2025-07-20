import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ZoomIn } from "lucide-react";
import { useState } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageModal = ({ src, alt, className }: ImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${alt}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer">
          <img 
            src={src} 
            alt={alt}
            className={`w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105 ${className}`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="absolute bottom-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <div className="relative">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="absolute bottom-4 right-4 gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;