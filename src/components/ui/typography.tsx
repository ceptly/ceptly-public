import * as React from "react";

import { cn } from "@/lib/utils";

const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h1">
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-heading scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
      className,
    )}
    {...props}
  />
));
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h2">
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-heading scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  />
));
TypographyH2.displayName = "TypographyH2";

const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
));
TypographyH3.displayName = "TypographyH3";

const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h4">
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "font-heading scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
));
TypographyH4.displayName = "TypographyH4";

const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-body leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
));
TypographyP.displayName = "TypographyP";

const TypographyLead = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-body text-xl text-muted-foreground", className)}
    {...props}
  />
));
TypographyLead.displayName = "TypographyLead";

const TypographyLarge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-body text-lg font-semibold", className)}
    {...props}
  />
));
TypographyLarge.displayName = "TypographyLarge";

const TypographySmall = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"small">
>(({ className, ...props }, ref) => (
  <small
    ref={ref}
    className={cn("font-body text-sm leading-none font-medium", className)}
    {...props}
  />
));
TypographySmall.displayName = "TypographySmall";

const TypographyMuted = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-body text-sm text-muted-foreground", className)}
    {...props}
  />
));
TypographyMuted.displayName = "TypographyMuted";

const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  React.ComponentProps<"blockquote">
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("font-body mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  />
));
TypographyBlockquote.displayName = "TypographyBlockquote";

const TypographyList = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("font-body my-6 ml-6 list-disc [&>li]:mt-2", className)}
    {...props}
  />
));
TypographyList.displayName = "TypographyList";

const TypographyInlineCode = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"code">
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      className,
    )}
    {...props}
  />
));
TypographyInlineCode.displayName = "TypographyInlineCode";

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
};
