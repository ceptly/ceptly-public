"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Hash } from "lucide-react";

const steps = [
  {
    title: "Agents gather context",
    description:
      "On your schedule, Ceptly DMs each teammate for a short, conversational check-in. Progress, blockers, workload—captured in Slack without forms or syncs.",
  },
  {
    title: "Signals become clarity",
    description:
      "When the window closes, a synthesis agent reads every response and extracts themes: momentum, blockers, sentiment, and what leadership needs to act on.",
  },
  {
    title: "Leaders act with confidence",
    description:
      "Digests land in your leadership channel. Ask follow-up questions anytime—answers are grounded in what your team actually said, not guesswork.",
  },
];

function SlackPreview() {
  return (
    <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-xl border bg-card shadow-lg md:min-h-[600px]">
      <div className="flex items-center gap-3 border-b bg-muted/40 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
          C
        </div>
        <div>
          <p className="text-sm font-semibold">Ceptly</p>
          <p className="text-xs text-muted-foreground">Direct message</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-5">
        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm">
          Hey Sarah — quick check-in. What are you focused on this week?
        </div>
        <div className="max-w-[92%] self-end rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm text-primary-foreground">
          Onboarding flow and a dashboard bug fix. Momentum is good.
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm">
          Nice. Anything blocking you or slowing momentum?
        </div>
        <div className="max-w-[92%] self-end rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm text-primary-foreground">
          Waiting on design for the empty state screens.
        </div>

        <div className="mt-2 rounded-lg border border-dashed border-primary/25 bg-[#E6F9E6]/60 p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Hash className="h-3.5 w-3.5" />
            leadership-digest
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Weekly Org Pulse
          </p>
          <p className="mt-2 text-sm">
            <span className="font-medium">Blockers (1):</span> Sarah → design
            review pending on empty state screens
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Team momentum steady · Workload avg 3.2 / 5 · 4 of 5 check-ins
            complete
          </p>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center gap-4 text-center md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            How Ceptly organizes your team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            ICs stay in Slack. Leaders get clarity. AI agents handle everything
            in between—from async pulse checks to executive-ready summaries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {index === 0 ? (
                    <MessageSquare className="h-5 w-5" />
                  ) : index === 1 ? (
                    <Sparkles className="h-5 w-5" />
                  ) : (
                    <Hash className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground md:text-lg/relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full"
          >
            <SlackPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
