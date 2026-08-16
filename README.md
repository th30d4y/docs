# th30d4y Docs

Documentation site for the [th30d4y](https://github.com/th30d4y) GitHub organization.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

---

## Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Adding a Page](#adding-a-page)
- [Deployment](#deployment)

---

## Overview

This repository contains the source and built output for the th30d4y organization docs. It covers all active and archived repositories:

| Project | Description |
|---------|-------------|
| [website](https://github.com/th30d4y/website) | GitHub intelligence dashboard (0d4y.dev) |
| [ExecuTrace](https://github.com/th30d4y/ExecuTrace) | CLI for recording and replaying developer workflows |
| [BURP-AI](https://github.com/th30d4y/BURP-AI) | AI-powered Burp Suite extension |
| [OpenLearnX](https://github.com/th30d4y/OpenLearnX) | Decentralized learning platform with blockchain certificates |
| [HAST-CMS](https://github.com/th30d4y/HAST-CMS) | Git-based Markdown publishing system |
| [Aval](https://github.com/th30d4y/Aval) | Women's safety platform with ML threat detection |
| [IOT-Malware](https://github.com/th30d4y/IOT-Malware) | IoT malware classification using neural networks |
| [IP](https://github.com/th30d4y/IP) | IP lookup tool with Firebase authentication |
| [Report](https://github.com/th30d4y/Report) | Data analysis notebook and report |
| [automation-hub](https://github.com/th30d4y/automation-hub) *(archived)* | GitHub Actions automation workflows |
| [0Commits](https://github.com/th30d4y/0Commits) *(archived)* | Cybersecurity research tool |

---

## Getting Started

**Requirements:** Node.js 18+, npm

```bash
git clone https://github.com/th30d4y/docs.git
cd docs
npm install
npm run dev
```

The development server starts at `http://localhost:4321`.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build static output to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
docs/
├── public/
│   └── favicon.png              # Site favicon
├── src/
│   ├── assets/
│   │   └── logo.png             # Header logo (org avatar)
│   ├── content/
│   │   └── docs/
│   │       ├── introduction.md
│   │       ├── getting-started.md
│   │       ├── installation.md
│   │       ├── usage.md
│   │       ├── development.md
│   │       ├── contributing.md
│   │       ├── about.md
│   │       └── projects/
│   │           ├── index.md
│   │           ├── website.md
│   │           ├── executrace.md
│   │           ├── burp-ai.md
│   │           ├── openlearnx.md
│   │           ├── hast-cms.md
│   │           ├── aval.md
│   │           ├── iot-malware.md
│   │           ├── ip.md
│   │           ├── report.md
│   │           ├── automation-hub.md
│   │           └── 0commits.md
│   ├── content.config.ts        # Content collection schema
│   ├── env.d.ts
│   └── styles/
│       └── custom.css
├── astro.config.mjs             # Astro + Starlight config (sidebar, logo, etc.)
├── package.json
└── tsconfig.json
```

---

## Adding a Page

1. Create a `.md` file under `src/content/docs/`:

```yaml
---
title: Page Title
description: One-line description.
draft: false
---

Page content here.
```

2. Register it in the `sidebar` array in `astro.config.mjs`:

```js
{ label: 'Page Title', slug: 'your-page-slug' },
```

The slug is the filename without the `.md` extension (e.g., `my-page.md` → `my-page`). For files inside a subdirectory, use `projects/my-page`.

---

## Deployment

The `dist/` directory contains the pre-built static output and is committed to this repository. It can be served directly from any static host.

**GitHub Pages** — point Pages to the `dist/` folder on the `main` branch, or use the included workflow if present.

**Manually rebuild before pushing:**

```bash
npm run build
git add dist/
git commit -m "rebuild docs"
git push
```
