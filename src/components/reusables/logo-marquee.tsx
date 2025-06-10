import { Marquee } from "components/ui/marquee";
import RenderLogos from "../reusables/render-logo";
import { logos } from "~/data/members";
import Link from "next/link";

export function LogoMarquee() {
  const committeeLogos = logos.sort((a, b) => a.name.localeCompare(b.name))
  const half = Math.ceil(committeeLogos.length / 2);
  const firstHalf = committeeLogos.slice(0, half);
  const secondHalf = committeeLogos.slice(half);

  return (
    <div className="overflow-hidden pb-14 container">
      <div className="px-4">
        <h3 className="text-white text-[16px] pb-6 pt-8 md:pt-12 md:px-0 xl:px-20">
          GET INVOLVED
        </h3>
      </div>

      <div className="relative py-3">
        <Marquee pauseOnHover className="[--duration:120s]">
          {RenderLogos(
            firstHalf,
            "self-center flex justify-center mx-4 md:mx-8"
          )}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#00142B]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#00142B]"></div>
      </div>
      <div className="relative py-3">
        <Marquee pauseOnHover reverse className="[--duration:120s]">
          {RenderLogos(
            secondHalf,
            "self-center flex justify-center mx-4 md:mx-8"
          )}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#00142B]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#00142B]"></div>
      </div>

      <div className="pt-12 md:pt-24 flex items-center justify-center">
        <Link href="/supporters" target="_self">
          <div className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-7 rounded-full">
            See all members
          </div>
        </Link>
      </div>
    </div>
  );
}
