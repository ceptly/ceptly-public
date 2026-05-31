import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-void dark:bg-offwhite text-offwhite dark:text-void hover:bg-void/80 dark:hover:bg-offwhite/80",
        secondary:
          "border-transparent bg-steel dark:bg-steel text-void hover:bg-steel/60 dark:hover:bg-steel/60",
        destructive:
          "border-transparent bg-red40 dark:bg-red40/80 text-white hover:bg-red40/80 dark:hover:bg-red40/60",
        outline: "text-void dark:text-offwhite",
        "brand": "border-transparent bg-medium-brand dark:bg-medium-brand text-offwhite hover:bg-medium-brand/80 dark:hover:bg-medium-brand/60",
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

