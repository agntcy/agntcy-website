"use client";

import type { Company } from "~/data/supporters-data";
import {
  chipBaseClassName,
  chipInteractiveClassName,
  gradientBorderOverlayClassName,
} from "lib/card-styles";
import { cn } from "lib/utils";
import { CompanyLogo } from "./company-logo";

function SupporterChip({ supporter }: { supporter: Company }) {
  const { name, url } = supporter;

  const content = (
    <CompanyLogo
      company={supporter}
      contentOnly
      imgClassName="max-h-9 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
      wordmarkClassName="text-center text-sm font-semibold tracking-tight text-white"
    />
  );

  if (!url) {
    return <div className={chipBaseClassName}>{content}</div>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={`${name} — open website in a new tab`}
      className={cn(chipInteractiveClassName, chipBaseClassName)}
    >
      <span
        aria-hidden
        className={cn(gradientBorderOverlayClassName, "rounded-[16px]")}
      />
      {content}
    </a>
  );
}

export function SupporterLogoWall({ supporters }: { supporters: Company[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {supporters.map((s) => (
        <SupporterChip key={s.name} supporter={s} />
      ))}
    </div>
  );
}
