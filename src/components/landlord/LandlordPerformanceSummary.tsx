
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MessageSquare, FileText, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Insights {
  views: number;
  messages: number;
  conversion: number;
  avgDays: number;
}
interface Props {
  insights: Insights;
  loading: boolean;
  onViewDashboard: () => void;
}
const LandlordPerformanceSummary: React.FC<Props> = ({
  insights,
  loading,
  onViewDashboard
}) => (
  <section>
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-lg text-gray-900">Performance Insights</span>
      <Button variant="link" className="text-primary" onClick={onViewDashboard}>View Full Dashboard</Button>
    </div>
    <Card>
      <CardContent className="pt-4 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center">
            <Eye className="w-6 h-6 text-emerald-700 mb-1" />
            <span className="font-bold text-lg">{insights.views}</span>
            <span className="text-xs text-muted-foreground">Views</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MessageSquare className="w-6 h-6 text-blue-700 mb-1" />
            <span className="font-bold text-lg">{insights.messages}</span>
            <span className="text-xs text-muted-foreground">Messages</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FileText className="w-6 h-6 text-violet-700 mb-1" />
            <span className="font-bold text-lg">{insights.conversion}%</span>
            <span className="text-xs text-muted-foreground">App Conversion</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Archive className="w-6 h-6 text-gray-700 mb-1" />
            <span className="font-bold text-lg">{insights.avgDays}</span>
            <span className="text-xs text-muted-foreground">Avg. Days on Market</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default LandlordPerformanceSummary;
