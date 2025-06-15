
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EditorialFeatured from '@/components/EditorialFeatured';
import EditorialBenefits from '@/components/EditorialBenefits';
import EditorialStorytellingSection from '@/components/EditorialStorytellingSection';
import StatsSection from '@/components/StatsSection';
import PopularCitiesSection from '@/components/PopularCitiesSection';
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
        <EditorialFeatured />
        <EditorialBenefits />
        <EditorialStorytellingSection />
        <StatsSection />
        <PopularCitiesSection />
        <TestimonialsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
