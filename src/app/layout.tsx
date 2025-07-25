import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Analytics from "components/reusables/analytics";
import Navbar from "components/layout/nav-bar";
import Footer from "components/layout/footer";
import Scripts from "~/components/layout/scripts";
import Script from "next/script";
// import { Banner } from "~/components/layout/banner";

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
        <Script
          id="cisco-ctm-core"
          type="text/javascript"
          src="https://www.cisco.com/c/dam/cdc/t/ctm-core.js"
          strategy="beforeInteractive"
        ></Script>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <Scripts />
      </head>
      <body
        className={`${roboto.className} antialiased relative flex min-h-screen flex-col bg-navy`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M725WDCP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense fallback={null}>
          {/* <Banner /> */}
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
      <Analytics />
    </html>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org",
  description: "An open source collective for inter-agent collaboration.",
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
