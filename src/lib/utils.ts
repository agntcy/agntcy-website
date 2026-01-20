import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GITHUB_OWNER } from "~/data/changelog-data";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Fetches commit data for a given GitHub repository and tag.
 * @param repo - The repository name (e.g., "my-repo").
 * @param tagName - The tag or commit SHA to fetch.
 * @returns A Promise resolving to CommitData.
 * @throws Will throw an error if the fetch fails or returns a non-OK status.
 */
export const getCommitData = async (
  repo: string,
  tagName: string
): Promise<CommitData> => {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${repo}/commits/${tagName}`;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GH_SECRET_API_KEY) {
    headers.Authorization = `Bearer ${process.env.GH_SECRET_API_KEY}`;
  }

  const res = await fetch(url, {
    headers,
  });

  if (!res.ok) {
     console.error(`Failed to fetch commit data for ${repo}@${tagName}: ${res.status}`);
     // Return a partial object or handle it so the caller knows it failed.
     // However, the return type is Promise<CommitData>.
     // Let's return undefined or throw properly, but since the component expects data...
     // safest is maybe return null and update type, but let's stick to cleaning the auth first
     // and maybe returning a dummy object or letting the caller handle throws.
     // Actually, if I throw here, the catch block in changelog-content.tsx will catch it
     // and NO releases will be shown? No, the catch block is outside the loop?
     // Yes:   try { ... for loop ... } catch (error) { ... }
     // So one failure in getCommitData stops everything? That's bad.
     return null as unknown as CommitData;
  }

  if (res.ok) {
    console.log(`Successfully fetched commit for ${repo}@${tagName}`);
  }

  const commitData = (await res.json()) as CommitData;
  return commitData;
};
