
import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SavedSearch = {
  title: string;
  id: number;
};

type Props = {
  savedSearches: SavedSearch[];
};

const TenantSavedSearches: React.FC<Props> = ({ savedSearches }) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Saved & Recent Searches</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/profile/saved-searches")}>
          View All
        </Button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {savedSearches.map((search) => (
          <div
            key={search.id}
            className="min-w-[190px] bg-accent rounded-xl border border-border shadow cursor-pointer hover:scale-105 transition-transform px-4 py-3 flex gap-2 items-center"
            onClick={() => navigate(`/search?searchId=${search.id}`)}
          >
            <Bookmark className="w-4 h-4 shrink-0 text-primary" />
            <span className="truncate">{search.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenantSavedSearches;
