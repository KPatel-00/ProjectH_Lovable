
import React from "react";
import { Home, Mail, Star } from "lucide-react";

const stats = [
  { label: "Saved Listings", value: 8, icon: <Star className="text-yellow-500 w-7 h-7" /> },
  { label: "Applications Sent", value: 3, icon: <Mail className="text-blue-500 w-7 h-7" /> },
  { label: "Recommendations", value: 5, icon: <Home className="text-emerald-600 w-7 h-7" /> },
];

const TenantStatsSummary: React.FC = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full animate-fade-in mb-8">
    {stats.map(stat => (
      <div
        key={stat.label}
        className="flex items-center gap-4 bg-white rounded-xl shadow-md group hover:shadow-lg transition-all duration-150 px-6 py-6"
        tabIndex={0}
        aria-label={stat.label}
      >
        <div className="rounded-xl p-3 flex items-center justify-center bg-muted shrink-0">
          {stat.icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-950">{stat.value}</div>
          <div className="text-sm text-muted-foreground truncate max-w-[110px] mt-1" title={stat.label}>
            {stat.label}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default TenantStatsSummary;
