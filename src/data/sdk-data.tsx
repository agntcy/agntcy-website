export type SdkFamily =
  | "Directory"
  | "SLIM"
  | "OASF"
  | "Observability"
  | "Evaluation"
  | "Identity";

export type SdkLanguageSlug =
  | "go"
  | "python"
  | "javascript"
  | "dotnet"
  | "java"
  | "kotlin"
  | "nodedotjs"
  | "react"
  | "github";

export type SdkCard = {
  title: string;
  description: string;
  family: SdkFamily;
  languageSlug: SdkLanguageSlug;
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
    description: "Push, publish, and search OASF records from Go.",
    family: "Directory",
    languageSlug: "go",
    href: "https://pkg.go.dev/github.com/agntcy/dir/client",
    ctaLabel: "View on pkg.go.dev",
  },
  {
    title: "Python",
    description: "Connect to local or remote Directory servers with pip.",
    family: "Directory",
    languageSlug: "python",
    href: "https://pypi.org/project/agntcy-dir/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "JS / TS",
    description: "Directory client for Node.js with JavaScript & TypeScript.",
    family: "Directory",
    languageSlug: "javascript",
    href: "https://www.npmjs.com/package/agntcy-dir",
    ctaLabel: "View on npm",
  },
  {
    title: "Python",
    description: "Connect Python apps to the SLIM messaging fabric.",
    family: "SLIM",
    languageSlug: "python",
    href: "https://pypi.org/project/slim-bindings/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Go",
    description: "Idiomatic Go wrappers for SLIM messaging & routing.",
    family: "SLIM",
    languageSlug: "go",
    href: "https://github.com/agntcy/slim-bindings-go",
    ctaLabel: "View on GitHub",
  },
  {
    title: ".NET",
    description: "C# bindings for SLIM for .NET applications.",
    family: "SLIM",
    languageSlug: "dotnet",
    href: "https://www.nuget.org/packages/Agntcy.Slim",
    ctaLabel: "View on NuGet",
  },
  {
    title: "Java",
    description: "SLIM bindings for JVM-based agent workloads.",
    family: "SLIM",
    languageSlug: "java",
    href: "https://central.sonatype.com/artifact/io.agntcy.slim/slim-bindings-java",
    ctaLabel: "View on Maven Central",
  },
  {
    title: "Kotlin",
    description: "SLIM bindings for Android and JVM apps.",
    family: "SLIM",
    languageSlug: "kotlin",
    href: "https://central.sonatype.com/artifact/io.agntcy.slim/slim-bindings-kotlin",
    ctaLabel: "View on Maven Central",
  },
  {
    title: "Node.js",
    description: "SLIM bindings for Node.js applications.",
    family: "SLIM",
    languageSlug: "nodedotjs",
    href: "https://www.npmjs.com/package/@agntcy/slim-bindings",
    ctaLabel: "View on npm",
  },
  {
    title: "React Native",
    description: "SLIM for mobile and WebAssembly runtimes.",
    family: "SLIM",
    languageSlug: "react",
    href: "https://www.npmjs.com/package/@agntcy/slim-bindings-react-native",
    ctaLabel: "View on npm",
  },
  {
    title: "Go",
    description: "Validate and translate OASF records from Go.",
    family: "OASF",
    languageSlug: "go",
    href: "https://pkg.go.dev/github.com/agntcy/oasf-sdk/pkg",
    ctaLabel: "View on pkg.go.dev",
  },
  {
    title: "gRPC service",
    description: "Translation service and proto bindings.",
    family: "OASF",
    languageSlug: "github",
    href: "https://github.com/agntcy/oasf-sdk",
    ctaLabel: "View on GitHub",
  },
  {
    title: "Python",
    description: "OTel instrumentation for agent systems.",
    family: "Observability",
    languageSlug: "python",
    href: "https://pypi.org/project/ioa-observe-sdk/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Metrics Engine",
    description: "Evaluation metrics from telemetry data.",
    family: "Evaluation",
    languageSlug: "python",
    href: "https://pypi.org/project/metrics-computation-engine/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Python",
    description: "Verify agent identity badges from Python.",
    family: "Identity",
    languageSlug: "python",
    href: "https://pypi.org/project/agntcy-identity-sdk/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Go",
    description: "Identity Node REST client for Go.",
    family: "Identity",
    languageSlug: "go",
    href: "https://pkg.go.dev/github.com/agntcy/identity/api/client",
    ctaLabel: "View on pkg.go.dev",
  },
];
