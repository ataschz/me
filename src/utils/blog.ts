import { createServerFn } from "@tanstack/react-start";

export interface SubstackPost {
  link: string;
  publishedAt: string;
  slug: string;
  summary: string;
  title: string;
}

const SUBSTACK_FEED_URL = "https://ataschz.substack.com/feed";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const SLUG_PREFIX_REGEX = /^\/p\//;
const TRAILING_SLASH_REGEX = /\/$/;
const HTML_TAGS_REGEX = /<[^>]*>/g;

let cachedPosts: SubstackPost[] | null = null;
let cachedAt = 0;

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`
  );
  const match = regex.exec(xml);
  return (match?.[1] ?? match?.[2] ?? "").trim();
}

function parseRss(xml: string): SubstackPost[] {
  const items: SubstackPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;

  for (const match of xml.matchAll(itemRegex)) {
    const itemXml = match[1];
    const title = extractTag(itemXml, "title");
    const link = extractTag(itemXml, "link");
    const pubDate = extractTag(itemXml, "pubDate");
    const description = extractTag(itemXml, "description");

    const url = new URL(link);
    const slug = url.pathname
      .replace(SLUG_PREFIX_REGEX, "")
      .replace(TRAILING_SLASH_REGEX, "");

    const summary = description
      .replace(HTML_TAGS_REGEX, "")
      .slice(0, 200)
      .trim();

    items.push({
      link,
      publishedAt: new Date(pubDate).toISOString().split("T")[0],
      slug,
      summary: summary.length === 200 ? `${summary}...` : summary,
      title,
    });
  }

  return items;
}

export const getSubstackPosts = createServerFn().handler(async () => {
  const now = Date.now();
  if (cachedPosts && now - cachedAt < CACHE_TTL_MS) {
    return cachedPosts;
  }

  const res = await fetch(SUBSTACK_FEED_URL);
  if (!res.ok) {
    if (cachedPosts) {
      return cachedPosts;
    }
    throw new Error(`Failed to fetch Substack feed: ${res.status}`);
  }

  const xml = await res.text();
  cachedPosts = parseRss(xml);
  cachedAt = now;
  return cachedPosts;
});

export function formatDate(rawDate: string) {
  const dateStr = rawDate.includes("T") ? rawDate : `${rawDate}T00:00:00`;
  const targetDate = new Date(dateStr);

  return targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const baseUrl = "https://ataschz.com";
