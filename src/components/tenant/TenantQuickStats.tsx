
import React from "react";
import { Bookmark, FileText, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

type Props = {
  saved: number;
  applications: number;
  messages: number;
};

const stats = [
  {
    icon: Bookmark,
    label: "Saved Listings",
    color: "bg-gradient-to-br from-pink-300/60 to-pink-500/80 text-white",
    iconBg: "bg-pink-400/90",
  },
  {
    icon: FileText,
    label: "Applications in Progress",
    color: "bg-gradient-to-br from-blue-300/70 to-blue-500/80 text-white",
    iconBg: "bg-blue-500/90",
  },
  {
    icon: Mail,
    label: "New Messages",
    color: "bg-gradient-to-br from-emerald-300/80 to-emerald-500/80 text-white",
    iconBg: "bg-emerald-500/90",
  },
];

const TenantQuickStats: React.FC<Props> = ({ saved, applications, messages }) => {
  const values = [saved, applications, messages];
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-2">
      {stats.map((s, i) =>
        <Card
          className="flex-1 flex items-center gap-4 px-5 py-5 rounded-2xl bg-white/80 shadow-[0_4px_24px_-6px_rgba(65,80,120,0.11)] border border-border hover:scale-[1.018] hover:shadow-lg transition-all duration-150 group"
          key={s.label}
        >
          <div className={`rounded-xl p-3 flex items-center justify-center shadow-md ${s.iconBg} group-hover:scale-110 transition-transform`}>
            <s.icon className="w-7 h-7 text-white drop-shadow" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-foreground drop-shadow-sm">{values[i]}</span>
            <span className="text-sm font-semibold text-muted-foreground">{s.label}</span>
          </div>
        </Card>
      )}
    </div>
  );
};
export default TenantQuickStats;
