"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

export function LandingFinalCta() {
  return (
    <section className="final dark">
      <div className="hero-bg" aria-hidden>
        <div className="hero-grid" />
      </div>
      <div className="container final-in reveal">
        <h2>
          Put your next standup on{" "}
          <span className="accent">autopilot</span>.
        </h2>
        <p>
          Deploy your first agent in plain English. It works with your team in
          Slack tomorrow morning — no meeting required.
        </p>
        <div className="hero-actions">
          <Link
            className="btn btn-primary"
            href={APP_SIGNUP_URL}
            onClick={() =>
              posthog.capture("cta_clicked", {
                location: "final_cta",
                cta_text: "Start free",
              })
            }
          >
            Start free <ArrowRight size={16} strokeWidth={2} />
          </Link>
          {/* <Link className="btn btn-outline" href={APP_SIGNUP_URL}>
            Talk to us
          </Link> */}
        </div>
        <p className="nocard">No credit card · 10-day free trial</p>
      </div>
    </section>
  );
}
