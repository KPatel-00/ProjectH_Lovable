
import React from "react";
import { Home, Mail, Eye } from "lucide-react";

const statIcons: Record<string, React.ReactNode> = {
  "Active Listings": <Home className="text-blue-600 w-6 h-6" />,
  "Applications Pending": <Mail className="text-violet-600 w-6 h-6" />,
  "Total Views (30d)": <Eye className="text-emerald-600 w-6 h-6" />
};

interface Stat {
  label: string;
  value: number;
}
interface Props {
  stats: Stat[];
}

const StatCards: React.FC<Props> = ({ stats }) => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="flex items-center gap-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow px-4 py-3"
      >
        {statIcons[stat.label]}
        <div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs text-muted-foreground truncate max-w-[100px]" title={stat.label}>
            {stat.label}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default StatCards;
