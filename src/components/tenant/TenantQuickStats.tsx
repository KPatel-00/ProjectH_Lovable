
import React from "react";
import { Bookmark, FileText, Mail } from "lucide-react";

type Props = {
  saved: number;
  applications: number;
  messages: number;
};

const stats = [
  {
    icon: Bookmark,
    label: "SAVED HOMES",
    color: "editorial-stat-accent-1",
  },
  {
    icon: FileText,
    label: "APPLICATIONS",
    color: "editorial-stat-accent-2",
  },
  {
    icon: Mail,
    label: "NEW MESSAGES",
    color: "editorial-stat-accent-3",
  },
];

const TenantQuickStats: React.FC<Props> = ({ saved, applications, messages }) => {
  const values = [saved, applications, messages];
  
  return (
    <div className="editorial-stats-grid">
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className="editorial-stat-card"
        >
          <div className={`editorial-stat-icon ${stat.color}`}>
            <stat.icon className="w-5 h-5" />
          </div>
          <div className="editorial-stat-content">
            <div className="editorial-stat-number">
              {values[index]}
            </div>
            <div className="editorial-stat-label">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TenantQuickStats;
