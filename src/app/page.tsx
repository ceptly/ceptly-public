"use client";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Description } from "../components/Description";
import { HowItWorks } from "../components/HowItWorks";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Description />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
