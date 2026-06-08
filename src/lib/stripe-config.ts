export const STRIPE_PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ??
  "https://buy.stripe.com/eVqcN63tWaPS0NI1QkefC00";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://ceptly.ai";

export const APP_SIGNUP_URL = `${APP_URL}/auth?mode=sign-up`;
export const APP_LOGIN_URL = `${APP_URL}/auth`;
