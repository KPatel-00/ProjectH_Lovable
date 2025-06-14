
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

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
  showHeader?: boolean;
  className?: string;
}

const RecentListingsCard: React.FC<Props> = ({
  listings,
  showHeader = true,
  className = "",
}) => (
  <div className={`px-5 pb-2 ${className}`}>
    {showHeader && (
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold gap-2 text-base">Recent Listings</span>
        <button className="text-xs px-2 py-1 rounded hover:bg-accent transition-colors font-medium text-primary">
          View All
        </button>
      </div>
    )}
    {listings.length === 0 ? (
      <div className="py-4 text-sm text-muted-foreground text-center">No listings yet.</div>
    ) : (
      <ul className="space-y-2">
        {listings.slice(0, 3).map(listing => (
          <li
            key={listing.id}
            className="bg-muted rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between group shadow-sm hover:shadow-md transition-shadow duration-150"
          >
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-medium truncate max-w-xs block cursor-pointer hover:underline">{listing.title}</span>
                </TooltipTrigger>
                <TooltipContent>{listing.title}</TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-2 text-xs mt-1 text-muted-foreground">
                <Badge className={`rounded ${statusColor[listing.status]}`}>{listing.status}</Badge>
                <span>Views: <span className="font-semibold">{listing.views}</span></span>
                <span>· Updated {listing.lastUpdated}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default RecentListingsCard;
