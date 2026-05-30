"use client";

import Image from "next/image";
import Link from "next/link";

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
              <span className="font-brand text-left text-[25px] font-bold tracking-tight">
                Ceptly
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI organizing organizations. Ceptly&apos;s agents handle
              coordination and visibility for flat teams—so ICs focus on deep
              work and leaders stay aligned without the overhead.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ceptly Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
