"use client";
import { formativeMembers } from "~/data/members";
import Image from "next/image";
import { AspectRatio } from "components/ui/aspect-ratio";

const SteeringCommittee = () => {
  return (
    <div className="mx-auto 2xl:mx-0 container w-full py-2 md:py-2 lg:py-6">
      <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-0 font-bold my-6">
        TECHNICAL STEERING COMMITTEE
      </div>
      <div className="my-3 grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-3 pb-8 md:pb-3 px-4 md:px-4">
        {formativeMembers.map((logo, i) => (
          <div
            key={i}
            className={`w-full flex items-center md:justify-center my-2 ${
              i > 2 && "translate-x-0 md:translate-x-1/2"
            } `}
          >
            <div style={{ width: logo.width, height: logo.height }}>
              <AspectRatio ratio={logo.width / logo.height}>
                <Image
                  key={logo.name}
                  unoptimized
                  src={logo.src}
                  alt={logo.name}
                  fill
                />
              </AspectRatio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SteeringCommittee;
