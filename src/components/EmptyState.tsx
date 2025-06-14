
import React from "react";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  cta?: React.ReactNode;
  className?: string;
}
const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  cta,
  className = "",
}) => (
  <div className={`py-8 px-2 flex flex-col items-center text-center text-muted-foreground ${className}`}>
    <Icon className="w-14 h-14 mb-2 opacity-60 text-muted" strokeWidth={1.3} />
    <div className="font-semibold mb-1 text-lg text-gray-900">{title}</div>
    {description && <div className="text-xs mb-2">{description}</div>}
    {cta && <div className="mt-2">{cta}</div>}
  </div>
);

export default EmptyState;

