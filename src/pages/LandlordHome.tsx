import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandlordWelcomeBanner from "@/components/landlord/LandlordWelcomeBanner";
import LandlordWelcomeBannerSkeleton from "@/components/landlord/LandlordWelcomeBannerSkeleton";
import StatCards from "@/components/landlord/StatCards";
import StatCardsSkeleton from "@/components/landlord/StatCardsSkeleton";
import RecentListingsCard from "@/components/landlord/RecentListingsCard";
import RecentListingsCardSkeleton from "@/components/landlord/RecentListingsCardSkeleton";
import RecentApplicationsCard from "@/components/landlord/RecentApplicationsCard";
import RecentApplicationsCardSkeleton from "@/components/landlord/RecentApplicationsCardSkeleton";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useT } from "@/i18n";
import ErrorBanner from "@/components/ErrorBanner";
import { toast } from "@/hooks/use-toast";

// DEMO DATA
const landlord = {
  firstName: "Alex",
  businessName: "Prime Rentals",
  verified: true,
  uid: "landlord-demo-1"
};

const metrics = [
  { labelKey: "activeListings", value: 4 },
  { labelKey: "applicationsPending", value: 2 },
  { labelKey: "totalViews", value: 129 }
];

const recentListings = [
  { id: 1, title: "Modern 2BR Apartment", status: "Active", views: 73, lastUpdated: "2024-06-09" },
  { id: 2, title: "Cozy Studio Center", status: "Pending", views: 36, lastUpdated: "2024-06-05" },
  { id: 3, title: "Family Home", status: "Inactive", views: 20, lastUpdated: "2024-06-02" }
];

const recentApplications = [
  { id: 1, applicantName: "Emma Becker", listingTitle: "Modern 2BR Apartment", date: "2024-06-10" },
  { id: 2, applicantName: "Lucas Schulz", listingTitle: "Cozy Studio Center", date: "2024-06-08" },
  { id: 3, applicantName: "Nina Graf", listingTitle: "Family Home", date: "2024-06-06" }
];

const FAKE_API_FAIL_RATE = 0.22; // 22% simulate error

const fakeFetchLandlordData = async () => {
  await new Promise(res => setTimeout(res, 1100));
  if (Math.random() < FAKE_API_FAIL_RATE) throw new Error("Failed to fetch landlord dashboard. Please try again.");
  return {
    landlord,
    metrics,
    recentListings,
    recentApplications
  };
};

const LandlordHome = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-3 md:px-0 pt-12 pb-20 flex flex-col">
        {state.error && (
          <ErrorBanner message={state.error} onRetry={fetchData} className="mt-2" />
        )}
        {/* Header */}
        {state.loading
          ? <LandlordWelcomeBannerSkeleton />
          : state.data && <LandlordWelcomeBanner
              name={state.data.landlord.firstName}
              business={state.data.landlord.businessName}
              verified={state.data.landlord.verified}
            />
        }

        {/* Stat Cards */}
        <div className="mb-8">
          {state.loading
            ? <StatCardsSkeleton />
            : state.data && <StatCards stats={state.data.metrics.map(m => ({ label: t(m.labelKey), value: m.value }))} />
          }
        </div>

        {/* Recent Listings */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-semibold text-gray-900">{t("recentListings")}</h2>
            <button
              className="text-sm font-medium text-primary hover:underline transition"
              onClick={() => navigate("/landlord/dashboard/mylistings")}
            >
              {t("viewAll")}
            </button>
          </div>
          {state.loading
            ? <RecentListingsCardSkeleton />
            : state.data && <RecentListingsCard
                listings={state.data.recentListings}
                showHeader={false}
                className="border-none shadow-none bg-transparent"
              />
          }
        </section>

        {/* Recent Applications */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-semibold text-gray-900">{t("recentApplications")}</h2>
            <button
              className="text-sm font-medium text-primary hover:underline transition"
              onClick={() => navigate("/landlord/dashboard/applications")}
            >
              {t("viewAll")}
            </button>
          </div>
          {state.loading
            ? <RecentApplicationsCardSkeleton />
            : state.data && <RecentApplicationsCard
                applications={state.data.recentApplications}
                showHeader={false}
                className="border-none shadow-none bg-transparent"
              />
          }
        </section>

        {/* CTA: Open Full Dashboard */}
        <div className="sticky bottom-0 z-20 w-full flex items-center justify-center">
          <Button
            className="w-full md:w-fit mx-auto text-base md:text-lg font-semibold py-4 rounded-xl shadow-lg bg-primary text-primary-foreground hover:scale-105 hover:shadow-xl transition-all duration-150 px-8 flex items-center gap-2 animate-scale-in"
            onClick={() => navigate("/landlord/dashboard")}
          >
            <LayoutDashboard className="w-6 h-6" />
            <span>{t("openDashboard")}</span>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;
