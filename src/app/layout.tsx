import type { Metadata } from "next";
import { Aldrich, Geist_Mono, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { createSiteMetadata } from "@/lib/site-metadata";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = createSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("ceptly_landing_dark");if(s!==null&&!JSON.parse(s))document.documentElement.classList.remove("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistMono.variable} ${aldrich.variable} ${openSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
