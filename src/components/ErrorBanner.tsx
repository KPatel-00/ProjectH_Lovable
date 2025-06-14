
import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ErrorBannerProps = {
  message: string;
  onRetry?: () => void;
  className?: string;
};
const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, onRetry, className="" }) => (
  <div className={`flex items-center gap-4 bg-destructive/10 rounded-md border border-destructive px-4 py-3 mb-4 ${className}`}>
    <AlertTriangle className="text-destructive w-5 h-5" />
    <div className="flex-1 text-destructive">{message}</div>
    {onRetry &&
      <Button variant="outline" size="sm" onClick={onRetry}>Retry</Button>
    }
  </div>
);

export default ErrorBanner;
