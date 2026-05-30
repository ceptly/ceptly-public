"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Standup automation",
    description:
      "Replace the daily sync with async Slack standups on a schedule you control. Ceptly DMs each teammate, references their Linear issues, and posts rollups to your leadership channel—no timezone juggling, no round-robin calls.",
  },
  {
    title: "Latest from every IC",
    description:
      "Ceptly gathers fresh context from individual contributors through short, conversational check-ins—not forms or spreadsheets. Progress, blockers, and workload land in one place so leaders always know what's happening on the ground.",
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
            className="font-brand text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl"
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
