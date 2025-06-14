
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useT } from "@/i18n";

const Index = () => {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero t={t} />
        {/* <Features /> removed as requested */}
        <FAQ t={t} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
