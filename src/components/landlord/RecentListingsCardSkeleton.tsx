
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const RecentListingsCardSkeleton = () => (
  <div className="flex flex-col gap-4 px-1 mt-2">
    {[1,2,3].map(i => (
      <div
        key={i}
        className="bg-white rounded-lg px-5 py-4 shadow-sm flex items-center gap-4"
      >
        <div className="flex-1 min-w-0">
          <Skeleton className="h-5 w-40 mb-2" />
          <div className="flex items-center gap-3 text-xs mt-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-4 w-20 mt-1" />
        </div>
      </div>
    ))}
  </div>
);

export default RecentListingsCardSkeleton;
