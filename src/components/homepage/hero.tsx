import Image from "next/image";
// import RenderLogos from "../reusables/render-logo";
// import { logos } from "~/data/members";
import { LinkTrackers } from "../reusables/link-trackers";
import { LogoMarquee } from "../reusables/logo-marquee";

const Hero = () => {
  return (
    <div className="mx-auto container bg-[#00142B] md:py-36 w-screen max-md:pt-12 max-md:pb-3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-36 w-full py-0">
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
              href="/contactus"
              segmentMsg="agntcy join us clicked"
              segmentOpt={{
                link_label: "Join us",
                location: "body",
                resource_interaction: "view AGNTCY Membership Intake Form",
              }}
            >
              <div className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-7 rounded-full">
                Join us
              </div>
            </LinkTrackers>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 px-4 relative">
          <h1 className="text-[#FBAB2C] text-3xl md:text-5xl">
            An open source collective for inter-agent collaboration.
          </h1>
          <div className="text-white py-10 text-xl md:text-2xl">
            The AGNTCY is where we are building the Internet of Agents to be: A
            diverse, collaborative space to innovate, develop, and maintain
            software components and services for agentic workflows and
            multi-agent software.
          </div>
          <div className="text-[#FBAB2C] pb-6 underline text-base md:text-xl">
            <LinkTrackers
              href="https://outshift.cisco.com/blog/mcp-interoperability-multi-agent-software-observability-agntcy"
              target="_blank"
              segmentMsg="agntcy learn more clicked"
              segmentOpt={{
                link_label: "Learn more about AGNTCY's latest code drop",
                location: "body",
                resource_interaction: "Visit to the outshift blog page",
              }}
            >
              Learn more about AGNTCY's latest code drop
            </LinkTrackers>
          </div>
        </div>
      </div>
      {/* <div className="px-5 md:px-8 lg:px-20">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-20">
          GET INVOLVED
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-6 gap-3 pb-12 md:pb-3">
          {RenderLogos(
            logos.slice(0, 30),
            "lg:self-center lg:flex lg:justify-center lg:pb-4"
          )}
          {RenderLogos(logos.slice(30, 33), "lg:hidden")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-5 lg:px-20 gap-3 pb-8 md:pb-3">
          {RenderLogos(
            logos.slice(30, 33),
            "hidden lg:self-center lg:flex lg:justify-center"
          )}
        </div>
      </div> */}
      <LogoMarquee />
    </div>
  );
};

export default Hero;
