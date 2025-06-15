
import React from "react";

interface Props {
  firstName: string;
  moveInGoal?: string;
}
const TenantWelcomeBanner: React.FC<Props> = ({ firstName, moveInGoal }) => (
  <section className="animate-fade-in bg-gradient-to-tr from-primary/5 to-secondary/10 border border-border rounded-2xl flex flex-col sm:flex-row items-center gap-5 py-6 px-6 mb-4 shadow-[0_4px_36px_-6px_rgba(80,85,140,0.10)]">
    <div className="flex items-center gap-5">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-md flex items-center justify-center font-bold text-4xl sm:text-5xl text-white uppercase">
        {firstName[0]}
      </div>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-extrabold text-foreground mb-1">
          Welcome back, {firstName}!
        </span>
        {moveInGoal && (
          <span className="inline-flex items-center gap-2 text-primary text-base mt-1">
            <span className="block w-2 h-2 rounded-full bg-secondary" />
            Move-in goal: <span className="font-bold">{moveInGoal}</span>
          </span>
        )}
      </div>
    </div>
    {/* Optionally, you can place an illustration/image here for larger screens */}
    {/* <div className="hidden sm:block ml-auto">
      <img ... />
    </div> */}
  </section>
);

export default TenantWelcomeBanner;
