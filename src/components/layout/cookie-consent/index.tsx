"use client";
import React, { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import pluginConfig from "./cookie-consent-config";
import { Button } from "components/ui/button";

declare global {
  interface Window {
    CookieConsent: typeof CookieConsent;
  }
}

const CookieConsentComponent = () => {
  useEffect(() => {
    if (window) {
      CookieConsent.run(pluginConfig);
    } else {
      console.log("CookieConsent not found");
    }
  }, []);

  return (
    <div>
      <Button
        variant={"link"}
        aria-label={"Privacy Policy"}
        onClick={CookieConsent.showPreferences}
        className="px-0 text-sm font-thin  text-gray-200 sm:text-center"
      >
        Cookies
      </Button>
    </div>
  );
};

export default CookieConsentComponent;