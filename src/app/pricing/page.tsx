import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import { createSiteMetadata, SITE_URL } from "@/lib/site-metadata";

const PRICING_TITLE = "Pricing";
const PRICING_DESCRIPTION =
  "Ceptly pricing: Basic at $20/seat/month and Business at $30/seat/month, each with a 10-day free trial. Deploy persona-based AI agents — scrum masters and project managers — with Slack check-ins, org intelligence, and Linear, Jira & Monday integration for flat organizations.";

export const metadata: Metadata = createSiteMetadata({
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: `${PRICING_TITLE} — Ceptly`,
    description: PRICING_DESCRIPTION,
    url: `${SITE_URL}/pricing`,
  },
  twitter: {
    title: `${PRICING_TITLE} — Ceptly`,
    description: PRICING_DESCRIPTION,
  },
});

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
