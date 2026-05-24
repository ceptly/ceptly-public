# Ceptly Public Site

This is a Next.js application for the Ceptly public site, built with Tailwind CSS v4.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

Create a `.env.local` file for local development:

```bash
# Stripe Payment Link (optional — defaults to production link)
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/eVqcN63tWaPS0NI1QkefC00

# Waitlist (Hero form)
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

Configure trial length, success URL, and billing in the [Stripe Dashboard](https://dashboard.stripe.com/payment-links) for your payment link.

See the backend `docs/stripe-setup.md` for the full checklist (webhook URL, success URL, trial, and env vars).

```bash
# App URLs
NEXT_PUBLIC_APP_URL=https://app.ceptly.ai

# Stripe Payment Link (subscribe-first fallback)
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/eVqcN63tWaPS0NI1QkefC00

# Waitlist (Hero form)
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
