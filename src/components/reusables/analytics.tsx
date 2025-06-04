"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "lib/segment";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.OnetrustActiveGroups == undefined ||
        window.OnetrustActiveGroups?.includes("2"))
    ) {
      analytics.page();
    }
  }, [pathname]);

  return null;
}
