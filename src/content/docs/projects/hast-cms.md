---
title: HAST-CMS
description: Minimalist Git-based Markdown publishing system built with Astro.
draft: false
---

HAST-CMS is a minimalist, Git-based Markdown publishing system built with Astro and TypeScript.

The core workflow is: Write Markdown → Commit → Push → Auto-deploy.

No database, no admin panel, no backend — plain `.md` files generate a static website.

**Language:** Astro / TypeScript  
**Repository:** [github.com/th30d4y/HAST-CMS](https://github.com/th30d4y/HAST-CMS)

## Prerequisites

- Node.js 18+
- npm
- Git

## Installation

```bash
git clone https://github.com/th30d4y/HAST-CMS.git
cd HAST-CMS
npm install
npm run dev
```

The development server starts at `http://localhost:4321`.

## CLI Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build static output to `dist/` |
| `npm run preview` | Preview built site locally |
| `npm run new:post "Title"` | Create post from template |
| `npm run validate` | Check all post frontmatter |
| `npm run check` | TypeScript type checking |

## Project Structure

```
src/content/posts/            # Blog posts (.md files)
src/content/pages/            # Static pages
src/content/authors/          # Author profiles (.json)
src/content/settings/site.md  # Branding config
src/config/site.ts            # Structural config
public/                       # Images and static assets
```

## Creating Content

### New Post

```bash
npm run new:post "My Post Title"
```

Creates `src/content/posts/my-post-title.md` with `draft: true`.

### Frontmatter Reference

**Required fields:**

| Field | Type | Notes |
|-------|------|-------|
| `title` | string | Post headline |
| `description` | string | Max 300 characters |
| `date` | YYYY-MM-DD | Controls sort order |

**Optional fields (selected):**

| Field | Type | Default | Notes |
|-------|------|---------|-------|
| `slug` | string | filename | URL override |
| `draft` | boolean | false | Hides post in production |
| `featured` | boolean | false | Homepage featured section |
| `pinned` | boolean | false | Homepage pinned section |
| `category` | string | "Uncategorized" | One per post |
| `tags` | string[] | [] | Multiple allowed |
| `series` | string | — | Groups related posts |
| `seriesOrder` | integer | — | Position within series |
| `toc` | boolean | true | Table of contents sidebar |
| `noindex` | boolean | false | Exclude from search engines |

## Configuration

### Branding

Edit `src/content/settings/site.md` frontmatter:

- `siteName`
- `author`
- `authorRole`
- `authorBio`
- `siteDescription`

Changes propagate to all pages, feeds, and meta tags on next build.

### Structural Config

Edit `src/config/site.ts`:

- `siteURL` — full deployed URL for canonical links and feeds
- `navigation` — top nav links array
- `postsPerPage` — default `10`
- `relatedPostsCount` — default `3`
- `rss.feedItems` — default `20`
- `analytics` — disabled by default; supports Plausible, Umami, GoatCounter

## Features

- MDX support
- Drafts and scheduled posts (future-dated posts auto-suppress)
- Series navigation with prev/next links
- Related posts
- Client-side full-text search
- RSS 2.0 at `/rss.xml` and JSON Feed 1.0 at `/feed.json`
- Auto-generated sitemap
- Syntax-highlighted code blocks with copy button
- Reading time
- Table of contents
- SEO: canonical URLs, Open Graph, Twitter/X cards, Schema.org JSON-LD

## Deployment

| Platform | Build Command | Output Directory |
|----------|--------------|-----------------|
| GitHub Pages | via Actions workflow | `dist/` |
| Cloudflare Pages | `npm run build` | `dist/` |
| Netlify | `npm run build` | `dist/` |
| Vercel | `npm run build` | `dist/` |

## Troubleshooting

| Problem | Solution |
|---------|---------|
| Posts not appearing after dev start | Clear Astro cache: `rm -rf .astro/data-store.json .astro/collections` |
| Post not live after push | Verify `draft: false`, date is not future, GitHub Actions completed |
| Duplicate slug warning | Rename file or add unique `slug:` field |
| Series nav missing | Ensure exact same `series` string (case-sensitive) across all posts |
| Images not loading | Use `/images/file.png`, not `public/images/file.png` |
| Search not finding content | Rebuild with `npm run build`; search index is compile-time only |

## GitHub Actions Workflows

- **`deploy.yml`** — Triggers on push to `main` and daily schedule; validates, type-checks, builds, and deploys.
- **`pr-check.yml`** — Validates and builds PRs without deploying; blocks merges on errors.
