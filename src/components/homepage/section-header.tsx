import Link from "next/link";
import { cn } from "lib/utils";

type SectionHeaderProps = {
  title: string;
  statement: string;
  documentation?: {
    href: string;
    intro?: string;
    label?: string;
  };
  className?: string;
};

export default function SectionHeader({
  title,
  statement,
  documentation,
  className,
}: SectionHeaderProps) {
  const linkClassName = "font-semibold text-accent-blue hover:underline";

  return (
    <div className={cn("mb-6 md:mb-8", className)}>
      <h2 className="text-base font-bold text-orange">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
        {statement}
      </p>
      {documentation && (
        <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
          {documentation.intro ?? "For more information, see the"}{" "}
          <Link
            href={documentation.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {documentation.label ?? "documentation"}
          </Link>
          .
        </p>
      )}
    </div>
  );
}
