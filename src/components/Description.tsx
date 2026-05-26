"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Conversational check-ins",
    description:
      "Ceptly DMs your team on a schedule you control—short async conversations, not forms. Teammates share progress, blockers, and Linear issue status in Slack.",
  },
  {
    title: "AI scheduling assistant",
    description:
      "Describe what you want to ask and when on Chat. Ceptly builds a publishable schedule—participants, cadence, and where rollups get posted.",
  },
  {
    title: "Team insights chat",
    description:
      'Ask natural-language questions about your team—"Is anyone blocked?" or "How is morale trending?"—and get answers grounded in check-in data and Slack history.',
  },
  {
    title: "One-off Slack reach-out",
    description:
      "Need a follow-up on a blocker or want to share an update? Ceptly messages anyone on your roster in Slack and keeps you in the loop.",
  },
];

export function Description() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-[#E6F9E6] to-[#FEFFFE]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Management as infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            As teams grow, keeping everyone aligned gets harder without extra
            meetings. Ceptly deploys AI agents between leadership and individual
            contributors—scheduling standups, surfacing blockers, and answering
            questions from real check-in data. You see problems earlier and your
            team spends less time reporting up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-8 border-none shadow-none"
            >
              <CardHeader>
                <CardTitle className="mb-3 text-2xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
