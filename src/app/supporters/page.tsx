import Description from "~/components/supporters/description";
import SteeringCommittee from "~/components/supporters/steering_committee";
import Members from "~/components/supporters/contributors";
// import ContactUs from "../../components/supporters/contact_us";
import JoinUs from "~/components/supporters/join_us";
import RoleDescription from "~/components/supporters/role_description";

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
