/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/nav";
import appCss from "~/styles/app.css?url";
import { baseUrl } from "~/utils/blog";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-title", content: "Ata" },
      { name: "theme-color", content: "#09090b" },
      ...seo({
        title: "Ata Herrera — Entrepreneur & Engineer",
        description:
          "Entrepreneur & Engineer from Córdoba, Argentina. Building Trama (AI agents for travel), Chelco (AI consulting), and Workffee.",
        url: baseUrl,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/geist@1.7.0/dist/fonts/geist-sans/style.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/geist@1.7.0/dist/fonts/geist-mono/style.min.css",
      },
      { rel: "canonical", href: baseUrl },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Ata Herrera — RSS",
        href: "https://ataschz.substack.com/feed",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ata Herrera",
          url: baseUrl,
          jobTitle: "Software Engineer & CTO",
          worksFor: {
            "@type": "Organization",
            name: "Trama",
            url: "https://trama.so",
          },
          sameAs: [
            "https://x.com/ataschz",
            "https://linkedin.com/in/ataschz",
            "https://github.com/ataschz",
            "https://ataschz.substack.com",
          ],
        }),
      },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
});

function RootComponent() {
  return <Outlet />;
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html
      className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      lang="es"
      style={{
        fontFamily: "'Geist Sans', 'Geist', system-ui, sans-serif",
      }}
    >
      <head>
        <HeadContent />
      </head>
      <body className="mx-4 mt-8 max-w-xl antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Scripts />
      </body>
    </html>
  );
}
