"use client";
import Image from "next/image";
import { LinkTrackers } from "~/components/reusables/link-trackers";

const logos = [
  {
    name: "outshift",
    src: "/images/outshift_logo.png",
    width: 147,
    height: 60,
  },
  {
    name: "Langchain",
    src: "/images/Langchain_updated.png",
    width: 203,
    height: 32,
  },
  {
    name: "Galileo",
    src: "/images/Galileo.png",
    width: 147,
    height: 32,
  },
  {
    name: "llamacloud",
    src: "/images/llamacloud-light.svg",
    width: 200,
    height: 37,
  },
  {
    name: "Glean",
    src: "/images/Glean.svg",
    width: 82,
    height: 33,
  },
];

const Hero = () => {
  return (
    <div className="mx-auto container bg-[#00142B] md:py-36 w-screen py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-36 w-full py-1">
        <div className="col-span-1 sm:pt-0 sm:pb-12 px-4 ">
          <div className="">
            <Image
              unoptimized
              src={"/images/logo_big.png"}
              alt="Logo"
              className="pt-4"
              height={450}
              width={450}
            />
          </div>
          <div className="py-12 flex">
            <LinkTrackers
              href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I'd like to learn more about how my organization can become members of the AGNTCY open source collective."
              segmentMsg="agntcy join us clicked"
              segmentOpt={{
                link_label: "Join us",
                location: "body",
                resource_interaction: "email signup",
              }}
            >
              <div className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-7 rounded-3xl">
                Join us
              </div>
            </LinkTrackers>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 px-4 relative">
          <div className="text-[#FBAB2C] text-3xl md:text-5xl">
            An open source collective for inter-agent collaboration.
          </div>
          <div className="text-white py-10 text-xl md:text-2xl">
            The AGNTCY is where we are building the Internet of Agents to be
            accessible for all: A diverse, collaborative space to innovate,
            develop, and maintain software components and services for agentic
            workflows and multi-agent applications.
          </div>
          <div className="text-[#FBAB2C] pb-6 underline text-base md:text-xl">
            <LinkTrackers
              href="https://outshift.cisco.com/blog/building-the-internet-of-agents-introducing-the-AGNTCY?utm_campaign=fy25q3_agntcy_ww_owned-media_agntcy-lp-blog_website&utm_channel=website"
              target="_blank"
              segmentMsg="agntcy learn more clicked"
              segmentOpt={{
                link_label: "Learn more about AGNTCY and what we're launching",
                location: "body",
                resource_interaction: "Visit to the outshift blog page",
              }}
            >
              Learn more about AGNTCY and what we're launching
            </LinkTrackers>
          </div>
          <div className="text-white text-[16px] pb-6 pt-4">GET INVOLVED</div>
          <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-3">
            {logos.map((logo, i) =>
              i < 3 ? (
                <div key={i}>
                  <Image
                    key={logo.name}
                    unoptimized
                    src={logo.src}
                    alt={logo.name}
                    className="pt-4"
                    height={logo.height}
                    width={logo.width}
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className={`lg:transform ${
                    i === 4 ? "lg:translate-x-[70%]" : "lg:translate-x-[50%]"
                  } `}
                >
                  <Image
                    key={logo.name}
                    unoptimized
                    src={logo.src}
                    alt={logo.name}
                    className="pt-4"
                    height={logo.height}
                    width={logo.width}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="block -mt-1">
        <Image
          unoptimized
          src={"/images/hero_border.png"}
          alt="Logo"
          className="absolute right-0 bottom-0"
          height={12}
          width={800}
        />
      </div>
    </div>
  );
};

export default Hero;
