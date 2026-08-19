import { sdkLanguageIcons } from "~/data/sdk-language-icons";

const tileClassName =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#071325] sm:h-[52px] sm:w-[52px]";

const svgIconClassName = "h-7 w-7 text-white/60 sm:h-8 sm:w-8";

function BrandSvgIcon({ path }: { path: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      className={svgIconClassName}
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
}

export default function SdkLanguageIcons() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:gap-3">
      {sdkLanguageIcons.map(({ label, slug, path }) => (
        <div key={slug} className={tileClassName} title={label} aria-hidden="true">
          <BrandSvgIcon path={path} />
        </div>
      ))}
      <span className="text-sm text-white/45 sm:text-base">&amp; more</span>
    </div>
  );
}
