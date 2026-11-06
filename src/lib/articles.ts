import { articlesData } from "~/data/resource-data";

const FEED_URL = "https://blogs.agntcy.org/feed.xml";
// Feed links are rendered as anchors, so only same-origin https URLs are accepted.
const FEED_ORIGIN = "https://blogs.agntcy.org";
const FEED_TIMEOUT_MS = 10_000;
const MAX_DESCRIPTION_LENGTH = 180;

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
};

const decodeEntities = (value: string) =>
  value.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (match, entity: string) => {
    if (entity.startsWith("#")) {
      const isHex = entity[1] === "x" || entity[1] === "X";
      const codePoint = Number.parseInt(
        isHex ? entity.slice(2) : entity.slice(1),
        isHex ? 16 : 10
      );
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }

    return NAMED_ENTITIES[entity.toLowerCase()] ?? match;
  });

const toPlainText = (value: string) =>
  decodeEntities(
    value
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
      .replace(/<[^>]*>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();

const extractTagValue = (entry: string, tag: string) =>
  entry.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`)
  )?.[1] ?? null;

const toBlogUrl = (href: string) => {
  try {
    const url = new URL(decodeEntities(href));
    return url.origin === FEED_ORIGIN ? url.toString() : null;
  } catch {
    return null;
  }
};

const extractPostUrl = (entry: string) => {
  for (const [, attributes] of entry.matchAll(/<link\s([^>]*?)\/?>/g)) {
    const rel = attributes.match(/rel="([^"]*)"/)?.[1];
    if (rel && rel !== "alternate") {
      continue;
    }

    const href = attributes.match(/href="([^"]*)"/)?.[1];
    const url = href ? toBlogUrl(href) : null;
    if (url) {
      return url;
    }
  }

  return null;
};

const toIsoDate = (value: string | null) => {
  if (!value) {
    return null;
  }

  const parsed = new Date(toPlainText(value));
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString().slice(0, 10);
};

const toDescription = (entry: string) => {
  const summary =
    extractTagValue(entry, "summary") ?? extractTagValue(entry, "content") ?? "";
  const text = toPlainText(summary).replace(/^TL;DR:?\s*/i, "");

  if (text.length <= MAX_DESCRIPTION_LENGTH) {
    return text;
  }

  const truncated = text.slice(0, MAX_DESCRIPTION_LENGTH);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : undefined).trimEnd()}…`;
};

const parseFeed = (xml: string) => {
  const articles: Resource[] = [];

  for (const [entry] of xml.matchAll(/<entry>[\s\S]*?<\/entry>/g)) {
    const title = toPlainText(extractTagValue(entry, "title") ?? "");
    const resourceLink = extractPostUrl(entry);
    const date = toIsoDate(
      extractTagValue(entry, "published") ?? extractTagValue(entry, "updated")
    );

    if (!title || !resourceLink || !date) {
      continue;
    }

    articles.push({
      title,
      description: toDescription(entry),
      contributor: "AGNTCY",
      contributorLink: "https://agntcy.org/",
      resourceLink,
      isAvailable: "Yes",
      approved: "TRUE",
      isFeatured: false,
      source: "AGNTCY Blog",
      category: "Technical Blog",
      date,
    });
  }

  return articles;
};

const fetchBlogArticles = async () => {
  try {
    const response = await fetch(FEED_URL, {
      headers: { Accept: "application/atom+xml" },
      signal: AbortSignal.timeout(FEED_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch ${FEED_URL}: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const articles = parseFeed(await response.text());
    console.log(`Fetched ${articles.length} posts from ${FEED_URL}`);

    return articles;
  } catch (error) {
    console.error(`Error fetching ${FEED_URL}:`, error);
    return [];
  }
};

const dedupeKeys = (article: Resource) => [
  `link:${article.resourceLink.replace(/\/+$/, "").toLowerCase()}`,
  `title:${article.title.replace(/\s+/g, " ").trim().toLowerCase()}`,
];

/**
 * Returns the curated articles plus any blogs.agntcy.org post that is not
 * already listed. Runs at build time, so a failed or empty feed fetch leaves
 * the curated list untouched instead of breaking the build.
 */
export const getArticles = async (): Promise<Resource[]> => {
  const articles = [...articlesData];
  const seen = new Set(articles.flatMap(dedupeKeys));

  for (const article of await fetchBlogArticles()) {
    const keys = dedupeKeys(article);
    if (keys.some((key) => seen.has(key))) {
      continue;
    }

    for (const key of keys) {
      seen.add(key);
    }
    articles.push(article);
  }

  return articles;
};
