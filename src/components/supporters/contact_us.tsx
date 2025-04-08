"use client";
import Image from "next/image";
import Link from "next/link";
import HubspotContactForm from "../reusables/hubspot-contact-form";

const ContactUs = () => {
  return (
    <div className="container rounded-2xl md:py-36 w-[100%] md:w-[100%] lg:w-[80%] xl:w-[70%] py-12 mb-8 pl-4 pr-4 lg:py-12 lg:pl-56 lg:pr-0 xl:ml-56 xl:mr-56 xl:mb-24 xl:px-20 2xl:pl-[25%] 2xl:pr-0">
      <div className="w-full 2xl:max-w-fit py-0 pb-12">
        <div className="col-span-1 sm:pt-0 sm:pb-12 px-4 ">
          <div className="flex items-center justify-center">
            <Image
              unoptimized
              src={"/images/logo_orange.png"}
              alt="Logo"
              className="pt-4"
              height={300}
              width={300}
            />
          </div>
          <div className="py-6 flex text-white text-lg">
            <h3>If you're using AGNTCY in your organization or desire to show your support for an open, interoperable internet of agents, please fill out this form to add your company name to the list.</h3>
          </div>
        </div>
        <div className="px-0 relative py-0 bg-white rounded-xl">
          <HubspotContactForm
            region="na1"
            portalId="19886599"
            // conversion_id='15706732'
            formId="78489991-a791-474b-b7e6-38e53f887820"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
