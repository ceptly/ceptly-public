import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ceptly.com";

export const SITE_NAME = "Ceptly";

export const DEFAULT_TITLE = "Ceptly — AI Agents for the Management Layer";

export const DEFAULT_DESCRIPTION =
  "Deploy AI agents that run the management layer. Ceptly's scrum masters and project managers handle standups, follow-ups, and org intelligence in Slack — so your team ships work instead of sitting in meetings.";

export const KEYWORDS = [
  "AI agents for teams",
  "AI project manager",
  "AI scrum master",
  "management automation",
  "flat organization",
  "Slack check-ins",
  "async standups",
  "org intelligence",
  "Linear integration",
  "startup management",
];

export function createSiteMetadata(overrides: Metadata = {}): Metadata {
  const description =
    typeof overrides.description === "string"
      ? overrides.description
      : DEFAULT_DESCRIPTION;

  const pageTitle =
    typeof overrides.title === "string" ? overrides.title : DEFAULT_TITLE;

  const openGraphTitle =
    typeof overrides.openGraph?.title === "string"
      ? overrides.openGraph.title
      : typeof overrides.title === "string"
        ? `${overrides.title} — ${SITE_NAME}`
        : DEFAULT_TITLE;

  const canonical =
    typeof overrides.alternates?.canonical === "string"
      ? overrides.alternates.canonical
      : SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title:
      overrides.title !== undefined
        ? overrides.title
        : {
            default: DEFAULT_TITLE,
            template: `%s — ${SITE_NAME}`,
          },
    description,
    keywords: KEYWORDS,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: openGraphTitle,
      description,
      ...overrides.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title:
        typeof overrides.twitter?.title === "string"
          ? overrides.twitter.title
          : openGraphTitle,
      description:
        typeof overrides.twitter?.description === "string"
          ? overrides.twitter.description
          : description,
      ...overrides.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
