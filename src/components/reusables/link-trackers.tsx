"use client";
import React, { AnchorHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "lib/segment";
import * as CookieConsent from "vanilla-cookieconsent";

interface LinkTrackersProps extends LinkProps {
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  className?: string;
  segmentMsg: string;
  segmentOpt: Record<string, any>;
  children: React.ReactNode;
}

export const LinkTrackers: React.FC<LinkTrackersProps> = ({
  href,
  target = "_self",
  className,
  segmentMsg,
  segmentOpt,
  children,
  ...linkProps
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cookie = CookieConsent.getCookie();

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const currentPath = pathname || window.location.pathname;
    const queryString = searchParams?.toString();
    const fullPath = queryString
      ? `${currentPath}?${queryString}`
      : currentPath;

    if (target === "_blank") e.preventDefault();

    if (cookie.categories.includes("analytics")) {
      analytics.track(segmentMsg, {
        ...segmentOpt,
        url: fullPath,
        page_base_url: baseUrl,
        page_full_url: baseUrl + fullPath,
      });
    }

    if (target === "_blank") {
      window.open(href.toString(), target);
    }
  };

  return (
    <Link
      href={
        href.toString().startsWith("#")
          ? "/" +
            `${typeof window !== "undefined" ? window.location.search : ""}` +
            href
          : href.toString().startsWith("mailto")
          ? href
          : href +
            `${typeof window !== "undefined" ? window.location.search : ""}`
      }
      {...linkProps}
      target={target}
      onClick={handleOnClick}
      className={className}
    >
      {children}
    </Link>
  );
};
