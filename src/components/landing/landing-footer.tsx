import Link from "next/link";

import { Brand } from "./brand";

export function LandingFooter() {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft-top">
          <div className="ft-brand">
            <Brand />
            <p className="slogan">AI organizing organizations.</p>
            <p>
              Ceptly&apos;s agents handle coordination and visibility for flat
              teams&mdash;so ICs focus on deep work and leaders stay aligned
              without the overhead.
            </p>
          </div>
          <div className="ft-cols">
            <div className="ft-col">
              <span className="h">Product</span>
              <Link href="#how">How it works</Link>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#faq">FAQ</Link>
            </div>
            {/* <div className="ft-col">
              <span className="h">Company</span>
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact</Link>
            </div> */}
            <div className="ft-col">
              <span className="h">Legal</span>
              <Link href="/privacy">Privacy</Link>
              {/* <Link href="#">Terms</Link> */}
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <span className="copy">
            &copy; {new Date().getFullYear()} Ceptly Inc. All rights reserved.
          </span>
          <Link href="/privacy" className="copy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
