import { Coffee } from "lucide-react";
import { sdkLanguageIconBySlug } from "~/data/sdk-language-icons";
import { cn } from "lib/utils";

type SdkLanguageIconProps = {
  slug: string;
  className?: string;
};

export default function SdkLanguageIcon({ slug, className }: SdkLanguageIconProps) {
  const iconClassName = cn("h-8 w-8 shrink-0 text-white/60", className);

  if (slug === "java") {
    return (
      <Coffee
        aria-label="Java"
        className={iconClassName}
        strokeWidth={1.75}
      />
    );
  }

  const icon = sdkLanguageIconBySlug[slug];

  if (icon == null) {
    return null;
  }

  return (
    <svg
      role="img"
      aria-label={icon.label}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClassName}
    >
      {icon.path != null && <path d={icon.path} fill="currentColor" />}
    </svg>
  );
}
