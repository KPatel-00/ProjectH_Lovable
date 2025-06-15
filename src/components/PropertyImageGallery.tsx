
import React, { useState } from "react";
import { Image } from "lucide-react";

type Props = {
  images: string[];
};

const PropertyImageGallery: React.FC<Props> = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="editorial-image-gallery">
      {/* Main Hero Image - Editorial Style */}
      <div className="relative bg-gradient-to-br from-muted/10 to-muted/30 rounded-3xl overflow-hidden mb-8 group">
        <div className="aspect-[4/3] lg:aspect-[16/10] relative">
          {images[activeIdx] ? (
            <div className="relative w-full h-full">
              {/* Soft gradient overlay for editorial depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent z-10" />
              
              <img
                src={images[activeIdx]}
                alt={`Property showcase ${activeIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                style={{
                  filter: 'contrast(1.05) saturate(0.95) brightness(1.02)',
                  imageRendering: 'crisp-edges'
                }}
                loading="eager"
              />
              
              {/* Editorial frame effect */}
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-3xl pointer-events-none" />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full text-muted-foreground bg-gradient-to-br from-muted/20 to-muted/40">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/40">
                <Image className="w-12 h-12 mb-4 mx-auto opacity-60" />
                <div className="editorial-caption text-center">No image available</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery - Studio Style */}
      {images.length > 1 && (
        <div className="flex gap-4 justify-start overflow-x-auto scrollbar-hide pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`group relative flex-shrink-0 transition-all duration-300 hover:scale-105 ${
                activeIdx === idx
                  ? "ring-2 ring-primary ring-offset-4 ring-offset-background shadow-lg"
                  : "ring-1 ring-border/20 hover:ring-border/40 shadow-sm hover:shadow-md"
              }`}
              type="button"
            >
              <div className="aspect-[4/3] w-20 lg:w-24 overflow-hidden rounded-xl bg-gradient-to-br from-muted/10 to-muted/20">
                <img
                  src={img}
                  alt={`Preview ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter: 'contrast(1.03) saturate(0.9) brightness(1.01)',
                    imageRendering: 'crisp-edges'
                  }}
                  loading="lazy"
                />
                
                {/* Subtle overlay for inactive thumbnails */}
                {activeIdx !== idx && (
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all duration-300" />
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyImageGallery;
