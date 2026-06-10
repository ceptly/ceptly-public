"use client";

import Link from "next/link";
import posthog from "posthog-js";

import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/stripe-config";

import { Brand } from "./brand";

const NAV_LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function LandingHeader() {
  return (
    <header className="site-header">
      <div className="container header-in">
        <Brand />
        <nav className="nav" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} className="navlink" href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            className="btn btn-ghost btn-sm"
            href={APP_LOGIN_URL}
            onClick={() =>
              posthog.capture("sign_in_clicked", { location: "header" })
            }
          >
            Sign in
          </Link>
          <Link
            className="btn btn-primary btn-sm"
            href={APP_SIGNUP_URL}
            onClick={() =>
              posthog.capture("cta_clicked", {
                location: "header",
                cta_text: "Start free",
              })
            }
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
