import Description from "~/components/supporters/description";
import SteeringCommittee from "~/components/supporters/steering_committee";
import Members from "~/components/supporters/contributors";
// import ContactUs from "../../components/supporters/contact_us";
import JoinUs from "~/components/supporters/join_us";
import RoleDescription from "~/components/supporters/role_description";

export default function Supporters() {
  return (
    <div className="items-center justify-center">
      <div className="pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-40 lg:pr-40 xl:pl-72 xl:pr-72 2xl:pl-[42%] 2xl:pr-[0%]">
        <Description />
        <SteeringCommittee />
        <Members />
      </div>
      <div className="pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-24 lg:pr-24 xl:pl-40 xl:pr-40 2xl:pl-[42%] 2xl:pr-[0%] bg-gradient-to-t from-[#00142B] to-[#187ADC]">
        <JoinUs />
        <RoleDescription />
      </div>
    </div>
  );
}
