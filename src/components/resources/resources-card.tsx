import Link from "next/link";
import Image from "next/image";

export default function ResourcesCard({ resource }: { resource: Resource }) {
  return (
    <div>
      <div
        key={`gettingStarted-${resource.title}`}
        className="bg-card rounded-lg shadow-md group group-hover:shadow-lg transition-shadow duration-300"
      >
          {resource.isFeatured  ? 
          <Image
            unoptimized
            src={resource.featureImage.src}
            alt="Arrow"
            className="w-full rounded-t-lg"
            height={resource.featureImage.height}
            width={resource.featureImage.width}
          /> : ""} 
          <div className=" p-6">
          <h3 className="text-sm font-semibold text-primary text-gray-500">
            <Link
              href={resource.contributorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              {resource.contributor}
            </Link>
          </h3>
          <h3 className="text-xl md:text-2xl pt-6 pb-2 text-black">{resource.title}</h3>
          <div className="text-sm">{resource.description}</div>
              <div className="text-base flex flex-col items-end self-end pt-4">{resource.isAvailable === "Yes" ? 
              <Link
                  href={resource.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary flex flex-col gap-4"
                >
              <div className="flex items-center gap-2 text-blue-500">
                <p>Learn more</p>
                  <Image
                    unoptimized
                    src={"/images/arrow-right.png"}
                    alt="Arrow"
                    className=""
                    height={12}
                    width={12}
                  />
                </div>
                </Link>
              : "Coming soon"
              } 
              </div>
            </div>
      </div>
    </div>
  );
}
