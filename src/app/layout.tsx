import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Analytics from "components/reusables/analytics";
import Navbar from "../components/layout/nav-bar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased relative flex min-h-screen flex-col bg-[#00142B]`}
      >
        <Suspense fallback={null}>
          <Navbar />
          {children}
        </Suspense>
      </body>
      <Analytics />
    </html>
  );
}

export const metadata: Metadata = {
  title: "Agntcy Website",
  description: "An open source collective for inter-agent collaboration.",
  openGraph: {
    title: "Agntcy Website",
    description: "An open source collective for inter-agent collaboration.",
    url: `https://agntcy.org`,
    siteName: "Agntcy",
    images: [
      {
        url: `https://agntcy.org/logo/preview-thumbnail-new.png`,
        alt: "Agntcy",
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
    title: "Agntcy Website",
    description: "An open source collective for inter-agent collaboration.",
    creator: "@outshiftbycisco",
    images: [
      "https://agntcy.org/logo/preview-thumbnail-new.png",
    ],
  },
  metadataBase: new URL("https://agntcy.org/"),
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};
