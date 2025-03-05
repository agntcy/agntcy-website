"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from "components/ui/drawer";
import { LinkTrackers } from "~/components/reusables/link-trackers";
import { Button } from "components/ui/button";

const Navbar = () => {
  const navItems = [
    {
      name: "Github",
      href: "https://github.com/agntcy",
      segmentMsg: "agntcy github clicked",
      segmentOpt: {
        link_label: "Github",
        location: "global header",
        resource_interaction: "Visit GitHub repositoty",
      },
    },
    {
      name: "Documentation",
      href: "https://docs.agntcy.org",
      segmentMsg: "agntcy doc clicked",
      segmentOpt: {
        link_label: "Documentation",
        location: "global header",
        resource_interaction: "Visit to the doc.agntcy.org",
      },
    },
  ];

  return (
    <nav className="bg-[#00142B] shadow-lg py-4">
      <Drawer direction="left">
        <div className="container mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex justify-between items-center w-full">
              <div className="">
                <Link href="/" legacyBehavior>
                  <Image
                    unoptimized
                    src={"/images/logo.png"}
                    alt="Logo"
                    className="pt-4"
                    height={150}
                    width={150}
                  />
                </Link>
              </div>
              <div className="">
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <LinkTrackers
                      key={item.name}
                      href={item.href}
                      target={"_blank"}
                      segmentMsg={item.segmentMsg}
                      segmentOpt={item.segmentOpt}
                    >
                      <div className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500">
                        {item.name}
                      </div>
                    </LinkTrackers>
                  ))}
                  <LinkTrackers
                    href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I'd like to learn more about how my organization can become members of the AGNTCY open source collective."
                    segmentMsg="agntcy join us clicked"
                    segmentOpt={{
                      link_label: "Join us",
                      location: "global header",
                      resource_interaction: "email signup",
                    }}
                  >
                    <div className="flex-shrink-0 text-xl font-bold text-[#FBAB2C] hover:text-[#00142B] transition ease-in-out  hover:bg-[#FBAB2C] border-2 border-[#FBAB2C] py-3 px-5 rounded-3xl">
                      Join us
                    </div>
                  </LinkTrackers>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center text-white">
              <DrawerTrigger asChild>
                <Button
                  size="icon"
                  variant={"ghost"}
                  className="mobile-menu-button"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </Button>
              </DrawerTrigger>
            </div>
          </div>
        </div>
        <DrawerContent className="bg-[#00142B] border-[#00142B]">
          <DrawerHeader>
            <DrawerTitle>
              <p className="hidden">menu</p>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription className="flex flex-col gap-4 p-5">
            {navItems.map((item) => (
              <Button
                variant="ghost"
                className="text-[#FBAB2C] text-lg"
                size="lg"
                key={item.name}
                asChild
              >
                <LinkTrackers
                  key={item.name}
                  href={item.href}
                  target={"_blank"}
                  segmentMsg={item.segmentMsg}
                  segmentOpt={item.segmentOpt}
                >
                  {item.name}
                </LinkTrackers>
              </Button>
            ))}
            <Button
              variant="ghost"
              className="text-[#FBAB2C] text-lg"
              size="lg"
              asChild
            >
              <LinkTrackers
                href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I'd like to learn more about how my organization can become members of the AGNTCY open source collective."
                segmentMsg="agntcy join us clicked"
                segmentOpt={{
                  link_label: "Join us",
                  location: "global header",
                  resource_interaction: "email signup",
                }}
              >
                Join us
              </LinkTrackers>
            </Button>
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
