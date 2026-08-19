import Link from "next/link";
import Image from "next/image";
import { cn } from "lib/utils";
import { ArrowLongRight } from "~/components/icons";
import { heroContent } from "~/data/homepage-data";
import { pageFrameClassName } from "lib/layout";
import {
  outlineCtaButtonClassName,
  outlineCtaIconClassName,
  primaryCtaButtonClassName,
  slackInviteUrl,
} from "lib/links";
import AgntcyLogo from "./agntcy-logo";
import DiscordDropdown from "./discord-dropdown";
import LinuxFoundationLogo from "./linux-foundation-logo";

const Hero = () => {
  return (
    <div className={cn(pageFrameClassName, "pb-10 pt-4 md:pb-14 md:pt-8")}>
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
          <div id="hero-agntcy-logo" className="w-fit">
            <AgntcyLogo className="h-auto w-full max-w-[280px] md:max-w-[360px] lg:max-w-[400px]" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-light text-white/80 md:text-base">
              part of
            </span>
            <LinuxFoundationLogo className="h-auto w-[240px] md:w-[280px] lg:w-[321px]" />
          </div>
        </div>

        <div className="w-full space-y-6">
          <h1 className="w-full text-2xl font-light leading-tight tracking-tight text-[#FBAF45] sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap xl:text-[56px]">
            {heroContent.headline}
          </h1>

          <p className="w-full max-w-none text-lg font-normal leading-relaxed text-white md:text-xl">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={heroContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineCtaButtonClassName}
            >
              <Image
                src="/images/homepage/github.svg"
                width={22}
                height={21}
                alt=""
                aria-hidden
                className={outlineCtaIconClassName}
              />
              GitHub
            </Link>
            <Link
              href={slackInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineCtaButtonClassName}
            >
              <Image
                src="/images/homepage/slack.svg"
                width={20}
                height={20}
                alt=""
                aria-hidden
                className={outlineCtaIconClassName}
              />
              Join us on Slack
            </Link>
            <DiscordDropdown />
            <Link
              href={heroContent.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCtaButtonClassName}
            >
              Learn more
              <ArrowLongRight size={22} color="currentColor" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
