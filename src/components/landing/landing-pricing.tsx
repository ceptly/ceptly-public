"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

const INCLUDED = [
  "Slack conversational check-ins on your schedule",
  "AI scheduling assistant — set cadence and topics in plain English",
  "Team insights chat — ask about blockers, morale, and history",
  "One-off Slack reach-out and channel standups",
  "Linear, Jira & Monday issue linking",
  "Team roster with role-based access",
] as const;

export function LandingPricing() {
  return (
    <section className="section paper" id="pricing">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">Pricing</span>
          <h2>One plan. Per seat. No surprises.</h2>
          <p>
            Everything you need to keep your org aligned. Try Ceptly free for 10
            days.
          </p>
        </div>
        <div className="pricing-wrap reveal">
          <div className="pricing-left">
            <div className="pl-eyebrow">Starter</div>
            <div className="price">
              $20<span>/seat/month</span>
            </div>
            <div className="terms">
              Billed per teammate seat via Stripe · cancel anytime
            </div>
            <Link
              className="btn btn-primary"
              href={APP_SIGNUP_URL}
              onClick={() =>
                posthog.capture("cta_clicked", {
                  location: "pricing_landing",
                  cta_text: "Start free",
                })
              }
            >
              Start free <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <div className="pricing-note">No credit card required</div>
          </div>
          <div className="pricing-right">
            <div className="incl-label">Every seat includes</div>
            <ul className="incl">
              {INCLUDED.map((feature) => (
                <li key={feature}>
                  <span className="chk">
                    <Check size={17} strokeWidth={2} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
