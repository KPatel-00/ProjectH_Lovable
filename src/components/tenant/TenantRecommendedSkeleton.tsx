
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const TenantRecommendedSkeleton = () => (
  <section className="mt-4">
    <div className="flex justify-between items-center mb-3">
      <Skeleton className="h-6 w-40 rounded" />
      <Skeleton className="h-5 w-16 rounded" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1,2,3].map(i =>
        <div key={i} className="bg-white rounded-xl shadow-md p-3 flex flex-col">
          <Skeleton className="h-32 w-full rounded-lg mb-2" />
          <Skeleton className="h-5 w-3/4 rounded mb-1" />
          <Skeleton className="h-4 w-1/2 rounded mb-2" />
          <Skeleton className="h-5 w-1/3 rounded mb-2" />
        </div>
      )}
    </div>
  </section>
)
export default TenantRecommendedSkeleton
