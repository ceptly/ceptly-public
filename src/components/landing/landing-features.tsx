import {
  Calendar,
  MessageSquare,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Calendar,
    title: "Scheduling in chat",
    description:
      "Describe a cadence in plain English; Ceptly builds a publishable schedule—who answers, how often, and where rollups land.",
  },
  {
    icon: MessageSquare,
    title: "Slack check-ins",
    description:
      "On schedule, Ceptly DMs each teammate for a short, conversational standup. Progress, blockers, and linked issues—without forms.",
  },
  {
    icon: Sparkles,
    title: "Team insights",
    description:
      "Ask about blockers, morale, or check-in history in chat. Answers are grounded in what your team actually said.",
  },
  {
    icon: Send,
    title: "One-off reach-out",
    description:
      "Fire a single Slack DM to any teammate for a quick follow-up, or broadcast a standup to a whole channel.",
  },
];

export function LandingFeatures() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="shead">
          <span className="kicker">What Ceptly does</span>
          <h2>Visibility without the overhead</h2>
          <p>
            Everything a chief of staff would handle&mdash;coordination,
            follow-up, and grounded answers&mdash;run by an agent.
          </p>
        </div>
        <div className="feat-grid">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div className="feat" key={title}>
              <div className="ic-box">
                <Icon size={20} strokeWidth={2} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
