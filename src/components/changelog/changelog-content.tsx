import ChangeLogClient from "./changelog-client";
import { listofRepos, GITHUB_OWNER } from "~/data/changelog-data";
import { getCommitData } from "~/lib/utils";

export default async function ChangeLogContent() {
  const allReleases: Release[] = [];

  try {
    for (const repo of listofRepos) {
      const headers: HeadersInit = {
        Accept: "application/vnd.github+json",
      };

      if (process.env.GH_SECRET_API_KEY) {
        headers.Authorization = `Bearer ${process.env.GH_SECRET_API_KEY}`;
      }

      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${repo}/releases?per_page=5`,
        {
          headers,
        }
      );

      if (response.ok) {
        console.log(`Successfully fetched releases for ${repo}`);
      } else {
        console.error(
          `Failed to fetch releases for ${repo}: ${response.status} ${response.statusText}`
        );
        continue;
      }

      if (!response) {
        console.error(`Failed to fetch releases for ${repo} after retries`);
        continue;
      }

      const releases: Omit<Release, "repo">[] = await response.json();

      if (!Array.isArray(releases)) {
        console.error(`Unexpected response format for ${repo}:`, releases);
        continue;
      }

      const publishedReleases = releases
        .filter((r) => !r.draft && !r.prerelease)
        .map((r) => ({ ...r, repo }));

      allReleases.push(...publishedReleases);
    }

    // Sort by published date (newest first)
    allReleases.sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    // Fetch commit data for each release
    for (const release of allReleases) {
      try {
        const commitData = await getCommitData(release.repo, release.tag_name);
        if (commitData) {
          release.commitData = commitData;
        }
      } catch (e) {
        console.error(`Error fetching commit data for ${release.repo}@${release.tag_name}`, e);
      }
    }
  } catch (error) {
    console.error("Error fetching changelog data:", error);
  }

  return (
    <section aria-label="Changelog Section">
      <ChangeLogClient allReleases={allReleases} />
    </section>
  );
}
