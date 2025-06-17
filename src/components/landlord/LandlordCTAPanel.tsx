
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BarChart3 } from "lucide-react";

interface Props {
  onCreateListing: () => void;
  onOpenDashboard: () => void;
}

const LandlordCTAPanel: React.FC<Props> = ({ onCreateListing, onOpenDashboard }) => (
  <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-lg">
    <CardContent className="p-6 flex flex-col justify-center h-full space-y-4">
      <div className="text-sm font-semibold mb-2 opacity-90">Quick Actions</div>
      
      <Button 
        onClick={onCreateListing}
        variant="secondary"
        size="lg"
        className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
      >
        <Plus className="w-5 h-5 mr-2" />
        Create New Listing
      </Button>
      
      <Button 
        onClick={onOpenDashboard}
        variant="ghost"
        size="lg"
        className="w-full text-white border-white/30 hover:bg-white/10 font-semibold"
      >
        <BarChart3 className="w-5 h-5 mr-2" />
        Open Dashboard
      </Button>
    </CardContent>
  </Card>
);

export default LandlordCTAPanel;
