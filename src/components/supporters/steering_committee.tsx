"use client";
import RenderLogos from "../reusables/render-logo";
import { logos } from "data/logos";

const SteeringCommittee = () => {
  return (
    <div className="mx-auto 2xl:mx-0 container w-full py-2 md:py-2 lg:py-6">
      <div className="">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-0 font-bold">
          STEERING COMMITTEE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-3 pb-8 md:pb-3 px-4 md:px-4">
          {RenderLogos(
            logos.filter((logo) => logo.type === "Steering Committee"),
            "lg:self-center lg:flex lg:justify-center"
          )}
        </div>
      </div>
    </div>
  );
};

export default SteeringCommittee;
