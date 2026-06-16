"use client";

import { useState } from "react";
import ArticleCard from "./article-card";
import { articlesData } from "~/data/resource-data";

type ArticleCategory = NonNullable<Resource["category"]>;
type ArticleFilter = "All" | ArticleCategory;

const categories = articlesData.reduce<ArticleCategory[]>((acc, article) => {
  if (article.category && !acc.includes(article.category)) {
    acc.push(article.category);
  }
  return acc;
}, []);

const FILTERS = ["All", ...categories] as const;

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
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          const count = filterCounts[filter] ?? 0;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-accent-blue bg-accent-blue text-white"
                  : "border-white/30 bg-transparent text-white hover:border-white/50"
              }`}
            >
              {filter} {count}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 pb-16 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
