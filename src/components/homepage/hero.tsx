"use client";
import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    name: "outshift",
    src: "/images/outshift_logo.png",
    width: 162,
    height: 66,
  },
  {
    name: "Langchain",
    src: "/images/Langchain_updated.png",
    width: 222,
    height: 35,
  },
  {
    name: "Galileo",
    src: "/images/Galileo.png",
    width: 160,
    height: 35,
  },
  {
    name: "llamaindex",
    src: "/images/llamaindex.png",
    width: 200,
    height: 37,
  },
  {
    name: "Glean",
    src: "/images/Glean.svg",
    width: 90,
    height: 36,
  },
  {
    name: "Traceloop",
    src: "/images/traceloop.png",
    width: 216,
    height: 32,
  },
  {
    name: "MongoDB",
    src: "/images/mongodb-logo.png",
    width: 182,
    height: 46,
  },
  {
    name: "Weaviate",
    src: "/images/weaviate_WH.png",
    width: 184,
    height: 27,
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
            <Link
              href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I'd like to learn more about how my organization can become members of the AGNTCY open source collective."
              //   segmentMsg="agntcy join us clicked"
              //   segmentOpt={{
              //     link_label: "Join us",
              //     location: "body",
              //     resource_interaction: "email signup",
              //   }}
            >
              <div className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-7 rounded-full">
                Join us
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 px-4 relative">
          <h1 className="text-[#FBAB2C] text-3xl md:text-5xl">
            An open source collective for inter-agent collaboration.
          </h1>
          <div className="text-white py-10 text-xl md:text-2xl">
            The AGNTCY is where we are building the Internet of Agents to be
            accessible for all: A diverse, collaborative space to innovate,
            develop, and maintain software components and services for agentic
            workflows and multi-agent applications.
          </div>
          <div className="text-[#FBAB2C] pb-6 underline text-base md:text-xl">
            <Link
              href="https://outshift.com/blog/AGNTCY-internet-of-agents-is-on-GitHub?utm_campaign=fy25q3_agntcy_ww_owned-media_agntcy-code-launch-blog_website&utm_channel=website"
              target="_blank"
              //   segmentMsg="agntcy learn more clicked"
              //   segmentOpt={{
              //     link_label: "Learn more about AGNTCY and our latest code drop",
              //     location: "body",
              //     resource_interaction: "Visit to the outshift blog page",
              //   }}
            >
              Learn more about AGNTCY and our latest code drop
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-8 lg:px-20">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-20">GET INVOLVED</div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-4 gap-3 pb-8 md:pb-3">
          {logos.map((logo, i) =>
            i < 8 ? (
              <div className="lg:self-center lg:flex lg:justify-center" key={i}>
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
  );
};

export default Hero;
