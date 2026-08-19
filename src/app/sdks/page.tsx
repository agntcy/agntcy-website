import type { Metadata } from "next";
import SectionHeader from "components/homepage/section-header";
import SdkGrid from "components/sdks/sdk-grid";
import { sdkSectionStatement } from "~/data/homepage-data";
import { pageFrameClassName } from "lib/layout";

export const metadata: Metadata = {
  title: "AGNTCY.org | SDKs",
  description:
    "Client libraries and language bindings for Directory, SLIM, OASF, observability, evaluation, and identity across Go, Python, Node.js, .NET, Java, Kotlin, and React Native.",
  keywords:
    "AGNTCY SDKs, agent directory SDK, SLIM bindings, OASF SDK, observability SDK, identity SDK, multi-agent libraries",
  alternates: {
    canonical: "/sdks",
  },
};

export default function SdksPage() {
  return (
    <main>
      <div className={pageFrameClassName}>
        <header className="pt-12 md:pt-16">
          <SectionHeader
            title={sdkSectionStatement.title}
            statement={sdkSectionStatement.statement}
            documentation={sdkSectionStatement.documentation}
          />
        </header>
        <SdkGrid />
      </div>
    </main>
  );
}
