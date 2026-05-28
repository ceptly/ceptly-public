import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createSiteMetadata, SITE_URL } from "@/lib/site-metadata";

const PRIVACY_TITLE = "Privacy Policy";
const PRIVACY_DESCRIPTION =
  "How Ceptly collects, uses, and protects personal information on ceptly.ai and in the Ceptly service.";

export const metadata: Metadata = createSiteMetadata({
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: `${PRIVACY_TITLE} — Ceptly`,
    description: PRIVACY_DESCRIPTION,
    url: `${SITE_URL}/privacy`,
  },
  twitter: {
    title: `${PRIVACY_TITLE} — Ceptly`,
    description: PRIVACY_DESCRIPTION,
  },
});

const LAST_UPDATED = "May 27, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 space-y-3">
              <p className="text-sm text-muted-foreground">
                Last updated: {LAST_UPDATED}
              </p>
              <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Privacy Policy
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ceptly Inc. (&ldquo;Ceptly,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                protect personal information when you visit{" "}
                <Link
                  href="/"
                  className="text-foreground underline underline-offset-4 hover:text-primary"
                >
                  ceptly.ai
                </Link>{" "}
                (the &ldquo;Site&rdquo;) and when you use the Ceptly team
                coordination service at app.ceptly.ai (the
                &ldquo;Service&rdquo;).
              </p>
            </div>

            <div className="space-y-10">
              <Section title="1. Information we collect">
                <p>
                  <strong className="font-medium text-foreground">
                    Information you provide.
                  </strong>{" "}
                  When you join our waitlist, create an account, subscribe, or
                  contact us, we may collect your name, email address, password
                  (stored in hashed form), workspace and team details, billing
                  information processed by our payment provider, and any
                  messages you send us.
                </p>
                <p>
                  <strong className="font-medium text-foreground">
                    Service and integration data.
                  </strong>{" "}
                  When you connect third-party tools such as Slack, Linear, or
                  Jira, we receive data needed to provide the Service—for
                  example, workspace identifiers, user profile information,
                  check-in responses, conversation content, and issue metadata
                  from connected project-management tools. We only access data
                  that your workspace administrators authorize through those
                  integrations.
                </p>
                <p>
                  <strong className="font-medium text-foreground">
                    Automatically collected information.
                  </strong>{" "}
                  When you use the Site or Service, we may collect device and
                  usage information such as IP address, browser type, pages
                  viewed, referring URLs, and approximate location derived from
                  IP address. We use Vercel Analytics on the Site to understand
                  aggregate traffic patterns.
                </p>
              </Section>

              <Section title="2. How we use information">
                <p>We use personal information to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Provide, operate, maintain, and improve the Service;</li>
                  <li>
                    Run AI-assisted check-ins, digests, and team intelligence
                    features you enable;
                  </li>
                  <li>
                    Process subscriptions and communicate about your account;
                  </li>
                  <li>
                    Send product updates, security notices, and support
                    responses;
                  </li>
                  <li>
                    Monitor usage, prevent fraud, and enforce our terms; and
                  </li>
                  <li>Comply with legal obligations.</li>
                </ul>
                <p>
                  We do not sell your personal information. We do not use your
                  workspace content to train general-purpose AI models.
                </p>
              </Section>

              <Section title="3. How we share information">
                <p>
                  We share personal information only as needed to run Ceptly,
                  including with:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="font-medium text-foreground">
                      Service providers
                    </strong>{" "}
                    such as hosting, analytics, payment, email, and AI
                    infrastructure partners that process data on our behalf
                    under contractual safeguards;
                  </li>
                  <li>
                    <strong className="font-medium text-foreground">
                      Connected integrations
                    </strong>{" "}
                    you authorize, such as Slack, Linear, or Jira, according to
                    the permissions you grant;
                  </li>
                  <li>
                    <strong className="font-medium text-foreground">
                      Legal and safety recipients
                    </strong>{" "}
                    when required by law or to protect rights, safety, and
                    security; and
                  </li>
                  <li>
                    <strong className="font-medium text-foreground">
                      Business transfers
                    </strong>{" "}
                    in connection with a merger, acquisition, or asset sale,
                    subject to this Privacy Policy.
                  </li>
                </ul>
              </Section>

              <Section title="4. AI processing">
                <p>
                  Certain Ceptly features use third-party AI services to
                  summarize check-ins, answer team questions, and assist with
                  coordination workflows. Content submitted through those
                  features may be transmitted to our AI providers for
                  processing solely to deliver the requested functionality for
                  your workspace.
                </p>
              </Section>

              <Section title="5. Data retention">
                <p>
                  We retain personal information for as long as your account is
                  active or as needed to provide the Service, comply with legal
                  obligations, resolve disputes, and enforce our agreements.
                  When you delete your account or disconnect an integration, we
                  delete or anonymize associated data within a reasonable period,
                  unless we must retain it for legal or security reasons.
                </p>
              </Section>

              <Section title="6. Security">
                <p>
                  We use administrative, technical, and organizational measures
                  designed to protect personal information, including
                  encryption in transit, access controls, and secure credential
                  storage. No method of transmission or storage is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </Section>

              <Section title="7. Your choices and rights">
                <p>
                  Depending on where you live, you may have rights to access,
                  correct, delete, or export your personal information, or to
                  object to or restrict certain processing. Workspace
                  administrators can manage integrations, team membership, and
                  many data settings within the Service.
                </p>
                <p>
                  To exercise your privacy rights, contact us at{" "}
                  <a
                    href="mailto:privacy@ceptly.ai"
                    className="text-foreground underline underline-offset-4 hover:text-primary"
                  >
                    privacy@ceptly.ai
                  </a>
                  . We may need to verify your identity before responding.
                </p>
              </Section>

              <Section title="8. International transfers">
                <p>
                  Ceptly is based in the United States. If you access the Site
                  or Service from outside the United States, your information
                  may be transferred to, stored in, and processed in the United
                  States and other countries where we or our service providers
                  operate.
                </p>
              </Section>

              <Section title="9. Children">
                <p>
                  The Site and Service are not directed to children under 16,
                  and we do not knowingly collect personal information from
                  children under 16. If you believe we have collected such
                  information, contact us and we will delete it.
                </p>
              </Section>

              <Section title="10. Changes to this policy">
                <p>
                  We may update this Privacy Policy from time to time. When we
                  do, we will revise the &ldquo;Last updated&rdquo; date above
                  and, where appropriate, provide additional notice. Your
                  continued use of the Site or Service after changes become
                  effective means you accept the updated policy.
                </p>
              </Section>

              <Section title="11. Contact us">
                <p>
                  If you have questions about this Privacy Policy or our privacy
                  practices, contact us at:
                </p>
                <p>
                  Ceptly Inc.
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:privacy@ceptly.ai"
                    className="text-foreground underline underline-offset-4 hover:text-primary"
                  >
                    privacy@ceptly.ai
                  </a>
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
