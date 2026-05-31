import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

export function LandingFinalCta() {
  return (
    <section className="final">
      <div className="final-grid" aria-hidden />
      <div className="container final-in">
        <h2>Turn ambitious vision into effortless momentum</h2>
        <p
          className="sub"
          style={{
            color: "var(--landing-fg2)",
            maxWidth: 540,
            margin: 0,
            fontSize: 20,
            lineHeight: 1.6,
          }}
        >
          Schedule your first check-in in minutes. Free for 10 days, no credit
          card required.
        </p>
        <Link className="btn btn-cta" href={APP_SIGNUP_URL}>
          Create account
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
