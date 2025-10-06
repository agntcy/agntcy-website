import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCommitData = async (
  repo: string,
  tagName: string
): Promise<CommitData> => {
  const res = await fetch(
    `https://api.github.com/repos/agntcy/${repo}/commits/${tagName}`,
    {
      headers: { "Accept": "application/vnd.github+json"  }
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const commitData = (await res.json()) as CommitData;
  return commitData;
};
