# th30d4y Docs

Documentation site for the [th30d4y](https://github.com/th30d4y) GitHub organization.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # output → dist/
npm run preview   # preview the build locally
```

## Structure

```
src/content/docs/
├── introduction.md
├── getting-started.md
├── installation.md
├── usage.md
├── projects/
│   ├── index.md
│   ├── executrace.md
│   ├── burp-ai.md
│   ├── openlearnx.md
│   ├── hast-cms.md
│   └── aval.md
├── development.md
├── contributing.md
└── about.md
```

## Adding a page

Create a `.md` file under `src/content/docs/` with frontmatter:

```yaml
---
title: Page Title
description: One-line description.
draft: false
---
```

Then add it to the `sidebar` array in `astro.config.mjs`.
