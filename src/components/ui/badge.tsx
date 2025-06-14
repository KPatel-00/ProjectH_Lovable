
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Add success/danger variants for clear minimalist feedback
const badgeVariants = cva(
  // Flat, small, minimal rounded; only uses fill and accent color for important badge types
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors border",
  {
    variants: {
      variant: {
        default: "bg-accent text-white border-transparent", // Primary blue
        secondary: "bg-muted text-foreground border-border",
        success: "bg-emerald-600 text-white border-transparent", // Bold green
        danger: "bg-red-600 text-white border-transparent", // Bold red
        outline: "bg-transparent text-foreground border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
