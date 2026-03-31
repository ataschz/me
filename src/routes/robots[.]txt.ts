import { createFileRoute } from "@tanstack/react-router";
import { baseUrl } from "~/utils/blog";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

        return new Response(body, {
          headers: { "Content-Type": "text/plain" },
        });
      },
    },
  },
});
