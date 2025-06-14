
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Mail } from "lucide-react";

interface Application {
  id: number;
  applicantName: string;
  listingTitle: string;
  date: string;
}
interface Props {
  applications: Application[];
  onViewAll: () => void;
}

const RecentApplicationsCard: React.FC<Props> = ({ applications, onViewAll }) => (
  <section className="bg-card rounded-xl shadow-md p-4 mb-3">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center font-semibold gap-2 text-base">
        <Mail className="w-4 h-4 text-violet-600" /> Recent Applications
      </div>
      <button
        onClick={onViewAll}
        className="text-xs px-2 py-1 rounded hover:bg-accent transition-colors font-medium text-muted-foreground"
      >
        View All
      </button>
    </div>
    {applications.length === 0 ? (
      <div className="py-4 text-sm text-muted-foreground text-center">No applications yet.</div>
    ) : (
      <ul className="divide-y divide-border">
        {applications.slice(0, 3).map(app => (
          <li key={app.id} className="py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between group">
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-medium truncate max-w-xs block cursor-pointer">{app.applicantName}</span>
                </TooltipTrigger>
                <TooltipContent>
                  {app.applicantName}
                </TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="truncate max-w-[120px]" title={app.listingTitle}>{app.listingTitle}</span>
                <span>· Applied {app.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default RecentApplicationsCard;
