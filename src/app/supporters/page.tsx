import type { Metadata } from "next";
import { pageFrameClassName } from "lib/layout";
import { SectionTabs } from "components/supporters/section-tabs";
import { SupporterLogoWall } from "components/supporters/supporter-logo-wall";
import { TestimonialModalWall } from "components/supporters/testimonial-modal-wall";
import SteeringCommitteeCards from "components/homepage/steering-committee-cards";
import {
  sectionTabs,
  supporters,
  testimonials,
} from "~/data/supporters-data";

export default function Supporters() {
  return (
    <div className="scroll-smooth pb-20 text-[#e8e9ea]">
      <SectionTabs tabs={sectionTabs} />

      <div className={pageFrameClassName}>
        <section id="supporters" className="scroll-mt-36">
          <h1 className="mt-10 max-w-4xl text-3xl font-light leading-tight text-orange md:text-4xl lg:text-5xl">
            Our Supporters
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white md:text-base lg:text-lg">
            The open, interoperable Internet of Agents isn&apos;t a nice to
            have, it&apos;s a must have. These {supporters.length} organizations
            stand with AGNTCY — building bridges, not walls.
          </p>

          <SupporterLogoWall supporters={supporters} />
        </section>

        <section
          id="tsc"
          className="mt-20 scroll-mt-36 border-t border-[#0d274d] pt-16"
        >
          <SteeringCommitteeCards variant="supporters" />
        </section>

        <section
          id="testimonials"
          className="mt-20 scroll-mt-36 border-t border-[#0d274d] pt-16"
        >
          <h2 className="max-w-4xl text-3xl font-light leading-tight text-orange md:text-4xl lg:text-5xl">
            They say about us
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white md:text-base lg:text-lg">
            What our partners and supporters say about AGNTCY and the Internet
            of Agents. Select a card to read the full quote.
          </p>

          <TestimonialModalWall testimonials={testimonials} />
        </section>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Supporters — AGNTCY",
  description:
    "What our partners and supporters say about AGNTCY and the Internet of Agents.",
  keywords:
    "AGNTCY supporters, multi-agent AI, agent collaboration, open-source AI, AI community, AGNTCY members",
  alternates: {
    canonical: "/supporters",
  },
};
