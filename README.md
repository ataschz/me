# ataschz.me

Personal site and blog for [Ata Herrera](https://ataschz.me).

## Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19)
- **Styling**: Tailwind CSS v4, Geist font
- **Runtime**: Cloudflare Workers
- **Blog**: Substack RSS (fetched at runtime)
- **Code quality**: Biome via Ultracite

## Development

```bash
bun install
bun run dev
```

## Deploy

Automatic via GitHub Actions on push to `main`. Deploys to Cloudflare Workers.

```bash
bun run deploy   # manual deploy
```
