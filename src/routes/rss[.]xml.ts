import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: () => {
        return Response.redirect("https://ataschz.substack.com/feed", 301);
      },
    },
  },
});
