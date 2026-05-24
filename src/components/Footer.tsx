"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/parallax-light.png"
                alt="Ceptly Logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold tracking-tight">Ceptly</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              AI organizing organizations. Ceptly&apos;s agents handle
              coordination and visibility for flat teams—so ICs focus on deep
              work and leaders stay aligned without the overhead.
            </p>
            <div className="flex gap-4">
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ceptly Inc. All rights reserved.
          </p>
          {/*<div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
