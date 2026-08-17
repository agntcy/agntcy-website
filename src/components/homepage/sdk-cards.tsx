import SdkCardsCarousel from "./sdk-cards-carousel";
import SectionHeader from "./section-header";
import { sdkSectionStatement } from "~/data/homepage-data";
import { cn } from "lib/utils";
import { pageFrameClassName } from "lib/layout";

const SdkCards = () => {
  return (
    <section className={cn(pageFrameClassName, "pb-16 md:pb-24")}>
      <SectionHeader
        title={sdkSectionStatement.title}
        statement={sdkSectionStatement.statement}
        docLinks={sdkSectionStatement.docLinks}
        docLinksIntro={sdkSectionStatement.docLinksIntro}
      />
      <SdkCardsCarousel />
    </section>
  );
};

export default SdkCards;
