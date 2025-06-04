"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "lib/segment";

export default function Analytics() {
  const [oneTrustLoaded, setOneTrustLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window && window.OnetrustActiveGroups) {
      setOneTrustLoaded(true);
    } else {
      // If not, set up an event listener or polling
      const checkOneTrustLoaded = () => {
        if (window && window.OnetrustActiveGroups) {
          setOneTrustLoaded(true);
          window.removeEventListener('onetrustloaded', checkOneTrustLoaded);
        }
      };
      window.addEventListener('onetrustloaded', checkOneTrustLoaded);
    }
  }, []);

  useEffect(() => {
    if (window && window.OnetrustActiveGroups?.includes("2")) {
      analytics.page();
    }
  }, [pathname, oneTrustLoaded]);

  return null;
}
