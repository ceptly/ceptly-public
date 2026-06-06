import { Calendar, FileText, MessageSquare } from "lucide-react";

const STEPS = [
  {
    num: "01",
    Icon: Calendar,
    title: "Describe the cadence",
    body: "Tell Ceptly who checks in and how often, in plain English. It drafts a schedule you publish — and adjust anytime.",
  },
  {
    num: "02",
    Icon: MessageSquare,
    title: "Your team answers in Slack",
    body: "Each teammate gets a short, conversational DM or group message. Progress, blockers, and linked Linear, Jira & Monday issues. No forms, no app to learn.",
  },
  {
    num: "03",
    Icon: FileText,
    title: "You read, not attend",
    body: "Grounded rollups land after every window. Ask about blockers or morale in chat, answered from what your team actually said.",
  },
] as const;

export function LandingHowItWorks() {
  return (
    <section className="section paper" id="how">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">How it works</span>
          <h2>Set it up once. Then stop attending.</h2>
          <p>
            Describe a cadence in plain English. Your team answers in Slack. You
            read the rollup.
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
