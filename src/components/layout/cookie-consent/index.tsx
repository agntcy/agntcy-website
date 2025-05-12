"use client";
import React from "react";
import { Button } from "components/ui/button";

declare global {
  interface Window {
    Optanon: any;
    OnetrustActiveGroups: string;
  }
}

const CookieConsentComponent = () => {
  function displayConsentManager() {
    if (
      window &&
      typeof window.Optanon !== "undefined" &&
      typeof window.Optanon.ToggleInfoDisplay === "function"
    ) {
      window.Optanon.ToggleInfoDisplay();
    } else {
      console.log("CookieConsent not found");
    }
  }

  return (
    <div>
      <Button
        variant={"link"}
        aria-label={"Cookies"}
        onClick={displayConsentManager}
        className="px-0 text-sm font-thin  text-gray-200 sm:text-center"
      >
        Cookies
      </Button>
    </div>
  );
};

export default CookieConsentComponent;
