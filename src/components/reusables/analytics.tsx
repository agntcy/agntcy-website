"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "lib/segment";
import * as CookieConsent from "vanilla-cookieconsent";

export default function Analytics() {
  const pathname = usePathname();
  const cookie = CookieConsent.getCookie();

  useEffect(() => {
    console.log(cookie);
    if (cookie.categories.includes("analytics")) {
      analytics.page();
    }
  }, [pathname]);

  return null;
}
