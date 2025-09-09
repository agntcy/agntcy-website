import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "components/layout/nav-bar";
import Footer from "components/layout/footer";

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body
        className={`${roboto.className} antialiased relative flex min-h-screen flex-col bg-bg`}
      >
        <Suspense fallback={null}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org",
  description: "AGNTCY is building the open-source infrastructure stack for the Internet of Agents—enabling discovery, identity, messaging, and observability across frameworks.",
  keywords: "AI agents, multi-agent systems, agent collaboration, open-source AI, agent infrastructure, agent discovery, agent messaging, agent identity, agent observability, AGNTCY",
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
