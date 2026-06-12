<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Ceptly marketing site. Here's a summary of everything that was set up:

**Infrastructure changes:**
- Installed `posthog-js` (client-side) and `posthog-node` (server-side)
- Created `instrumentation-client.ts` at the project root — initializes PostHog for all client components via Next.js 15.3+ instrumentation, with session replay and error tracking enabled
- Created `src/lib/posthog-server.ts` — singleton PostHog Node client for server actions and API routes
- Updated `next.config.ts` with reverse-proxy rewrites (`/ingest/*` → PostHog) to improve ad-blocker resilience and capture accuracy
- Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` in `.env.local`

**Component changes:**
- Added `"use client"` directive to `landing-header.tsx`, `landing-pricing.tsx`, and `landing-final-cta.tsx` so PostHog `capture()` calls can run client-side
- All event captures use `onClick` handlers on Link/Button elements — no `useEffect` side-effects

## Events instrumented

| Event | Description | File |
|---|---|---|
| `cta_clicked` | User clicked a "Start free" CTA in the hero section. Properties: `location: "hero"`, `cta_text: "Start free"` | `src/components/landing/landing-hero.tsx` |
| `cta_clicked` | User clicked "Start free" or "Sign in" in the header. Properties: `location: "header"`, `cta_text` | `src/components/landing/landing-header.tsx` |
| `sign_in_clicked` | User clicked "Sign in" in the header. Properties: `location: "header"` | `src/components/landing/landing-header.tsx` |
| `cta_clicked` | User clicked "Start free" in the landing pricing section. Properties: `location: "pricing_landing"`, `cta_text: "Start free"` | `src/components/landing/landing-pricing.tsx` |
| `cta_clicked` | User clicked "Start free" in the final CTA section. Properties: `location: "final_cta"`, `cta_text: "Start free"` | `src/components/landing/landing-final-cta.tsx` |
| `faq_question_expanded` | User expanded an FAQ item. Properties: `question` (text), `question_index` | `src/components/landing/landing-faq.tsx` |
| `cta_clicked` | User clicked "Create account" on the standalone pricing page. Properties: `location: "pricing_page"`, `cta_text: "Create account"` | `src/components/Pricing.tsx` |
| `stripe_subscribe_clicked` | User clicked "Subscribe first via Stripe" — bypassing account creation. Properties: `location: "pricing_page"` | `src/components/Pricing.tsx` |

## Next steps

We've built a dashboard and five insights to monitor user behavior from day one:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/463308/dashboard/1691621)

### Insights

| Insight | Purpose | Link |
|---|---|---|
| CTA Clicks by Location | Which CTA placement drives the most clicks (hero, header, pricing, final CTA) | [View](https://us.posthog.com/project/463308/insights/gmbWBFo9) |
| Visitor → CTA Conversion Funnel | What % of landing page visitors click any CTA | [View](https://us.posthog.com/project/463308/insights/YVJl9Sq6) |
| Sign In vs Start Free Clicks | Are visitors new prospects or returning users? | [View](https://us.posthog.com/project/463308/insights/hWrfZ3ny) |
| FAQ Engagement | Which FAQ questions get the most clicks — a proxy for conversion friction | [View](https://us.posthog.com/project/463308/insights/npyiZBNJ) |
| Stripe Direct Subscribe vs Create Account | On the pricing page, do users prefer to pay via Stripe first or create an account first | [View](https://us.posthog.com/project/463308/insights/FwCGVgA1) |

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
