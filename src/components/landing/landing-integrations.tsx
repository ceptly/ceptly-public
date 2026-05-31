import Image from "next/image";

const INTEGRATIONS = [
  {
    name: "Slack",
    light: "/integrations/slack.png",
    dark: "/integrations/slack.png",
  },
  {
    name: "Teams",
    light: "/integrations/teams.png",
    dark: "/integrations/teams.png",
  },
  {
    name: "Linear",
    light: "/integrations/linear-dark.png",
    dark: "/integrations/linear-light.png",
  },
  {
    name: "Jira",
    light: "/integrations/Jira_icon.png",
    dark: "/integrations/Jira_icon.png",
  },
  {
    name: "Monday",
    light: "/integrations/monday.png",
    dark: "/integrations/monday.png",
  },
] as const;

export function LandingIntegrations() {
  return (
    <section className="section tight">
      <div className="container integ">
        <span className="integ-label">
          Works with the tools your team already uses
        </span>
        <div className="integ-row">
          {INTEGRATIONS.map((it) => (
            <span className="chip" key={it.name}>
              <Image
                className="logo-l"
                src={it.light}
                alt=""
                width={20}
                height={20}
              />
              <Image
                className="logo-d"
                src={it.dark}
                alt=""
                width={20}
                height={20}
              />
              {it.name}
            </span>
          ))}
          <span className="chip more">+ more</span>
        </div>
      </div>
    </section>
  );
}
