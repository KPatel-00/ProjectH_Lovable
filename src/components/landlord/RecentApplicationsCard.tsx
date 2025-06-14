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
  onViewAll?: () => void;
  showHeader?: boolean;
  className?: string;
}

const RecentApplicationsCard: React.FC<Props> = ({
  applications,
  showHeader = true,
  className = "",
}) => (
  <div className={`px-1 ${className}`}>
    {showHeader && (
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-base text-gray-900">Recent Applications</span>
        <button className="text-xs px-2 py-1 rounded hover:bg-accent transition-colors font-medium text-primary">
          View All
        </button>
      </div>
    )}
    {applications.length === 0 ? (
      <div className="py-8 flex flex-col items-center text-center text-muted-foreground">
        <img src="/placeholder.svg" alt="" className="w-14 h-14 mb-2 opacity-70" />
        <div className="font-semibold mb-1">No recent applications</div>
        <div className="text-xs">You have not received any applications yet.</div>
      </div>
    ) : (
      <ul className="flex flex-col gap-4">
        {applications.slice(0, 3).map(app => (
          <li
            key={app.id}
            className="bg-white rounded-lg px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-150 flex items-center gap-4 group animate-fade-in"
          >
            <Avatar className="h-10 w-10 text-md shrink-0">
              <AvatarFallback className="bg-muted text-gray-700 font-bold">{app.applicantName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-semibold truncate max-w-xs block cursor-pointer hover:underline text-gray-900">{app.applicantName}</span>
                </TooltipTrigger>
                <TooltipContent>{app.applicantName}</TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-2 text-xs mt-1 text-muted-foreground">
                <span className="truncate max-w-[120px]">{app.listingTitle}</span>
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
