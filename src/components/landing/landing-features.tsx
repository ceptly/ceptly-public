import {
  Calendar,
  MessageSquare,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Calendar,
    title: "Scheduling in chat",
    body: "Describe a cadence in plain English; Ceptly builds a publishable schedule — who answers, how often, and where rollups land.",
  },
  {
    Icon: MessageSquare,
    title: "Slack check-ins",
    body: "On schedule, Ceptly DMs each teammate for a short, conversational standup. Progress, blockers, and linked issues — without forms.",
  },
  {
    Icon: Sparkles,
    title: "Team insights",
    body: "Ask about blockers, morale, or check-in history in chat. Answers are grounded in what your team actually said.",
  },
  {
    Icon: Send,
    title: "One-off reach-out",
    body: "Fire a single Slack DM to any teammate for a quick follow-up, or broadcast a standup to a whole channel.",
  },
];

export function LandingFeatures() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">What Ceptly does</span>
          <h2>Visibility without the overhead</h2>
          <p>
            Everything a chief of staff would handle — coordination, follow-up,
            and grounded answers — run by an agent.
          </p>
        </div>
        <div className="feat-grid">
          {FEATURES.map(({ Icon, title, body }, i) => (
            <div className={`feat reveal d${(i % 2) + 1}`} key={title}>
              <div className="ic-box">
                <Icon size={20} strokeWidth={2} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
