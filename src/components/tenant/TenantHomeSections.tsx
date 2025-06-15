
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

/**
 * Encapsulates all content sections on TenantHome (except for header/footer).
 */
const TenantHomeSections: React.FC<Props> = ({ state, t, fetchData }) => {
  // Helper to check if we should show loading state
  const shouldShowLoading = state.loading || !state.data;

  return (
    <>
      <TenantSearchBarSticky />

      {state.error && (
        <ErrorBanner message={state.error} onRetry={fetchData} className="mt-2" />
      )}
      
      {shouldShowLoading ? <TenantWelcomeBannerSkeleton /> :
        <TenantWelcomeBanner firstName={state.data.mockUser.firstName} />
      }
      
      {shouldShowLoading ? <TenantQuickStatsSkeleton /> :
        <TenantQuickStats
          saved={state.data.mockQuickStats.saved}
          applications={state.data.mockQuickStats.applications}
          messages={state.data.mockQuickStats.messages}
        />
      }
      
      {shouldShowLoading ? <TenantSavedListingsSkeleton /> :
        <TenantSavedListings listings={state.data.mockSavedListings} />
      }
      
      {shouldShowLoading ? <TenantRecommendedSkeleton /> :
        <TenantRecommended listings={state.data.mockRecommended} />
      }
      
      {shouldShowLoading ? <TenantStatsSummarySkeleton /> :
        <TenantApplicationStatuses applications={state.data.mockApplications} />
      }
      
      {shouldShowLoading ? <TenantMessagesPreviewSkeleton /> :
        <TenantMessagesPreview messages={state.data.mockMessages} />
      }
      
      {shouldShowLoading ? <TenantExploreCitiesSkeleton /> :
        <TenantExploreCities cities={state.data.mockCities} />
      }
      
      {shouldShowLoading ? <TenantTrustSupportSkeleton /> :
        <TenantTrustSupport />
      }
    </>
  );
};

export default TenantHomeSections;
