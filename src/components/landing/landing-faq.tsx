"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import posthog from "posthog-js";

const FAQS = [
  [
    "Do my teammates need a Ceptly login?",
    "No. ICs work with the agents right inside Slack — only leaders use the app to deploy agents and read rollups, so there's nothing new for your team to learn.",
  ],
  [
    "What can the agents do?",
    "Each agent takes on a persona — scrum master or project manager — with its own duties, tools, and communication style. You deploy and manage them from chat in plain English.",
  ],
  [
    "Where do the answers go?",
    "Into grounded org intelligence you can query in chat — blockers, morale, who works with whom — plus rollups that land in your leadership channel after each window.",
  ],
  [
    "Which tools does it connect to?",
    "Slack for the agents' check-ins and reach-out, and Linear, Jira & Monday for linked issues, so the work stays tied to real tickets. More integrations on the way.",
  ],
  [
    "Can I trust what the agents say?",
    "Agents have strict guardrails preventing lying, hallucinating, and pretending to be human. Every answer is grounded in what your team actually said, and role-based access keeps visibility appropriate for founders, leads, and individual contributors.",
  ],
] as const;

export function LandingFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="shead reveal">
          <span className="kicker">FAQ</span>
          <h2>Questions, answered</h2>
        </div>
        <div className="faq reveal">
          {FAQS.map(([question, answer], index) => (
            <div
              className={`faq-item${open === index ? " open" : ""}`}
              key={question}
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => {
                  const isOpening = open !== index;
                  setOpen(open === index ? -1 : index);
                  if (isOpening) {
                    posthog.capture("faq_question_expanded", {
                      question: question,
                      question_index: index,
                    });
                  }
                }}
                aria-expanded={open === index}
              >
                <h3>{question}</h3>
                <span className="chev">
                  <ChevronDown size={20} strokeWidth={2} />
                </span>
              </button>
              <div className="faq-a">
                <div>
                  <p>{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
