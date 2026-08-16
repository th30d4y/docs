---
title: website (0d4y.dev)
description: GitHub intelligence dashboard and developer portfolio powered by the GitHub API.
draft: false
---

The `website` repository is a GitHub intelligence dashboard and developer portfolio for [0d4y.dev](https://0d4y.dev), driven entirely by live GitHub API data from the `th30d4y` account.

**Language:** TypeScript  
**Repository:** [github.com/th30d4y/website](https://github.com/th30d4y/website)

## Tech Stack

| Technology | Role |
|------------|------|
| Next.js 16 | App Router, server-side API routes |
| TypeScript | Strict mode |
| Tailwind CSS v4 | Utility-first styling |
| react-markdown + rehype-sanitize | Secure README rendering |

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

The development server runs at `http://localhost:3000`.

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GITHUB_TOKEN` | Optional (recommended) | Raises rate limit from 60 to 5000 req/hr |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical URL for Open Graph metadata |

Generate a token with `public_repo` read-only scope.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage: stats, featured projects, activity |
| `/projects` | Repository explorer with search, filter, sort |
| `/projects/[repo]` | Detail view: overview, commits, issues, PRs, contributors, files |
| `/activity` | Full commit timeline |
| `/api/github/*` | API routes for user, repos, activity, commits, README, contributors, file tree, issues, PRs |

## Key Components

- `Terminal.tsx` — Interactive shell with commands
- `ContributionGraph.tsx` — GitHub-style contribution heatmap
- `LanguageStats.tsx` — Bar chart and donut visualization
- `FeaturedProjects.tsx` — Top repos ranked by scoring algorithm
- `MarkdownRenderer.tsx` — Sanitized markdown with GFM support

## Caching

Responses are cached in-memory per process:

| Resource | TTL |
|----------|-----|
| User profile | 5 min |
| Repositories | 5 min |
| Commits | 3 min |
| Languages | 10 min |
| Contributors | 10 min |
| README | 15 min |
| File tree | 15 min |

Serverless deployments maintain independent caches per instance.

## Rate Limits

- Without token: **60 requests/hour**
- With `GITHUB_TOKEN`: **5000 requests/hour**

A token is strongly advised because the repos route fetches languages for up to 20 repos in parallel.

## Deployment

**Vercel (recommended):**

```bash
npm i -g vercel
vercel --prod
```

Set `GITHUB_TOKEN` in the Vercel project environment settings.

**Self-hosted:**

```bash
npm run build
npm start
```

Runs on port 3000. Reverse proxy with nginx or Caddy.
