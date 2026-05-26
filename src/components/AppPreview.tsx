"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  MessageSquare,
  Sparkles,
} from "lucide-react";

function PreviewHeader() {
  return (
    <header className="shrink-0 border-b border-border bg-background">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4 min-w-0">
          <Image
            src="/parallax.png"
            alt="Ceptly"
            width={28}
            height={28}
            className="rounded shrink-0"
          />
          <nav className="flex items-center gap-0.5 min-w-0 overflow-hidden">
            <span className="hidden sm:inline rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Activity
            </span>
            <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
              Chat
            </span>
            <span className="rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Team
            </span>
            <span className="hidden md:inline rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Settings
            </span>
          </nav>
        </div>
        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
          ME
        </div>
      </div>
    </header>
  );
}

function AgentActivity() {
  return (
    <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
      <span>Building reach-out plan • 2s</span>
      <div className="flex flex-col gap-2 pl-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-3.5 shrink-0 text-primary" />
          <span>Matching roster members</span>
        </div>
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/integrations-slack.png"
            alt=""
            className="size-3.5 shrink-0 rounded-sm object-contain"
          />
          <span>Building reach-out plan</span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: ReactNode;
}) {
  const isUser = role === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser ? (
        <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="size-3" />
        </div>
      ) : null}
      <div
        className={`flex max-w-[88%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}
      >
        <span className="px-0.5 text-[10px] font-medium text-muted-foreground">
          {isUser ? "You" : "Ceptly"}
        </span>
        <div
          className={`rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
            isUser
              ? "rounded-br-md bg-primary text-primary-foreground"
              : "rounded-bl-md border border-border bg-card text-card-foreground"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ReachOutProposalCard() {
  return (
    <div className="rounded-lg border border-dashed border-[#56FF3C]/30 bg-[#E6F9E6]/70 p-3">
      <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
        <MessageSquare className="size-3 shrink-0" aria-hidden="true" />
        Reach out · Slack DM
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        Gather information
      </p>

      <p className="mt-2 text-xs">
        <span className="font-medium">Recipients: Trey Chen</span>
      </p>

      <p className="mt-2 text-xs leading-relaxed">
        Ask Trey about his blocker on the dashboard empty state screens and
        follow up until the situation is clear.
      </p>

      <p className="mt-2 text-xs text-muted-foreground">
        Goal: Message recipients until Ceptly has a clear picture.
      </p>

      <span className="mt-3 inline-flex h-7 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-[10px] font-medium text-primary-foreground">
        Message Trey in Slack
        <ArrowRight className="size-3" aria-hidden="true" />
      </span>
    </div>
  );
}

function PromptCard() {
  return (
    <div className="shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-2.5 py-1.5">
        <span className="inline-flex rounded-md bg-secondary px-2 py-0.5 text-[10px] font-normal text-secondary-foreground">
          Reach out
        </span>
      </div>
      <div className="px-3 py-2.5 text-xs text-muted-foreground">
        Ask about your team — @ to mention someone…
      </div>
      <div className="flex items-center justify-between px-2.5 pb-2.5">
        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
          Auto
          <ChevronDown className="size-3 opacity-60" />
        </span>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <ArrowUp className="size-3" />
        </span>
      </div>
    </div>
  );
}

export function AppPreview() {
  return (
    <div className="flex h-full min-h-[420px] flex-col bg-background">
      <PreviewHeader />

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden px-3 py-3">
        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto">
          <ChatBubble role="user">
            Have a conversation with Trey about his blocker.
          </ChatBubble>

          <div className="flex gap-2">
            <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="size-3" />
            </div>
            <div className="flex max-w-[88%] flex-col gap-1.5">
              <span className="px-0.5 text-[10px] font-medium text-muted-foreground">
                Ceptly
              </span>
              <AgentActivity />
              <div className="rounded-2xl rounded-bl-md border border-border bg-card px-3 py-2 text-xs leading-relaxed shadow-sm">
                Here&apos;s a plan to reach out in Slack. Review the details
                below and start when you&apos;re ready.
              </div>
              <ReachOutProposalCard />
            </div>
          </div>
        </div>

        <PromptCard />

        <div className="flex shrink-0 flex-wrap gap-1.5">
          <span className="inline-flex h-6 items-center gap-1 rounded-full border border-border px-2 text-[10px] font-normal text-foreground">
            <MessageSquare className="size-2.5" />
            Ask about a blocker
          </span>
        </div>
      </div>
    </div>
  );
}
