import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

function CeptlyLogoMark({ size = 14 }: { size?: number }) {
  const height = Math.round(size * (30 / 28));
  return (
    <>
      <Image
        className="logo-l"
        src="/parallax-light.png"
        alt=""
        width={size}
        height={height}
      />
      <Image
        className="logo-d"
        src="/parallax-dark.png"
        alt=""
        width={size}
        height={height}
      />
    </>
  );
}

export function LandingAppPreview() {
  return (
    <div className="pv-root">
      <div className="pv-top">
        <div className="pv-topin">
          <div className="lf">
            <Image
              className="mk"
              src="/parallax.png"
              alt="Ceptly"
              width={24}
              height={26}
            />
            <div className="pv-tabs">
              <span className="pv-nav">Activity</span>
              <span className="pv-nav active">Chat</span>
              <span className="pv-nav">Team</span>
              <span className="pv-nav">Settings</span>
            </div>
          </div>
          <span className="pv-me">ME</span>
        </div>
      </div>
      <div className="pv-body">
        <div className="pv-msg user">
          <span className="pv-bubble pv-user">
            Schedule a stand-up meeting with{" "}
            <span className="mention">@Michael</span>{" "}
            <span className="mention">@Trey</span> and{" "}
            <span className="mention">@Reagan</span> every weekday at 9am in{" "}
            <span className="mention">#tech</span>.
          </span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <span className="pv-spark">
            <CeptlyLogoMark size={16} />
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxWidth: "82%",
            }}
          >
            <span className="pv-who">Ceptly</span>
            <div className="pv-activity">
              <span>Building reach-out plan &middot; 2s</span>
              <div className="pv-step">
                <CeptlyLogoMark />
                Matching roster members
              </div>
              <div className="pv-step">
                <Image
                  src="/integrations-slack.png"
                  alt=""
                  width={14}
                  height={14}
                />
                Loading Slack Channels
              </div>
            </div>
            <div className="pv-bubble pv-ai">
              Here&apos;s a plan for your daily standup in Slack. Review the
              details below and start when you&apos;re ready.
            </div>
            <div className="pv-proposal">
              <div className="pv-proposal-head">
                <MessageSquare size={13} strokeWidth={2} />
                Standup &middot; Slack Channel
              </div>
              <div className="pv-eyebrow">Gather information</div>
              <p className="pv-recip">
                <b>Recipients: Trey Chen, Michael Bolton & Reagan Dunkle</b>
              </p>
              <p className="pv-detail">
                Goal: Gather updates, blockers, ETA on current work, and
                questions.
              </p>
              <span className="pv-ctab">
                Publish schedule
                <ArrowRight size={13} strokeWidth={2} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pv-prompt">
        <div className="pv-tag">
          <span className="pv-tag-badge">Standup</span>
        </div>
        <div className="pv-prompt-text">
          Ask about your team &mdash; @ for people, # for channels&hellip;
        </div>
        <div className="pv-prompt-bar">
          <span className="pv-auto">
            Auto <ChevronDown size={13} strokeWidth={2} />
          </span>
          <span className="pv-send">
            <ArrowUp size={14} strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  );
}
