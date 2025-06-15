
import React from "react";
import { Home } from "lucide-react";

type BrandLogoProps = {
  className?: string;
  showText?: boolean;
  showRoleTag?: boolean;
  roleTag?: string;
  /** "sm" renders text at sm breakpoint and up only */
  textClassName?: string;
  roleTagClassName?: string;
  onClick?: () => void;
};

const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  showText = true,
  showRoleTag = false,
  roleTag = "",
  textClassName = "text-xl font-bold text-foreground hidden sm:inline-block",
  roleTagClassName = "ml-2 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold hidden sm:inline-block",
  onClick,
}) => (
  <div
    className={`flex items-center space-x-3 cursor-pointer hover:scale-105 hover:text-primary transition-all duration-200 ${className}`}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
  >
    <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center shadow-sm">
      <Home className="w-5 h-5" />
    </div>
    {showText && (
      <span className={textClassName}>RentConnect</span>
    )}
    {showRoleTag && roleTag && (
      <span className={roleTagClassName}>{roleTag}</span>
    )}
  </div>
);

export default BrandLogo;
