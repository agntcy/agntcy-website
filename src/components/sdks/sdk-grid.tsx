import SdkCard from "~/components/resources/sdk-card";
import { sdkCards, sdkFamilyOrder, type SdkFamily } from "~/data/sdk-data";

const cardsByFamily = sdkFamilyOrder.reduce<
  Record<SdkFamily, typeof sdkCards>
>(
  (groups, family) => {
    groups[family] = sdkCards.filter((sdk) => sdk.family === family);
    return groups;
  },
  {} as Record<SdkFamily, typeof sdkCards>
);

export default function SdkGrid() {
  return (
    <div className="space-y-10 pb-16 md:space-y-12 md:pb-24">
      {sdkFamilyOrder.map((family) => {
        const cards = cardsByFamily[family];
        if (cards.length === 0) return null;

        return (
          <section key={family} aria-labelledby={`sdk-family-${family}`}>
            <h2
              id={`sdk-family-${family}`}
              className="mb-4 text-sm font-bold uppercase tracking-wide text-orange md:mb-5"
            >
              {family}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
              {cards.map((sdk) => (
                <SdkCard
                  key={`${sdk.family}-${sdk.title}-${sdk.href}`}
                  sdk={sdk}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
