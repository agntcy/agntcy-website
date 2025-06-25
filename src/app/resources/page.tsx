import type { Metadata } from "next";
import ResourcesContent from "~/components/resources/resources-content";

export default function Resources() {
  return (
    <div className="items-center justify-center">
      <div className="container mx-auto">
        <ResourcesContent />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "AGNTCY.org | Resources",
  alternates: {
    canonical: "/resources",
  },
};
