import { createFileRoute } from "@tanstack/react-router";
import { BlogPosts } from "~/components/blog-posts";
import { getSubstackPosts } from "~/utils/blog";

export const Route = createFileRoute("/")({
  loader: () => getSubstackPosts(),
  component: Home,
});

function Home() {
  const posts = Route.useLoaderData();

  return (
    <section>
      <h1 className="mb-4 font-semibold text-2xl tracking-tighter">
        Ata Herrera
      </h1>
      <p className="mb-2 text-zinc-500 dark:text-zinc-400">
        Software Engineer &amp; Entrepreneur
      </p>
      <p className="mb-4">
        {`I'm a Software Engineer from Córdoba, Argentina, building at the intersection of AI and real business problems. Currently co-founder and CTO of Trama, where we're putting AI agents to work for travel agencies.`}
      </p>
      <p className="mb-4">
        {`I've spent the last few years deep in agentic systems — designing, experimenting with, and shipping products where AI actually does the work, not just the talking. Before Trama, I led an AI division at a US company and have been consulting on generative AI architecture independently.`}
      </p>
      <p className="mb-4">I like building things that ship.</p>
      <div className="my-8">
        <BlogPosts posts={posts.slice(0, 3)} />
      </div>
    </section>
  );
}
