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

export const sdkCards: SdkCard[] = [
  {
    title: "Go SDK",
    description:
      "Directory client for Go 1.21+. Push OASF records, publish for routing, and search by skill.",
    family: "Directory",
    icon: DirIcon,
    href: "https://pkg.go.dev/github.com/agntcy/dir/client",
    ctaLabel: "View on pkg.go.dev",
  },
  {
    title: "Python SDK",
    description:
      "Directory client for Python 3.10+. Install with pip and connect to local or remote Directory servers.",
    family: "Directory",
    icon: DirIcon,
    href: "https://pypi.org/project/agntcy-dir/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "JavaScript / TypeScript SDK",
    description:
      "Directory client for Node.js with JavaScript and TypeScript support via npm.",
    family: "Directory",
    icon: DirIcon,
    href: "https://www.npmjs.com/package/agntcy-dir",
    ctaLabel: "View on npm",
  },
  {
    title: "Python bindings",
    description:
      "Connect Python applications to the SLIM messaging fabric via the slim-bindings package.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://pypi.org/project/slim-bindings/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Go bindings",
    description:
      "Idiomatic Go wrappers for SLIM data plane messaging, routing, and session management.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://github.com/agntcy/slim-bindings-go",
    ctaLabel: "View on GitHub",
  },
  {
    title: ".NET bindings",
    description:
      "C# bindings for SLIM via the Agntcy.Slim NuGet package for .NET applications.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://www.nuget.org/packages/Agntcy.Slim",
    ctaLabel: "View on NuGet",
  },
  {
    title: "Java bindings",
    description:
      "Java bindings for SLIM, published to Maven Central for JVM-based agent workloads.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://github.com/agntcy/slim-bindings/tree/main/java",
    ctaLabel: "View source",
  },
  {
    title: "Kotlin bindings",
    description:
      "Kotlin bindings for SLIM, published to Maven Central for Android and JVM apps.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://github.com/agntcy/slim-bindings/tree/main/kotlin",
    ctaLabel: "View source",
  },
  {
    title: "Node.js bindings",
    description:
      "Node.js bindings for SLIM via the @agntcy/slim-bindings npm package.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://www.npmjs.com/package/@agntcy/slim-bindings",
    ctaLabel: "View on npm",
  },
  {
    title: "React Native bindings",
    description:
      "React Native and browser WebAssembly bindings for SLIM mobile and edge clients.",
    family: "SLIM",
    icon: SlimIcon,
    href: "https://www.npmjs.com/package/@agntcy/slim-bindings-react-native",
    ctaLabel: "View on npm",
  },
  {
    title: "Go SDK",
    description:
      "Validate, translate, and decode OASF records in Go — convert between JSON, protobuf, A2A, and MCP formats.",
    family: "OASF",
    icon: DirIcon,
    href: "https://pkg.go.dev/github.com/agntcy/oasf-sdk/pkg",
    ctaLabel: "View on pkg.go.dev",
  },
  {
    title: "OASF SDK",
    description:
      "gRPC translation and validation service with proto bindings for Go, Python, Java, and Node.js.",
    family: "OASF",
    icon: DirIcon,
    href: "https://github.com/agntcy/oasf-sdk",
    ctaLabel: "View on GitHub",
  },
  {
    title: "Python SDK",
    description:
      "OpenTelemetry-compliant observability SDK for multi-agent systems — instrument agents, SLIM, A2A, and MCP.",
    family: "Observability",
    icon: ObserveIcon,
    href: "https://pypi.org/project/ioa-observe-sdk/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Metrics Computation Engine",
    description:
      "Compute evaluation metrics from agent telemetry — span, session, and population-level insights via REST API.",
    family: "Evaluation",
    icon: ObserveIcon,
    href: "https://pypi.org/project/metrics-computation-engine/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Python SDK",
    description:
      "Verify agent and MCP server identity badges via the Identity Platform REST API.",
    family: "Identity",
    icon: IdentityIcon,
    href: "https://pypi.org/project/agntcy-identity-sdk/",
    ctaLabel: "View on PyPI",
  },
  {
    title: "Go client",
    description:
      "Identity Node REST client for Go — resolve IDs, fetch resolver metadata, and integrate with the identity backend.",
    family: "Identity",
    icon: IdentityIcon,
    href: "https://pkg.go.dev/github.com/agntcy/identity/api/client",
    ctaLabel: "View on pkg.go.dev",
  },
];
