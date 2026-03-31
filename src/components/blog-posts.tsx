import type { SubstackPost } from "~/utils/blog";
import { formatDate } from "~/utils/blog";

function substackLink(url: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "ataschz.com");
  u.searchParams.set("utm_medium", "web");
  u.searchParams.set("utm_campaign", "blog");
  return u.toString();
}

export function BlogPosts({ posts }: { posts: SubstackPost[] }) {
  const sorted = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div>
      {sorted.map((post) => (
        <a
          className="mb-4 flex flex-col space-y-1"
          href={substackLink(post.link)}
          key={post.slug}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex w-full flex-col md:flex-row md:items-baseline md:space-x-2">
            <p className="shrink-0 text-zinc-500 tabular-nums dark:text-zinc-400">
              {formatDate(post.publishedAt)}
            </p>
            <p className="text-zinc-100 tracking-tight dark:text-zinc-100">
              {post.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
