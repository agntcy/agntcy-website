"use client";
import React, { useEffect, useState } from "react";
import "~/styles/form.css";

declare global {
  interface Window {
    lintrk: any;
  }
}

const HubspotContactForm = ({
  region,
  portalId,
  formId,
}: { portalId: string; formId: string; region: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/19886599.js";
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      setLoading(false);
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {loading && <div className="loader">Loading form...</div>}
      <div
        className="hs-form-frame"
        data-region={region}
        data-form-id={formId}
        data-portal-id={portalId}
      ></div>
    </div>
  );
};

export default HubspotContactForm;
