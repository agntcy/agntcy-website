"use client";
import Link from "next/link";
import { Button } from "components/ui/button";
import CookieConsentComponent from "~/components/layout/cookie-consent";

const Footer = () => {
  return (
    <div className="bg-navy lg:bottom-2 mt-4 flex flex-col sm:mt-0 sm:justify-center md:flex-row md:space-x-5 w-full py-4">
      <div className="container mx-auto px-2 flex items-end justify-end lg:items-start lg:justify-start gap-3 md:gap-4">
        <Button
          asChild
          variant={"link"}
          aria-label={"Terms & Conditions"}
          className="px-0 text-sm font-thin  text-gray-200 sm:text-center"
        >
          <Link
            href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html"
            target={"_blank"}
          >
            Terms & Conditions
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          aria-label={"Privacy Policy"}
          className="px-0 text-sm font-thin  text-gray-200 sm:text-center"
        >
          <Link
            href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html"
            target={"_blank"}
          >
            Privacy Policy
          </Link>
        </Button>
        <CookieConsentComponent />
      </div>
    </div>
  );
};

export default Footer;
