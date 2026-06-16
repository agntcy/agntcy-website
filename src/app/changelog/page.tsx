import type { Metadata } from "next";
import { cn } from "lib/utils";
import { pageFrameClassName } from "lib/layout";
import ChangeLogContent from "~/components/changelog/changelog-content";

export const metadata: Metadata = {
  title: "AGNTCY.org | Changelog",
  description:
    "Stay updated with the latest changes, fixes, and feature releases for AGNTCY GitHub repositories. Explore detailed changelogs, version history, and commit insights to track project evolution and development milestones.",
  keywords:
    "AGNTCY changelog, AGNTCY supporters, multi-agent AI, agent collaboration, open-source AI, AI community, AGNTCY members",
  alternates: {
    canonical: "/changelog",
  },
};

export default function ChangeLog() {
  return (
    <main className="flex justify-center items-center text-white">
      <div className={cn(pageFrameClassName, "pb-12")}>
        <Header />
        <section aria-label="Changelog Content">
          <ChangeLogContent />
        </section>
      </div>
    </main>
  );
}

const Header = () => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold pb-4">Changelog</h1>
      <p className="text-base leading-relaxed max-w-3xl">
        Explore code, SDKs, blogs, and use cases for developing multi-agent systems. Learn how AGNTCY enables open, interoperable AI infrastructure at scale.
      </p>
    </header>
  );
};
