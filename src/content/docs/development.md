---
title: Development
description: Setting up a development environment for th30d4y projects.
draft: false
---

Each project has its own development setup. This page covers the general workflow.

## Cloning a Project

```bash
git clone https://github.com/th30d4y/<project-name>.git
cd <project-name>
```

## Python Projects (ExecuTrace, BURP-AI, Aval)

Use a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

For ExecuTrace specifically, install in editable mode to reflect source changes immediately:

```bash
pip install -e .
```

## Node.js Projects (OpenLearnX, HAST-CMS)

Install dependencies:

```bash
pnpm install   # or: npm install
```

Start the development server:

```bash
pnpm run dev   # or: npm run dev
```

## OpenLearnX Full Stack

OpenLearnX requires running multiple services. Use separate terminals:

- **Terminal 1:** `anvil --fork-url https://eth.merkle.io` (local blockchain)
- **Terminal 2:** backend — `python3 main.py`
- **Terminal 3:** frontend — `pnpm run dev`

Or run the full stack with Docker:

```bash
docker compose up --build
```

## HAST-CMS TypeScript Checking

```bash
npm run check
```

## Running Tests

See each project's repository for test instructions. Not all projects have automated test suites documented.
