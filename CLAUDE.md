# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal blog/portfolio for Ata Herrera. Built with **TanStack Start** (React 19) deployed on **Cloudflare Workers**.

Blog posts are fetched from an external Substack RSS feed at runtime — there is no local content/MDX.

## Commands

- `bun run dev` — Start dev server
- `bun run build` — Build (TypeScript check + Vite build)
- `bun run deploy` — Build and deploy to Cloudflare Workers
- `bun run lint` — Lint with Biome
- `bun run lint:fix` — Auto-fix lint issues
- `bun run format` — Format with Biome
- `bun x ultracite fix` — Fix all formatting/lint (Ultracite wraps Biome)

## Architecture

**Framework**: TanStack Start with file-based routing (`src/routes/`). NOT Next.js.

**Routing**: TanStack Router — route files use bracket conventions like `blog.index.tsx`, `sitemap[.]xml.ts`. The route tree is auto-generated in `src/routeTree.gen.ts` (do not edit).

**Data fetching**: Server functions via `createServerFn` in `src/utils/blog.ts`. Fetches Substack RSS, parses XML, caches in-memory for 1 hour with stale fallback.

**Styling**: Tailwind CSS v4 via Vite plugin. No tailwind.config file — uses v4 auto-detection. Dark mode via `prefers-color-scheme` (automatic, no toggle). Color palette: `zinc` throughout.

**Path alias**: `~/` maps to `src/` (configured in tsconfig).

**Deployment**: Cloudflare Workers via Wrangler. GitHub Actions on push to `main` builds with Bun and deploys. Project name in Cloudflare is `me` (domain: `ataschz.me`).

**Code quality**: Biome via Ultracite preset. Husky git hooks. Route files have relaxed filename rules in `biome.jsonc`.

## Key Files

- `src/routes/__root.tsx` — Root layout, HTML head, SEO metadata, fonts, theme
- `src/utils/blog.ts` — Substack RSS fetching + caching logic
- `src/utils/seo.ts` — Open Graph / meta tag helper
- `src/routes/api/og.ts` — Dynamic OG image generation (SVG)
- `wrangler.jsonc` — Cloudflare Workers config (name must be `me`)
