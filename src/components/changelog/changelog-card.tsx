"use client";
import { useState, useEffect } from "react";
import { getCommitData } from "~/lib/utils";
import { Triangle } from 'lucide-react';

export default function ChangeLogCard({ release }: { release: Release}) {

  const [commitData, setCommitData] = useState<CommitData | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getCommitData(release.repo, release.tag_name);
      setCommitData(data);
    })();
  }, [release.repo, release.tag_name]);
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  function changeLogDetails(changelog : any) {
    const lines = changelog.split("\n");

    return (
      <div>
        {lines.map((line: any, i: any) => {
          if (line.startsWith("##")) {
            return (
              <div key={i} className="font-bold text-lg mb-2">
                {line.replace(/^##\s*/, "")}
              </div>
            );
          }
          if (line.startsWith("**Full Changelog**") || line.startsWith("Full Changelog:")) {
            // Split into label + URL
            const [label, url] = line.split(": ");
            const updatedLabel = label.trimStart().replace(/^\*+\s*/, "");
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
                • {line.replace(/^\*\s*/, "")}
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
    );
  }

  function ChangeAssetDetails() {
    return (
      <div>
        <h4>Assets</h4>
      </div>
    );
  }

  const authors = Array.from(new Set(release?.body.match(/@\w+/g) || []));
  const changelogMatch = release?.body.match(/\*\*Full Changelog\*\*:\s*(\S+)/);
  const changelogUrl = changelogMatch ? changelogMatch[1] : null;
  const updatedBody = release?.body.split("\n");

  const parsed = updatedBody.map((line) => {
    if (line.startsWith("##")) {
      return { type: "heading", text: line.replace(/^##\s*/, "") };
    } else if (line.startsWith("*")) {
      return { type: "item", text: line.replace(/^\*\s*/, "") };
    } else {
      return { type: "text", text: line };
    }
  });
  
  return (
    <div className="bg-[#1A2445] rounded-lg p-6 md:p-12 lg:p-12 my-2 md:my-6 lg:my-10 text-[#9BB3FF]">
      <div className="w-fit uppercase text-xs">
        <div>release &nbsp; · &nbsp; {release.repo} &nbsp; · &nbsp; {release.tag_name} &nbsp; · &nbsp; {release.published_at.split("T")[0]}</div>
      </div>
      <div className="pt-4 pb-8">
        <div className="text-xl text-white">{release.heading ? release.heading : release.tag_name}</div>
        <div className="text-sm text-[#9BB3FF]">{release.subheading}</div>
        <div className="pt-8">{release.description}</div>
      </div>
      <div className="text-white flex gap-2 text-xs">
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Version:</b> {release.tag_name}</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Date:</b> {release.published_at.split("T")[0]}</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Status:</b> Released</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Breaking:</b> Yes</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Components:</b> Core</div>
      </div>
      <div className="text-white flex gap-2 text-xs">
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Authors:</b> {authors.join(", ")}</div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>PRs:</b><a href={commitData?.url}>{commitData?.sha.substring(0,7)}</a></div>
        <div className="border-[#1A2445] bg-[#0D274D] rounded-lg p-3 w-fit"><b>Compare:</b> <a href={changelogUrl ? changelogUrl : "/"} >Previous version</a></div>
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
              <div className="p-3 text-white bg-[#00142B] my-4 rounded-lg">{changeLogDetails(release.body)}</div>
              {release?.assets.length > 0 && (
                <div className="p-3 text-white bg-[#00142B] rounded-lg">{ChangeAssetDetails()}</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-sm text-[#FBAB2C]">Featured Spec</div>
        <div className="text-sm text-[#FBAB2C]">Docs</div>
        <div className="text-sm text-[#FBAB2C]">Release PR</div>
        <div className="text-sm text-[#FBAB2C]">Compare</div>
      </div>
    </div>
);
}
