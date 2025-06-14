
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LandlordWelcomeBannerSkeleton = () => (
  <section className="flex items-center gap-5 mb-8 px-6 py-5 rounded-2xl bg-white shadow-md animate-pulse">
    <Skeleton className="h-16 w-16 rounded-full" />
    <div className="flex flex-col gap-2 w-2/3">
      <Skeleton className="h-7 w-1/2 rounded" />
      <Skeleton className="h-4 w-1/3 rounded" />
    </div>
  </section>
);

export default LandlordWelcomeBannerSkeleton;
