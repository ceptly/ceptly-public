"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/stripe-config";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (menuOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
          <div className="flex items-center gap-3 md:gap-0">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="size-5" strokeWidth={2} />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/parallax-light.png"
                alt="Ceptly Logo"
                width={32}
                height={32}
              />
              <span className="font-brand text-left text-[25px] font-bold tracking-tight">
                Ceptly
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={APP_LOGIN_URL}
              className="hidden h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href={APP_SIGNUP_URL}
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:rounded-md md:font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile nav — X-style full-screen drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[100] md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
          aria-hidden
        />

        <div
          className={`absolute inset-y-0 left-0 flex w-[min(100%,320px)] flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-14 items-center justify-between border-b border-border/40 px-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={closeMenu}
            >
              <Image
                src="/parallax-light.png"
                alt="Ceptly Logo"
                width={28}
                height={28}
              />
              <span className="font-brand text-base font-bold tracking-tight">
                Ceptly
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
              aria-label="Close menu"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-2 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-4 text-xl font-bold tracking-tight text-foreground transition-colors hover:bg-muted"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-border/40 p-4">
            <Link
              href={APP_LOGIN_URL}
              onClick={closeMenu}
              className="mb-2 flex h-12 w-full items-center justify-center rounded-full border border-border text-base font-bold text-foreground transition-colors hover:bg-muted"
            >
              Log in
            </Link>
            <Link
              href={APP_SIGNUP_URL}
              onClick={closeMenu}
              className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
