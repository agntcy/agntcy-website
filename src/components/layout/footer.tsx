"use client";
import Link from "next/link";
import { Button } from "components/ui/button";
import { cn } from "lib/utils";
import { pageFrameClassName } from "lib/layout";

const Footer = () => {
  return (
    <div className="bg-bg lg:bottom-2 mt-4 flex w-full flex-col border-t border-white/20 py-4 sm:mt-0 sm:justify-center md:flex-row md:space-x-5">
      <div
        className={cn(
          pageFrameClassName,
          "flex flex-col justify-end gap-3 pb-5 pt-5 text-sm font-thin text-gray-100 md:gap-4 lg:items-start lg:justify-between"
        )}
      >
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
