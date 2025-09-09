import type { Metadata } from "next";
import ResourcesContent from "~/components/resources/resources-content";

export default function Resources() {
  return (
    <div className="items-center justify-center">
      <div className="container mx-auto">
        <ResourcesContent />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org | Resources",
  description: "Explore AGNTCY’s open-source SDKs, demos, and infrastructure tools for building scalable multi-agent AI systems. Learn how to implement agent identity, messaging, and orchestration protocols.",
  keywords: "AGNTCY resources, multi-agent SDK, AI agent tools, agent identity, agent messaging, agent orchestration, Internet of Agents, open-source AI infrastructure",
  alternates: {
    canonical: "/resources",
  },
};
