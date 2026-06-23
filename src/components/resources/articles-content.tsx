"use client";

import { useState } from "react";
import ArticleCard from "./article-card";
import { articlesData } from "~/data/resource-data";

type ArticleCategory = NonNullable<Resource["category"]>;
type ArticleFilter = "All" | ArticleCategory;

const FILTER_CATEGORIES: ArticleCategory[] = [
  "Technical Blog",
  "TSC",
  "External Articles",
];

const FILTERS = ["All", ...FILTER_CATEGORIES] as const;

const sortArticlesByDate = (articles: typeof articlesData) =>
  [...articles].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });

const filterCounts = (() => {
  const counts: Record<string, number> = { All: articlesData.length };
  for (const article of articlesData) {
    if (article.category) {
      counts[article.category] = (counts[article.category] ?? 0) + 1;
    }
  }
  return counts;
})();

export default function ArticlesContent() {
  const [activeFilter, setActiveFilter] = useState<ArticleFilter>("All");

  const filteredArticles = sortArticlesByDate(
    activeFilter === "All"
      ? articlesData
      : articlesData.filter((article) => article.category === activeFilter)
  );

  return (
    <section>
      <nav
        aria-label="Filter articles by category"
        className="mb-8 inline-flex items-center rounded-full border border-[#0d274d] bg-[#0d274d]/30 p-1"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          const count = filterCounts[filter] ?? 0;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 md:px-4 md:text-sm ${
                isActive
                  ? "bg-[#187adc] text-white shadow-[0px_2px_12px_rgba(24,122,220,0.45)]"
                  : "text-white/70 hover:text-[#fbaf45]"
              }`}
            >
              {filter}
              <span
                className={`inline-flex min-w-[1.25rem] items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums leading-none md:text-[11px] ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="grid grid-cols-1 gap-6 pb-16 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
