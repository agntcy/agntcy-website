import Image from "next/image";
import { LinkTrackers } from "../reusables/link-trackers";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { formativeMembers } from "~/data/members";
import RenderLogos from "../reusables/render-logo";
import { Marquee } from "components/ui/marquee";
import { frameworkFeatures } from "~/data/homepage-data";

const Hero = () => {
  return (
    <>
      <div className="mx-auto container max-w-7xl bg-bg md:py-24 max-md:pt-12 max-md:pb-3">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-5 lg:gap-36 w-full py-0">
          <div className="col-span-1 sm:pt-0 sm:pb-12 px-4 ">
            <div className="max-w-xs mx-auto">
              <AspectRatio ratio={280 / 420}>
                <Image
                  unoptimized
                  src={"/images/homepage/hero-diagram.png"}
                  alt="Logo"
                  fill
                />
              </AspectRatio>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 px-4 relative">
            <div className="max-w-md">
              <AspectRatio ratio={416 / 95}>
                <Image
                  unoptimized
                  src={"/images/homepage/agntcy-logo-white.png"}
                  alt="Logo"
                  fill
                />
              </AspectRatio>
            </div>
            <h1 className="text-[#FBAB2C] pt-10 font-medium text-3xl md:text-5xl">
              Building infrastructure for the Internet of Agents 
            </h1>
            <div className="text-white py-10 text-xl">
              The AGNTCY project provides the complete infrastructure stack for
              agent collaboration—discovery, identity, messaging, and
              observability that works across any vendor or framework. It is the
              foundational layer that lets specialized agents find each other,
              verify capabilities, and work together on complex problems.
            </div>
            <div className="pb-12 flex">
              <LinkTrackers
                target="_blank"
                href="https://github.com/agntcy"
                segmentMsg="agntcy join the build clicked"
                segmentOpt={{
                  link_label: "Join the build",
                  location: "body",
                  resource_interaction: "Visit GitHub repository",
                }}
              >
                <div className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-9 rounded-full">
                  Join the build
                </div>
              </LinkTrackers>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shadow-[0_8px_15px_#187adc8f,0_-8px_15px_#187adc8f]">
        <div className="container max-sm:px-3 mx-auto py-6 flex items-center gap-2">
          <h6 className="text-orange text-xl md:text-2xl md:min-w-64">
            Formative Members
          </h6>
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:50s]">
              {RenderLogos(
                formativeMembers,
                "self-center flex justify-center mx-4 md:mx-8"
              )}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-bg"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-bg"></div>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 lg:py-28 w-full container mx-auto">
        <div className="mx-6 md:mx-12 lg:max-w-6xl lg:mx-auto p-6 md:p-12 lg:p-16 text-white rounded-2xl bg-gradient-to-t from-[#1E5BB3] to-[#0D274D]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6 md:space-y-10">
              <h2 className="text-orange text-6xl text-[64px] max-w-[300px]">
                We ❤️ all protocols
              </h2>
              <div className="flex">
                <LinkTrackers
                  target="_blank"
                  href="https://github.com/agntcy"
                  segmentMsg="agntcy join the build clicked"
                  segmentOpt={{
                    link_label: "Join the build",
                    location: "body",
                    resource_interaction: "Visit GitHub repository",
                  }}
                >
                  <div className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-9 rounded-full">
                    Join the build
                  </div>
                </LinkTrackers>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-2">
              <div className="text-xl">
                Agents are only as good as the infrastructure connecting them.
                AGNTCY delivers the complete stack for the Internet of Agents so
                that specialized agents can collaborate across platforms to
                solve complex problems.
              </div>
              <div className="text-xl">
                Skip the custom integrations: With AGNTCY, your agents can spend
                their time solving problems instead of figuring out how to talk
                to each other. This includes support for key protocols such as
                A2A and MCP as well as across the full multi-agent software
                development lifecycle.
              </div>
            </div>
          </div>
          <div className="my-8 md:my-12 rounded-sm overflow-hidden">
            <video
              src="/videos/AGTNCY-Architecture-R1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
          <div>
            <h5 className="font-bold text-2xl">
              The complete AGNTCY framework includes:
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-6">
              {frameworkFeatures.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h6 className="text-2xl">{feature.title}</h6>
                  <p className="text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
