"use client";

import {
  Sparkles,
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { joinWaitlist } from "@/actions/waitlist";

export function Hero() {
  const [state, action, pending] = useActionState(joinWaitlist, undefined);

  return (
    <section className="font-body [&_h1]:font-brand relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-20 md:pb-28 min-h-[85vh] flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#FBFFFA]">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.21 0.006 285.885 / 0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 lg:gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#56FF3C]/25 bg-[#E6F9E6]/60 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#56FF3C]" />
            AI agents for flat organizations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            Your Team&apos;s AI Chief of Staff
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Schedule standups in chat, run async check-ins in Slack, and ask
            Team insights questions grounded in what your team actually
            said—turning ambitious vision into{" "}
            <span className="font-medium text-foreground">
              effortless momentum
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col w-full gap-4 pt-2"
          >
            <form
              action={action}
              className="flex flex-col sm:flex-row w-full max-w-lg items-start gap-2 p-1.5 rounded-xl border border-primary/10 bg-background/70 backdrop-blur-md shadow-sm shadow-[#56FF3C]/5"
            >
              <div className="w-full flex-1 space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your company email"
                  required
                  className="h-12 border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {pending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {state?.message && (
              <div className="flex items-center gap-2 text-green-700 bg-[#E6F9E6]/80 p-2.5 rounded-lg border border-[#56FF3C]/20 w-fit mx-auto">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">{state.message}</span>
              </div>
            )}

            {state?.errors?._form && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50/50 p-2.5 rounded-lg backdrop-blur-sm border border-red-200/50 w-fit mx-auto">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">
                  {state.errors._form[0]}
                </span>
              </div>
            )}

            <p className="text-xs text-muted-foreground/80">
              No credit card required.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
