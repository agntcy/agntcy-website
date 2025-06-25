import Link from "next/link";

export default function ResourcesCard({ resource }: { resource: Resource }) {
  return (
    <div>
      <div
        key={`gettingStarted-${resource.title}`}
        className="bg-card p-6 rounded-lg shadow-md group group-hover:shadow-lg transition-shadow duration-300"
      >
        <Link
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex flex-col gap-4"
        >
          <h3 className="text-sm font-semibold text-primary">
            {resource.author}
          </h3>
          <h3 className="text-xl md:text-2xl text-[#0051AD]">{resource.title}</h3>
          <div className="flex flex-wrap gap-2">
            {resource.topics &&
              resource.topics.split(",").map((topic, index) => (
                <span
                  className="bg-grey rounded-md px-2 py-1 text-sm"
                  key={index}
                >
                  {topic}
                </span>
              ))}
          </div>
        </Link>
      </div>
    </div>
  );
}
