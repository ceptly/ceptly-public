"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import posthog from "posthog-js";
import { ArrowRight, Check } from "lucide-react";
import {
  STRIPE_PAYMENT_LINK,
  APP_LOGIN_URL,
  APP_SIGNUP_URL,
} from "@/lib/stripe-config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const shared = [
  "Slack conversational check-ins on your schedule",
  "AI scheduling assistant — set cadence and topics in plain English",
  "Team insights chat — ask about blockers, morale, and check-in history",
  "One-off Slack reach-out to any teammate",
  "Linear, Jira & Monday issue linking",
  "Team roster with Slack and Linear import",
  "Role-based access for founders, admins, leads, and ICs",
];

const tiers = [
  {
    name: "Basic",
    price: "$20",
    blurb: "10-day free trial · billed per teammate seat · cancel anytime",
    featured: false,
    limits: [
      "Up to 5 workspace members",
      "Up to 5 scheduled agents running at once",
    ],
  },
  {
    name: "Business",
    price: "$30",
    blurb: "For teams that have outgrown the Basic caps",
    featured: true,
    limits: ["Unlimited workspace members", "Unlimited scheduled agents"],
  },
] as const;

const faqs = [
  {
    question: "What's included in the free trial?",
    answer:
      "Full access to every feature for 10 days. Connect Slack, import your team, and run check-ins before you're billed.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. Start your trial without entering payment details. We'll remind you before the trial ends.",
  },
  {
    question: "Who is Ceptly for?",
    answer:
      "Flat organizations — startups and teams of dense Individual Contributors.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "Slack is required for check-ins and reach-out. Linear is optional and powers issue-aware answers in team insights chat.",
  },
];

export function Pricing() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#E6F9E6]/50 via-background to-background" />
        <div className="absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-[#B1FFA5]/25 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Simple pricing for flat teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground md:text-lg"
          >
            Two plans with everything you need to organize your org&apos;s
            communication. Start on Basic, upgrade to Business when you outgrow the
            caps. Try Ceptly free for 10 days.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        >
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.featured
                  ? "border-[#56FF3C] bg-background/80 ring-1 ring-[#56FF3C]/40"
                  : "border-[#56FF3C]/20 bg-background/80"
              }
            >
              <CardHeader className="text-center">
                <CardDescription className="text-sm font-medium uppercase tracking-wide">
                  {tier.name}
                </CardDescription>
                <CardTitle className="text-4xl font-extrabold tracking-tight">
                  {tier.price}
                  <span className="text-lg font-medium text-muted-foreground">
                    /seat/month
                  </span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{tier.blurb}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.limits.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#56FF3C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {shared.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#56FF3C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button
                  asChild
                  variant={tier.featured ? "brand" : "outline"}
                  size="lg"
                  className="h-12 w-full rounded-lg shadow-lg transition-all hover:scale-[1.01]"
                >
                  <Link
                    href={APP_SIGNUP_URL}
                    onClick={() =>
                      posthog.capture("cta_clicked", {
                        location: "pricing_page",
                        cta_text: "Create account",
                        tier: tier.name,
                      })
                    }
                  >
                    Create account
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                {tier.featured ? null : (
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 w-full rounded-lg"
                  >
                    <Link
                      href={STRIPE_PAYMENT_LINK}
                      onClick={() =>
                        posthog.capture("stripe_subscribe_clicked", {
                          location: "pricing_page",
                        })
                      }
                    >
                      Subscribe first via Stripe
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground"
        >
          Recommended: create your account first, then start your trial in the
          app. Already subscribed?{" "}
          <Link
            href={`${APP_LOGIN_URL}?mode=sign-up&checkout=success`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-16 max-w-2xl md:mt-24"
        >
          <h2 className="mb-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium">{faq.question}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
