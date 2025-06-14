
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TenantMessagesPreviewSkeleton = () => (
  <section className="mt-4">
    <div className="flex justify-between items-center mb-3">
      <Skeleton className="h-6 w-52 rounded" />
      <Skeleton className="h-5 w-24 rounded" />
    </div>
    <div className="flex flex-col gap-2">
      {[1,2].map(i =>
        <div key={i} className="flex items-center gap-3 bg-white shadow rounded-lg p-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1 min-w-0">
            <Skeleton className="h-5 w-1/2 mb-1 rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
          </div>
          <Skeleton className="h-4 w-12 rounded" />
        </div>
      )}
    </div>
  </section>
);
export default TenantMessagesPreviewSkeleton;
