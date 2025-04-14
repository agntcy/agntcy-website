import { Marquee } from "components/ui/marquee";
import RenderLogos from "../reusables/render-logo";
import { logos } from "data/logos";

export function LogoMarquee() {
  const committeeLogos = logos.filter(
    (logo) => logo.type === "Steering Committee"
  );
  const memberLogos = logos.filter((logo) => logo.type === "members");

  return (
    <div className="overflow-hidden pb-14 container">
      <div className="px-4">
        <h3 className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-20">
          STEERING COMMITTEE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-3 pb-8 md:pb-3 px-4">
          {RenderLogos(
            committeeLogos,
            "lg:self-center lg:flex lg:justify-center"
          )}
        </div>
        <h3 className="text-white text-[16px] pb-6 pt-8 md:pt-12 md:px-0 xl:px-20">
          Members and Contributors
        </h3>
      </div>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {RenderLogos(
            memberLogos,
            "self-center flex justify-center mx-4 md:mx-8"
          )}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#00142B]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#00142B]"></div>
      </div>
    </div>
  );
}
