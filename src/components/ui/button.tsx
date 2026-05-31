import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "rounded-none bg-void dark:bg-offwhite text-offwhite dark:text-void hover:bg-void/80 dark:hover:bg-offwhite/80",
        destructive:
          "bg-red40 dark:bg-red40/80 text-white hover:bg-red40/80 dark:hover:bg-red40/60 focus-visible:ring-red40/20 dark:focus-visible:ring-red40/40",
        outline:
          "border text-void dark:text-offwhite shadow-xs hover:bg-steel/50 border-void dark:border-steel dark:hover:bg-steel/30",
        secondary:
          "bg-steel dark:bg-steel text-void hover:bg-steel/60 dark:hover:bg-steel/60",
        ghost:
          "hover:bg-steel text-void dark:text-foreground dark:hover:bg-steel/30",
        link: "text-void dark:text-offwhite underline-offset-4 hover:underline border-none",
        brand:
          "rounded-md bg-medium-brand dark:bg-medium-brand text-offwhite hover:bg-medium-brand/80 dark:hover:bg-medium-brand/60 border-none",
        rounded:
          "rounded-md bg-void dark:bg-offwhite text-offwhite dark:text-void hover:bg-void/80 dark:hover:bg-offwhite/80 border-none",
        "rounded-outline":
          "rounded-md border text-void dark:text-offwhite shadow-xs hover:bg-steel/50 border-void dark:border-steel dark:hover:bg-steel/30",
        input:
          "border border-steel/20 bg-steel/10 dark:bg-steel/10 shadow-xs text-void/80 dark:text-offwhite/80",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
