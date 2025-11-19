import ChangeLogClient from "./changelog-client";
import { listofRepos, GITHUB_OWNER } from "~/data/changelog-data";
import { getCommitData } from "~/lib/utils";

export default async function ChangeLogContent() {
  const allReleases: Release[] = [];

  try {
    for (const repo of listofRepos) {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${repo}/releases?per_page=5`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_SECRET_API_KEY}`,
            Accept: "application/vnd.github+json",
          },
          next: { revalidate: 3600 },
        }
      );

      if (!response) {
        console.error(`Failed to fetch releases for ${repo} after retries`);
        continue;
      }

      const releases: Omit<Release, "repo">[] = await response.json();

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
      const commitData = await getCommitData(release.repo, release.tag_name);
      release.commitData = commitData;
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
