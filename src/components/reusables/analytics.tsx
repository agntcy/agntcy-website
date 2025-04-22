"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "lib/segment";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    analytics.page();
  }, [pathname]);

  return null;
}
