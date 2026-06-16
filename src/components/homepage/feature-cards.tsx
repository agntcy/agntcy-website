"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { featureCards } from "~/data/homepage-data";
import {
  gradientBorderOverlayClassName,
  interactiveCardClassName,
} from "lib/card-styles";
import { cn } from "lib/utils";
import { pageFrameClassName } from "lib/layout";

const cardClassName = (interactive: boolean) =>
  cn(
    "relative flex h-full flex-col items-center rounded-xl bg-[#00142B] px-5 py-8 text-center",
    interactive
      ? cn("group", interactiveCardClassName)
      : "border border-[#187ADC]/20 shadow-[0_4px_28px_rgba(24,122,220,0.12)]"
  );

const FeatureCards = () => {
  return (
    <section
      id="features"
      className={cn(pageFrameClassName, "pb-16 pt-4 md:pb-24")}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((card) => {
          const Icon = card.icon;
          const isInteractive = Boolean(card.href);

          const cardBody = (
            <>
              {isInteractive && (
                <span
                  aria-hidden
                  className={cn(gradientBorderOverlayClassName, "rounded-xl")}
                />
              )}

              {card.href && (
                <ExternalLink
                  className="absolute right-4 top-4 h-4 w-4 text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                />
              )}

              <Icon />

              <h3 className="mb-3 text-lg font-bold text-white md:text-xl">
                {card.title}
              </h3>

              <p className="text-sm font-normal leading-relaxed text-white/80 md:text-base">
                {card.description}
              </p>
            </>
          );

          if (card.href) {
            return (
              <Link
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group block h-full rounded-xl",
                  cardClassName(isInteractive)
                )}
              >
                {cardBody}
              </Link>
            );
          }

          return (
            <div
              key={card.title}
              className={cn("h-full", cardClassName(isInteractive))}
            >
              {cardBody}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
