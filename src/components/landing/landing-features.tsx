import {
  MessageSquare,
  Network,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Users,
    title: "Persona-based agents",
    body: "Deploy scrum masters and project managers. Each persona comes with its own tools, duties, and communication style.",
  },
  {
    Icon: Sparkles,
    title: "Deploy & manage from chat",
    body: "Spin up, edit, and query agents in plain English. Attach files as context and @mention staffers or #channels to direct the work.",
  },
  {
    Icon: MessageSquare,
    title: "Slack check-ins",
    body: "Agents run short, conversational check-ins over DMs and channels. Progress, blockers, and linked issues — without forms.",
  },
  {
    Icon: Network,
    title: "Org intelligence",
    body: "Import your team roster, then let Ceptly map who works with whom and who reports to whom — grounding every agent conversation.",
  },
];

export function LandingFeatures() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">What Ceptly does</span>
          <h2>The management layer, run by agents</h2>
          <p>
            Coordination, follow-up, and grounded team insights, all automated
            in the background while your team keeps shipping.
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
