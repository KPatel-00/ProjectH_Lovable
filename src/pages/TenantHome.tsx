
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useT } from "@/i18n";
import { toast } from "@/hooks/use-toast";
import TenantHomeSections from "@/components/tenant/TenantHomeSections";
import useSkipLinkFocus from "@/hooks/useSkipLinkFocus";
import TenantSearchBar from "@/components/TenantSearchBar";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  mockUser,
  mockQuickStats,
  mockSavedListings,
  mockRecommended,
  mockApplications,
  mockMessages,
  mockCities,
  fakeFetchTenantData,
} from "@/mocks/tenantMockData";

const TenantHome = () => {
  const [state, setState] = useState<{
    loading: boolean;
    error: string | null;
    data: null | any;
  }>({ loading: true, error: null, data: null });
  const t = useT();
  const isMobile = useIsMobile();

  const fetchData = () => {
    setState({ loading: true, error: null, data: null });
    fakeFetchTenantData()
      .then(d => setState({ loading: false, error: null, data: d }))
      .catch(err => {
        setState({ loading: false, error: err.message || "Unknown error", data: null });
        toast({
          title: t("error") || "Error",
          description: err.message || "Failed to load data.",
        });
      });
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // Accessibility: set skip link focus
  useSkipLinkFocus();

  return (
    <>
      <Header />
      {/* Skip Link */}
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-[100] px-4 py-2 bg-white text-primary border border-primary rounded transition-transform -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
        tabIndex={0}
      >
        {t("skipToMainContent") || "Skip to main content"}
      </a>

      {/* Responsive Search Bar: Sticky on desktop/tablet, not sticky on mobile */}
      <div className={`mt-1 mb-4 sm:mb-8 flex px-2 sm:px-6 md:px-12 w-full 
        ${!isMobile ? "sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-border" : ""}`}>
        <TenantSearchBar />
      </div>

      <main
        id="main-content"
        className="min-h-screen bg-background flex flex-col"
        tabIndex={-1}
      >
        <div className="mx-auto w-full max-w-6xl px-1 sm:px-3 md:px-12 py-3 sm:py-8 flex-1 flex flex-col">
          <TenantHomeSections state={state} t={t} fetchData={fetchData} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TenantHome;
