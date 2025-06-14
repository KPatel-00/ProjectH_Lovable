
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Upload, Users } from 'lucide-react';
import { useT } from "@/i18n";

const ListProperty = () => {
  const t = useT();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t("listYourProperty")}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("connectWithTenants")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-background rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("easySetup")}</h3>
              <p className="text-muted-foreground">{t("easySetupDesc")}</p>
            </div>
            <div className="p-6 bg-background rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("qualityTenants")}</h3>
              <p className="text-muted-foreground">{t("qualityTenantsDesc")}</p>
            </div>
            <div className="p-6 bg-background rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("powerfulTools")}</h3>
              <p className="text-muted-foreground">{t("powerfulToolsDesc")}</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <ArrowRight className="w-5 h-5 mr-2" />
            {t("getStartedListProperty")}
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListProperty;
