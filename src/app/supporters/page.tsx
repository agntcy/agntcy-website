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
  alternates: {
    canonical: "/supporters",
  },
};
