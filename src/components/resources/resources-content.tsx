import ResourcesCard from "./resources-card";
import { resourceData, otherResources, useCases } from "~/data/resource-data";

export default async function ResourcesContent() {
  // TODO: udpate data fetching to use microsoft serveces

  // Hard coded data
  const featuredData = resourceData.filter(
    (resource) =>
      resource.isFeatured === true
  );
  
  return (
    <div className="bg-navy-light rounded-lg p-6 md:p-12 lg:p-20 my-2 md:my-6 lg:my-10">
      <div className="text-white max-w-4xl">
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
      <div className="py-5">
        <h2 className="text-xl md:text-2xl font-semibold text-orange pb-6">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {useCases.map((resource) => (
            <ResourcesCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
