"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SdkCard from "~/components/resources/sdk-card";
import { sdkCards } from "~/data/sdk-data";
import { cn } from "lib/utils";

const LOOP_COPIES = 3;
const CARD_GAP_PX = 11;

const arrowButtonClassName = cn(
  "absolute top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
  "border border-accent-blue/30 bg-bg/90 text-white shadow-[0_4px_20px_rgba(24,122,220,0.25)] backdrop-blur-sm",
  "transition-all duration-200 hover:border-accent-blue hover:bg-accent-blue/20 hover:shadow-[0_0_24px_rgba(24,122,220,0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
);

export default function SdkCardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const isAdjustingRef = useRef(false);

  const loopedCards = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copyIndex) =>
        sdkCards.map((sdk) => ({
          sdk,
          key: `${copyIndex}-${sdk.family}-${sdk.title}`,
        }))
      ).flat(),
    []
  );

  const syncLoopScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isAdjustingRef.current) return;

    const setWidth = setWidthRef.current;
    if (!setWidth) return;

    if (el.scrollLeft <= 1) {
      isAdjustingRef.current = true;
      el.scrollLeft += setWidth;
      isAdjustingRef.current = false;
      return;
    }

    if (el.scrollLeft >= setWidth * (LOOP_COPIES - 1) - 1) {
      isAdjustingRef.current = true;
      el.scrollLeft -= setWidth;
      isAdjustingRef.current = false;
    }
  }, []);

  const initializeScroll = useCallback(() => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const setWidth = track.scrollWidth / LOOP_COPIES;
    setWidthRef.current = setWidth;
    isAdjustingRef.current = true;
    el.scrollLeft = setWidth;
    isAdjustingRef.current = false;
  }, []);

  const scrollByCard = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-sdk-card]");
    const cardWidth = card?.offsetWidth ?? 214;
    const amount = cardWidth + CARD_GAP_PX;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    initializeScroll();

    const track = trackRef.current;
    if (!track) return;

    const resizeObserver = new ResizeObserver(initializeScroll);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [initializeScroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => syncLoopScroll();
    const handleScrollEnd = () => syncLoopScroll();

    el.addEventListener("scroll", handleScroll);
    el.addEventListener("scrollend", handleScrollEnd);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [syncLoopScroll]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByCard("left")}
        aria-label="Scroll SDKs left"
        className={cn(arrowButtonClassName, "left-0")}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => scrollByCard("right")}
        aria-label="Scroll SDKs right"
        className={cn(arrowButtonClassName, "right-0")}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        ref={scrollRef}
        className="snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        aria-label="SDK libraries"
      >
        <div ref={trackRef} className="flex w-max gap-3 py-8">
          {loopedCards.map(({ sdk, key }) => (
            <div
              key={key}
              data-sdk-card
              className="w-[199.5px] shrink-0 snap-center sm:w-[213.75px]"
            >
              <SdkCard sdk={sdk} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
