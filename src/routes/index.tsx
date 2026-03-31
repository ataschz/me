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
        {"I spend most of my time building "}
        <a
          className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-800 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          href="https://trama.so?utm_source=ataschz.com&utm_medium=web&utm_campaign=bio"
          rel="noopener noreferrer"
          target="_blank"
        >
          Trama
        </a>
        {" — AI agents for travel agencies. Through "}
        <a
          className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-800 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          href="https://chelco.studio?utm_source=ataschz.com&utm_medium=web&utm_campaign=bio"
          rel="noopener noreferrer"
          target="_blank"
        >
          Chelco
        </a>
        {
          ", I help companies that need consulting on agentic apps and generative AI. In my free time, I work on "
        }
        <a
          className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-800 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          href="https://workffee.com?utm_source=ataschz.com&utm_medium=web&utm_campaign=bio"
          rel="noopener noreferrer"
          target="_blank"
        >
          Workffee
        </a>
        .
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
