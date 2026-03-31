import { createFileRoute } from "@tanstack/react-router";
import { BlogPosts } from "~/components/blog-posts";
import { baseUrl, getSubstackPosts } from "~/utils/blog";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/writing/")({
  loader: () => getSubstackPosts(),
  head: () => ({
    meta: seo({
      title: "Publicaciones — Ata Herrera",
      description:
        "Artículos sobre AI, agentic systems, emprendimiento y desarrollo de software por Ata Herrera.",
      url: `${baseUrl}/writing`,
    }),
    links: [{ rel: "canonical", href: `${baseUrl}/writing` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = Route.useLoaderData();

  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">Writing</h1>
      <BlogPosts posts={posts} />
    </section>
  );
}
