import { Calendar, FileText, MessageSquare } from "lucide-react";

const STEPS = [
  {
    num: "01",
    Icon: Calendar,
    title: "Deploy an agent from chat",
    body: "Describe the persona you want, like scrum master or project manager, and where it works in plain English. Ceptly drafts it; you publish and adjust anytime.",
  },
  {
    num: "02",
    Icon: MessageSquare,
    title: "Your team works with it in Slack",
    body: "Agents run check-ins, follow-ups, and coordination over DMs and channels. Progress, blockers, and linked Linear, Jira & Monday issues. No forms, no app for ICs to learn.",
  },
  {
    num: "03",
    Icon: FileText,
    title: "You read, not attend",
    body: "Grounded updates organized and available to you. Progress, blockers, all queryable in chat.",
  },
] as const;

export function LandingHowItWorks() {
  return (
    <section className="section paper" id="how">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">How it works</span>
          <h2>Deploy once. Then stop managing.</h2>
          <p>
            Spin up an agent in plain English. Your team works with it in Slack.
            You read the rollup.
          </p>
        </div>
        <div className="steps">
          {STEPS.map(({ num, Icon, title, body }, i) => (
            <div className={`step reveal d${i + 1}`} key={num}>
              <span className="step-mark">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div className="num">{num}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
