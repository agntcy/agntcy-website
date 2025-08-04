import Link from "next/link";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";

const Description = () => {
  return (
    <div className="container w-full">
      <h2 className="pt-12 md:pt-32 md:pb-12 lg:pt-32 lg:pb-12 text-3xl text-[32px] text-[#FBAB2C]">
        The open, interoperable internet of agents isn’t a nice to have, it’s a
        must have. These organizations stand with AGNTCY.org; building bridges,
        not walls.
      </h2>
      <h3 className="pt-12 md:pt-4 md:pb-12 lg:pt-0 lg:pb-4 text-2xl text-white">
        The AGNTCY is where we are building the Internet of Agents to be
        accessible for all: A diverse, collaborative space to innovate, develop,
        and maintain software components and services for agentic workflows and
        multi-agent software.
      </h3>
      <div className="flex items-center justify-center flex-col gap-3">
        <Link
          target="_blank"
          href="https://join.slack.com/t/agntcy/shared_invite/zt-34sxmw5e8-LqlUxxcxROq3HRb56QSkUg"
        >
          <div className="flex-shrink-0 my-5 text-center text-xl font-bold text-[#FBAB2C] hover:text-[#00142B] transition ease-in-out  hover:bg-[#FBAB2C] border-2 border-[#FBAB2C] py-3 md:py-0 lg:py-3 xl:py-3 2xl:py-3 px-5 rounded-full">
            Join us
          </div>
        </Link>
        <h6 className="text-2xl text-white mt-6">A proud project of</h6>
        <div className="w-full md:max-w-96">
          <AspectRatio ratio={400 / 24}>
            <Image
              unoptimized
              src={"/images/supporters/lf-horizontal-white.png"}
              fill
              alt="thumbnail"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default Description;
