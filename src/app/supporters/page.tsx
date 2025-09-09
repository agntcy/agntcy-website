import Description from "~/components/supporters/description";
import type { Metadata } from "next";
import SteeringCommittee from "~/components/supporters/steering_committee";
import Members from "~/components/supporters/contributors";

export default function Supporters() {
  return (
    <div className="items-center justify-center">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8 lg:px-48">
        <Description />
        <SteeringCommittee />
        <Members />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org | Supporters",
  description: "Discover the organizations and contributors supporting AGNTCY.org in building an open, interoperable Internet of Agents. Join a diverse collective shaping the future of multi-agent AI collaboration.",
  keywords: "AGNTCY supporters, multi-agent AI, agent collaboration, open-source AI, AI community, AGNTCY members",
  alternates: {
    canonical: "/supporters",
  },
};
