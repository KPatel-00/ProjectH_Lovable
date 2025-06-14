
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";

interface Listing {
  id: number;
  title: string;
  status: string;
  views: number;
  lastUpdated: string;
}
const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700"
};

interface Props {
  listings: Listing[];
  onViewAll: () => void;
}

const RecentListingsCard: React.FC<Props> = ({ listings, onViewAll }) => (
  <section className="bg-card rounded-xl shadow-md p-4 mb-3">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center font-semibold gap-2 text-base">
        <Home className="w-4 h-4 text-blue-600" /> Recent Listings
      </div>
      <button
        onClick={onViewAll}
        className="text-xs px-2 py-1 rounded hover:bg-accent transition-colors font-medium text-muted-foreground"
      >
        View All
      </button>
    </div>
    {listings.length === 0 ? (
      <div className="py-4 text-sm text-muted-foreground text-center">No listings yet.</div>
    ) : (
      <ul className="divide-y divide-border">
        {listings.slice(0, 3).map(listing => (
          <li key={listing.id} className="py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between group">
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-medium truncate max-w-xs block cursor-pointer">{listing.title}</span>
                </TooltipTrigger>
                <TooltipContent>
                  {listing.title}
                </TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge className={`rounded ${statusColor[listing.status]}`}>{listing.status}</Badge>
                <span>Views: <span className="font-semibold">{listing.views}</span></span>
                <span>· Updated {listing.lastUpdated}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default RecentListingsCard;
