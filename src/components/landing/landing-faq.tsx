"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  [
    "Do my teammates need a Ceptly login?",
    "No. ICs answer right inside Slack DMs—only leaders use the app for rollups and insights, so there's nothing new for your team to learn.",
  ],
  [
    "How does Ceptly know what to ask?",
    "You describe the cadence in plain English; Ceptly drafts a schedule and conversational check-ins you review and publish. Adjust anytime.",
  ],
  [
    "Where do the answers go?",
    "Into grounded team insights you can query in chat—blockers, morale, history—plus rollups that land in your leadership channel after each window.",
  ],
  [
    "Which tools does it connect to?",
    "Slack for check-ins and reach-out, and Linear, Jira & Monday for linked issues, so standups stay tied to real work. More integrations on the way.",
  ],
  [
    "Is my team's data private?",
    "Answers are used to ground your team's own insights and rollups—nothing more. Role-based access keeps visibility appropriate for founders, leads, and ICs.",
  ],
] as const;

export function LandingFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="shead">
          <span className="kicker">FAQ</span>
          <h2>Questions, answered</h2>
        </div>
        <div className="faq">
          {FAQS.map(([question, answer], index) => (
            <div
              className={`faq-item${open === index ? " open" : ""}`}
              key={question}
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
              >
                <h3>{question}</h3>
                <ChevronDown size={20} strokeWidth={2} />
              </button>
              <div className="faq-a">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
