"use client";
import Link from "next/link";
import { Button } from "components/ui/button";
import CookieConsentComponent from "~/components/layout/cookie-consent";

const Footer = () => {
  return (
    <div className="bg-navy lg:bottom-2 mt-4 flex flex-col sm:mt-0 sm:justify-center md:flex-row md:space-x-5 w-full py-4">
      <div className="pb-5 container mx-auto px-2 flex flex-col justify-end lg:items-start gap-3 md:gap-4 lg:justify-between text-sm font-thin  text-gray-100">
        <p className="">Copyright © AGNTCY a Series of LF Projects, LLC</p>
        <p>
          For web site terms of use, trademark policy and other project policies
          please see{" "}
          <Link
            href="https://lfprojects.org"
            target="_blank"
            className="underline"
          >
            https://lfprojects.org
          </Link>
          .
        </p>
        <div className="flex items-end justify-end lg:items-start lg:justify-start gap-3 md:gap-4">
          <Button
            asChild
            variant={"link"}
            aria-label={"Terms & Conditions"}
            className="px-0 text-sm font-thin  text-gray-200 sm:text-center"
          >
            <Link
              href="https://lfprojects.org/policies/terms-of-use/"
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
              href="https://lfprojects.org/policies/privacy-policy/"
              target={"_blank"}
            >
              Privacy Policy
            </Link>
          </Button>
          <CookieConsentComponent />
        </div>
      </div>
    </div>
  );
};

export default Footer;
