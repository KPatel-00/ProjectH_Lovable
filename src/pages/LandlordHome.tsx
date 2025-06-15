
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useT } from "@/i18n";
import { toast } from "@/hooks/use-toast";
import ErrorBanner from "@/components/ErrorBanner";
import LandlordWelcomeBanner from "@/components/landlord/LandlordWelcomeBanner";
import LandlordQuickStats from "@/components/landlord/LandlordQuickStats";
import LandlordListingsCarousel from "@/components/landlord/LandlordListingsCarousel";
import LandlordApplicationsPreview from "@/components/landlord/LandlordApplicationsPreview";
import LandlordMessagesPreview from "@/components/landlord/LandlordMessagesPreview";
import LandlordPerformanceSummary from "@/components/landlord/LandlordPerformanceSummary";
import LandlordEnhancements from "@/components/landlord/LandlordEnhancements";
import LandlordTrustShortcuts from "@/components/landlord/LandlordTrustShortcuts";
import {
  landlord,
  metrics,
  recentListings,
  recentApplications,
  fakeFetchLandlordData,
} from "@/mocks/landlordMockData";

const LandlordHome = () => {
  const [state, setState] = useState<{
    loading: boolean;
    error: string | null;
    data: null | {
      landlord: typeof landlord;
      metrics: typeof metrics;
      recentListings: typeof recentListings;
      recentApplications: typeof recentApplications;
    }
  }>({ loading: true, error: null, data: null });
  const t = useT();
  const navigate = useNavigate();

  const fetchData = () => {
    setState({ loading: true, error: null, data: null });
    fakeFetchLandlordData()
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => {
        setState({ loading: false, error: err.message || "Unknown error", data: null });
        toast({
          title: t("error") || "Error",
          description: err.message || "Failed to load data.",
        });
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const landlordObj = state.data?.landlord || landlord;
  const quickStats = state.data?.metrics || metrics;
  const listings = state.data?.recentListings || recentListings;
  const applications = state.data?.recentApplications || recentApplications;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 pt-8 pb-14 flex flex-col gap-8">
        {/* --- Welcome Banner & Quick Stats --- */}
        {state.error && (
          <ErrorBanner message={state.error} onRetry={fetchData} className="mt-2" />
        )}
        <div className="flex flex-col lg:flex-row gap-4 animate-fade-in">
          <div className="flex flex-1">
            <LandlordWelcomeBanner
              name={landlordObj.firstName}
              business={landlordObj.businessName}
              verified={landlordObj.verified}
            />
          </div>
          <div className="flex-1 lg:max-w-xs">
            <LandlordQuickStats
              stats={quickStats}
              loading={state.loading}
              onCreateListing={() => navigate("/createlisting")}
            />
          </div>
        </div>

        {/* --- Your Active Listings Carousel/Grid --- */}
        <LandlordListingsCarousel
          listings={listings}
          loading={state.loading}
          onManage={id => navigate(`/landlord/listing/${id}/edit`)}
          onPreview={id => navigate(`/listing/${id}`)}
          onViewAll={() => navigate("/landlord/listings")}
        />

        {/* --- Recent Applications Table/Preview --- */}
        <LandlordApplicationsPreview
          applications={applications}
          loading={state.loading}
          onViewAll={() => navigate("/landlord/dashboard/applications")}
        />

        {/* --- Messages Preview --- */}
        <LandlordMessagesPreview
          messages={[]} // This would use real data/messages
          loading={false}
          onInbox={() => navigate("/landlord/messages")}
        />

        {/* --- Performance Summary (Optional) --- */}
        <LandlordPerformanceSummary
          insights={{
            views: 795,
            messages: 32,
            conversion: 12.9,
            avgDays: 6.7,
          }}
          loading={false}
          onViewDashboard={() => navigate("/landlord/dashboard")}
        />

        {/* --- Recommended Enhancements --- */}
        <LandlordEnhancements
          tips={[
            { tip: "This listing has no floor plan – add one to get 30% more leads", trigger: "Low engagement" },
            { tip: "Tenants are interested – follow up on 3 unread messages", trigger: "Unreplied messages" },
            { tip: "Applications pending approval", trigger: "Apps not yet reviewed" }
          ]}
        />

        {/* --- Trust & Compliance Shortcuts --- */}
        <LandlordTrustShortcuts />
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;

