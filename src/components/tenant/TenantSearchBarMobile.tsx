
import React, { useState, useRef, useEffect } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import SearchFiltersBar from "../SearchFiltersBar";

// Expanding mobile search bar component
const TenantSearchBarMobile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  const {
    filters,
    setFilters,
    handleSearch,
  } = useSearchFilters({ submitUrl: "/search" });

  // Focus the first input on open
  useEffect(() => {
    if (open && barRef.current) {
      const input = barRef.current.querySelector('input');
      if (input) (input as HTMLInputElement).focus();
    }
  }, [open]);

  // Listen for escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative z-30 w-full">
      {/* Search Icon Button */}
      {!open && (
        <button
          className="fixed bottom-7 right-6 p-4 rounded-full bg-primary text-white shadow-lg z-40 flex items-center justify-center animate-scale-in"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,.10)' }}
          aria-label="Open Search"
          onClick={() => setOpen(true)}
        >
          <SearchIcon className="w-6 h-6" />
        </button>
      )}

      {/* Sliding Bar overlay */}
      <div
        className={`
          fixed left-0 top-0 w-full bg-white border-b border-border shadow-lg
          transition-transform duration-300 z-50
          ${open ? "translate-y-0" : "-translate-y-[120%]"}
        `}
        style={{ willChange: "transform" }}
      >
        <div ref={barRef} className="max-w-lg mx-auto px-4 pt-4 pb-3">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-lg text-foreground">Search</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close Search"
              className="p-2 rounded hover:bg-accent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <SearchFiltersBar
            filters={filters}
            setFilters={setFilters}
            onSubmit={() => { handleSearch(); setOpen(false); }}
            buttonText="Search"
            showMoveInDate={true}
          />
        </div>
      </div>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default TenantSearchBarMobile;
