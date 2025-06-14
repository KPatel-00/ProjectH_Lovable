
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const TenantTrustSupportSkeleton = () => (
  <section className="mt-10 pb-6">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <Skeleton className="h-6 w-40 mb-2 rounded" />
        <div className="flex space-x-4">
          {[1,2].map(i =>
            <div key={i} className="rounded-lg bg-white p-4 shadow w-56 flex flex-col">
              <Skeleton className="h-10 w-11/12 mb-2 rounded" />
              <div className="flex items-center gap-2 mt-3">
                <Skeleton className="w-7 h-7 rounded-full" />
                <Skeleton className="h-4 w-12 rounded" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 items-start">
        <Skeleton className="h-6 w-32 mb-2 rounded" />
        <div className="flex gap-4 mt-2">
          {[1,2].map(i => <Skeleton key={i} className="h-10 w-20 rounded" />)}
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-6 w-20 rounded" />
          <Skeleton className="h-6 w-32 rounded" />
        </div>
        <div className="flex gap-3 mt-2 w-full flex-wrap">
          {[1,2,3,4].map(i => <Skeleton key={i} className="h-4 w-16 rounded" />)}
        </div>
      </div>
    </div>
  </section>
)
export default TenantTrustSupportSkeleton;
