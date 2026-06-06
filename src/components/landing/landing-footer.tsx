import Link from "next/link";

import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/stripe-config";

import { Brand } from "./brand";

export function LandingFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>AI organizing organizations.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Product</h4>
              <Link href="/#how">How it works</Link>
              <Link href="/#features">Features</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link href="/privacy">Privacy</Link>
            </div>
            <div className="footer-col">
              <h4>Get started</h4>
              <Link href={APP_LOGIN_URL}>Sign in</Link>
              <Link href={APP_SIGNUP_URL}>Start free</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ceptly</span>
          <span>Built for flat teams</span>
        </div>
      </div>
    </footer>
  );
}
