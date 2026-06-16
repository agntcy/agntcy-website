"use client";
import { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";
import { cn } from "lib/utils";
import {
  navBarClassName,
  navLogoSlotClassName,
  pageFrameClassName,
} from "lib/layout";
import AgntcyLogo from "components/homepage/agntcy-logo";

const navLinkClassName =
  "cursor-pointer bg-[linear-gradient(#fbaf45,#fbaf45)] bg-[length:0%_2px] bg-[position:0_100%] bg-no-repeat pb-1 text-white transition-[color,background-size] duration-200 hover:bg-[length:100%_2px] hover:text-[#fbaf45]";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getHomeLogoScrollProgress(heroLogo: HTMLElement): number {
  const { top, height } = heroLogo.getBoundingClientRect();
  if (height <= 0) return 0;

  // Hidden until the hero logo's top edge reaches the viewport top.
  if (top > 0) return 0;

  // Animate while the logo scrolls from y=0 to fully above the viewport.
  return clamp(-top / height, 0, 1);
}

const Navbar = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [homeLogoProgress, setHomeLogoProgress] = useState(0);

  useEffect(() => {
    if (!isHomepage) {
      setHomeLogoProgress(0);
      return;
    }

    const heroLogo = document.getElementById("hero-agntcy-logo");
    if (!heroLogo) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      setHomeLogoProgress(getHomeLogoScrollProgress(heroLogo));
    };

    const scheduleUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isHomepage]);

  const navItems = [
    {
      name: "Documentation",
      href: "https://docs.agntcy.org",
      target: "_blank" as const,
    },
    {
      name: "Articles",
      href: "/articles",
      target: "_self" as const,
    },
    {
      name: "Supporters",
      href: "/supporters",
      target: "_self" as const,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/playlist?list=PL49BrgsjXg5qVeRVqlX9O74W02q3c8fow",
      target: "_blank" as const,
    },
    {
      name: "GitHub",
      href: "https://github.com/agntcy",
      target: "_blank" as const,
    },
  ];

  const navLinks = (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target={item.target}
          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          className={navLinkClassName}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className={navBarClassName}>
      <div className={pageFrameClassName}>
        <div
          className={cn(
            "relative flex w-full items-center gap-4",
            isHomepage ? "justify-end" : undefined
          )}
        >
          {isHomepage ? (
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div
                className="h-9 w-fit md:h-9"
                style={{
                  clipPath: `inset(${(1 - homeLogoProgress) * 100}% 0 0 0)`,
                  pointerEvents:
                    homeLogoProgress > 0.5 ? undefined : "none",
                }}
              >
                <Link href="/" aria-label="AGNTCY home" className="flex">
                  <AgntcyLogo className="h-7 w-auto md:h-8" />
                </Link>
              </div>
            </div>
          ) : (
            <div className={navLogoSlotClassName}>
              <Link href="/" aria-label="AGNTCY home">
                <AgntcyLogo className="h-7 w-auto md:h-8" />
              </Link>
            </div>
          )}

          <div
            className={cn(
              "hidden flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white md:gap-x-8 md:text-base lg:flex",
              !isHomepage && "ml-auto"
            )}
          >
            {navLinks}
          </div>

          <div className={cn("lg:hidden", !isHomepage && "ml-auto")}>
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="mobile-menu-button text-white"
                  aria-label="Open menu"
                >
                  <svg
                    className="h-8 w-8"
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
                    />
                  </svg>
                </Button>
              </DrawerTrigger>
            <DrawerContent className="border-[#00142B] bg-[#00142B]">
              <DrawerHeader>
                <DrawerTitle>
                  <span className="sr-only">Menu</span>
                </DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className="flex flex-col gap-y-2 p-5 text-sm text-white md:text-base">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.target}
                    rel={
                      item.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={navLinkClassName}
                  >
                    {item.name}
                  </Link>
                ))}
              </DrawerDescription>
            </DrawerContent>
          </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
