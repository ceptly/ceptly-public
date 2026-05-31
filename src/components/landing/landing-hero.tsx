import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { APP_SIGNUP_URL } from "@/lib/stripe-config";

export function LandingHero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        <div className="hero-grid" />
        <div className="hero-dots" />
        <Image
          className="hero-mark logo-l"
          src="/parallax-light.png"
          alt=""
          width={440}
          height={440}
          aria-hidden
        />
        <Image
          className="hero-mark logo-d"
          src="/parallax-dark.png"
          alt=""
          width={440}
          height={440}
          aria-hidden
        />
      </div>
      <div className="container hero-in">
        <span className="eyebrow">
          <Sparkles size={14} strokeWidth={2} />
          AI chief of staff for flat teams
        </span>
        <h1>Your team&apos;s AI chief of staff</h1>
        <p className="sub">
          Set up schedules in chat. ICs answer in Slack. Leaders get rollups,
          team insights, and one-off reach-out&mdash;
          <b>without status meetings</b>.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-cta" href={APP_SIGNUP_URL}>
            Create account
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <Link className="btn btn-outline" href="#how">
            See how it works
          </Link>
        </div>
        <p className="nocard">
          No credit card required &middot; 10-day free trial
        </p>
      </div>
    </section>
  );
}
