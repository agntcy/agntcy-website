import { cn } from "lib/utils";

export const interactiveCardClassName = cn(
  "border border-accent-blue/20 shadow-[0_4px_28px_rgba(24,122,220,0.12)]",
  "transition-all duration-200",
  "group-hover:-translate-y-1 group-hover:border-accent-blue group-hover:shadow-[0_0_28px_rgba(24,122,220,0.45)]",
  "group-focus-visible:-translate-y-1 group-focus-visible:border-accent-blue group-focus-visible:shadow-[0_0_28px_rgba(24,122,220,0.45)] group-focus-visible:outline-none"
);

export const chipBaseClassName =
  "relative flex h-20 items-center justify-center rounded-[16px] border border-navy-light bg-bg px-5 shadow-[0px_4px_30px_theme(colors.navy-light)]";

export const chipInteractiveClassName = cn(
  "group cursor-pointer transition-all duration-300",
  "hover:-translate-y-1 hover:border-accent-blue hover:shadow-[0px_8px_50px_rgba(24,122,220,0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
);

export const gradientBorderOverlayClassName =
  "pointer-events-none absolute inset-0 p-px opacity-0 transition-opacity duration-300 [background:linear-gradient(135deg,theme(colors.accent-blue),#5fd3ff)] [-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] group-hover:opacity-100";
