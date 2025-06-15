
import React, { useState, useRef, useEffect } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import SearchFiltersBar from "../SearchFiltersBar";

const TenantSearchBarMobile: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  const {
    filters,
    setFilters,
    handleSearch,
  } = useSearchFilters({ submitUrl: "/search" });

  // Focus the first input on expand
  useEffect(() => {
    if (expanded && barRef.current) {
      const input = barRef.current.querySelector('input');
      if (input) (input as HTMLInputElement).focus();
    }
  }, [expanded]);

  // Listen for escape key to collapse
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <div className="relative w-full mb-3">
      {/* Floating Search Button */}
      {!expanded && (
        <button
          className="fixed bottom-7 right-5 p-4 rounded-full bg-primary text-white shadow-lg z-30 flex items-center justify-center animate-scale-in"
          aria-label="Open search"
          onClick={() => setExpanded(true)}
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,.10)' }}
        >
          <SearchIcon className="w-6 h-6" />
        </button>
      )}

      {/* Inline search filter bar */}
      {expanded && (
        <div className="w-full" ref={barRef}>
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="font-semibold text-lg text-foreground">Search</span>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close search"
              className="p-2 rounded hover:bg-accent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <SearchFiltersBar
            filters={filters}
            setFilters={setFilters}
            onSubmit={() => {
              handleSearch();
              setExpanded(false);
            }}
            buttonText="Search"
            showMoveInDate={true}
            className="mb-2"
          />
        </div>
      )}
    </div>
  );
};

export default TenantSearchBarMobile;
