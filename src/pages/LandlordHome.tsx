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
  // Map to default, but use values from metrics if available
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
  // Placeholder for unread messages (could be dynamically fetched later)
  const unreadMessages = 5;

  // Map all quick stats into cards for grid
  const quickStats: QuickStatCard[] = getStatCardData(statsArr, unreadMessages);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-6 pt-8 pb-14 flex flex-col gap-8"
            id="main-content">
        {/* --- Error Banner --- */}
        {state.error && (
          <ErrorBanner message={state.error} onRetry={fetchData} className="mt-2" />
        )}

        {/* --- Welcome Banner --- */}
        <section className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white shadow-md">
          {/* Avatar */}
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-bold text-3xl">
            {landlordObj.firstName?.[0] || "?"}
          </div>
          {/* Name + Badge */}
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold leading-tight text-gray-900">
                Welcome back, {landlordObj.firstName}!
              </span>
              {landlordObj.verified && (
                <Shield className="text-green-600 w-5 h-5" aria-label="Verified" />
              )}
            </div>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground font-semibold">{landlordObj.businessName}</span>
              {landlordObj.verified && (
                <span className="ml-3 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-semibold">Verified</span>
              )}
            </div>
          </div>
        </section>

        {/* --- Quick Stats & CTA Grid --- */}
        <section className="flex flex-col md:flex-row gap-4">
          {/* Stats Cards Grid */}
          <div className="flex-1 bg-white rounded-2xl shadow-md p-5 flex flex-col">
            <div className="text-xs font-bold text-muted-foreground mb-5">Quick Overview</div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
              {quickStats.map(stat =>
                <div
                  key={stat.key}
                  className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border hover:shadow transition"
                >
                  <div className="text-2xl">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-gray-900">{state.loading ? "--" : stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* CTAs Panel */}
          <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md p-5 min-w-[220px]">
            <div className="flex flex-col gap-4">
              <Button className="w-full" size="lg" onClick={() => navigate("/createlisting")}>
                + Create New Listing
              </Button>
              <Button className="w-full" size="lg" variant="outline"
                      onClick={() => navigate("/landlord/dashboard")}>
                Open Dashboard
              </Button>
            </div>
          </div>
        </section>

        {/* --- Existing homepage sections remain below: Listings, Applications, Messages, etc --- */}
        {/* --- Your Active Listings Carousel/Grid --- */}
        <LandlordListingsCarousel
          listings={state.data?.recentListings || recentListings}
          loading={state.loading}
          onManage={id => navigate(`/landlord/listing/${id}/edit`)}
          onPreview={id => navigate(`/listing/${id}`)}
          onViewAll={() => navigate("/landlord/listings")}
        />

        {/* --- Recent Applications Table/Preview --- */}
        <LandlordApplicationsPreview
          applications={state.data?.recentApplications || recentApplications}
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
