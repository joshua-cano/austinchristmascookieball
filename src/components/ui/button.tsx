import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-button ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-secondary-goldstar text-primary-snow justify-between hover:bg-primary-snow hover:border-2 hover:border-secondary-goldstar hover:text-secondary-goldstar",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary-green text-primary-snow justify-between hover:bg-primary-snow hover:border-2 hover:border-secondary-green hover:text-secondary-green",
        ghost: "hover:bg-primary-solstice hover:text-primary-solstice",
        link: "text-primary-solstice underline-offset-8 hover:underline p-0 m-0",
        blue: "bg-secondary-blue text-primary-snow justify-center hover:bg-primary-snow hover:border-2 hover:border-secondary-blue hover:text-secondary-blue",
      },
      size: {
        default: "h-[60px] px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
