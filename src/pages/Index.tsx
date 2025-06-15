
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import PopularCitiesSection from '@/components/PopularCitiesSection';
import FeaturedPropertiesSection from '@/components/FeaturedPropertiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useT } from "@/i18n";

const Index = () => {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <PopularCitiesSection />
        <FeaturedPropertiesSection />
        <TestimonialsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
