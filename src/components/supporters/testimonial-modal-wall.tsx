"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Quote, X } from "lucide-react";
import type { Testimonial } from "~/data/supporters-data";
import { gradientBorderOverlayClassName } from "lib/card-styles";
import { cn } from "lib/utils";
import { CompanyLogo } from "./company-logo";

export function TestimonialModalWall({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <DialogPrimitive.Root
      open={active !== null}
      onOpenChange={(open) => {
        if (!open) setActive(null);
      }}
    >
      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {testimonials.map((t) => (
          <div
            key={`${t.name}-${t.company.name}`}
            className="group relative mb-5 break-inside-avoid rounded-[20px] border border-[#0d274d] bg-[#00142b] p-6 shadow-[0px_4px_30px_#0d274d] transition-all duration-300 hover:-translate-y-1 hover:border-[#187adc] hover:shadow-[0px_8px_50px_rgba(24,122,220,0.45)]"
          >
            <span
              aria-hidden
              className={cn(gradientBorderOverlayClassName, "rounded-[20px]")}
            />
            <button
              type="button"
              onClick={() => setActive(t)}
              aria-label={`Read the full testimonial from ${t.name}, ${t.title} at ${t.company.name}`}
              className="block w-full cursor-pointer rounded-[12px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#187adc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#00142b]"
            >
              <Quote aria-hidden className="h-6 w-6 text-[#fbaf45]" />
              <p className="mt-4 line-clamp-6 text-sm leading-relaxed text-[#e8e9ea]">
                {t.quote}
              </p>
              <span className="mt-3 inline-block text-xs font-semibold text-[#187adc] transition-colors duration-200 group-hover:text-[#fbaf45]">
                Read more
              </span>
            </button>
            <div className="mt-5 border-t border-[#0d274d] pt-4">
              <CompanyLogo
                company={t.company}
                className="inline-flex h-12 max-w-[220px] items-center rounded-md border border-[#0d274d] bg-[#0d274d]/40 px-3.5"
                wordmarkClassName="inline-flex h-12 items-center rounded-md border border-[#0d274d] bg-[#0d274d]/40 px-4 text-base font-semibold tracking-tight text-white"
                imgClassName="h-7 w-auto max-w-full object-contain"
              />
              <p className="mt-3 text-sm font-bold text-white">{t.name}</p>
              <p className="mt-0.5 text-xs text-[#187adc]">
                {t.title}, {t.company.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 grid max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 gap-0 overflow-y-auto rounded-[24px] border border-[#0d274d] bg-[#00142b] p-7 text-[#e8e9ea] shadow-[0px_8px_60px_rgba(24,122,220,0.45)] outline-none md:p-10">
          {active && (
            <>
              <Quote aria-hidden className="h-9 w-9 text-[#fbaf45]" />
              <DialogPrimitive.Title className="sr-only">
                Testimonial from {active.name}, {active.title} at{" "}
                {active.company.name}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description asChild>
                <p className="mt-5 text-lg leading-relaxed text-[#e8e9ea] md:text-xl md:leading-relaxed">
                  {active.quote}
                </p>
              </DialogPrimitive.Description>
              <div className="mt-7 flex items-center gap-4 border-t border-[#0d274d] pt-6">
                <CompanyLogo
                  company={active.company}
                  className="inline-flex h-14 max-w-[240px] items-center rounded-md border border-[#0d274d] bg-[#0d274d]/40 px-4"
                  wordmarkClassName="inline-flex h-14 items-center rounded-md border border-[#0d274d] bg-[#0d274d]/40 px-5 text-lg font-semibold tracking-tight text-white"
                  imgClassName="h-9 w-auto max-w-full object-contain"
                />
                <div>
                  <p className="text-base font-bold text-white">
                    {active.name}
                  </p>
                  <p className="mt-0.5 text-sm text-[#187adc]">
                    {active.title}, {active.company.name}
                  </p>
                </div>
              </div>
            </>
          )}
          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0d274d] bg-[#0d274d]/40 text-[#e8e9ea] transition-colors duration-200 hover:border-[#187adc] hover:text-[#fbaf45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#187adc]"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
