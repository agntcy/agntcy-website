import ResourcesCard from "./resources-card";
import { resourceData } from "~/data/resource-data";

export default async function ResourcesContent() {
  // Revalidate at most every hour
  const data = await fetch(
    "https://script.google.com/macros/s/AKfycbyaLyXO27Ia1fMimYyOnaNlgVOUr9E720eprt0MG3u8g2PsAZalOi1uBSt8NVeKRbfzoA/exec",
    { next: { revalidate: 3600 } }
  );

  const resources: ResourcesResponse = await data.json();

  const featuredData = resourceData.filter(
    (resource) =>
      resource.isFeatured === true
  );
  
    const otherResources = resources.data.filter(
    (resource) =>
      resource.approved === "TRUE"
  );

  return (
    <div className="bg-navy-light rounded-lg p-6 md:p-12 lg:p-20 my-2 md:my-6 lg:my-10">
      <div className="text-white w-full lg:w-5/6">
        <h1 className="text-3xl md:text-4xl mb-3">
          Resources
        </h1>
        <p className="text-base mb-6">
          Explore code, SDKs, blogs, and use cases for developing multi-agent systems. Learn how AGNTCY enables open, interoperable AI infrastructure at scale.
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-xl md:text-2xl font-semibold text-orange pb-6">
          Getting Started
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredData.map((resource) => (
            <ResourcesCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-xl md:text-2xl font-semibold text-orange pb-6">
          Other Resources
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherResources.map((resource) => (
            <ResourcesCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
