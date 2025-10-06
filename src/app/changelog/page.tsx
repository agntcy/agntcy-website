import type { Metadata } from "next";
import ChangeLogContent from "~/components/changelog/changelog-content";

export default function ChangeLog() {
  return (
    <div className="items-center justify-center">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8 lg:px-48 pb-12">
        <Header />
        <ChangeLogContent />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="text-white">
      <h2 className="text-4xl pb-6">Changelog</h2>
      <div className="text-base">Explore code, SDKs, blogs, and use cases for developing multi-agent systems. Learn how AGNTCY enables open, interoperable AI infrastructure at scale.</div>
    </div>
  );
};
export const metadata: Metadata = {
  title: "AGNTCY.org | ChangeLog",
  description: "Discover the organizations and contributors supporting AGNTCY.org in building an open, interoperable Internet of Agents. Join a diverse collective shaping the future of multi-agent AI collaboration.",
  keywords: "AGNTCY Change log, AGNTCY supporters, multi-agent AI, agent collaboration, open-source AI, AI community, AGNTCY members",
  alternates: {
    canonical: "/supporters",
  },
};
