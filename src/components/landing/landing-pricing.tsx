import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

const INCLUDED = [
  "Slack conversational check-ins on your schedule",
  "AI scheduling assistant—set cadence and topics in plain English",
  "Team insights chat—ask about blockers, morale, and history",
  "One-off Slack reach-out and channel standups",
  "Linear, Jira & Monday issue linking",
  "Team roster with role-based access",
] as const;

export function LandingPricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="pricing-glow" aria-hidden />
      <div className="container">
        <div className="shead">
          <span className="kicker">Pricing</span>
          <h2>One plan. Per seat. No surprises.</h2>
          <p>
            Everything you need to organize your org&apos;s communication. Try
            Ceptly free for 10 days.
          </p>
        </div>
        <div className="plan">
          <div className="pl-eyebrow">Starter</div>
          <div className="price">
            $20<span>/seat/month</span>
          </div>
          <div className="terms">
            Billed per teammate seat via Stripe &middot; cancel anytime
          </div>
          <ul>
            {INCLUDED.map((feature) => (
              <li key={feature}>
                <Check size={17} strokeWidth={2} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link className="btn btn-cta" href={APP_SIGNUP_URL}>
            Create account
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
