import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "components/layout/nav-bar";
import Footer from "components/layout/footer";
import CookieBanner from "components/layout/cookie-banner";

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const cspHeader = `
  default-src 'self';
  connect-src 'self' https://api.github.com https://www.google-analytics.com https://analytics.google.com;
  font-src 'self' data: https://*.gstatic.com;
  frame-src 'self' https://players.brightcove.net https://www.youtube.com https://*.hsforms.com https://*.hsforms.net https://*.hubspot.net https://*.hubspot.com https://*.cisco.com http://*.hsforms.net;
  frame-ancestors 'none';
  block-all-mixed-content;
  base-uri 'self';
  style-src 'self' 'unsafe-inline' https://*.googleapis.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
  img-src 'self' blob: data: https://*.amazonaws.com https://*.youtube.com https://*.ytimg.com https://www.google-analytics.com;
`.replace(/\n/g, "");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={cspHeader} />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="origin-when-cross-origin" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Permissions-Policy"
          content="clipboard-read=*, clipboard-write=*"
        />
        <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      </head>
      <body
        className={`${roboto.className} antialiased relative flex min-h-screen flex-col bg-bg`}
      >
        <Suspense fallback={null}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
        <CookieBanner />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org",
  description:
    "AGNTCY is building the open-source infrastructure stack for the Internet of Agents—enabling discovery, identity, messaging, and observability across frameworks.",
  keywords:
    "AI agents, multi-agent systems, agent collaboration, open-source AI, agent infrastructure, agent discovery, agent messaging, agent identity, agent observability, AGNTCY",
  openGraph: {
    title: "AGNTCY.org",
    description: "An open source collective for inter-agent collaboration.",
    url: `https://agntcy.org`,
    siteName: "AGNTCY",
    images: [
      {
        url: `https://agntcy.org/logo/preview-thumbnail-new.png`,
        alt: "AGNTCY",
        type: "image/png",
        width: 942,
        height: 530,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGNTCY.org",
    description: "An open source collective for inter-agent collaboration.",
    creator: "@outshiftbycisco",
    images: ["https://agntcy.org/logo/preview-thumbnail-new.png"],
  },
  metadataBase: new URL("https://agntcy.org/"),
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};
