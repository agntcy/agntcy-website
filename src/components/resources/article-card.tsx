import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { formatResourceDate } from "lib/format-date";
import { interactiveCardClassName } from "lib/card-styles";
import { cn } from "lib/utils";

const SOURCE_LABELS: Record<NonNullable<Resource["source"]>, string> = {
  "AGNTCY Blog": "blogs.agntcy.org",
  Outshift: "Outshift",
  Dell: "Dell",
  "WSJ for Business": "WSJ for Business",
  VentureBeat: "VentureBeat",
  Galileo: "Galileo",
};

const articleCardClassName = cn(
  "flex h-full flex-col rounded-xl bg-article-card p-5",
  interactiveCardClassName
);

const getCategoryBadgeClass = (category?: Resource["category"]) => {
  if (category === "TSC") {
    return "border border-orange text-orange bg-transparent";
  }

  if (category === "External Articles") {
    return "border border-white/30 bg-white/10 text-white/80";
  }

  return "border border-accent-blue/60 bg-accent-blue/20 text-accent-blue";
};

const getCtaLabel = (article: Resource) => {
  if (article.source) {
    return `Read on ${SOURCE_LABELS[article.source]}`;
  }

  return "Read article";
};

export default function ArticleCard({ article }: { article: Resource }) {
  const formattedDate = formatResourceDate(article.date);
  const ctaLabel = getCtaLabel(article);

  return (
    <Link
      href={article.resourceLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${article.title} — open in a new tab`}
      className="group relative block h-full"
    >
      <ExternalLink
        className="absolute right-4 top-4 h-4 w-4 text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />

      <div className={articleCardClassName}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {article.category && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryBadgeClass(article.category)}`}
            >
              {article.category}
            </span>
          )}
          {formattedDate && (
            <time
              dateTime={article.date}
              className="text-xs text-white/60"
            >
              {formattedDate}
            </time>
          )}
        </div>

        <h2 className="mb-3 text-lg font-bold leading-snug text-white md:text-xl">
          {article.title}
        </h2>

        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-white/70">
          {article.description}
        </p>

        <span className="text-sm font-semibold text-accent-blue group-hover:underline">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}
