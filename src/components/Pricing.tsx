"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { STRIPE_PAYMENT_LINK, APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/stripe-config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const included = [
  "Slack conversational check-ins on your schedule",
  "Up to 5 scheduled check-in programs per workspace",
  "Up to 10 custom questions per program",
  "AI scheduling assistant — set cadence and topics in plain English",
  "Team insights chat — ask about blockers, morale, and check-in history",
  "One-off Slack reach-out to any teammate",
  "Linear integration for issue-aware team Q&A",
  "Team roster with Slack and Linear import",
  "Unlimited workspace members and admins",
  "Role-based access for founders, admins, leads, and ICs",
];

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
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Simple pricing for flat teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground md:text-lg"
          >
            One plan with everything you need to organize your orgs
            communication. Try Ceptly free for 10 days.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto max-w-lg"
        >
          <Card className="border-[#56FF3C]/20 bg-background/80 shadow-xl shadow-[#56FF3C]/10">
            <CardHeader className="text-center">
              <CardDescription className="text-sm font-medium uppercase tracking-wide">
                Starter
              </CardDescription>
              <CardTitle className="text-4xl font-extrabold tracking-tight">
                $20
                <span className="text-lg font-medium text-muted-foreground">
                  /month
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                10-day free trial · per workspace · cancel anytime
              </p>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#56FF3C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Link
                href={APP_SIGNUP_URL}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Create account
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={STRIPE_PAYMENT_LINK}
                className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                Subscribe first via Stripe
              </Link>
              <p className="text-center text-xs text-muted-foreground">
                Recommended: create your account first, then start your trial in
                the app. Already subscribed?{" "}
                <Link
                  href={`${APP_LOGIN_URL}?mode=sign-up&checkout=success`}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-16 max-w-2xl md:mt-24"
        >
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
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
