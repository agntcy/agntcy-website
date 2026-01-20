"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "components/ui/button";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent === "true") {
      setConsent(true);
      setShowBanner(false);
    } else if (storedConsent === "false") {
      setConsent(false);
      setShowBanner(false);
    } else {
      setConsent(null);
      setShowBanner(true);
    }
  }, []);

  const accept = () => {
    setConsent(true);
    setShowBanner(false);
    localStorage.setItem("cookie_consent", "true");
  };

  const decline = () => {
    setConsent(false);
    setShowBanner(false);
    localStorage.setItem("cookie_consent", "false");
  };

  return (
    <>
      {consent === true && <GoogleAnalytics gaId="G-ZC5LS8XQRZ" />}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background border-t">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience and analyze our traffic.
                Please choose whether you accept our use of cookies.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={decline}>
                Decline
              </Button>
              <Button onClick={accept}>
                Accept
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={decline}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
