import Hero from "components/homepage/hero";
import FeatureCards from "components/homepage/feature-cards";
import SteeringCommitteeCards from "components/homepage/steering-committee-cards";

export default function Home() {
  return (
    <div className="flex flex-col bg-bg">
      <Hero />
      <FeatureCards />
      <SteeringCommitteeCards />
    </div>
  );
}
