import Image from "next/image";
import { LinkTrackers } from "../reusables/link-trackers";

export default function ResourcesCard({ resource }: { resource: Resource }) {
  return (
    <div>
      <div
        key={`gettingStarted-${resource.title}`}
        className="bg-card rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 hover:shadow-blue-300"
      >
        <LinkTrackers
          href={resource.resourceLink}
          target={resource.resourceLink == "/resources" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="text-primary flex flex-col gap-4"
          segmentMsg="agntcy resource clicked"
          segmentOpt={{
            file_name: resource.title || "",
            resource_type:
              resource.title?.toLowerCase().includes("video") ||
              resource.title?.toLowerCase().includes("youtube")
                ? "video"
                : "article",
            resource_author: resource.contributor || "",
            is_gated_asset: "false",
            location: "body",
            resource_interaction:
              resource.title?.toLowerCase().includes("video") ||
              resource.title?.toLowerCase().includes("youtube")
                ? "view video"
                : "view an article",
          }}
        >
          {resource.isFeatured ? (
            <Image
              unoptimized
              src={resource.featureImage.src}
              alt="Arrow"
              className="w-full rounded-t-lg"
              height={resource.featureImage.height}
              width={resource.featureImage.width}
            />
          ) : (
            ""
          )}
          <div className="px-6 py-4">
            <h3 className="text-sm font-semibold text-gray-500">
              {resource.contributor}
            </h3>
            <h3 className="text-xl md:text-2xl pt-6 pb-2 text-black">
              {resource.title}
            </h3>
            <div className="text-sm">{resource.description}</div>
            <div className="text-base flex flex-col items-end self-end pt-4">
              {resource.isAvailable === "Yes" ? (
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
              ) : (
                "Coming soon"
              )}
            </div>
          </div>
        </LinkTrackers>
      </div>
    </div>
  );
}
