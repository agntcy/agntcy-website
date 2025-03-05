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

export const metadata: Metadata = {
  title: "Agntcy Website",
  description: "Internet of Agents Collective",
};

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
