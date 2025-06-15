
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
    <div className="editorial-layout">
      <TenantSearchBarSticky />

      {state.error && (
        <ErrorBanner message={state.error} onRetry={fetchData} className="mt-2" />
      )}
      
      {/* Editorial spacing section */}
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantWelcomeBannerSkeleton /> :
          <TenantWelcomeBanner firstName={state.data.mockUser.firstName} />
        }
      </div>
      
      {/* Quick stats with editorial margins */}
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantQuickStatsSkeleton /> :
          <TenantQuickStats
            saved={state.data.mockQuickStats.saved}
            applications={state.data.mockQuickStats.applications}
            messages={state.data.mockQuickStats.messages}
          />
        }
      </div>
      
      {/* Editorial divider */}
      <div className="editorial-divider" />
      
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantSavedListingsSkeleton /> :
          <TenantSavedListings listings={state.data.mockSavedListings} />
        }
      </div>
      
      <div className="editorial-divider" />
      
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantRecommendedSkeleton /> :
          <TenantRecommended listings={state.data.mockRecommended} />
        }
      </div>
      
      <div className="editorial-divider" />
      
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantStatsSummarySkeleton /> :
          <TenantApplicationStatuses applications={state.data.mockApplications} />
        }
      </div>
      
      <div className="editorial-divider" />
      
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantMessagesPreviewSkeleton /> :
          <TenantMessagesPreview messages={state.data.mockMessages} />
        }
      </div>
      
      <div className="editorial-divider" />
      
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantExploreCitiesSkeleton /> :
          <TenantExploreCities cities={state.data.mockCities} />
        }
      </div>
      
      <div className="editorial-divider" />
      
      <div className="editorial-section-spacing">
        {shouldShowLoading ? <TenantTrustSupportSkeleton /> :
          <TenantTrustSupport />
        }
      </div>
    </div>
  );
};

export default TenantHomeSections;
