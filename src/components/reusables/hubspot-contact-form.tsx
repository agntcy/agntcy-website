"use client";
import React, { useEffect, useState } from "react";
import "~/styles/form.css";
// import { analytics } from "lib/segment";
// import { useRouter } from "next/navigation";

declare global {
  interface Window {
    lintrk: any;
  }
}

const HubspotContactForm = ({
  region,
  portalId,
  formId,
  // segmentMsg = "AGNTCY supporter details submitted",
}: { portalId: string; formId: string; region: string; }) => {
  // const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const element = document.getElementsByClassName("hsfc-TextField");
    if(element)
    {
      setLoading(false);
    }
  },[])

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @ts-expect-error: Third-party library
      if (window.hbspt) {
        // @ts-expect-error: Third-party library
        window.hbspt.forms.create({
          target: `#hubspotForm-${formId}`,
          // onFormSubmit: () => {
          //   if (conversion_id) {
          //     window.lintrk("track", { conversion_id: conversion_id });
          //   }
          // },
          // onFormSubmitted: (_, data) => {
          //   if formId is 7f3330bd-39c5-4358-b56d-44b90ae62e8e, redirect to thank you page
          //   if (formId == "7f3330bd-39c5-4358-b56d-44b90ae62e8e") {
          //     router.push("/outshift-newsletter-thank-you");
          //   }
          //   const submissionValues = data.submissionValues;

          //   Segment Identify Call
          //   analytics.identify({
          //     firstname: submissionValues.firstname,
          //     lastname: submissionValues.lastname,
          //     email: submissionValues.email,
          //     jobtitle: submissionValues.jobtitle,
          //     agreed_to_pii:
          //       submissionValues.consent_marketing_emails_and_privacy_policy,
          //   });

          //   Segment Track Call
          //   analytics.track(segmentMsg, {
          //     firstname: submissionValues.firstname,
          //     lastname: submissionValues.lastname,
          //     email: submissionValues.email,
          //     jobtitle: submissionValues.jobtitle,
          //     agreed_to_pii:
          //       submissionValues.consent_marketing_emails_and_privacy_policy,
          //   });
          // },
          ...{ region: region, portalId: portalId, formId: formId },
        });
      }
      setTimeout(() => {
        const formElement = document.querySelector(`#hubspotForm-${formId}`);
        if (formElement) {
          // Remove invalid role attributes
          const invalidRoles =
            formElement.querySelectorAll('[role="checkbox"]');
          invalidRoles.forEach((el) => el.removeAttribute("role"));
        }
      }, 500);
    });
  }, [region, portalId, formId]);

  return (
    <div>
    {loading && <div className="loader">Loading form...</div>}
    <div id={`hubspotForm-${formId}`}></div>
    </div>
  );
};

export default HubspotContactForm;
