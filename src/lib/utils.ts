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

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_SECRET_API_KEY}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!res) {
    throw new Error(`Failed to fetch commit data for ${repo}@${tagName}`);
  }

  if (res.ok) {
    console.log(`Successfully fetched commit for ${repo}@${tagName}`);
  }

  const commitData = (await res.json()) as CommitData;
  return commitData;
};
