"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import GeometricDither from "./GeometricDither";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { joinWaitlist } from "@/actions/waitlist";

export function Hero() {
  const [state, action, pending] = useActionState(joinWaitlist, undefined);

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0 hidden sm:block">
        <GeometricDither />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pointer-events-none">
        <div className="flex flex-col items-center lg:items-start text-start lg:text-left gap-6 lg:gap-10 max-w-3xl pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your team&apos;s AI chief of staff
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl p-2"
          >
            Ceptly keeps coordination and visibility on track—gathering context
            from your team through async Slack check-ins, synthesizing updates
            for founders, and surfacing blockers before they become sprint-level
            problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col w-full justify-center lg:justify-start pt-4 gap-4"
          >
            <form
              action={action}
              className="flex flex-col sm:flex-row w-full max-w-md items-start gap-2"
            >
              <div className="w-full flex-1 space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your company email"
                  required
                  className="h-12 bg-background/80 backdrop-blur-sm border-primary/20"
                />
                {state?.errors?.email && (
                  <p className="text-sm text-red-500 text-left pl-1">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={pending}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>Join Waitlist</>
                )}
              </button>
            </form>

            {state?.message && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50/50 p-2 rounded-md backdrop-blur-sm border border-green-200/50 w-fit">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">{state.message}</span>
              </div>
            )}

            {state?.errors?._form && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50/50 p-2 rounded-md backdrop-blur-sm border border-red-200/50 w-fit">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {state.errors._form[0]}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
