import { baseUrl } from "~/utils/blog";

export const seo = ({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  const ogImage =
    image ?? `${baseUrl}/api/og?title=${encodeURIComponent(title)}`;
  const canonical = url ?? baseUrl;

  const tags = [
    { title },
    { name: "description", content: description },
    { name: "author", content: "Ata Herrera" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: "Ata Herrera" },
    { property: "og:locale", content: "es_AR" },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ataschz" },
    { name: "twitter:creator", content: "@ataschz" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  return tags;
};
