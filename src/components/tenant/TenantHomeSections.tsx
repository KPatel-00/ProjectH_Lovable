
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
      <section className="mb-16 md:mb-20">
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
      <section className="mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Application Statuses */}
          <div>
            {shouldShowLoading ? <TenantStatsSummarySkeleton /> :
              <TenantApplicationStatuses applications={state.data.mockApplications} />
            }
          </div>
          
          {/* Right: Messages Preview */}
          <div>
            {shouldShowLoading ? <TenantMessagesPreviewSkeleton /> :
              <TenantMessagesPreview messages={state.data.mockMessages} />
            }
          </div>
        </div>
      </section>
      
      {/* Saved Listings */}
      <section className="mb-16 md:mb-20">
        {shouldShowLoading ? <TenantSavedListingsSkeleton /> :
          <TenantSavedListings listings={state.data.mockSavedListings} />
        }
      </section>
      
      {/* Recommended Properties */}
      <section className="mb-16 md:mb-20">
        {shouldShowLoading ? <TenantRecommendedSkeleton /> :
          <TenantRecommended listings={state.data.mockRecommended} />
        }
      </section>
      
      {/* Explore Cities */}
      <section className="mb-16 md:mb-20">
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
