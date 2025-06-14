
import React from "react";
import { CalendarIcon } from "lucide-react";

type Props = {
  firstName: string;
  moveInGoal?: string;
};

const TenantWelcomeBanner: React.FC<Props> = ({ firstName, moveInGoal }) => {
  return (
    <section className="w-full bg-gradient-to-r from-primary/10 to-secondary/5 rounded-2xl px-6 py-7 mb-0 flex flex-col md:flex-row md:items-center justify-between shadow">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1 text-foreground">Welcome back, {firstName}!</h1>
        {moveInGoal && (
          <div className="flex items-center gap-2 text-primary font-medium mt-1">
            <CalendarIcon className="w-5 h-5" />
            <span className="text-base">Move-in goal: <span className="font-semibold">{moveInGoal}</span></span>
          </div>
        )}
      </div>
      <div className="hidden md:block mt-4 md:mt-0">
        <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=160&q=80"
          alt="Tenant welcome" className="rounded-xl h-20 w-auto object-cover" />
      </div>
    </section>
  );
};

export default TenantWelcomeBanner;
