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
import { Button } from "components/ui/button";

const Navbar = () => {
  const navItems = [
    {
      name: "Supporters",
      href: "/supporters",
      segmentMsg: "agntcy supporters clicked",
      target: "_self",
      segmentOpt: {
        link_label: "Supporters",
        location: "global header",
        resource_interaction: "Visit supporters page",
      },
    },
    {
      name: "Github",
      href: "https://github.com/agntcy",
      target: "_blank",
      segmentMsg: "agntcy github clicked",
      segmentOpt: {
        link_label: "Github",
        location: "global header",
        resource_interaction: "Visit GitHub repositoty",
      },
    },
    // {
    //   name: "Resources",
    //   href: "/resources",
    //   target: "_self",
    //   segmentMsg: "agntcy resources clicked",
    //   segmentOpt: {
    //     link_label: "Resources",
    //     location: "global header",
    //     resource_interaction: "Visit resources page",
    //   },
    // },
    {
      name: "Documentation",
      href: "https://docs.agntcy.org",
      target: "_blank",
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
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      // segmentMsg={item.segmentMsg}
                      // segmentOpt={item.segmentOpt}
                    >
                      <div className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                  <a
                    href="/contactus"
                    // segmentMsg="agntcy join us clicked"
                    // segmentOpt={{
                    //   link_label: "Join us",
                    //   location: "global header",
                    //   resource_interaction: "email signup",
                    // }}
                  >
                    <div className="flex-shrink-0 text-center text-xl font-bold text-[#FBAB2C] hover:text-[#00142B] transition ease-in-out  hover:bg-[#FBAB2C] border-2 border-[#FBAB2C] py-3 md:py-0 lg:py-3 xl:py-3 2xl:py-3 px-5 rounded-full">
                      Join us
                    </div>
                  </a>
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
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  // segmentMsg={item.segmentMsg}
                  // segmentOpt={item.segmentOpt}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              className="text-[#FBAB2C] text-lg"
              size="lg"
              asChild
            >
              <a
                href="/contactus"
                // segmentMsg="agntcy join us clicked"
                // segmentOpt={{
                //   link_label: "Join us",
                //   location: "global header",
                //   resource_interaction: "email signup",
                // }}
              >
                Join us
              </a>
            </Button>
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
