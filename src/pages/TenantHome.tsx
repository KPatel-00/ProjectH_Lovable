
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TenantSearchBarSticky from "@/components/tenant/TenantSearchBarSticky";
import TenantWelcomeBanner from "@/components/tenant/TenantWelcomeBanner";
import TenantWelcomeBannerSkeleton from "@/components/tenant/TenantWelcomeBannerSkeleton";
import TenantQuickStats from "@/components/tenant/TenantQuickStats";
import TenantQuickStatsSkeleton from "@/components/tenant/TenantQuickStatsSkeleton";
import TenantSavedListings from "@/components/tenant/TenantSavedListings";
import TenantSavedListingsSkeleton from "@/components/tenant/TenantSavedListingsSkeleton";
import TenantRecommended from "@/components/tenant/TenantRecommended";
import TenantRecommendedSkeleton from "@/components/tenant/TenantRecommendedSkeleton";
import TenantApplicationStatuses from "@/components/TenantApplicationStatuses";
import TenantStatsSummarySkeleton from "@/components/tenant/TenantStatsSummarySkeleton";
import TenantMessagesPreview from "@/components/tenant/TenantMessagesPreview";
import TenantMessagesPreviewSkeleton from "@/components/tenant/TenantMessagesPreviewSkeleton";
import TenantExploreCities from "@/components/tenant/TenantExploreCities";
import TenantExploreCitiesSkeleton from "@/components/tenant/TenantExploreCitiesSkeleton";
import TenantTrustSupport from "@/components/tenant/TenantTrustSupport";
import TenantTrustSupportSkeleton from "@/components/tenant/TenantTrustSupportSkeleton";

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

const TenantHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 flex flex-col">
        <div className="container mx-auto max-w-5xl px-2 py-4 sm:py-8 flex-1 flex flex-col gap-6">
          <TenantSearchBarSticky />

          {loading ? <TenantWelcomeBannerSkeleton /> :
            <TenantWelcomeBanner
              firstName={mockUser.firstName}
              subtitle="Ready to find your new home? Let’s get started."
              profileComplete={mockUser.profileComplete}
            />
          }
          {loading ? <TenantQuickStatsSkeleton /> :
            <TenantQuickStats {...mockQuickStats} />
          }
          {loading ? <TenantSavedListingsSkeleton /> :
            <TenantSavedListings listings={mockSavedListings} />
          }
          {loading ? <TenantRecommendedSkeleton /> :
            <TenantRecommended listings={mockRecommended} />
          }
          {loading ? <TenantStatsSummarySkeleton /> :
            <TenantApplicationStatuses applications={mockApplications} />
          }
          {loading ? <TenantMessagesPreviewSkeleton /> :
            <TenantMessagesPreview messages={mockMessages} />
          }
          {loading ? <TenantExploreCitiesSkeleton /> :
            <TenantExploreCities cities={mockCities} />
          }
          {loading ? <TenantTrustSupportSkeleton /> :
            <TenantTrustSupport />
          }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TenantHome;
