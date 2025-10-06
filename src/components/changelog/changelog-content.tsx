import { listofRepos } from "~/data/changelog-data";
import ChangeLogCard from "./changelog-card";


export default async function ChangeLogContent() {

let allReleases = [];

for (const repo of listofRepos) {
  
// Loop through repos and fetch releases
  for (const repo of listofRepos) {
    // Revalidate at most every hour
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
  
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
      {allReleases.map((release) => (
        <ChangeLogCard key={release.id} release={release} />
      ))}
    </div>
  );
}
