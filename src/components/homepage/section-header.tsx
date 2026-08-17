import Link from "next/link";
import { cn } from "lib/utils";

type SectionDocLink = {
  label: string;
  href: string;
};

type SectionHeaderProps = {
  title: string;
  statement: string;
  docLinks?: SectionDocLink[];
  docLinksIntro?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  statement,
  docLinks,
  docLinksIntro = "For more information, see the",
  className,
}: SectionHeaderProps) {
  const linkClassName = "font-semibold text-accent-blue hover:underline";

  return (
    <div className={cn("mb-6 md:mb-8", className)}>
      <h2 className="text-base font-bold text-orange">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
        {statement}
      </p>
      {docLinks && docLinks.length > 0 && (
        <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
          {docLinksIntro}{" "}
          {docLinks.length === 2 ? (
            <>
              <Link
                href={docLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {docLinks[0].label}
              </Link>
              {" and "}
              <Link
                href={docLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {docLinks[1].label}
              </Link>
              {" docs."}
            </>
          ) : (
            docLinks.map((link, index) => (
              <span key={link.href}>
                {index > 0 && (
                  <span className="text-white/50" aria-hidden="true">
                    {" · "}
                  </span>
                )}
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  {link.label}
                </Link>
              </span>
            ))
          )}
        </p>
      )}
    </div>
  );
}
