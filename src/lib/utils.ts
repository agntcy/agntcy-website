import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
  const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER;
  // const token = process.env.NEXT_PUBLIC_GITHUB_SECRET_API_KEY;

  if (!owner) {
    throw new Error("Missing GitHub environment variables.");
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/commits/${tagName}`;

  const res = await fetch(url, {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // Optional: cache for 1 hour
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`GitHub API error: ${res.status} ${res.statusText}`, errorText);
    throw new Error(`Failed to fetch commit data for ${repo}@${tagName}`);
  }

  const commitData = (await res.json()) as CommitData;
  return commitData;
};
