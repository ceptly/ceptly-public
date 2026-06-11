import Image from "next/image";

const LOGOS = [
  { name: "Slack", src: "/integrations/slack.png" },
  { name: "Linear", src: "/integrations/linear.png" },
  { name: "Jira", src: "/integrations/jira.png" },
  { name: "Monday", src: "/integrations/monday.png" },
  // MS Teams integration temporarily disabled — uncomment to re-enable.
  // { name: "Teams", src: "/integrations/teams.png" },
] as const;

export function LandingIntegrations() {
  return (
    <section className="strip">
      <div className="container strip-in reveal">
        <div className="strip-label">Lives where your team already works</div>
        <div className="logos">
          {LOGOS.map(({ name, src }) => (
            <span className="logo-chip" key={name}>
              <Image src={src} alt="" width={19} height={19} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
