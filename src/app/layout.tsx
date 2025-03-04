import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Analytics from "components/reusables/analytics";
import Navbar from "./navBar";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
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
        className={`${roboto.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
