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
        Entrepreneur &amp; Engineer
      </p>
      <p className="mb-4">
        {
          "I spend most of my time building Trama — AI agents for travel agencies. Through Chelco, I help companies that need consulting on agentic apps and generative AI. In my free time, I work on Workffee."
        }
      </p>
      <p className="mb-4">
        {
          "Before starting my own things, I led an AI division at a US company and consulted on generative AI architecture independently."
        }
      </p>
      <p className="mb-4">I like building things that ship.</p>
      <div className="my-8">
        <BlogPosts posts={posts.slice(0, 3)} />
      </div>
    </section>
  );
}
