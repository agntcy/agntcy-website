// app/components/ChangeLogServer.tsx
import ChangeLogClient from "./changelog-client";
import { listofRepos } from "~/data/changelog-data";

export default async function ChangeLogContent() {
  let allReleases = [];

  for (const repo of listofRepos) {
    const relRes = await fetch(`https://api.github.com/repos/agntcy/${repo}/releases?per_page=5`, 
        { headers: { "Accept": "application/vnd.github+json" },
        next: { revalidate: 3600 }
      });

    const releases: Omit<Release, "repo">[] = await relRes.json();
      // Filter published only and add repo name
      const published: Release[] = releases
        .filter(r => !r.draft && !r.prerelease)
        .map(r => ({ ...r, repo: repo }));
      allReleases.push(...published);
    }
    // Sort by published date (newest first)
    allReleases.sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );


  return <ChangeLogClient allReleases={allReleases} />;
}
