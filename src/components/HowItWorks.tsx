"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, Sparkles } from "lucide-react";
import { AppPreview } from "@/components/AppPreview";

const steps = [
  {
    title: "Scheduling",
    description:
      "Describe check-ins in plain English on Chat—daily standup cadence, who participates, and where rollups land. Ceptly builds a schedule you can publish and adjust anytime.",
  },
  {
    title: "Slack check-ins",
    description:
      "On your schedule, Ceptly DMs each teammate for a short, conversational standup. Progress, blockers, and Linear issues—captured without forms or sync meetings.",
  },
  {
    title: "Team insights & reach-out",
    description:
      "Ask about blockers, morale, or check-in history in chat. Reach out to anyone in Slack for a follow-up. After each window, rollups land in your leadership channel.",
  },
];

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
            className="font-brand text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl"
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
            Set up schedules in chat. ICs answer in Slack. Leaders get rollups,
            team insights, and one-off reach-out—without status meetings.
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
                    <Calendar className="h-5 w-5" />
                  ) : index === 1 ? (
                    <MessageSquare className="h-5 w-5" />
                  ) : (
                    <Sparkles className="h-5 w-5" />
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
            className="relative w-full"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#56FF3C]/15 bg-background max-h-[520px] shadow-lg">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-linear-to-t from-background/90 to-transparent" />
              <AppPreview />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
