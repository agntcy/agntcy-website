import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { SdkCard, SdkFamily } from "~/data/sdk-data";
import { interactiveCardClassName } from "lib/card-styles";
import { cn } from "lib/utils";

const sdkCardClassName = cn(
  "relative flex h-full flex-col items-center rounded-xl bg-[#00142B] px-[15px] py-[23px] text-center",
  interactiveCardClassName
);

const familyBadgeClassNames: Record<SdkFamily, string> = {
  Directory:
    "border border-accent-blue/60 bg-accent-blue/20 text-accent-blue",
  SLIM: "border border-orange/60 bg-orange/10 text-orange",
  OASF: "border border-[#FBAF45]/60 bg-[#FBAF45]/10 text-[#FBAF45]",
  Observability:
    "border border-emerald-500/60 bg-emerald-500/10 text-emerald-400",
  Evaluation: "border border-violet-500/60 bg-violet-500/10 text-violet-400",
  Identity: "border border-sky-400/60 bg-sky-400/10 text-sky-300",
};

export default function SdkCard({ sdk }: { sdk: SdkCard }) {
  const Icon = sdk.icon;

  return (
    <Link
      href={sdk.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${sdk.title} — open in a new tab`}
      className="group relative block h-full rounded-xl pt-1"
    >
      <div className={cn(sdkCardClassName, "h-full min-h-[228px]")}>
        <ExternalLink
          className="absolute right-3 top-3 h-3.5 w-3.5 text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        />
        <Icon className="mb-4 scale-75" />

        <span
          className={cn(
            "mb-2 rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
            familyBadgeClassNames[sdk.family]
          )}
        >
          {sdk.family}
        </span>

        <h3 className="mb-2 text-base font-bold text-white md:text-lg">
          {sdk.title}
        </h3>

        <p className="mb-4 line-clamp-4 flex-1 text-xs font-normal leading-relaxed text-white/80 md:text-sm">
          {sdk.description}
        </p>

        <span className="text-xs font-semibold text-accent-blue group-hover:underline md:text-sm">
          {sdk.ctaLabel}
        </span>
      </div>
    </Link>
  );
}
