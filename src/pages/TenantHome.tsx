import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useT } from "@/i18n";
import { toast } from "@/hooks/use-toast";
import TenantHomeSections from "@/components/tenant/TenantHomeSections";
import useSkipLinkFocus from "@/hooks/useSkipLinkFocus";

// Mock Data
const mockUser = {
  firstName: "Anna",
  profileComplete: false,
};
const mockQuickStats = { saved: 3, applications: 1, messages: 2 };

const mockSavedListings = [
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Charming Apartment in Mitte",
    location: "Berlin, Mitte",
    price: "€1,200 / month",
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "Family Home in Prenzlauer Berg",
    location: "Berlin, Prenzlauer Berg",
    price: "€2,500 / month",
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
    title: "Studio with City View in Kreuzberg",
    location: "Berlin, Kreuzberg",
    price: "€950 / month",
  },
];

const mockRecommended = [
  {
    id: 201,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
    title: "Penthouse with Terrace in Schöneberg",
    location: "Berlin, Schöneberg",
    price: "€1,500 / month"
  },
  {
    id: 202,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    title: "Spacious Loft in Friedrichshain",
    location: "Berlin, Friedrichshain",
    price: "€1,800 / month"
  },
  {
    id: 203,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
    title: "Townhouse in Charlottenburg",
    location: "Berlin, Charlottenburg",
    price: "€3,200 / month"
  }
];

const mockApplications = [
  {
    id: 301,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Apartment in Mitte",
    appliedDate: "15.07.2024",
    progress: 60,
    status: "Under Review",
  },
  {
    id: 302,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "House in Prenzlauer Berg",
    appliedDate: "20.07.2024",
    progress: 20,
    status: "Documents Submitted",
  },
];

const mockMessages = [
  {
    id: 1,
    landlordName: "Mr. Schneider",
    landlordAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Is next Tuesday ok for a viewing?",
    timestamp: "2h ago"
  },
  {
    id: 2,
    landlordName: "Mrs. Müller",
    landlordAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "Please upload proof of income.",
    timestamp: "1d ago"
  }
];
const mockCities = [
  {
    name: "Berlin",
    subtitle: "Apartments & WGs",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Hamburg",
    subtitle: "Waterfront Living",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Frankfurt",
    subtitle: "Finance Hub",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
  }
];

const FAKE_API_FAIL_RATE_TENANT = 0.17;

const fakeFetchTenantData = async () => {
  await new Promise(res => setTimeout(res, 900));
  if (Math.random() < FAKE_API_FAIL_RATE_TENANT) throw new Error("Failed to load tenant dashboard. Please try again.");
  return {
    mockUser,
    mockQuickStats,
    mockSavedListings,
    mockRecommended,
    mockApplications,
    mockMessages,
    mockCities,
  };
};

const TenantHome = () => {
  const [state, setState] = useState<{
    loading: boolean;
    error: string | null;
    data: null | any;
  }>({ loading: true, error: null, data: null });
  const t = useT();

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
      <main id="main-content" className="min-h-screen bg-muted/30 flex flex-col" tabIndex={-1}>
        <div className="container mx-auto max-w-5xl px-2 py-4 sm:py-8 flex-1 flex flex-col gap-6">
          <TenantHomeSections state={state} t={t} fetchData={fetchData} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TenantHome;
