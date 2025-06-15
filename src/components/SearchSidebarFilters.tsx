
import React from "react";
import PremiumFiltersPanel from "./PremiumFiltersPanel";

type Props = {
  filters: any;
  setFilters: (f: any) => void;
};

const SearchSidebarFilters: React.FC<Props> = ({ filters, setFilters }) => {
  return (
    <aside className="hidden lg:block w-72 shrink-0 pr-6">
      <div className="sticky top-28">
        <PremiumFiltersPanel
          filters={filters}
          setFilters={setFilters}
          className="shadow-sm"
        />
      </div>
    </aside>
  );
};

export default SearchSidebarFilters;
