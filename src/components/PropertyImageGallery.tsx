
import React, { useState } from "react";
import { Image } from "lucide-react";

type Props = {
  images: string[];
};

const PropertyImageGallery: React.FC<Props> = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center mb-3 relative bg-muted rounded-xl h-72 sm:h-96 overflow-hidden">
        {images[activeIdx] ? (
          <img
            src={images[activeIdx]}
            alt={`Property image ${activeIdx + 1}`}
            className="object-cover w-full h-full transition-all duration-300 rounded-xl"
            loading="eager"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full text-muted-foreground">
            <Image className="w-10 h-10 mb-2" />
            <div>No image</div>
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-center">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            aria-label={`Preview image ${idx + 1}`}
            className={`transition-all border-2 rounded-lg overflow-hidden w-16 h-16 sm:w-20 sm:h-20 hover:scale-105 ${
              activeIdx === idx
                ? "border-primary ring-2 ring-primary"
                : "border-transparent"
            }`}
            type="button"
          >
            <img
              src={img}
              alt={`Image ${idx + 1}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyImageGallery;
