
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useT } from "@/i18n";
import { toast } from "@/hooks/use-toast";
import ErrorBanner from "@/components/ErrorBanner";
import { landlord, metrics, recentListings, recentApplications, fakeFetchLandlordData } from "@/mocks/landlordMockData";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import LandlordListingsCarousel from "@/components/landlord/LandlordListingsCarousel";
import LandlordApplicationsPreview from "@/components/landlord/LandlordApplicationsPreview";
import LandlordMessagesPreview from "@/components/landlord/LandlordMessagesPreview";
import LandlordPerformanceSummary from "@/components/landlord/LandlordPerformanceSummary";
import LandlordEnhancements from "@/components/landlord/LandlordEnhancements";
import LandlordTrustShortcuts from "@/components/landlord/LandlordTrustShortcuts";
import LandlordWelcomeBanner from "@/components/landlord/LandlordWelcomeBanner";
import LandlordQuickStatsGrid from "@/components/landlord/LandlordQuickStatsGrid";
import LandlordCTAPanel from "@/components/landlord/LandlordCTAPanel";

// Types for metrics/stat cards
const ALL_STAT_KEYS = [
  { key: "activeListings", label: "Active Listings", icon: "🏘" },
  { key: "applicationsPending", label: "New Applications", icon: "📥" },
  { key: "totalViews", label: "Views This Week", icon: "👁" },
  { key: "unreadMessages", label: "Unread Messages", icon: "💬" }
] as const;

type StatKey = typeof ALL_STAT_KEYS[number]["key"];

interface QuickStatCard {
  key: StatKey;
  label: string;
  value: number | string;
  icon: string;
}

const LANDLORD_STAT_DEFAULTS: QuickStatCard[] = [
  { key: "activeListings", label: "Active Listings", value: 0, icon: "🏘" },
  { key: "applicationsPending", label: "New Applications", value: 0, icon: "📥" },
  { key: "totalViews", label: "Views This Week", value: 0, icon: "👁" },
  { key: "unreadMessages", label: "Unread Messages", value: 0, icon: "💬" }
];

const getStatCardData = (
  stats: { labelKey: string; value: number }[] | null | undefined,
  unreadMessages: number
): QuickStatCard[] => {
  return LANDLORD_STAT_DEFAULTS.map((stat) => {
    if (stat.key === "unreadMessages") {
      return { ...stat, value: unreadMessages ?? 0 };
    }
    const match = stats?.find((s) => s.labelKey === stat.key);
    return { ...stat, value: match ? match.value : stat.value };
  });
};

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
  const statsArr = state.data?.metrics || metrics;
  const unreadMessages = 5;
  const quickStats: QuickStatCard[] = getStatCardData(statsArr, unreadMessages);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16"
            id="main-content">
        
        {/* Error Banner */}
        {state.error && (
          <ErrorBanner message={state.error} onRetry={fetchData} className="mb-6" />
        )}

        {/* Welcome Banner */}
        <LandlordWelcomeBanner
          name={landlordObj.firstName}
          business={landlordObj.businessName}
          verified={landlordObj.verified}
        />

        {/* Quick Stats & CTAs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <LandlordQuickStatsGrid stats={quickStats} loading={state.loading} />
          </div>
          <div className="lg:col-span-1">
            <LandlordCTAPanel onCreateListing={() => navigate("/createlisting")} onOpenDashboard={() => navigate("/landlord/dashboard")} />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Your Active Listings */}
          <LandlordListingsCarousel
            listings={state.data?.recentListings || recentListings}
            loading={state.loading}
            onManage={id => navigate(`/landlord/listing/${id}/edit`)}
            onPreview={id => navigate(`/listing/${id}`)}
            onViewAll={() => navigate("/landlord/mylistings")}
          />

          {/* Recent Applications & Messages */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <LandlordApplicationsPreview
              applications={state.data?.recentApplications || recentApplications}
              loading={state.loading}
              onViewAll={() => navigate("/landlord/dashboard/applications")}
            />
            
            <LandlordMessagesPreview
              messages={[]}
              loading={false}
              onInbox={() => navigate("/landlord/inbox")}
            />
          </div>

          {/* Performance Summary */}
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

          {/* Enhancements & Trust */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <LandlordEnhancements
              tips={[
                { tip: "This listing has no floor plan – add one to get 30% more leads", trigger: "Low engagement" },
                { tip: "Tenants are interested – follow up on 3 unread messages", trigger: "Unreplied messages" },
                { tip: "Applications pending approval", trigger: "Apps not yet reviewed" }
              ]}
            />
            
            <LandlordTrustShortcuts />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;
