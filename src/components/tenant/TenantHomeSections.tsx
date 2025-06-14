
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
  return (
    <>
      <TenantSearchBarSticky />

      {state.error && (
        <ErrorBanner message={state.error} onRetry={fetchData} className="mt-2" />
      )}
      {state.loading ? <TenantWelcomeBannerSkeleton /> :
        <TenantWelcomeBanner firstName={state.data.mockUser.firstName} />
      }
      {state.loading ? <TenantQuickStatsSkeleton /> :
        <TenantQuickStats
          saved={state.data.mockQuickStats.saved}
          applications={state.data.mockQuickStats.applications}
          messages={state.data.mockQuickStats.messages}
        />
      }
      {state.loading ? <TenantSavedListingsSkeleton /> :
        <TenantSavedListings listings={state.data.mockSavedListings} />
      }
      {state.loading ? <TenantRecommendedSkeleton /> :
        <TenantRecommended listings={state.data.mockRecommended} />
      }
      {state.loading ? <TenantStatsSummarySkeleton /> :
        <TenantApplicationStatuses applications={state.data.mockApplications} />
      }
      {state.loading ? <TenantMessagesPreviewSkeleton /> :
        <TenantMessagesPreview messages={state.data.mockMessages} />
      }
      {state.loading ? <TenantExploreCitiesSkeleton /> :
        <TenantExploreCities cities={state.data.mockCities} />
      }
      {state.loading ? <TenantTrustSupportSkeleton /> :
        <TenantTrustSupport />
      }
    </>
  );
};

export default TenantHomeSections;
