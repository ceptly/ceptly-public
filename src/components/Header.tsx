"use client";

import Link from "next/link";
import Image from "next/image";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/stripe-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/parallax-light.png"
            alt="Ceptly Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold tracking-tight">Ceptly</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            How it Works
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={APP_LOGIN_URL}
            className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link
            href={APP_SIGNUP_URL}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
