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
import { Button } from "components/ui/button";
import { LinkTrackers } from "../reusables/link-trackers";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";

const Navbar = () => {
  const navItems = [
    {
      name: "Apps",
      dropDown: true,
      subMenu: [
        {
          name: "Agent Directory",
          href: "https://hub.agntcy.org",
          segmentMsg: "agntcy directory clicked",
          target: "_blank",
          segmentOpt: {
            link_label: "Agent Directory",
            location: "global header",
            resource_interaction: "Visit the agntcy directory",
          },
        },
      ],
    },
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
    {
      name: "GitHub",
      href: "https://github.com/agntcy",
      target: "_blank",
      segmentMsg: "agntcy github clicked",
      segmentOpt: {
        link_label: "GitHub",
        location: "global header",
        resource_interaction: "Visit GitHub repositoty",
      },
    },
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
  ];

  return (
    <nav className="bg-navy shadow-lg py-4">
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
              <NavigationMenu className="">
                <NavigationMenuList className="hidden lg:flex items-center space-x-1">
                  {navItems.map((item) =>
                    item.dropDown ? (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500 bg-navy hover:bg-navy data-[state=open]:hover:bg-navy data-[state=open]:focus:bg-navy data-[state=open]:text-[#FBAB2C] focus:bg-navy data-[state=open]:bg-[#14263b]">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-navy border-orange">
                          {item.subMenu.map((subItem) => (
                            <NavigationMenuLink
                              asChild
                              key={`sub-${subItem.name}`}
                            >
                              <LinkTrackers
                                key={subItem.name}
                                href={subItem.href || "/"}
                                target={subItem.target}
                                segmentMsg={subItem.segmentMsg || ""}
                                segmentOpt={subItem.segmentOpt || {}}
                              >
                                <div className="py-5 px-3 text-lg text-[#FBAB2C] hover:text-orange-500">
                                  {subItem.name}
                                </div>
                              </LinkTrackers>
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <LinkTrackers
                        key={item.name}
                        href={item.href || "/"}
                        target={item.target}
                        segmentMsg={item.segmentMsg || ""}
                        segmentOpt={item.segmentOpt || {}}
                      >
                        <div className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500">
                          {item.name}
                        </div>
                      </LinkTrackers>
                    )
                  )}
                  <LinkTrackers
                    href="/contactus"
                    segmentMsg="agntcy join us clicked"
                    segmentOpt={{
                      link_label: "Join us",
                      location: "global header",
                      resource_interaction:
                        "view AGNTCY Membership Intake Form",
                    }}
                  >
                    <div className="flex-shrink-0 text-center text-xl font-bold text-[#FBAB2C] hover:text-navy transition ease-in-out  hover:bg-[#FBAB2C] border-2 border-[#FBAB2C] py-3 md:py-0 lg:py-3 xl:py-3 2xl:py-3 px-5 rounded-full">
                      Join us
                    </div>
                  </LinkTrackers>
                </NavigationMenuList>
              </NavigationMenu>
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
        <DrawerContent className="bg-navy border-navy">
          <DrawerHeader>
            <DrawerTitle>
              <span className="hidden">menu</span>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-5">
            {navItems.map((item) =>
              item.dropDown ? (
                <Accordion type="single" collapsible key={item.name}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="pl-8">{item.name}</AccordionTrigger>
                    <AccordionContent>
                      {item.subMenu.map((subItem) => (
                        <Button
                          variant="ghost"
                          className="text-[#FBAB2C] text-lg px-12"
                          size="lg"
                          key={subItem.name}
                          asChild
                        >
                          <LinkTrackers
                            key={subItem.name}
                            href={subItem.href || "/"}
                            target={subItem.target}
                            segmentMsg={subItem.segmentMsg || ""}
                            segmentOpt={subItem.segmentOpt || {}}
                          >
                            {subItem.name}
                          </LinkTrackers>
                        </Button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Button
                  variant="ghost"
                  className="text-[#FBAB2C] text-lg self-start"
                  size="lg"
                  key={item.name}
                  asChild
                >
                  <LinkTrackers
                    key={item.name}
                    href={item.href || "/"}
                    target={item.target}
                    segmentMsg={item.segmentMsg || ""}
                    segmentOpt={item.segmentOpt || {}}
                  >
                    {item.name}
                  </LinkTrackers>
                </Button>
              )
            )}
            <Button
              variant="ghost"
              className="text-[#FBAB2C] text-lg self-start"
              size="lg"
              asChild
            >
              <LinkTrackers
                href="/contactus"
                segmentMsg="agntcy join us clicked"
                segmentOpt={{
                  link_label: "Join us",
                  location: "global header",
                  resource_interaction: "view AGNTCY Membership Intake Form",
                }}
              >
                Join us
              </LinkTrackers>
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
