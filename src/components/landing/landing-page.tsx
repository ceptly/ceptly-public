"use client";

import { useEffect, useState } from "react";

import "@/styles/landing.css";

import { LandingFaq } from "./landing-faq";
import { LandingFeatures } from "./landing-features";
import { LandingFinalCta } from "./landing-final-cta";
import { LandingFooter } from "./landing-footer";
import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { LandingHowItWorks } from "./landing-how-it-works";
import { LandingIntegrations } from "./landing-integrations";
import { LandingPricing } from "./landing-pricing";
import { LandingShowcase } from "./landing-showcase";

const THEME_STORAGE_KEY = "ceptly_landing_dark";

function readStoredDark(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === null) return true;
    return JSON.parse(stored) as boolean;
  } catch {
    return true;
  }
}

export function LandingPage() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(readStoredDark());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(dark));
    } catch {
      /* ignore */
    }
  }, [dark, mounted]);

  return (
    <div className="landing-page flex min-h-screen flex-col">
      <LandingHeader dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main className="flex-1">
        <LandingHero />
        <LandingShowcase />
        <LandingIntegrations />
        <LandingHowItWorks />
        <LandingFeatures />
        <LandingPricing />
        <LandingFaq />
        <LandingFinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
