import Link from "next/link";
import { primaryCtaButtonClassName } from "lib/links";
import { ArrowLongRight } from "~/components/icons";
import SdkLanguageIcons from "./sdk-language-icons";
import { sdkPromoContent } from "~/data/homepage-data";
import { cn } from "lib/utils";
import { pageFrameClassName } from "lib/layout";

const SdkPromo = () => {
  return (
    <section className={cn(pageFrameClassName, "pb-16 md:pb-24")}>
      <div className="relative overflow-hidden rounded-2xl border border-accent-blue/25 bg-[#00142B] p-6 shadow-[0_4px_28px_rgba(24,122,220,0.12)] md:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1 space-y-4 md:space-y-5">
            <h2 className="max-w-2xl text-2xl font-light leading-tight text-white md:text-3xl lg:text-4xl">
              {sdkPromoContent.headline}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              {sdkPromoContent.statement}
            </p>
            <SdkLanguageIcons />
          </div>

          <div className="shrink-0 lg:self-center">
            <Link
              href={sdkPromoContent.ctaHref}
              className={primaryCtaButtonClassName}
            >
              {sdkPromoContent.ctaLabel}
              <ArrowLongRight size={22} color="currentColor" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkPromo;
