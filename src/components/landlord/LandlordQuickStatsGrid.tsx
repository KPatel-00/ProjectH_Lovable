
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickStat {
  key: string;
  label: string;
  value: number | string;
  icon: string;
}

interface Props {
  stats: QuickStat[];
  loading?: boolean;
}

const LandlordQuickStatsGrid: React.FC<Props> = ({ stats, loading }) => (
  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
    <CardContent className="p-6">
      <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
        Dashboard Overview
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div
            key={stat.key}
            className="flex flex-col items-center text-center p-4 bg-white rounded-xl border hover:shadow-md transition-all duration-200"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {loading ? "—" : stat.value}
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default LandlordQuickStatsGrid;
