import type { ComponentType } from "react";
import {
  DirIcon,
  IdentityIcon,
  ObserveIcon,
  SlimIcon,
} from "~/components/homepage/feature-icons";

export type SdkFamily =
  | "Directory"
  | "SLIM"
  | "OASF"
  | "Observability"
  | "Evaluation"
  | "Identity";

export type SdkCard = {
  title: string;
  description: string;
  family: SdkFamily;
  icon: ComponentType<{ className?: string }>;
  href: string;
  ctaLabel: string;
};

export const sdkFamilyOrder = [
  "Directory",
  "SLIM",
  "OASF",
  "Observability",
  "Evaluation",
  "Identity",
] as const satisfies readonly SdkFamily[];

export const sdkCards: SdkCard[] = [
  {
    title: "Go",
    description: "Publish, discover, and search agents.",
    family: "Directory",
    icon: DirIcon,
    href: "https://pkg.go.dev/github.com/agntcy/dir/client",
    ctaLabel: "pkg.go.dev",
  },
  {
    title: "Python",
    description: "Directory client for Python 3.10+.",
    family: "Directory",
    icon: DirIcon,
    href: "https://pypi.org/project/agntcy-dir/",
    ctaLabel: "PyPI",
  },
  {
    title: "Node.js",
    description: "Directory client for JavaScript and TypeScript.",
    family: "Directory",
    icon: DirIcon,
    href: "https://www.npmjs.com/package/agntcy-dir",
    ctaLabel: "npm",
  },
  {
    title: "Python",
    description: "SLIM messaging for Python apps.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://pypi.org/project/slim-bindings/",
    ctaLabel: "PyPI",
  },
  {
    title: "Go",
    description: "SLIM messaging, routing, and sessions.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://github.com/agntcy/slim-bindings-go",
    ctaLabel: "GitHub",
  },
  {
    title: ".NET",
    description: "SLIM messaging for C# and .NET.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://www.nuget.org/packages/Agntcy.Slim",
    ctaLabel: "NuGet",
  },
  {
    title: "Java",
    description: "SLIM bindings for JVM workloads.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://github.com/agntcy/slim-bindings/tree/main/java",
    ctaLabel: "GitHub",
  },
  {
    title: "Kotlin",
    description: "SLIM bindings for Android and JVM.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://github.com/agntcy/slim-bindings/tree/main/kotlin",
    ctaLabel: "GitHub",
  },
  {
    title: "Node.js",
    description: "SLIM bindings for Node.js.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://www.npmjs.com/package/@agntcy/slim-bindings",
    ctaLabel: "npm",
  },
  {
    title: "React Native",
    description: "SLIM for mobile and WebAssembly.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://www.npmjs.com/package/@agntcy/slim-bindings-react-native",
    ctaLabel: "npm",
  },
  {
    title: "Go",
    description: "Validate and translate OASF records.",
    family: "OASF",
    icon: DirIcon,
    href: "https://pkg.go.dev/github.com/agntcy/oasf-sdk/pkg",
    ctaLabel: "pkg.go.dev",
  },
  {
    title: "gRPC service",
    description: "Translation service and proto bindings.",
    family: "OASF",
    icon: DirIcon,
    href: "https://github.com/agntcy/oasf-sdk",
    ctaLabel: "GitHub",
  },
  {
    title: "Python",
    description: "OTel instrumentation for agent systems.",
    family: "Observability",
    icon: ObserveIcon,
    href: "https://pypi.org/project/ioa-observe-sdk/",
    ctaLabel: "PyPI",
  },
  {
    title: "Metrics Engine",
    description: "Evaluation metrics from telemetry.",
    family: "Evaluation",
    icon: ObserveIcon,
    href: "https://pypi.org/project/metrics-computation-engine/",
    ctaLabel: "PyPI",
  },
  {
    title: "Python",
    description: "Verify agent identity badges.",
    family: "Identity",
    icon: IdentityIcon,
    href: "https://pypi.org/project/agntcy-identity-sdk/",
    ctaLabel: "PyPI",
  },
  {
    title: "Go",
    description: "Identity Node REST client.",
    family: "Identity",
    icon: IdentityIcon,
    href: "https://pkg.go.dev/github.com/agntcy/identity/api/client",
    ctaLabel: "pkg.go.dev",
  },
];
