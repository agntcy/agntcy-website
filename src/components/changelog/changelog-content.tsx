import ChangeLogClient from "./changelog-client";
import { listofRepos, GITHUB_OWNER } from "~/data/changelog-data";
import { getCommitData } from "~/lib/utils";

export default async function ChangeLogContent() {
  const allReleases: Release[] = [];

  try {
    for (const repo of listofRepos) {
      const fetchReleases = async (useAuth: boolean) => {
        const fetchHeaders: HeadersInit = {
          Accept: "application/vnd.github+json",
        };
        // Use standard GITHUB_TOKEN if available (works for public repos)
        if (useAuth && process.env.GITHUB_TOKEN) {
          fetchHeaders.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }
        return fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${repo}/releases?per_page=5`,
            { headers: fetchHeaders }
        );
      };

      let response = await fetchReleases(true);

      if (response.status === 401) {
          console.warn(`Got 401 for ${repo}, retrying without auth...`);
          response = await fetchReleases(false);
      }

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
