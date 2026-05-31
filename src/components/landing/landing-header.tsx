"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/stripe-config";

import { Brand } from "./brand";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

type LandingHeaderProps = {
  dark: boolean;
  onToggleTheme: () => void;
};

function ThemeToggleButton({
  dark,
  onToggleTheme,
  className = "",
}: {
  dark: boolean;
  onToggleTheme: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`btn btn-ghost ${className}`.trim()}
      onClick={onToggleTheme}
      aria-label="Toggle theme"
      title="Toggle light / dark"
    >
      {dark ? (
        <Sun size={17} strokeWidth={2} />
      ) : (
        <Moon size={17} strokeWidth={2} />
      )}
    </button>
  );
}

export function LandingHeader({ dark, onToggleTheme }: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="hd">
        <div className="container hd-in">
          <Brand />
          <nav className="nav" aria-label="Main">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="hd-cta">
            <button
              type="button"
              className="btn btn-ghost hd-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={17} strokeWidth={2} />
            </button>
            <ThemeToggleButton
              dark={dark}
              onToggleTheme={onToggleTheme}
              className="hd-theme-btn"
            />
            <Link className="btn btn-ghost hd-sign-in-btn" href={APP_LOGIN_URL}>
              Sign in
            </Link>
            <Link className="btn btn-pill btn-sm" href={APP_SIGNUP_URL}>
              Create account
            </Link>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[100] max-[860px]:block hidden"
          aria-hidden={!menuOpen}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeMenu}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(100%,320px)] flex-col border-r border-[var(--landing-border)] bg-[var(--landing-background)] shadow-2xl">
            <div className="flex h-[66px] items-center justify-between border-b border-[var(--landing-border)] px-6">
              <Brand />
              <div className="flex items-center gap-4">
                <ThemeToggleButton
                  dark={dark}
                  onToggleTheme={onToggleTheme}
                  className="mobile-nav-theme-btn"
                />
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={17} strokeWidth={2} />
                </button>
              </div>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="px-2 py-3 text-base font-medium text-[var(--landing-fg)]"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 border-t border-[var(--landing-border)] p-4">
              <Link
                className="btn btn-ghost justify-center"
                href={APP_LOGIN_URL}
                onClick={closeMenu}
              >
                Sign in
              </Link>
              <Link
                className="btn btn-pill justify-center"
                href={APP_SIGNUP_URL}
                onClick={closeMenu}
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
