"use client";

import { useState } from "react";
import type { Company } from "~/data/supporters-data";
import { cn } from "lib/utils";

type CompanyLogoProps = {
  company: Company;
  className?: string;
  wordmarkClassName?: string;
  imgClassName?: string;
  /** Render only the image or wordmark; parent supplies the link wrapper. */
  contentOnly?: boolean;
};

export function CompanyLogo({
  company,
  className,
  wordmarkClassName,
  imgClassName = "h-4 w-auto max-w-full object-contain",
  contentOnly = false,
}: CompanyLogoProps) {
  const [broken, setBroken] = useState(false);
  const { name, logo, url } = company;
  const showWordmark = !logo || broken;

  const content = showWordmark ? (
    contentOnly ? (
      <span
        className={
          wordmarkClassName ??
          "text-center text-sm font-semibold tracking-tight text-white"
        }
      >
        {name}
      </span>
    ) : (
      name
    )
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setBroken(true)}
      className={imgClassName}
    />
  );

  if (contentOnly) {
    return content;
  }

  const containerClass = showWordmark
    ? (wordmarkClassName ?? "")
    : (className ?? "");

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={name}
        aria-label={`${name} — open website in a new tab`}
        className={cn(
          containerClass,
          "cursor-pointer transition-all duration-200 hover:scale-[1.04]",
          showWordmark
            ? "hover:border-[#187adc] hover:text-[#fbaf45]"
            : "opacity-90 hover:opacity-100"
        )}
      >
        {content}
      </a>
    );
  }

  return <span className={containerClass}>{content}</span>;
}
