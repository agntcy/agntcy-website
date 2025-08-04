import React from "react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { ArrowLongRight } from "~/components/icons";
import Link from "next/link";

export function Banner() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1E5BB3] to-[#9345E1] text-white ">
        <Link
          href="https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/"
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
                        "https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/_logo-Outshift_1C-WHITE%402x%202.png"
                      }
                      alt="Panoptica logo"
                      fill
                      unoptimized
                    ></Image>
                  </AspectRatio>
                </div>
              </div>
              <p className="md:text-lg text-[15px]">
                As part of our commitment to an open and interoperable agentic
                ecosystem, we are proud to announce that we are now foundational
                members of Google's Agent2Agent project under the Linux
                Foundation!
              </p>
            </div>

            <Button
              variant="secondary"
              className="align-end hidden px-0 font-medium text-[#9345E1] group-hover:bg-white group-hover:text-slate-900 md:px-3 lg:flex"
            >
              <p className="font-h6">Learn More</p>
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
