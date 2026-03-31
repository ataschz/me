import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const title = url.searchParams.get("title") || "Ata Herrera";

        const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#09090b"/>
  <text x="80" y="340" font-family="system-ui, sans-serif" font-size="64" font-weight="bold" fill="#fafafa">${escapeXml(title)}</text>
  <text x="80" y="400" font-family="system-ui, sans-serif" font-size="28" fill="#a1a1aa">ataschz.com</text>
</svg>`;

        return new Response(svg, {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
