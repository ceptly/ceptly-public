"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/parallax-light.png"
            alt="Ceptly Logo"
            width={32}
            height={32}
          />
          <h2 className="text-lg font-bold tracking-tight">Ceptly</h2>
        </div>
        {/*<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://app.ceptly.com/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Log in
          </Link>
          <Link
            href="https://app.ceptly.com/register"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
          </Link>
        </div>
        */}
      </div>
    </header>
  );
}
