/* eslint-disable */

"use client";
import RenderLogos from "../reusables/render-logo";

const logos = [
  {
    name: "Traceloop",
    src: "/images/traceloop.png",
    width: 188,
    height: 28,
  },
  {
    name: "MongoDB",
    src: "/images/mongodb-logo.png",
    width: 159,
    height: 40,
  },
  {
    name: "Weaviate",
    src: "/images/weaviate_WH.png",
    width: 178,
    height: 26,
  },
  {
    name: "llamaindex",
    src: "/images/llamaindex.png",
    width: 174,
    height: 31,
  },
  {
    name: "Glean",
    src: "/images/Glean.svg",
    width: 78,
    height: 31,
  },
  {
    name: "Agency",
    src: "/images/agency_white.png",
    width: 122,
    height: 36,
  },
];

const Members = () => {
  return (
    <div className="mx-auto 2xl:mx-0 container w-full py-2 md:py-2 lg:py-6">
      <div className="pb-16">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-0 font-bold uppercase">
          Members and Contributors
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

export default Members;
