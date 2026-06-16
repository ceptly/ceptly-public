"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

const SHARED = [
  "Persona-based agents — scrum masters and project managers",
  "Deploy & manage agents from chat in plain English",
  "Slack conversational check-ins on your schedule",
  "Org intelligence chat — ask about blockers, morale, and reporting lines",
  "Linear, Jira & Monday issue linking",
  "Team roster with role-based access",
] as const;

const TIERS = [
  {
    name: "Basic",
    price: "$20",
    blurb: "Billed per teammate seat via Stripe · cancel anytime",
    highlight: false,
    limits: [
      "Up to 5 workspace members",
      "Up to 5 scheduled agents running at once",
    ],
    cta: "Start free",
  },
  {
    name: "Business",
    price: "$30",
    blurb: "For teams that have outgrown the Basic caps",
    highlight: true,
    limits: ["Unlimited workspace members", "Unlimited scheduled agents"],
    cta: "Start free",
  },
] as const;

export function LandingPricing() {
  return (
    <section className="section paper" id="pricing">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">Pricing</span>
          <h2>Two plans. Per seat. No surprises.</h2>
          <p>
            Everything you need to run the management layer on AI agents. Start
            on Basic, move to Business when you outgrow the caps. Try Ceptly free
            for 10 days.
          </p>
        </div>
        <div className="tier-grid reveal">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`tier-card${tier.highlight ? " tier-card-featured" : ""}`}
            >
              <div className="pl-eyebrow">{tier.name}</div>
              <div className="price">
                {tier.price}
                <span>/seat/month</span>
              </div>
              <div className="terms">{tier.blurb}</div>
              <Link
                className={`btn ${tier.highlight ? "btn-primary" : "btn-outline"}`}
                href={APP_SIGNUP_URL}
                onClick={() =>
                  posthog.capture("cta_clicked", {
                    location: "pricing_landing",
                    cta_text: tier.cta,
                    tier: tier.name,
                  })
                }
              >
                {tier.cta} <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <ul className="incl">
                {tier.highlight && (
                  <li>
                    <span className="chk">
                      <Check size={17} strokeWidth={2} />
                    </span>
                    <span>All Basic features +</span>
                  </li>
                )}
                {tier.limits.map((feature) => (
                  <li key={feature}>
                    <span className="chk">
                      <Check size={17} strokeWidth={2} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
                {!tier.highlight &&
                  SHARED.map((feature) => (
                    <li key={feature}>
                      <span className="chk">
                        <Check size={17} strokeWidth={2} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pricing-note reveal" style={{ textAlign: "center" }}>
          No credit card required to start your trial
        </div>
      </div>
    </section>
  );
}
