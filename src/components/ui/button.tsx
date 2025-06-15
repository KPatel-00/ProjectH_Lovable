
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Consistent, visible button palette
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 shadow-refined hover:shadow-refined-lg px-6 py-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-neutral-800", // solid black, white text
        outline: "bg-white text-primary border-2 border-secondary hover:bg-accent", // outlined gold border, black text
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90", // soft gold
        ghost: "bg-transparent text-primary hover:bg-accent border-2 border-secondary/30",
        link: "underline text-primary underline-offset-4",
      },
      size: {
        default: "h-12 px-8 py-2 text-base",
        sm: "h-10 rounded-lg px-5 text-sm",
        lg: "h-14 rounded-xl px-10 text-lg font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          "btn-primary": variant === "default",
          "btn-outline": variant === "outline",
          "btn-secondary": variant === "secondary",
        })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
