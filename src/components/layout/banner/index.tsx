import React from "react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { ArrowLongRight } from "~/components/icons";
import Link from "next/link";

export function Banner() {
  return (
    <>
      <div className="bg-[#FBAB2C] text-black ">
        <Link
          href="https://outshift.cisco.com/events/agntcy-summit-2025"
          target="_blank"
          aria-label="Learn more about Panopica"
          className="lg:font-btn group flex w-full items-center gap-1 py-5  text-xs md:py-6"
        >
          <div className="container mx-auto flex min-h-14 items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="self-start lg:self-center">
                <div className="mt-1 h-full w-20 md:mr-6 md:w-24 lg:mt-0 lg:w-[120px]">
                  <AspectRatio ratio={179 / 74}>
                    <Image
                      src={
                        "https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/_logo-Outshift_1C-BLACK.svg"
                      }
                      alt="Outshift logo"
                      fill
                      unoptimized
                    ></Image>
                  </AspectRatio>
                </div>
              </div>
              <p className="md:text-lg text-[15px] pl-8">
                Join us in-person at the Inaugural AGNTCY Summit in SF on October 22, 2025
              </p>
            </div>

            <Button
              variant="secondary"
              className="align-end hidden px-0 font-medium text-[#9345E1] group-hover:bg-white group-hover:text-slate-900 md:px-3 lg:flex"
            >
              <p className="font-h6 text-black font-bold">RSVP</p>
            </Button>
            <div className="ml-1 lg:hidden">
              <ArrowLongRight size={35} />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
