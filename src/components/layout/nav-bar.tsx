"use client";
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
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      name: "Documentation",
      href: "https://docs.agntcy.org",
      target: "_blank",
    },
    {
      name: "GitHub",
      href: "https://github.com/agntcy",
      target: "_blank",
    },
    {
      name: "Changelog",
      href: "/changelog",
      target: "_self",
    },
    {
      name: "Supporters",
      href: "/supporters",
      target: "_self",
    },
    {
      name: "Resources",
      href: "/resources",
      target: "_self",
    },
  ];

  return (
    <nav className="bg-bg shadow-lg py-8">
      <Drawer direction="left">
        <div className="container mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex justify-between items-center w-full">
              <div className="">
                <Link href="/">
                  <Image
                    unoptimized
                    src={"/images/logo.png"}
                    alt="Logo"
                    className=""
                    height={150}
                    width={150}
                  />
                </Link>
              </div>
              <div className="">
                <div className="hidden lg:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} target={item.target}>
                      <div className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                  <Link
                    target="_blank"
                    href="https://join.slack.com/t/agntcy/shared_invite/zt-34sxmw5e8-LqlUxxcxROq3HRb56QSkUg"
                  >
                    <div className="flex-shrink-0 text-center text-xl font-bold text-[#FBAB2C] hover:text-[#00142B] transition ease-in-out  hover:bg-[#FBAB2C] border-2 border-[#FBAB2C] py-3 md:py-0 lg:py-3 xl:py-3 2xl:py-3 px-5 rounded-full">
                      Join us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex items-center text-white">
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
                <Link key={item.name} href={item.href} target={item.target}>
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
              <Link
                target="_blank"
                href="https://join.slack.com/t/agntcy/shared_invite/zt-34sxmw5e8-LqlUxxcxROq3HRb56QSkUg"
              >
                Join us
              </Link>
            </Button>
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
