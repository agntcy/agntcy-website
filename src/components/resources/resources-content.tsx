import ResourcesCard from "./resources-card";

export default async function ResourcesContent() {
  // Revalidate at most every hour
  const data = await fetch(
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjQpUIoNLWgxsv8WPMo2W3xc9XiGDXp0lYKbHdCL_xwOCbBjVtX0K7mp9qRHTwwNj7FEH2zXxpXFZa2BMvFbikvGOggnQP7RTG_b53pLZ3SWkuUFC7ryhvKvue7ktwAnWSB-rmIJZRDG6SKQir9auTJ_XtFOE9aMBj8xuuuLPw2t3RZquGOc3ziGzmGpaNVpbhCv3jcKA5qDHEQFwPno8ILddvNhlYrxcFg1aNz_79ixRhXWq2Xsk_OmB8wXko5JH5dBIJDzIxeTSIm1eqrlRuoNSe9bIxzNuhaL6gJ&lib=MY9O_02LRTsAjVdJlVqP4o_nt9JalZlNa",
    { next: { revalidate: 3600 } }
  );

  const resources: ResourcesResponse = await data.json();

  const gettingStarted = resources.data.filter(
    (resource) =>
      resource.category === "Getting Started" && resource.approved === "TRUE"
  );
  const otherResources = resources.data.filter(
    (resource) =>
      resource.category === "Other Resources" && resource.approved === "TRUE"
  );

  return (
    <div className="bg-navy-light rounded-lg p-6 md:p-12 lg:p-20 my-2 md:my-6 lg:my-10">
      <div className="text-white">
        <h1 className="text-3xl md:text-4xl mb-3">
          Tincidunt nunc bibendum lorem dictum ultrices convallis sit.
        </h1>
        <p className="text-base mb-6">
          Purus elit eu consectetur ut consectetur quam pulvinar. Eu purus mi
          enim suscipit ac egestas. In varius aliquet egestas quam pellentesque
          sit faucibus. Vel nisi tincidunt non commodo nibh in lacus.
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-xl md:text-2xl font-semibold text-orange pb-6">
          Getting Started
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {gettingStarted.map((resource) => (
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
