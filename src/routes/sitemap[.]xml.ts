import { createFileRoute } from "@tanstack/react-router";
import { baseUrl, getSubstackPosts } from "~/utils/blog";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const posts = await getSubstackPosts();

        const blogs = posts.map(
          (post) =>
            `<url>
    <loc>${post.link}</loc>
    <lastmod>${post.publishedAt}</lastmod>
  </url>`
        );

        const routes = ["", "/writing"].map(
          (route) =>
            `<url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`
        );

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...routes, ...blogs].join("\n  ")}
</urlset>`;

        return new Response(sitemap, {
          headers: { "Content-Type": "text/xml" },
        });
      },
    },
  },
});
