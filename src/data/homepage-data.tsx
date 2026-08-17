import type { ComponentType } from "react";
import {
  DirIcon,
  IdentityIcon,
  ObserveIcon,
  SlimIcon,
} from "~/components/homepage/feature-icons";

export const heroContent = {
  headline: "Building the Internet of Agents (IoA)",
  description:
    "AGNTCY delivers an open-source stack enabling AI agents to collaborate across vendors and frameworks through discovery, identity, messaging, and observability.",
  githubUrl: "https://github.com/agntcy",
  learnMoreUrl: "https://docs.agntcy.org",
};

export const sdkSectionStatement = {
  title: "SDKs",
  statement:
    "Client libraries and language bindings for Directory and SLIM, so you can publish, discover, and connect agents from the stack you already use.",
  docLinksIntro: "For more information, see the",
  docLinks: [
    {
      label: "Directory SDK",
      href: "https://dir.agntcy.org/latest/dir/dir-sdk/",
    },
    {
      label: "SLIM SDK",
      href: "https://slim.agntcy.org/latest/slim/components/sdk/",
    },
  ],
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
};

export const featureCards: FeatureCard[] = [
  {
    title: "Agent Directory Service",
    description:
      "Federated registry for cross-framework, cross-protocol, cross-registry agent discovery.",
    icon: DirIcon,
    href: "https://dir.agntcy.org",
  },
  {
    title: "SLIM",
    description:
      "A protocol that defines the standards and guidelines for secure and efficient network-level communication between AI agents.",
    icon: SlimIcon,
    href: "https://slim.agntcy.org",
  },
  {
    title: "Observability",
    description:
      "Telemetry collectors, tools and services to enable multi-agent application observability and evaluation.",
    icon: ObserveIcon,
    href: "https://docs.agntcy.org/obs-and-eval/observe-and-eval/",
  },
  {
    title: "Identity",
    description:
      "Solution to manage and verify the identities of Agents or Tools issued by any organization, ensuring secure and trustworthy interactions.",
    icon: IdentityIcon,
    href: "https://identity-docs.outshift.com/docs/intro/",
  },
];
