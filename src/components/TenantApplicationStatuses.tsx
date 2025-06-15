
import React from "react";
import EmptyState from "@/components/EmptyState";
import { FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Application = {
  id: number;
  image: string;
  title: string;
  appliedDate: string;
  progress: number;
  status: string;
};

interface Props {
  applications: Application[];
}

const statusColors: Record<string, string> = {
  "Pending": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Approved": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Rejected": "bg-red-50 text-red-700 border-red-200",
  "In Review": "bg-blue-50 text-blue-700 border-blue-200",
};

const TenantApplicationStatuses: React.FC<Props> = ({ applications }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* Spacer - H2 is now rendered by parent */}
        <span />
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate("/myapplications")}
          className="rounded-full border px-4 py-1 text-xs uppercase tracking-wider border-border bg-white hover:bg-muted text-foreground shadow-sm transition-all font-normal"
        >
          View All Applications
          <ArrowRight className="w-3 h-3 ml-2" />
        </Button>
      </div>

      {applications.length === 0 ? (
        <EmptyState
          icon={FolderOpen}
          title="No applications yet"
          description="Your submitted applications and their status will appear here."
        />
      ) : (
        <div className="space-y-4">
          {applications.slice(0, 3).map((app) => (
            <div
              key={app.id}
              className="bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                    {app.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Applied on: {app.appliedDate}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${app.progress}%` }}
                      />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[app.status] || "bg-gray-50 text-gray-700 border-gray-200"}`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantApplicationStatuses;

