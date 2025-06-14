
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const RecentApplicationsCardSkeleton = () => (
  <div className="flex flex-col gap-4 px-1 mt-2">
    {[1,2,3].map(i => (
      <div
        key={i}
        className="bg-white rounded-lg px-5 py-4 shadow-sm flex items-center gap-4"
      >
        <Skeleton className="h-10 w-10 rounded-full mr-3" />
        <div className="flex-1 min-w-0">
          <Skeleton className="h-5 w-32 mb-1" />
          <div className="flex items-center gap-2 mt-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default RecentApplicationsCardSkeleton;
