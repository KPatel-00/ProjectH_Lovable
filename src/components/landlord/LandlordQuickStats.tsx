
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Users, Eye } from "lucide-react";

interface QuickStat {
  labelKey: string;
  value: number;
}
interface Props {
  stats: QuickStat[];
  loading?: boolean;
  onCreateListing: () => void;
}
const statIconMap: Record<string, React.ReactNode> = {
  activeListings: <Home className="w-5 h-5 text-blue-700" />,
  applicationsPending: <Users className="w-5 h-5 text-violet-700" />,
  totalViews: <Eye className="w-5 h-5 text-emerald-700" />
};

const labelMap: Record<string, string> = {
  activeListings: "Active Listings",
  applicationsPending: "New Applications This Week",
  totalViews: "Total Views"
};

const LandlordQuickStats: React.FC<Props> = ({ stats, loading, onCreateListing }) => (
  <section className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Quick Stats</div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {stats.map((stat, i) => (
        <div key={stat.labelKey} className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            {statIconMap[stat.labelKey] || <Eye className="w-5 h-5 text-gray-400" />}
            <span className="text-xl font-bold text-gray-900">{stat.value}</span>
          </div>
          <span className="text-sm text-muted-foreground">{labelMap[stat.labelKey] || stat.labelKey}</span>
        </div>
      ))}
    </div>
    <Button className="w-full mt-2" onClick={onCreateListing}>
      Create New Listing
    </Button>
  </section>
);

export default LandlordQuickStats;
