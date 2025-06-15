
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useT } from "@/i18n";

// Hero section redesign: modern grid, bolder text, visual photo
const Hero = () => {
  const navigate = useNavigate();
  const t = useT();

  return (
    <section className="container mx-auto px-3 py-14 flex flex-col md:flex-row items-center gap-16 md:gap-6 min-h-[56vh]">
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 leading-tight tracking-tight drop-shadow-sm">
          Seamless Renting. <span className="text-primary">Modern. Simple. Secure.</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10 font-medium max-w-md">
          Discover, apply, and rent with ease. RentConnect makes the rental process stress-free and transparent for everyone.
        </p>
        <div className="flex gap-4 flex-wrap items-center">
          <Button
            size="lg"
            className="rounded-lg px-8 font-semibold bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
            onClick={() => navigate("/listings")}
          >
            {t("browseListings") || "Browse Listings"}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg px-8 font-semibold border-primary text-primary hover:bg-primary/10"
            onClick={() => navigate("/list-property")}
          >
            {t("listProperty") || "List Property"}
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center animate-scale-in">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80"
          alt="A woman sitting on a bed using a laptop"
          className="rounded-2xl max-w-xs sm:max-w-sm shadow-lg border border-border object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
