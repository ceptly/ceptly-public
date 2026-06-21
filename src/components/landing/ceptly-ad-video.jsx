"use client";
/* eslint-disable @next/next/no-img-element */
// Ceptly Ad — 35s · 1920×1080 · pain → relief.
// Imported from the "Ceptly Ad" Claude Design project and adapted to autoplay +
// loop inline (no scrubber / preview chrome) as a drop-in replacement for the
// previous /ceptly-ad.mp4. Generated animation scaffold — raw px/hex by design.

import * as React from "react";

// ── Easing functions ────────────────────────────────────────────────────────
const Easing = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeOutBack: (t) => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: (t) => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
};

// ── Core interpolation helpers ──────────────────────────────────────────────
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// animate({from, to, start, end, ease})(t) — single-segment tween.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic,
}) {
  return (t) => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline + sprite contexts ──────────────────────────────────────────────
const TimelineContext = React.createContext({
  time: 0,
  duration: 35,
  playing: false,
});
const useTimeline = () => React.useContext(TimelineContext);

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0,
});
const useSprite = () => React.useContext(SpriteContext);

// Renders children only while the playhead is inside [start, end], providing a
// sub-context with `localTime` (seconds since start) and `progress` (0..1).
function Sprite({ start = 0, end = Infinity, children, keepMounted = false }) {
  const { time } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;

  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress =
    duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = { localTime, progress, duration, visible };

  return (
    <SpriteContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </SpriteContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CEPTLY AD — scenes composed on the animation engine above.
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  ink: "#09090b",
  ink700: "#3f3f46",
  ink500: "#71717a",
  ink400: "#a1a1aa",
  ink300: "#d4d4d8",
  ink200: "#e4e4e7",
  ink100: "#f1f1f2",
  card: "#ffffff",
  page: "#f7f7f7",
  paper: "#f2f2f2",
  purple: "#745ae6",
  purpleDeep: "#5326c0",
  amber: "#b45309",
  serif: "var(--font-crimson-text), Georgia, serif",
  sans: "var(--font-open-sans), system-ui, sans-serif",
  mono: "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
};

const MARK_SRC = "/ceptly-mark.png";
const SLACK_SRC = "/integrations/slack.png";

const typed = (text, t, start, cps = 26) =>
  text.slice(0, clamp(Math.floor((t - start) * cps), 0, text.length));

function fadeRise({ t, at, dur = 0.5, dy = 18, ease = Easing.easeOutCubic }) {
  const p = clamp((t - at) / dur, 0, 1);
  const e = ease(p);
  return { opacity: e, transform: `translateY(${(1 - e) * dy}px)` };
}

// ── Icons (Lucide-style, 2px stroke) ────────────────────────────────────────
const CheckIcon = ({ size = 20, color = C.ink }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const AlertIcon = ({ size = 20, color = C.amber }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);
const LinkIcon = ({ size = 20, color = C.ink500 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const CalIcon = ({ size = 20, color = C.ink }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const SparkIcon = ({ size = 20, color = C.purple }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ flexShrink: 0 }}
  >
    <path d="M12 1.5l2.4 8.1 8.1 2.4-8.1 2.4L12 22.5l-2.4-8.1-8.1-2.4 8.1-2.4L12 1.5z" />
  </svg>
);
const SendIcon = ({ size = 20, color = C.ink }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

// ── Shared chrome ───────────────────────────────────────────────────────────
function GridBG() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "radial-gradient(circle, rgba(9,9,11,0.08) 1px, transparent 1px)",
        backgroundSize: "27px 27px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 65% at 50% 45%, black 35%, transparent 78%)",
        maskImage:
          "radial-gradient(ellipse 70% 65% at 50% 45%, black 35%, transparent 78%)",
      }}
    />
  );
}

function SceneHeader({ kicker, title, t }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 78,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        zIndex: 3,
      }}
    >
      <div
        style={{
          fontFamily: C.mono,
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: C.ink500,
          ...fadeRise({ t, at: 0.25, dur: 0.5 }),
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          fontFamily: C.serif,
          fontSize: 58,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          color: C.ink,
          ...fadeRise({ t, at: 0.42, dur: 0.55 }),
        }}
      >
        {title}
      </div>
    </div>
  );
}

function Window({ x, y, w, h, header, children, style }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        background: C.card,
        border: `1px solid ${C.ink300}`,
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "0 26px",
          borderBottom: `1px solid ${C.ink200}`,
          flexShrink: 0,
          background: C.card,
        }}
      >
        {header}
      </div>
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        {children}
      </div>
    </div>
  );
}

function sceneExit(t, sceneDur, fade = 0.32) {
  return animate({
    from: 1,
    to: 0,
    start: sceneDur - fade,
    end: sceneDur,
    ease: Easing.easeInQuad,
  })(t);
}

// ── Scene 1 · The pain: calendar fills with status meetings (0–8.4) ─────────
const MEETINGS = [
  { at: 0.9, col: 0, y: 0, h: 64, label: "Daily standup", time: "9:00" },
  { at: 1.12, col: 1, y: 0, h: 64, label: "Daily standup", time: "9:00" },
  { at: 1.32, col: 2, y: 0, h: 64, label: "Daily standup", time: "9:00" },
  { at: 1.5, col: 3, y: 0, h: 64, label: "Daily standup", time: "9:00" },
  { at: 1.66, col: 4, y: 0, h: 64, label: "Daily standup", time: "9:00" },
  { at: 2.0, col: 0, y: 84, h: 96, label: "Status sync", time: "10:30" },
  { at: 2.2, col: 1, y: 100, h: 86, label: "Project check-in", time: "11:00" },
  { at: 2.4, col: 2, y: 84, h: 76, label: "1:1 — status", time: "10:30" },
  {
    at: 2.58,
    col: 3,
    y: 92,
    h: 124,
    label: "Alignment meeting",
    time: "11:00",
  },
  { at: 2.76, col: 4, y: 84, h: 96, label: "Weekly review", time: "10:00" },
  { at: 3.0, col: 1, y: 246, h: 96, label: "Cross-team sync", time: "1:00" },
  { at: 3.18, col: 0, y: 240, h: 76, label: "Status update", time: "1:30" },
  {
    at: 3.36,
    col: 2,
    y: 220,
    h: 86,
    label: "Sync about the sync",
    time: "2:00",
  },
  { at: 3.54, col: 3, y: 276, h: 96, label: "Roadmap status", time: "2:00" },
  { at: 3.72, col: 4, y: 240, h: 76, label: "EOD check-in", time: "4:30" },
  { at: 3.92, col: 0, y: 376, h: 86, label: "Standup follow-up", time: "3:00" },
  { at: 4.1, col: 2, y: 366, h: 96, label: "Status readout", time: "3:30" },
  { at: 4.28, col: 1, y: 402, h: 76, label: "Catch-up sync", time: "4:00" },
  { at: 4.46, col: 3, y: 432, h: 86, label: "Status: blockers", time: "4:00" },
  {
    at: 4.64,
    col: 4,
    y: 376,
    h: 124,
    label: "Friday status all-hands",
    time: "4:00",
  },
  { at: 4.86, col: 0, y: 522, h: 76, label: "Pre-planning sync", time: "4:30" },
  { at: 5.02, col: 2, y: 522, h: 76, label: "Status recap", time: "5:00" },
  { at: 5.18, col: 1, y: 538, h: 86, label: "Weekly wrap-up", time: "5:00" },
];
const DAYS = ["Mon 8", "Tue 9", "Wed 10", "Thu 11", "Fri 12"];

function CalendarScene() {
  const { localTime: t } = useSprite();
  const exit = sceneExit(t, 8.4);
  const dim = animate({ from: 1, to: 0.13, start: 5.35, end: 5.95 })(t);
  const cam = 1 + 0.07 * Easing.easeInOutSine(clamp(t / 8.4, 0, 1));
  const frame = fadeRise({ t, at: 0.1, dur: 0.6, dy: 26 });
  const count = MEETINGS.filter((m) => t >= m.at).length;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: C.page,
        opacity: exit,
      }}
    >
      <GridBG />
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cam})`,
          transformOrigin: "50% 46%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 240,
            top: 110,
            width: 1440,
            height: 850,
            background: C.card,
            border: `1px solid ${C.ink300}`,
            borderRadius: 6,
            padding: "28px 32px",
            opacity: frame.opacity * dim,
            transform: frame.transform,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 22,
            }}
          >
            <div
              style={{
                fontFamily: C.serif,
                fontSize: 36,
                fontWeight: 600,
                color: C.ink,
              }}
            >
              Week of June 8
            </div>
            <div
              style={{
                fontFamily: C.mono,
                fontSize: 19,
                color: C.ink500,
                letterSpacing: "0.08em",
              }}
            >
              MEETINGS THIS WEEK: {count}
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 16,
              flex: 1,
              minHeight: 0,
            }}
          >
            {DAYS.map((d, ci) => (
              <div
                key={d}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: C.mono,
                    fontSize: 17,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: C.ink400,
                    paddingBottom: 10,
                    borderBottom: `1px solid ${C.ink200}`,
                    marginBottom: 12,
                  }}
                >
                  {d}
                </div>
                <div style={{ position: "relative", flex: 1 }}>
                  {MEETINGS.filter((m) => m.col === ci).map((m, i) => {
                    const p = clamp((t - m.at) / 0.32, 0, 1);
                    if (p <= 0) return null;
                    const e = Easing.easeOutBack(p);
                    return (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: m.y,
                          height: m.h,
                          background: C.ink100,
                          border: `1px solid ${C.ink300}`,
                          borderRadius: 4,
                          padding: "8px 12px",
                          opacity: clamp(p * 2.2, 0, 1),
                          transform: `scale(${0.55 + 0.45 * e})`,
                          transformOrigin: "50% 0%",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: C.sans,
                            fontSize: 19,
                            fontWeight: 600,
                            color: C.ink700,
                            lineHeight: 1.25,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                          }}
                        >
                          {m.label}
                        </div>
                        <div
                          style={{
                            fontFamily: C.mono,
                            fontSize: 14,
                            color: C.ink400,
                            marginTop: 2,
                          }}
                        >
                          {m.time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Headline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: C.mono,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: C.ink500,
            ...fadeRise({ t, at: 5.65, dur: 0.5 }),
          }}
        >
          Your calendar, every week
        </div>
        <div
          style={{
            fontFamily: C.serif,
            fontSize: 108,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.08,
            color: C.ink,
            textAlign: "center",
            ...fadeRise({ t, at: 5.85, dur: 0.6, dy: 26 }),
          }}
        >
          Death by status meeting.
        </div>
      </div>
    </div>
  );
}

// ── Scene 2 · The pivot: cancel them all (8.4–11.8) ─────────────────────────
function PivotScene() {
  const { localTime: t } = useSprite();
  const exit = sceneExit(t, 3.4);
  const cam = 1 + 0.03 * Easing.easeInOutSine(clamp(t / 3.4, 0, 1));
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: C.page,
        opacity: exit,
      }}
    >
      <GridBG />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          transform: `scale(${cam})`,
        }}
      >
        <img
          src={MARK_SRC}
          alt=""
          style={{
            width: 72,
            height: 72,
            objectFit: "contain",
            ...fadeRise({ t, at: 0.2, dur: 0.5 }),
          }}
        />
        <div
          style={{
            fontFamily: C.serif,
            fontSize: 118,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            color: C.ink,
            ...fadeRise({ t, at: 0.42, dur: 0.6, dy: 28 }),
          }}
        >
          Cancel all of them.
        </div>
        <div
          style={{
            fontFamily: C.sans,
            fontSize: 32,
            fontWeight: 400,
            color: C.ink500,
            ...fadeRise({ t, at: 1.35, dur: 0.55 }),
          }}
        >
          Meet Ceptly — the AI chief of staff for flat teams.
        </div>
      </div>
    </div>
  );
}

// ── Scene 3 · Set up in chat (11.8–19.2) ────────────────────────────────────
function ChatScene() {
  const { localTime: t } = useSprite();
  const exit = sceneExit(t, 7.4);
  const userMsg =
    "Schedule a standup meeting in #development with @trey and @michael every weekday at 9am.";
  const highlightMentions = (str) => {
    const parts = str.split(/(#development|@trey|@michael)/g);
    return parts.map((p, i) =>
      /^(#|@)/.test(p) ? (
        <span key={i} style={{ color: "#b5a5ff" }}>
          {p}
        </span>
      ) : (
        p
      ),
    );
  };
  const thinking = t >= 1.5 && t < 2.5;
  const showCard = t >= 2.5;
  const pressed = t >= 5.0 && t < 5.22;
  const cam = animate({
    from: 1,
    to: 1.09,
    start: 2.5,
    end: 6.5,
    ease: Easing.easeInOutSine,
  })(t);

  const row = (at, icon, text) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        ...fadeRise({ t, at, dur: 0.4, dy: 10 }),
      }}
    >
      {icon}
      <div style={{ fontFamily: C.sans, fontSize: 24, color: C.ink700 }}>
        {text}
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: C.page,
        opacity: exit,
      }}
    >
      <GridBG />
      <SceneHeader
        kicker="01 — Tell Ceptly what you want"
        title="Set up meetings in plain English."
        t={t}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cam})`,
          transformOrigin: "44% 60%",
        }}
      >
        <Window
          x={320}
          y={246}
          w={1280}
          h={744}
          header={
            <React.Fragment>
              <img
                src={MARK_SRC}
                alt=""
                style={{ width: 24, height: 24, objectFit: "contain" }}
              />
              <div
                style={{
                  fontFamily: C.serif,
                  fontSize: 27,
                  fontWeight: 600,
                  color: C.ink,
                }}
              >
                Ceptly
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  fontFamily: C.mono,
                  fontSize: 16,
                  color: C.ink400,
                  letterSpacing: "0.08em",
                }}
              >
                AGENT — ONLINE
              </div>
            </React.Fragment>
          }
          style={{ ...fadeRise({ t, at: 0.55, dur: 0.55, dy: 22 }) }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: C.page,
              padding: "36px 44px",
              display: "flex",
              flexDirection: "column",
              gap: 26,
            }}
          >
            {/* User bubble — posted immediately */}
            {t >= 0.85 && (
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: 720,
                  background: C.ink,
                  color: "#fafafa",
                  fontFamily: C.sans,
                  fontSize: 26,
                  lineHeight: 1.5,
                  padding: "18px 26px",
                  borderRadius: 14,
                  borderBottomRightRadius: 4,
                  ...fadeRise({ t, at: 0.85, dur: 0.38, dy: 14 }),
                }}
              >
                {highlightMentions(userMsg)}
              </div>
            )}
            {/* Thinking dots */}
            {thinking && (
              <div
                style={{
                  alignSelf: "flex-start",
                  display: "flex",
                  gap: 8,
                  padding: "20px 24px",
                  background: C.card,
                  border: `1px solid ${C.ink200}`,
                  borderRadius: 14,
                  borderBottomLeftRadius: 4,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 9999,
                      background: C.ink400,
                      opacity:
                        0.4 +
                        0.6 *
                          Math.abs(Math.sin((t * 3.4 - i * 0.33) * Math.PI)),
                    }}
                  />
                ))}
              </div>
            )}
            {/* Proposal card */}
            {showCard && (
              <div
                style={{
                  alignSelf: "flex-start",
                  width: 690,
                  background: C.card,
                  border: `1.5px solid ${C.purple}`,
                  borderRadius: 6,
                  padding: "26px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  ...fadeRise({ t, at: 2.5, dur: 0.5, dy: 16 }),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <SparkIcon size={22} />
                  <div
                    style={{
                      fontFamily: C.sans,
                      fontSize: 25,
                      fontWeight: 700,
                      color: C.ink,
                    }}
                  >
                    Proposed schedule
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontFamily: C.mono,
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: C.purple,
                      border: `1px solid ${C.purple}`,
                      borderRadius: 4,
                      padding: "3px 10px",
                    }}
                  >
                    PROPOSAL
                  </div>
                </div>
                {row(
                  2.85,
                  <CalIcon size={22} color={C.ink700} />,
                  "Daily check-in — weekdays, 9:00 AM",
                )}
                {row(
                  3.1,
                  <img
                    src={SLACK_SRC}
                    alt=""
                    style={{ width: 22, height: 22, objectFit: "contain" }}
                  />,
                  "Have a conversation in #development with Trey and Michael",
                )}
                {row(
                  3.35,
                  <CheckIcon size={22} color={C.ink700} />,
                  "Asks for progress, blockers, linked issues",
                )}
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    marginTop: 6,
                    ...fadeRise({ t, at: 3.75, dur: 0.4, dy: 8 }),
                  }}
                >
                  <div
                    style={{
                      fontFamily: C.sans,
                      fontSize: 21,
                      fontWeight: 600,
                      color: "#fafafa",
                      background: pressed ? "#26262b" : C.ink,
                      borderRadius: 4,
                      padding: "12px 26px",
                      transform: pressed ? "translateY(1px)" : "none",
                    }}
                  >
                    Publish schedule
                  </div>
                  <div
                    style={{
                      fontFamily: C.sans,
                      fontSize: 21,
                      fontWeight: 600,
                      color: C.ink700,
                      border: `1px solid ${C.ink300}`,
                      borderRadius: 4,
                      padding: "12px 26px",
                    }}
                  >
                    Adjust
                  </div>
                </div>
              </div>
            )}
            {/* Published confirmation */}
            {t >= 5.35 && (
              <div
                style={{
                  alignSelf: "flex-start",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  ...fadeRise({ t, at: 5.35, dur: 0.4, dy: 8 }),
                }}
              >
                <CheckIcon size={20} color={C.purple} />
                <div
                  style={{ fontFamily: C.mono, fontSize: 19, color: C.ink500 }}
                >
                  Published — starts tomorrow, 9:00 AM
                </div>
              </div>
            )}
          </div>
        </Window>
      </div>
    </div>
  );
}

// ── Scene 4 · ICs answer in Slack (19.2–25.6) ───────────────────────────────
function SlackScene() {
  const { localTime: t } = useSprite();
  const exit = sceneExit(t, 6.4);
  const reply = "Shipped the new billing flow. Blocked on API keys from infra.";
  const replyTyped = typed(reply, t, 1.9, 27);
  const replyDone = t >= 1.9 + reply.length / 27;
  const sent = t >= 4.7;
  const cam = animate({
    from: 1,
    to: 1.06,
    start: 0.8,
    end: 6.0,
    ease: Easing.easeInOutSine,
  })(t);
  const cursorOn = Math.floor(t * 2.4) % 2 === 0;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: C.page,
        opacity: exit,
      }}
    >
      <GridBG />
      <SceneHeader
        kicker="02 — Your team answers in Slack"
        title="No forms. No meeting."
        t={t}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cam})`,
          transformOrigin: "50% 62%",
        }}
      >
        <Window
          x={320}
          y={246}
          w={1280}
          h={744}
          header={
            <React.Fragment>
              <img
                src={SLACK_SRC}
                alt=""
                style={{ width: 24, height: 24, objectFit: "contain" }}
              />
              <div
                style={{
                  fontFamily: C.sans,
                  fontSize: 23,
                  fontWeight: 700,
                  color: C.ink,
                }}
              >
                Slack
              </div>
              <div
                style={{ fontFamily: C.sans, fontSize: 21, color: C.ink400 }}
              >
                · Direct message — Ceptly
              </div>
            </React.Fragment>
          }
          style={{ ...fadeRise({ t, at: 0.5, dur: 0.55, dy: 22 }) }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              padding: "34px 44px 30px",
              gap: 28,
            }}
          >
            {/* Ceptly bot message */}
            {t >= 0.85 && (
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  ...fadeRise({ t, at: 0.85, dur: 0.45, dy: 12 }),
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 6,
                    border: `1px solid ${C.ink200}`,
                    background: C.card,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={MARK_SRC}
                    alt=""
                    style={{ width: 28, height: 28, objectFit: "contain" }}
                  />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        fontFamily: C.sans,
                        fontSize: 23,
                        fontWeight: 700,
                        color: C.ink,
                      }}
                    >
                      Ceptly
                    </div>
                    <div
                      style={{
                        fontFamily: C.mono,
                        fontSize: 13,
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        color: C.ink500,
                        border: `1px solid ${C.ink300}`,
                        borderRadius: 3,
                        padding: "1px 7px",
                      }}
                    >
                      APP
                    </div>
                    <div
                      style={{
                        fontFamily: C.mono,
                        fontSize: 16,
                        color: C.ink400,
                      }}
                    >
                      9:00 AM
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: C.sans,
                      fontSize: 26,
                      lineHeight: 1.5,
                      color: C.ink700,
                      maxWidth: 880,
                    }}
                  >
                    Morning, Trey. LIN-482 is still open — any update, and is
                    anything blocking you?
                  </div>
                </div>
              </div>
            )}
            {/* Trey's sent reply */}
            {sent && (
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  ...fadeRise({ t, at: 4.7, dur: 0.4, dy: 12 }),
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 9999,
                    background: C.ink100,
                    border: `1px solid ${C.ink200}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: C.sans,
                    fontWeight: 700,
                    fontSize: 21,
                    color: C.ink,
                    flexShrink: 0,
                  }}
                >
                  T
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        fontFamily: C.sans,
                        fontSize: 23,
                        fontWeight: 700,
                        color: C.ink,
                      }}
                    >
                      Trey
                    </div>
                    <div
                      style={{
                        fontFamily: C.mono,
                        fontSize: 16,
                        color: C.ink400,
                      }}
                    >
                      9:02 AM
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: C.sans,
                      fontSize: 26,
                      lineHeight: 1.5,
                      color: C.ink700,
                      maxWidth: 880,
                    }}
                  >
                    {reply}
                  </div>
                </div>
              </div>
            )}
            {/* Input box */}
            <div
              style={{
                marginTop: "auto",
                border: `1px solid ${C.ink300}`,
                borderRadius: 6,
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: C.card,
                ...fadeRise({ t, at: 1.4, dur: 0.45, dy: 10 }),
              }}
            >
              <div
                style={{
                  flex: 1,
                  fontFamily: C.sans,
                  fontSize: 25,
                  color: sent || !replyTyped ? C.ink400 : C.ink,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {sent ? "Message Ceptly" : replyTyped || "Message Ceptly"}
                {!sent && t >= 1.9 && !replyDone && (
                  <span
                    style={{
                      opacity: cursorOn ? 1 : 0,
                      borderLeft: `2px solid ${C.ink}`,
                      marginLeft: 3,
                    }}
                  >
                    &nbsp;
                  </span>
                )}
              </div>
              <SendIcon
                size={24}
                color={replyDone && !sent ? C.purple : C.ink400}
              />
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}

// ── Scene 5 · The rollup (25.6–31.2) ────────────────────────────────────────
function RollupScene() {
  const { localTime: t } = useSprite();
  const exit = sceneExit(t, 5.6);
  const cam = animate({
    from: 1,
    to: 1.05,
    start: 0.6,
    end: 5.3,
    ease: Easing.easeInOutSine,
  })(t);

  const row = (at, icon, text, sub) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        padding: "16px 0",
        borderBottom: `1px solid ${C.ink100}`,
        ...fadeRise({ t, at, dur: 0.42, dy: 12 }),
      }}
    >
      <div style={{ marginTop: 3 }}>{icon}</div>
      <div>
        <div
          style={{
            fontFamily: C.sans,
            fontSize: 25,
            fontWeight: 600,
            color: C.ink,
            lineHeight: 1.35,
          }}
        >
          {text}
        </div>
        {sub && (
          <div
            style={{
              fontFamily: C.mono,
              fontSize: 17,
              color: C.ink400,
              marginTop: 4,
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: C.page,
        opacity: exit,
      }}
    >
      <GridBG />
      <SceneHeader
        kicker="03 — You get the rollup"
        title="Grounded in what your team actually said."
        t={t}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cam})`,
          transformOrigin: "50% 58%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 460,
            top: 252,
            width: 1000,
            background: C.card,
            border: `1px solid ${C.ink300}`,
            borderRadius: 6,
            padding: "34px 40px 30px",
            ...fadeRise({ t, at: 0.5, dur: 0.55, dy: 22 }),
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              paddingBottom: 20,
              borderBottom: `1px solid ${C.ink200}`,
            }}
          >
            <div
              style={{
                fontFamily: C.serif,
                fontSize: 42,
                fontWeight: 600,
                color: C.ink,
              }}
            >
              Team rollup
            </div>
            <div
              style={{
                fontFamily: C.mono,
                fontSize: 17,
                color: C.ink400,
                letterSpacing: "0.08em",
              }}
            >
              FRI JUN 12 · GENERATED 9:15 AM
            </div>
          </div>
          {row(
            0.95,
            <CheckIcon size={23} color={C.ink700} />,
            "Billing flow shipped — Trey",
            "on track",
          )}
          {row(
            1.3,
            <CheckIcon size={23} color={C.ink700} />,
            "Onboarding emails drafted — Michael",
            "review Monday",
          )}
          {row(
            1.65,
            <AlertIcon size={23} />,
            "Blocked: API keys from infra — Trey",
            "waiting 2 days · escalated",
          )}
          {row(
            2.0,
            <LinkIcon size={23} />,
            "Linked issues: LIN-482 · LIN-490",
            null,
          )}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              marginTop: 24,
              ...fadeRise({ t, at: 2.7, dur: 0.5, dy: 12 }),
            }}
          >
            <SparkIcon size={22} />
            <div>
              <div
                style={{
                  fontFamily: C.mono,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  color: C.purple,
                  marginBottom: 6,
                }}
              >
                INSIGHT
              </div>
              <div
                style={{
                  fontFamily: C.sans,
                  fontSize: 24,
                  color: C.ink700,
                  lineHeight: 1.45,
                }}
              >
                {
                  "Infra hand-offs are this month's slowest dependency — three blockers traced back to them."
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Scene 6 · End card (31.2–35) ────────────────────────────────────────────
function EndScene() {
  const { localTime: t } = useSprite();
  const cam = 1 + 0.025 * Easing.easeInOutSine(clamp(t / 3.8, 0, 1));
  return (
    <div style={{ position: "absolute", inset: 0, background: C.paper }}>
      <GridBG />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          transform: `scale(${cam})`,
        }}
      >
        <img
          src={MARK_SRC}
          alt=""
          style={{
            width: 92,
            height: 92,
            objectFit: "contain",
            ...fadeRise({ t, at: 0.15, dur: 0.55 }),
          }}
        />
        <div
          style={{
            fontFamily:
            "var(--font-crimson-pro), var(--font-crimson-text), Georgia, serif",
            fontSize: 108,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            color: C.ink,
            ...fadeRise({ t, at: 0.35, dur: 0.6, dy: 24 }),
          }}
        >
          Ceptly
        </div>
        <div
          style={{
            fontFamily: C.sans,
            fontSize: 34,
            color: C.ink500,
            ...fadeRise({ t, at: 0.95, dur: 0.55 }),
          }}
        >
          Deep work. Zero status calls.
        </div>
        <div
          style={{
            width: 64,
            borderTop: `1px solid ${C.ink300}`,
            ...fadeRise({ t, at: 1.45, dur: 0.5 }),
          }}
        />
        <div
          style={{
            fontFamily: C.mono,
            fontSize: 24,
            color: C.ink700,
            letterSpacing: "0.04em",
            ...fadeRise({ t, at: 1.6, dur: 0.55 }),
          }}
        >
          ceptly.com — 10-day free trial · no credit card
        </div>
      </div>
    </div>
  );
}

// ── Root: fit-to-width stage that autoplays + loops inline ──────────────────
const STAGE_W = 1920;
const STAGE_H = 1080;
const DURATION = 35;

export function CeptlyAdVideo() {
  const [time, setTime] = React.useState(0);
  const [scale, setScale] = React.useState(0);
  const rootRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Scale the 1920×1080 canvas to fill the container width.
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / STAGE_W);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Autoplay + loop, honoring reduced-motion (shows a static end-card frame).
  React.useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTime(33.2);
      return;
    }
    const step = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime((prev) => {
        const next = prev + dt;
        return next >= DURATION ? next % DURATION : next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, []);

  const ctxValue = React.useMemo(
    () => ({ time, duration: DURATION, playing: true }),
    [time],
  );

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        aspectRatio: `${STAGE_W} / ${STAGE_H}`,
        overflow: "hidden",
        background: C.page,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: STAGE_W,
          height: STAGE_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          opacity: scale > 0 ? 1 : 0,
        }}
      >
        <TimelineContext.Provider value={ctxValue}>
          <Sprite start={0} end={8.4}>
            <CalendarScene />
          </Sprite>
          <Sprite start={8.4} end={11.8}>
            <PivotScene />
          </Sprite>
          <Sprite start={11.8} end={19.2}>
            <ChatScene />
          </Sprite>
          <Sprite start={19.2} end={25.6}>
            <SlackScene />
          </Sprite>
          <Sprite start={25.6} end={31.2}>
            <RollupScene />
          </Sprite>
          <Sprite start={31.2} end={35}>
            <EndScene />
          </Sprite>
        </TimelineContext.Provider>
      </div>
    </div>
  );
}

export default CeptlyAdVideo;
