
import React from "react";
import { Bookmark, FileText, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

type Props = {
  saved: number;
  applications: number;
  messages: number;
}
const stats = [
  { icon: Bookmark, label: "Saved Listings" },
  { icon: FileText, label: "Applications in Progress" },
  { icon: Mail, label: "New Messages" },
];

const TenantQuickStats: React.FC<Props> = ({ saved, applications, messages }) => {
  const values = [saved, applications, messages];
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-2">
      {stats.map((s, i) =>
        <Card className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm bg-white" key={s.label}>
          <s.icon className="w-7 h-7 text-primary" />
          <div>
            <div className="font-bold text-xl">{values[i]}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        </Card>
      )}
    </div>
  );
};
export default TenantQuickStats;
