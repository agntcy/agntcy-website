"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "lib/segment";
import * as CookieConsent from "vanilla-cookieconsent";

export default function Analytics() {
  const pathname = usePathname();
  const cookie =
    typeof document !== "undefined" ? CookieConsent.getCookie() : null;

  useEffect(() => {
    if (cookie && cookie.categories?.includes("analytics")) {
      analytics.page();
    }
  }, [pathname, cookie]);

  return null;
}
