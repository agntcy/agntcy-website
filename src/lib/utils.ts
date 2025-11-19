import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GITHUB_OWNER } from "~/data/changelog-data";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 3
): Promise<Response | null> => {
  for (let i = 0; i < retries; i++) {
    const response = await fetch(url, options);

    if (response.ok) {
      console.log(
        `Successfully fetched on attempt ${i + 1}/${retries}`
      );

      return response;
    }

    if (response.status === 403 && i < retries - 1) {
      const resetTime = response.headers.get("x-ratelimit-reset");
      const waitTime = resetTime
        ? parseInt(resetTime) * 1000 - Date.now()
        : 60000;
      console.log(
        `Rate limited. Waiting ${Math.max(waitTime, 60000)}ms before retry ${
          i + 1
        }/${retries}`
      );
      await new Promise((resolve) =>
        setTimeout(resolve, Math.max(waitTime, 60000))
      );
      continue;
    }

    if (i === retries - 1) {
      console.error(
        `Failed to fetch after ${retries} attempts: ${response.statusText}`
      );
      return null;
    }
  }
  return null;
};


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

  const res = await fetchWithRetry(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  
   if (!res) {
    throw new Error(`Failed to fetch commit data for ${repo}@${tagName}`);
  }

  const commitData = (await res.json()) as CommitData;
  return commitData;
};
