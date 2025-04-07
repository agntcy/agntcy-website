"use client";
import Image from "next/image";
import Link from "next/link";

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

const renderLogos = (
  logos: {
    name: string;
    src: string;
    width: number;
    height: number;
  }[],
  className: string
) => {
  return logos.map((logo, i) => (
    <div key={i} className={className}>
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
  ));
};

const SteeringCommittee = () => {
  return (
    <div className="mx-auto container w-full py-2 md:py-2 lg:py-6">
      <div className="">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-0 font-bold">
        STEERING COMMITTEE/CONTRIBUTORS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-3 pb-8 md:pb-3 px-4 md:px-4">
          {renderLogos(
            logos.slice(0, 6),
            "lg:self-center lg:flex lg:justify-center"
          )}
          {renderLogos(logos.slice(6, 11), "lg:hidden")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-5 lg:px-20 gap-3 pb-8 md:py-3">
          {renderLogos(
            logos.slice(6, 11),
            "hidden lg:self-center lg:flex lg:justify-center"
          )}
        </div>
      </div>
    </div>
  );
};

export default SteeringCommittee;
