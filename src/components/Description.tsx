"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Conversational check-ins",
    description:
      "An Agent DMs your team on a schedule you control—short, async conversations, not forms. ICs share progress and blockers in Slack so they can stay focused on deep work, not status updates.",
  },
  {
    title: "Leadership-ready synthesis",
    description:
      "After each check-in window, a Synthesis Agent turns raw responses into a scannable digest: who shipped what, open blockers, workload sentiment, and early flags when someone goes quiet or overload is trending.",
  },
  {
    title: "Org intelligence on demand",
    description:
      'Founders and executives ask natural-language questions in Slack—"Is anyone blocked?" or "How is morale trending?"—and get answers grounded in real check-in data, with sources cited.',
  },
  {
    title: "Strategy-driven questions",
    description:
      "Use the Question Editor to define, reorder, and preview what your agents ask—with an AI suggester that builds a set from your goals. Publish when ready; changes take effect on the next scheduled check-in.",
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
            contributors—gathering context, surfacing blockers, and keeping
            everyone moving without the bloat. You see problems earlier and your team spends less time reporting
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
