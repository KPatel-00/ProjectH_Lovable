
import React from "react";
import { Home, Mail, Eye } from "lucide-react";

const statMeta = {
  "Active Listings": {
    icon: <Home className="text-blue-600 w-6 h-6" />,
  },
  "Applications Pending": {
    icon: <Mail className="text-violet-600 w-6 h-6" />,
  },
  "Total Views (30d)": {
    icon: <Eye className="text-emerald-600 w-6 h-6" />
  }
};

interface Stat {
  label: string;
  value: number;
}
interface Props {
  stats: Stat[];
}

const StatCards: React.FC<Props> = ({ stats }) => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="flex items-center gap-4 bg-white rounded-xl shadow-md group hover:shadow-lg transition-all duration-150 px-5 py-4"
        tabIndex={0}
        aria-label={stat.label}
      >
        <div className="rounded-full p-2 flex items-center justify-center bg-muted">
          {statMeta[stat.label]?.icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div
            className="text-sm text-muted-foreground truncate max-w-[110px]"
            title={stat.label}
          >
            {stat.label}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default StatCards;
