/* eslint-disable */

"use client";
import RenderLogos from "../reusables/render-logo";

const logos = [
  {
    name: "outshift",
    src: "/images/outshift_logo.png",
    width: 141,
    height: 57,
  },
  {
    name: "Langchain",
    src: "/images/Langchain_updated.png",
    width: 193,
    height: 31,
  },
  {
    name: "Galileo",
    src: "/images/Galileo.png",
    width: 139,
    height: 31,
  },
];

const SteeringCommittee = () => {
  return (
    <div className="mx-auto 2xl:mx-0 container w-full py-2 md:py-2 lg:py-6">
      <div className="">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-0 font-bold">
          STEERING COMMITTEE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-3 pb-8 md:pb-3 px-4 md:px-4">
          {RenderLogos(
            logos.slice(0, 6),
            "lg:self-center lg:flex lg:justify-center"
          )}
          {RenderLogos(logos.slice(6, 11), "lg:hidden")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-5 lg:px-20 gap-3 pb-8 md:py-3">
          {RenderLogos(
            logos.slice(6, 11),
            "hidden lg:self-center lg:flex lg:justify-center"
          )}
        </div>
      </div>
    </div>
  );
};

export default SteeringCommittee;
