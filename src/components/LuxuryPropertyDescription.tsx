
import React from "react";

type Props = {
  description: string;
  furnishing: string;
};

const LuxuryPropertyDescription: React.FC<Props> = ({ description, furnishing }) => {
  return (
    <div className="py-16 px-4 lg:px-12 bg-muted/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="editorial-headline text-2xl lg:text-3xl mb-8">
          About This Property
        </h2>
        
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full">
            <span className="editorial-caption">{furnishing}</span>
          </div>
        </div>

        <p className="editorial-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LuxuryPropertyDescription;
