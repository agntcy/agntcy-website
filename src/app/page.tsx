import type { Metadata } from "next";
import Hero from "components/homepage/hero";
import FeatureCards from "components/homepage/feature-cards";
import SteeringCommitteeCards from "components/homepage/steering-committee-cards";

export const metadata: Metadata = {
  title: "AGNTCY.org — Building the Internet of Agents (IoA)",
  description:
    "AGNTCY delivers an open-source stack enabling AI agents to collaborate across vendors and frameworks through discovery, identity, messaging, and observability.",
  openGraph: {
    title: "AGNTCY.org — Building the Internet of Agents (IoA)",
    description:
      "AGNTCY delivers an open-source stack enabling AI agents to collaborate across vendors and frameworks through discovery, identity, messaging, and observability.",
  },
  twitter: {
    title: "AGNTCY.org — Building the Internet of Agents (IoA)",
    description:
      "AGNTCY delivers an open-source stack enabling AI agents to collaborate across vendors and frameworks through discovery, identity, messaging, and observability.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col bg-bg">
      <Hero />
      <FeatureCards />
      <SteeringCommitteeCards />
    </div>
  );
}
