import ContactUs from "../../components/supporters/contact_us";
import type { Metadata } from "next";

export default function Supporters() {
  return (
    <div className="container mx-auto items-center justify-center bg-navy">
      <ContactUs />
    </div>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org | Contact Us",
  alternates: {
    canonical: "/contactus",
  },
};