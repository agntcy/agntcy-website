import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { SdkCard, SdkFamily } from "~/data/sdk-data";
import { interactiveCardClassName } from "lib/card-styles";
import { cn } from "lib/utils";

const sdkCardClassName = cn(
  "relative flex h-full flex-col items-center rounded-xl bg-[#00142B] px-3 py-4 text-center",
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
      <div className={cn(sdkCardClassName, "h-full min-h-[176px]")}>
        <ExternalLink
          className="absolute right-2.5 top-2.5 h-3 w-3 text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        />
        <Icon className="mb-2 scale-[0.65]" />

        <span
          className={cn(
            "mb-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold",
            familyBadgeClassNames[sdk.family]
          )}
        >
          {sdk.family}
        </span>

        <h3 className="mb-1 text-sm font-bold text-white md:text-base">
          {sdk.title}
        </h3>

        <p className="mb-2 line-clamp-2 flex-1 text-xs leading-snug text-white/75">
          {sdk.description}
        </p>

        <span className="text-[11px] font-semibold text-accent-blue group-hover:underline">
          {sdk.ctaLabel}
        </span>
      </div>
    </Link>
  );
}
