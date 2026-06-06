"use client";

import { useEffect } from "react";

import "@/styles/landing.css";

import { LandingFaq } from "./landing-faq";
import { LandingFeatures } from "./landing-features";
import { LandingFinalCta } from "./landing-final-cta";
import { LandingFooter } from "./landing-footer";
import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { LandingHowItWorks } from "./landing-how-it-works";
import { LandingIntegrations } from "./landing-integrations";
import { LandingManifesto } from "./landing-manifesto";
import { LandingPricing } from "./landing-pricing";

/* Scroll-position reveal — robust across layout/font settling. */
function useReveals() {
  useEffect(() => {
    let els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight || 800;
      els = els.filter((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < vh * 0.9) {
          el.classList.add("reveal-on");
          return false;
        }
        return true;
      });
      if (!els.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    const t1 = setTimeout(check, 120);
    const t2 = setTimeout(check, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
}

export function LandingPage() {
  useReveals();

  return (
    <div className="landing-page flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <LandingHero />
        <LandingIntegrations />
        <LandingHowItWorks />
        <LandingFeatures />
        <LandingManifesto />
        <LandingPricing />
        <LandingFaq />
        <LandingFinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
