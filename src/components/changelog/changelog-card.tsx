"use client";
import { useState, useRef, useEffect } from "react";
import { Triangle } from 'lucide-react';
import Image from "next/image";

export default function ChangeLogCard({ release }: { release: Release}) {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function formatDate(publishedDate: Date) {
    const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  }

  function replacePrLinks(line: string) {
    // Match raw URLs and markdown-style links
    const parts = line.split(/(\(\[[^\]]+\]\(https:\/\/github\.com\/[^\/]+\/[^\/]+\/(pull|issues|commit)\/[^\)]+\)\)|https:\/\/github\.com\/[^\/]+\/[^\/]+\/(pull|issues|commit)\/[^\s)]+)/);

    return (
      <span>
        {parts.map((part, i) => {
          if (!part) return null;

          // Match markdown-style links: ([#823](...)), ([4e1dd41](...))
          const markdownMatch = part.match(/\(\[([^\]]+)\]\((https:\/\/github\.com\/[^\/]+\/[^\/]+\/(pull|issues|commit)\/[^\)]+)\)\)/);
          if (markdownMatch) {
            const [, label, url] = markdownMatch;
            return (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {label}
              </a>
            );
          }

          // Match raw GitHub URLs
          const urlMatch = part.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/(pull|issues|commit)\/([^\s)]+)/);
          if (urlMatch) {
            const [url, , , , identifier] = urlMatch;
            return (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                #{identifier}
              </a>
            );
          }

          // Fallback: render plain text
          return (part && (part !== "pull" && part !== "issues" && part !== "commit")) ? <span key={i}>• {part}</span> : null;
        })}
      </span>
    );
  }

  function ChangeLogDetails({ changelog }: { changelog: string }) {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const lines = changelog.split("\n");

    useEffect(() => {
      const el = containerRef.current;
      if (el) {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const maxHeight = lineHeight * 8;
        setIsOverflowing(el.scrollHeight > maxHeight);
      }
    }, [changelog]);

    return (
      <div>
        <div className="relative">
          <div
            ref={containerRef}
            style={{
              maxHeight: expanded ? "none" : "12em",
              overflow: "hidden",
              paddingBottom: !expanded ? "2rem" : undefined, // creates space for gradient
            }}
            className="transition-all duration-300"
          >
            {lines.map((line: string, i: number) => {
              if (line.startsWith("##")) {
                return (
                  <div key={i} className="font-bold text-lg mb-2">
                    {line.replace(/^##\s*/, "")}
                  </div>
                );
              }

              if (line.startsWith("**Full Changelog**") || line.startsWith("Full Changelog:")) {
                const [label, url] = line.split(": ");
                const updatedLabel = label.trim().replace(/^\*+\s*/, "").replace(/\*+$/, "");

                return (
                  <div key={i} className="mt-2">
                    <strong>{updatedLabel}:</strong>{" "}
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {url}
                    </a>
                  </div>
                );
              }

              if (line.startsWith("*")) {
                return (
                  <div key={i} className="ml-4">
                    {replacePrLinks(line.replace(/^\*\s*/, ""))}
                  </div>
                );
              }

              return (
                <div key={i} className="mt-2">
                  {line}
                </div>
              );
            })}
          </div>        

          {!expanded && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1A2445] to-transparent z-10" />
          )}
        </div>
        
        {isOverflowing && (
          <div className="pt-6 text-right pr-12">
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="mt-2 text-blue-600 underline"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    );
  }

  function ChangeAssetDetails({ data, repo, tag_name, releaseDate }: { data: any[]; repo: string; tag_name: string, releaseDate: any }) {
  const defaultAssets = [
    {
      title: "Source code (zip)",
      url: `https://github.com/agntcy/${repo}/archive/refs/tags/${tag_name}.zip`,
      publishedDate: formatDate(releaseDate),
    },
    {
      title: "Source code (tar.gz)",
      url: `https://github.com/agntcy/${repo}/archive/refs/tags/${tag_name}.tar.gz`,
      publishedDate: formatDate(releaseDate),
    },
  ];

  const fullAssets = [...defaultAssets, ...data.map(asset => ({
    title: asset.name,
    url: asset.browser_download_url,
    publishedDate: formatDate(asset.updated_at),
  }))];

  return (
    <section aria-label="Release Assets">
      <h2 className="text-sm font-bold">Assets ({fullAssets.length})</h2>
      {fullAssets.sort((a, b) => a.title.localeCompare(b.title)).map(asset => (
        <div key={asset.url} className="grid grid-cols-6 m-2 border border-[#187ADC] rounded-lg px-4 py-2">
          <div className="col-span-4 flex items-center gap-2">
            <Image src="/images/assets.png" alt="Download asset icon" height={15} width={15} />
            <span className="text-[#FBAB2C] font-bold">
              <a href={asset.url} target="_blank" rel="noopener noreferrer">{asset.title}</a>
            </span>
          </div>
          <div className="col-span-2 text-right">{asset.publishedDate}</div>
        </div>
      ))}
    </section>
  );
}


  const authors = Array.from(new Set(release?.body.match(/@\w+/g) || []));
  const changelogMatch = release?.body.match(/\*\*Full Changelog\*\*:\s*(\S+)/);
  const changelogUrl = changelogMatch ? changelogMatch[1] : null;
  
  return (
    <div className="bg-[#1A2445] rounded-lg p-6 md:p-12 lg:p-12 my-2 md:my-6 lg:my-4 text-[#9BB3FF]">
      <div className="w-fit uppercase text-xs">
        <div>release &nbsp; · &nbsp; {release.repo} &nbsp; · &nbsp; {release.tag_name} &nbsp; · &nbsp; {release.published_at.split("T")[0]}</div>
      </div>
      <div className="pt-4 pb-8">
        <div className="text-xl text-white">{release.heading ? release.heading : release.tag_name}</div>
        {/* <div className="text-sm text-[#9BB3FF]">{release.subheading}</div> */}
        <div className="pt-4 text-white">{<ChangeLogDetails changelog={release.body} />}</div>
      </div>
      <div className="text-white flex flex-wrap gap-2 text-xs px-2 pb-2">
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Version:</b> {release.tag_name}</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Date:</b> {release.published_at.split("T")[0]}</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Status:</b> Released</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Breaking:</b> Yes</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Components:</b> Core</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Authors:</b> {authors.join(", ")}</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>PRs:</b><a href={release.commitData?.html_url} target="_blank" rel="noopener noreferrer">{release.commitData?.sha.substring(0,7)}</a></div>
       {changelogUrl && <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Compare:</b> <a href={changelogUrl} target="_blank" rel="noopener noreferrer">Previous version</a></div>}
      </div>
      <div className="text-white text-sm py-8">
        <div key={release.id} className="border-b border-[#187ADC]">
          <button
            onClick={() => toggle(release.id)}
            className="w-full flex justify-between items-center p-3 text-left font-semibold"
          >
            Details
            <span>{openIndex === release.id ? <Triangle size={10} color="white" fill="white" className="" /> : <Triangle size={10} color="white" fill="white" className="rotate-180" />}</span>
          </button>
          {openIndex === release.id && (
            <div>
              <div className="p-3 text-white bg-[#00142B] rounded-lg">{<ChangeAssetDetails data={release.assets} repo={release.repo} tag_name={release.tag_name} releaseDate ={release.published_at} />}</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-sm text-[#FBAB2C]"><a href={`https://github.com/agntcy/${release.repo}`} target="_blank" rel="noopener noreferrer">Docs</a></div>
        <div className="text-sm text-[#FBAB2C]"><a href={release.commitData?.html_url}  target="_blank" rel="noopener noreferrer">Release PR</a></div>
        {changelogUrl && <div className="text-sm text-[#FBAB2C]"><a href={changelogUrl}  target="_blank" rel="noopener noreferrer">Compare</a></div>}
      </div>
    </div>
);
}
