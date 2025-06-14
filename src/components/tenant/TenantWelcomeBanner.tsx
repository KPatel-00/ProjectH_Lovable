
import React from "react";

interface Props {
  firstName: string;
  moveInGoal?: string;
}
const TenantWelcomeBanner: React.FC<Props> = ({ firstName, moveInGoal }) => (
  <section className="flex items-center gap-5 mb-8 px-6 py-5 rounded-2xl bg-white shadow-md animate-fade-in">
    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-3xl text-white">
      {firstName[0]}
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-bold leading-tight text-gray-900">
        Welcome back, {firstName}
      </span>
      {moveInGoal && (
        <span className="text-sm text-muted-foreground">
          Move-in goal: <span className="font-semibold">{moveInGoal}</span>
        </span>
      )}
    </div>
  </section>
);

export default TenantWelcomeBanner;
