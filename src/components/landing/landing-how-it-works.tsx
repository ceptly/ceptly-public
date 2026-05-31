const STEPS = [
  [
    "Describe the cadence",
    "Tell Ceptly who checks in and how often, in plain English. It drafts a schedule you publish and adjust anytime.",
  ],
  [
    "ICs answer in Slack",
    "Each teammate gets a short, conversational DM. Progress, blockers, and linked Linear, Jira & Monday issues—no forms.",
  ],
  [
    "Leaders get rollups",
    "Ask about blockers or morale in chat. Insights are grounded in what your team actually said, with rollups after each window.",
  ],
] as const;

export function LandingHowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="shead">
          <span className="kicker">How it works</span>
          <h2>Three steps to effortless momentum</h2>
          <p>
            Set it up once in chat. Your team answers in Slack. You stay in the
            loop without the overhead.
          </p>
        </div>
        <div className="steps3">
          {STEPS.map(([title, description], index) => (
            <div className="step" key={title}>
              <div className="num">{index + 1}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
