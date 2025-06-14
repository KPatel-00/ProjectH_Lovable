
import React from "react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import SearchFiltersBar from "./SearchFiltersBar";

const TenantSearchBar = () => {
  const {
    filters,
    setFilters,
    handleSearch,
  } = useSearchFilters({ submitUrl: "/search" });

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
