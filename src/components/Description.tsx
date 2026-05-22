"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Conversational check-ins",
    description:
      "An AI agent DMs your team on a schedule you control—short, async conversations, not forms. ICs report progress and blockers in Slack without writing status updates or sitting in syncs.",
  },
  {
    title: "Weekly digests for leadership",
    description:
      "After each check-in window, a synthesis agent turns raw responses into a scannable digest: who shipped what, open blockers, workload sentiment, and flags when someone goes quiet or overload is trending.",
  },
  {
    title: "Ask anything about your team",
    description:
      'Founders and leads can ask natural-language questions in Slack—"Is anyone blocked?" or "How is morale looking?"—and get answers grounded in real check-in data, with sources cited.',
  },
  {
    title: "Shape what gets asked",
    description:
      "Use the Question Editor to define, reorder, and preview check-in questions—with an AI suggester that builds a set from your goals. Publish when ready; changes take effect on the next scheduled check-in.",
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
            Visibility without the status meetings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            As teams grow, keeping everyone aligned gets harder without extra
            meetings. Ceptly handles coordination and visibility proactively—so
            you see problems earlier and your team spends less time reporting
            up.
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
