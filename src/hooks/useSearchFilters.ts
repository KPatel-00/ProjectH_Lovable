
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

interface SearchFilterState {
  location: string;
  propertyType: string;
  moveInDate: string;
  [key: string]: any; // for future extensibility 
}

const defaultFilters = {
  location: "",
  propertyType: "",
  moveInDate: "",
};

interface UseSearchFiltersOptions {
  initialFilters?: Partial<SearchFilterState>;
  submitUrl?: string; // e.g. '/search' or '/listings'
  includeMoveInDate?: boolean;
}

export function useSearchFilters(opts?: UseSearchFiltersOptions) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // Read initial filters from URL if present, else use defaults
  const initial: SearchFilterState = {
    ...defaultFilters,
    location: searchParams.get('location') || opts?.initialFilters?.location || "",
    propertyType: searchParams.get('propertyType') || opts?.initialFilters?.propertyType || "",
    moveInDate: searchParams.get('moveInDate') || opts?.initialFilters?.moveInDate || "",
  };

  const [filters, setFilters] = useState<SearchFilterState>(initial);

  const updateFilters = (updates: Partial<SearchFilterState>) => {
    setFilters(f => ({
      ...f,
      ...updates,
    }));
  };

  // Form submit/search button handler
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    if (filters.propertyType) params.set("propertyType", filters.propertyType);
    if (opts?.includeMoveInDate !== false && filters.moveInDate) params.set("moveInDate", filters.moveInDate);

    // Route to the intended page with updated params
    navigate(`${opts?.submitUrl || '/search'}?${params.toString()}`);
  };

  // Determine if any filter is in use
  const isFiltering = !!(
    filters.location ||
    filters.propertyType ||
    (opts?.includeMoveInDate !== false && filters.moveInDate)
  );

  const handleReset = () => {
    setFilters(defaultFilters);
    setSearchParams({});
  };

  return {
    filters,
    setFilters: updateFilters,
    handleSearch,
    isFiltering,
    handleReset,
    searchParams,
  }
}
