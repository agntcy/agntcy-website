"use client";

import { useEffect, useState } from "react";
import {
  navGlassBarClassName,
  pageFrameClassName,
} from "lib/layout";

type SectionTab = {
  label: string;
  href: string;
};

export function SectionTabs({ tabs }: { tabs: readonly SectionTab[] }) {
  const [activeId, setActiveId] = useState(
    tabs[0]?.href.replace("#", "") ?? ""
  );
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("body > nav");
    if (!nav) return;
    const update = () => setTopOffset(nav.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(nav);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const ids = tabs.map((t) => t.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [tabs]);

  return (
    <div
      style={{ top: topOffset }}
      className={`sticky z-20 w-full py-2 ${navGlassBarClassName}`}
    >
      <div className={pageFrameClassName}>
        <nav
          aria-label="Jump to section"
          className="inline-flex items-center rounded-full border border-[#0d274d] bg-[#0d274d]/30 p-1"
        >
          {tabs.map((tab) => {
            const id = tab.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <a
                key={tab.href}
                href={tab.href}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveId(id)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 md:px-4 md:text-sm ${
                  isActive
                    ? "bg-[#187adc] text-white shadow-[0px_2px_12px_rgba(24,122,220,0.45)]"
                    : "text-white/70 hover:text-[#fbaf45]"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
