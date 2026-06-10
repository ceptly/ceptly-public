"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

const ROLES = [
  "chief of staff",
  "scrum master",
  "product manager",
  "project lead",
];

function CyclingRole() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShown(false);
      setTimeout(() => {
        setI((p) => (p + 1) % ROLES.length);
        setShown(true);
      }, 240);
    }, 2300);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="cycle">
      <span className={"cycle-word accent" + (shown ? " in" : "")}>
        {ROLES[i]}
      </span>
    </span>
  );
}

export function LandingHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(
      () => ref.current && ref.current.classList.add("reveal-on"),
      80,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero dark" id="top">
      <div className="hero-bg" aria-hidden>
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>
      <div className="container hero-in" ref={ref}>
        {/* <span className="eyebrow reveal">
          <span className="spark">
            <Sparkles size={14} strokeWidth={2} />
          </span>
          AI chief of staff for flat teams
        </span> */}
        <h1>
          <span className="line">Your team&apos;s</span>
          <span className="line">
            <CyclingRole />
          </span>
        </h1>
        <p className="hero-sub">
          Ceptly is a collection of deployable AI agents that runs check-ins,
          rollups, and team insights <b>in the background</b> — so your team
          ships work instead of sitting in another sync.
        </p>
        <div className="hero-actions">
          <Link
            className="btn btn-primary"
            href={APP_SIGNUP_URL}
            onClick={() =>
              posthog.capture("cta_clicked", {
                location: "hero",
                cta_text: "Start free",
              })
            }
          >
            Start free <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <Link className="btn btn-outline" href="#how">
            See how it works
          </Link>
        </div>
        <p className="nocard">No credit card · 10-day free trial</p>
      </div>
    </section>
  );
}
