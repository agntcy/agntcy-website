"use client";

import { useState } from "react";
import SdkCard from "~/components/resources/sdk-card";
import { sdkCards, sdkFamilyOrder, type SdkFamily } from "~/data/sdk-data";

type SdkFilter = "All" | SdkFamily;

const FILTERS = ["All", ...sdkFamilyOrder] as const;

export default function SdkGrid() {
  const [activeFilter, setActiveFilter] = useState<SdkFilter>("All");

  const filteredCards =
    activeFilter === "All"
      ? sdkCards
      : sdkCards.filter((sdk) => sdk.family === activeFilter);

  return (
    <section>
      <nav
        aria-label="Filter SDKs by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`inline-flex cursor-pointer items-center whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[#187adc] text-white shadow-[0px_2px_12px_rgba(24,122,220,0.45)]"
                  : "border border-white/20 text-white/70 hover:border-white/35 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </nav>

      <div className="grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-24">
        {filteredCards.map((sdk) => (
          <SdkCard
            key={`${sdk.family}-${sdk.title}-${sdk.href}`}
            sdk={sdk}
          />
        ))}
      </div>
    </section>
  );
}
