import Image from "next/image";
import Link from "next/link";
import { formativeMembers } from "~/data/members";
import {
  chipBaseClassName,
  chipInteractiveClassName,
  interactiveCardClassName,
} from "lib/card-styles";
import { cn } from "lib/utils";
import { pageFrameClassName } from "lib/layout";

const logoBoxClassName = "relative h-12 w-full max-w-[140px]";

const memberCardClassName = cn(
  "flex h-full min-h-[100px] items-center justify-center rounded-xl bg-bg px-4 py-6",
  interactiveCardClassName
);

type SteeringCommitteeCardsProps = {
  variant?: "homepage" | "supporters";
};

const tscGrid = (
  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {formativeMembers.map((logo) => (
      <Link
        key={logo.name}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        title={logo.name}
        aria-label={`${logo.name} — open website in a new tab`}
        className={cn(chipInteractiveClassName, chipBaseClassName)}
      >
        <Image
          unoptimized
          src={logo.src}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          className="max-h-9 w-auto max-w-full object-contain"
        />
      </Link>
    ))}
  </div>
);

const memberGrid = (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
    {formativeMembers.map((logo) => (
      <Link
        key={logo.name}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${logo.name} — open website in a new tab`}
        className="group relative block"
      >
        <div className={memberCardClassName}>
          <div className={logoBoxClassName}>
            <Image
              unoptimized
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
              sizes="140px"
            />
          </div>
        </div>
      </Link>
    ))}
  </div>
);

const SteeringCommitteeCards = ({
  variant = "homepage",
}: SteeringCommitteeCardsProps) => {
  if (variant === "supporters") {
    return (
      <>
        <h2 className="max-w-4xl text-3xl font-light leading-tight text-orange md:text-4xl lg:text-5xl">
          Technical Steering Committee
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white md:text-base lg:text-lg">
          The organizations steering AGNTCY as a Series of LF Projects, LLC —
          alongside the broader community of contributors.
        </p>
        {tscGrid}
      </>
    );
  }

  return (
    <section className={cn(pageFrameClassName, "pb-16 md:pb-24")}>
      <h2 className="mb-6 text-base font-bold text-orange md:mb-8">
        TECHNICAL STEERING COMMITTEE
      </h2>
      {memberGrid}
    </section>
  );
};

export default SteeringCommitteeCards;
