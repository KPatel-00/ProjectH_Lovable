
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const TenantExploreCitiesSkeleton = () => (
  <section className="mt-8">
    <Skeleton className="h-6 w-40 mb-3 rounded" />
    <div className="flex gap-4">
      {[1,2,3,4].map(i =>
        <div key={i} className="min-w-[180px] max-w-[210px] rounded-xl bg-white shadow">
          <Skeleton className="h-28 w-full rounded-t-xl" />
          <div className="p-3">
            <Skeleton className="h-5 w-2/3 mb-1 rounded" />
            <Skeleton className="h-3 w-1/2 rounded" />
          </div>
        </div>
      )}
    </div>
  </section>
)
export default TenantExploreCitiesSkeleton;
