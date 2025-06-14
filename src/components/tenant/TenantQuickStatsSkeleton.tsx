
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TenantQuickStatsSkeleton = () => (
  <div className="flex flex-col sm:flex-row gap-4 mb-2">
    {[0,1,2].map(i =>
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm bg-white" key={i}>
        <Skeleton className="w-7 h-7 rounded-full" />
        <div>
          <Skeleton className="h-6 w-10 mb-1 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
    )}
  </div>
)
export default TenantQuickStatsSkeleton
