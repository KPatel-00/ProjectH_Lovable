
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const StatCardsSkeleton = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
    {[1,2,3].map(i => (
      <div key={i} className="flex items-center gap-4 bg-white rounded-xl shadow-md px-6 py-6">
        <Skeleton className="rounded-xl h-12 w-12" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    ))}
  </section>
);

export default StatCardsSkeleton;
