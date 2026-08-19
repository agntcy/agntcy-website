import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SdkLanguageIcon from "~/components/sdks/sdk-language-icon";
import type { SdkCard } from "~/data/sdk-data";
import { interactiveCardClassName } from "lib/card-styles";
import { cn } from "lib/utils";

const sdkCardClassName = cn(
  "relative flex h-full flex-col rounded-xl bg-[#00142B] p-4 text-left",
  interactiveCardClassName
);

export default function SdkCard({ sdk }: { sdk: SdkCard }) {
  return (
    <Link
      href={sdk.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${sdk.title} — open in a new tab`}
      className="group relative block h-full rounded-xl"
    >
      <div className={cn(sdkCardClassName, "min-h-[188px]")}>
        <div className="mb-4 flex items-start justify-between gap-3">
          <SdkLanguageIcon slug={sdk.languageSlug} />
          <span className="rounded border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/50">
            {sdk.family}
          </span>
        </div>

        <h3 className="mb-2 text-base font-bold text-white">{sdk.title}</h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
          {sdk.description}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue group-hover:underline">
          {sdk.ctaLabel}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
