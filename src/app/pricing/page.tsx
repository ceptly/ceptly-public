import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing — Ceptly",
  description:
    "Ceptly Team: $20/month per workspace with a 10-day free trial. Slack check-ins, AI scheduling, team insights, and Linear integration for flat organizations.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
