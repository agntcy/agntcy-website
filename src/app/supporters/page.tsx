import Description from "~/components/supporters/description";
import JoinUs from "~/components/supporters/join_us";
import RoleDescription from "~/components/supporters/role_description";
import type { Metadata } from "next";
import SteeringCommittee from "~/components/supporters/steering_committee";
import Members from "~/components/supporters/contributors";

export default function Supporters() {
  return (
    <div className="items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-48">
        <Description />
        <SteeringCommittee />
        <Members />
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <JoinUs />
        <RoleDescription />
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
