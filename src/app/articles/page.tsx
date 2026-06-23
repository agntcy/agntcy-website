import type { Metadata } from "next";
import { pageFrameClassName } from "lib/layout";
import ArticlesContent from "~/components/resources/articles-content";

export const metadata: Metadata = {
  title: "AGNTCY.org | Articles",
  description:
    "Read AGNTCY technical articles and blog posts about building and scaling multi-agent systems.",
  keywords:
    "AGNTCY articles, blogs, multi-agent systems, AI agent engineering, AGNTCY technical blog",
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesPage() {
  return (
    <main>
      <div className={pageFrameClassName}>
        <header className="max-w-4xl pt-12 md:pt-16">
          <h1 className="mb-3 text-3xl text-orange md:text-4xl">Articles</h1>
          <p className="mb-6 text-base text-white">
            Read the latest blog posts, deep dives, and technical writing from
            AGNTCY and the Internet of Agents community — from the engineering
            Technical Blog and TSC member blogs, in one place.
          </p>
        </header>
        <ArticlesContent />
      </div>
    </main>
  );
}
