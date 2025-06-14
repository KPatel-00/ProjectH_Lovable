
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Application {
  id: number;
  applicantName: string;
  listingTitle: string;
  date: string;
}
interface Props {
  applications: Application[];
  onViewAll: () => void;
  showHeader?: boolean;
  className?: string;
}

const RecentApplicationsCard: React.FC<Props> = ({
  applications,
  showHeader = true,
  className = "",
}) => (
  <div className={`px-6 pb-3 ${className}`}>
    {showHeader && (
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold gap-2 text-base">Recent Applications</span>
        <button className="text-xs px-2 py-1 rounded hover:bg-accent transition-colors font-medium text-primary">
          View All
        </button>
      </div>
    )}
    {applications.length === 0 ? (
      <div className="py-4 text-sm text-muted-foreground text-center">No applications yet.</div>
    ) : (
      <ul className="flex flex-col gap-3">
        {applications.slice(0, 3).map(app => (
          <li
            key={app.id}
            className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-150 flex items-center gap-4 group"
          >
            <Avatar className="h-9 w-9 text-md shrink-0">
              <AvatarFallback className="bg-muted text-gray-700 font-bold">{app.applicantName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-semibold truncate max-w-xs block cursor-pointer hover:underline">{app.applicantName}</span>
                </TooltipTrigger>
                <TooltipContent>{app.applicantName}</TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-2 text-xs mt-0.5 text-muted-foreground">
                <span className="truncate max-w-[120px]" title={app.listingTitle}>{app.listingTitle}</span>
                <span>· Applied {app.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default RecentApplicationsCard;
