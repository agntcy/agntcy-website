"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "components/ui/drawer";

const Navbar = () => {

  const navItems = [
    { name: "Github", href: "https://github.com/agntcy/agntcy-website" },
    { name: "Documentation", href: "https://docs.agntcy.org" },
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
                    <Link key={item.name} href={item.href} legacyBehavior>
                      <a className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <Link
                    href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I'd like to learn more about how my organization can become members of the AGNTCY open source collective."
                    legacyBehavior
                  >
                    <a className="flex-shrink-0 text-xl font-bold text-[#FBAB2C] hover:text-orange-500 border-2 border-[#FBAB2C] py-3 px-5 rounded-3xl">
                      Join us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center text-white">
              <DrawerTrigger asChild>
                <button
                  // onClick={toggleMobileMenu}
                  className="mobile-menu-button"
                >
                  <svg
                    className="w-6 h-6"
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
                </button>
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
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a className="block py-2 px-4 text-xl text-[#FBAB2C] hover:bg-gray-200">
                {item.name}
              </a>
            </Link>
          ))}
          <div className="">
            <Link
              href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I’d like to learn more about how my organization can become members of the AGNTCY open source collective."
              legacyBehavior
              className=""
            >
              <a className="block py-2 px-4 text-xl text-[#FBAB2C] hover:bg-gray-200">
                Join us
              </a>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
