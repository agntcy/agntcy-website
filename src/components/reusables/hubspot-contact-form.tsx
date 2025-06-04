"use client";
import React, { useEffect, useState } from "react";
import { analytics } from "lib/segment";
import { usePathname, useSearchParams } from "next/navigation";

import "~/styles/form.css";

declare global {
  interface Window {
    lintrk: any;
    HubSpotFormsV4: any;
  }
}

const HubspotContactForm = ({
  region,
  portalId,
  formId,
}: {
  portalId: string;
  formId: string;
  region: string;
}) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/19886599.js";
    script.defer = true;
    document.body.appendChild(script);

    const handleFormSuccess = (event: Event) => {
      const queryString = searchParams.toString();

      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      const currentPath = pathname || window.location.pathname;
      const fullPath = queryString
        ? `${currentPath}?${queryString}`
        : currentPath;

      window.HubSpotFormsV4.getFormFromEvent(event)
        .getFormFieldValues()
        .then((submissionValues: any) => {
          const valuesObj = submissionValues.reduce(
            (acc: Record<string, any>, field: { name: string; value: any }) => {
              acc[field.name] = field.value;
              return acc;
            },
            {}
          );

          // Segment Identify Call
          analytics.identify({
            firstname: valuesObj["0-1/firstname"],
            lastname: valuesObj["0-1/lastname"],
            email: valuesObj["0-1/email"],
            "company name": valuesObj["0-1/company"],
            jobtitle: valuesObj["0-1/jobtitle"],
            "agreed to org's logo feature":
              valuesObj["0-1/agntcy_logo_permission"],
            agreed_to_pii:
              valuesObj["0-1/consent_marketing_emails_and_privacy_policy"],
          });

          // Segment Track Call
          analytics.track("agntcy form submit clicked", {
            link_label: "Submit",
            location: "body",
            page_base_url: baseUrl,
            page_full_url: baseUrl + fullPath,
            resource_interaction: "Final form submission",
          });
        });
    };

    script.addEventListener("load", () => {
      // Add the event listener after the script loads
      window.addEventListener(
        "hs-form-event:on-submission:success",
        handleFormSuccess
      );
      setLoading(false);
    });

    return () => {
      document.body.removeChild(script);
      window.removeEventListener(
        "hs-form-event:on-submission:success",
        handleFormSuccess
      );
    };
  }, [pathname, searchParams]);

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
