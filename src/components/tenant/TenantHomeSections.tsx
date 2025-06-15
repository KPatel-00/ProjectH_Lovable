
import React from "react";
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
import ErrorBanner from "@/components/ErrorBanner";

type Props = {
  state: {
    loading: boolean;
    error: string | null;
    data: any | null;
  };
  t: (key: string) => string;
  fetchData: () => void;
};

const TenantHomeSections: React.FC<Props> = ({ state, t, fetchData }) => {
  const shouldShowLoading = state.loading || !state.data;

  return (
    <div className="w-full">
      {/* Sticky Search Bar */}
      <TenantSearchBarSticky />

      {/* Error Banner */}
      {state.error && (
        <ErrorBanner message={state.error} onRetry={fetchData} className="mt-6" />
      )}
      
      {/* Welcome Banner with integrated stats */}
      <section className="mb-10 md:mb-14">
        {shouldShowLoading ? <TenantWelcomeBannerSkeleton /> :
          <TenantWelcomeBanner 
            firstName={state.data.mockUser.firstName}
            stats={{
              saved: state.data.mockQuickStats.saved,
              applications: state.data.mockQuickStats.applications,
              messages: state.data.mockQuickStats.messages
            }}
          />
        }
      </section>
      
      {/* Split Layout: Applications & Messages */}
      <section className="mb-12 md:mb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Application Statuses (Card Block) */}
          <div className="card-accent p-0 pb-4 shadow-refined-lg border border-border rounded-2xl bg-white">
            <div className="p-7 pb-4 border-b border-muted">
              <h2 className="text-lg font-mono font-light tracking-widest text-foreground mb-0 uppercase">
                Recent Application Statuses
              </h2>
            </div>
            <div className="p-5 pt-4">
              {shouldShowLoading ? <TenantStatsSummarySkeleton /> :
                <TenantApplicationStatuses applications={state.data.mockApplications} />
              }
            </div>
          </div>
          
          {/* Right: Messages Preview (Card Block) */}
          <div className="card-accent p-0 pb-4 shadow-refined-lg border border-border rounded-2xl bg-white">
            <div className="p-7 pb-4 border-b border-muted">
              <h2 className="text-lg font-mono font-light tracking-widest text-foreground mb-0 uppercase">
                Messages from Landlords
              </h2>
            </div>
            <div className="p-5 pt-4">
              {shouldShowLoading ? <TenantMessagesPreviewSkeleton /> :
                <TenantMessagesPreview messages={state.data.mockMessages} />
              }
            </div>
          </div>
        </div>
      </section>
      
      {/* Saved Listings */}
      <section className="mb-12 md:mb-16">
        {shouldShowLoading ? <TenantSavedListingsSkeleton /> :
          <TenantSavedListings listings={state.data.mockSavedListings} />
        }
      </section>
      
      {/* Recommended Properties */}
      <section className="mb-12 md:mb-16">
        {shouldShowLoading ? <TenantRecommendedSkeleton /> :
          <TenantRecommended listings={state.data.mockRecommended} />
        }
      </section>
      
      {/* Explore Cities */}
      <section className="mb-12 md:mb-16">
        {shouldShowLoading ? <TenantExploreCitiesSkeleton /> :
          <TenantExploreCities cities={state.data.mockCities} />
        }
      </section>
      
      {/* Trust & Support */}
      <section className="mb-8">
        {shouldShowLoading ? <TenantTrustSupportSkeleton /> :
          <TenantTrustSupport />
        }
      </section>
    </div>
  );
};

export default TenantHomeSections;

