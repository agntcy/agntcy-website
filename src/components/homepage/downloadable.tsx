import localFont from "next/font/local";
import Image from "next/image";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import GlowingButton from "~/components/reusables/glowing-button";
import { LinkTrackers } from "~/components/reusables/link-trackers";
import { OutshiftLogoFull } from "~/components/icons";

const CiscoSans = localFont({
  src: [
    {
      path: "../../../public/fonts/CiscoSansTTExtraLight.ttf",
      weight: "300",
      style: "thin",
    },
    {
      path: "../../../public/fonts/CiscoSansTTLight.ttf",
      weight: "400",
      style: "light",
    },
    {
      path: "../../../public/fonts/CiscoSansTTRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/CiscoSansTTLightOblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/CiscoSansTTBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const Downloadable = async ({ dark = false }) => {
  return (
    <div className="w-full container mx-auto px-2">
      <div className={CiscoSans.className}>
        <div className="relative my-[80px] overflow-hidden">
          <div
            className={`lsg:bg-[url('https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/downloadable-bg.svg')] container relative bg-black bg-110% bg-center py-14 ${
              dark ? "border border-white rounded-lg" : "rounded-t-lg"
            }`}
          >
            <div className='absolute right-0 top-[8px] z-0 h-[380px] w-[630px] bg-[url("https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/collection-bg.png")] bg-cover  '></div>
            <div className="absolute right-0 top-[8px] z-20 h-[380px] w-[630px] bg-gradient-to-tr from-black via-[#000000c0] to-[#fff0]"></div>
            <div className='absolute bottom-0 left-0 z-0 h-[280px] w-[430px] bg-[url("https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/downloadable-bg-bottom.svg")] bg-cover  '></div>
            <div className="absolute bottom-0 left-0 z-20 h-[280px] w-[430px] bg-gradient-to-bl from-black via-[#000000c0] to-[#fff0]"></div>
            <div className="absolute left-0 top-0 h-[8px] w-full rounded-t-lg bg-gradient-blue-purple"></div>
            <div className="relative z-40 flex flex-col items-center md:flex-row md:gap-14 lg:gap-[100px] px-12">
              <div className="flex flex-col gap-5 md:gap-8 md:flex-1">
                <OutshiftLogoFull width={168} height={68} />
                <h3 className="font-h3 text-4xl text-white max-w-2xl">
                  To learn more about the Internet of Agents, read the white
                  paper.
                </h3>

                <div className="flex">
                  <div className="hidden md:block">
                    <GlowingButton>
                      <LinkTrackers
                        href="https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/Internet_of_Agents_Whitepaper.pdf"
                        target="_blank"
                        className="font-btn-lg px-auto py-3 md:px-5 font-light"
                        segmentMsg="Downloadable clicked"
                        segmentOpt={{
                          file_name:
                            "Welcome to the future of agentic AI: The Internet of Agents",
                        }}
                      >
                        Download
                      </LinkTrackers>
                    </GlowingButton>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 md:flex-[.8] lg:flex-[.7]">
                <AspectRatio ratio={492 / 300}>
                  <Image
                    unoptimized
                    src="https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/crea-838.webp"
                    fill
                    alt="thumbnail"
                    className="w-[90%] object-cover"
                    sizes="100%"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="relative z-40 flex justify-end pt-6">
              <GlowingButton
                className=" block max-w-[200px] text-center md:hidden font-light"
                aria-label="Download"
              >
                <LinkTrackers
                  href="https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/Internet_of_Agents_Whitepaper.pdf"
                  target="_blank"
                  segmentMsg="Downloadable clicked"
                  segmentOpt={{
                    link_label: "Download",
                    location: "body",
                    resource_interaction: "read a PDF",
                    file_name:
                      "Welcome to the future of agentic AI: The Internet of Agents",
                    is_gated_asset: "false",
                  }}
                >
                  Download
                </LinkTrackers>
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
