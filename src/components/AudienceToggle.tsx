
import React from "react";

type AudienceOption = {
  label: string;
  value: string;
};

type AudienceToggleProps = {
  options: AudienceOption[];
  selected: string;
  onSelect: (value: string) => void;
  className?: string;
};

const AudienceToggle: React.FC<AudienceToggleProps> = ({
  options,
  selected,
  onSelect,
  className,
}) => (
  <div className={`flex bg-background border border-border rounded-full p-1 shadow-lg max-w-md w-full mx-auto ${className || ''}`}>
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onSelect(option.value)}
        className={`
          flex-1 text-base font-semibold rounded-full py-2 transition-all duration-300 z-10 text-center
          ${selected === option.value
            ? "text-primary border-2 border-primary bg-white shadow"
            : "text-muted-foreground hover:text-primary"}
        `}
        style={{
          outline: "none",
          background: selected === option.value ? "white" : "transparent"
        }}
        aria-pressed={selected === option.value}
      >
        {option.label}
      </button>
    ))}
  </div>
);

export type { AudienceOption };
export default AudienceToggle;
