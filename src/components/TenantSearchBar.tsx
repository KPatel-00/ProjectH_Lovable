
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import TenantSearchBarMobile from "./tenant/TenantSearchBarMobile";
import SearchFiltersBar from "./SearchFiltersBar";
import { useSearchFilters } from "@/hooks/useSearchFilters";

const TenantSearchBar = () => {
  const isMobile = useIsMobile();
  const {
    filters,
    setFilters,
    handleSearch,
  } = useSearchFilters({ submitUrl: "/search" });

  // On mobile: show the expanding search CTA, not the inline bar
  if (isMobile) {
    return <TenantSearchBarMobile />;
  }

  // On desktop, render original inline search filters
  return (
    <SearchFiltersBar
      filters={filters}
      setFilters={setFilters}
      onSubmit={handleSearch}
      showMoveInDate={true}
    />
  );
};

export default TenantSearchBar;

