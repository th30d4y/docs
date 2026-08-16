---
title: Usage
description: Basic usage for each th30d4y project.
draft: false
---

## ExecuTrace

Record a workflow:

```bash
exectrace record my-workflow
```

Stop recording:

```bash
exectrace stop
```

Replay a workflow:

```bash
exectrace replay my-workflow
```

Replay with explanation (dry-run with descriptions):

```bash
exectrace replay my-workflow --explain
```

Workflows are saved in JSON or XML format and can be shared across teams.

---

## BURP-AI

After installation, use BURP-AI from within Burp Suite:

| Action | How |
|--------|-----|
| Analyze a request | Select the request, click **Analyze with AI** |
| Send to AI | Right-click a request → **Send to BurpAI** |
| Chat with AI | Type in the input box → press **Enter** or click **Send** |
| Switch model | Use the **Model** dropdown |
| View history | Click an entry in the history table |

BURP-AI is for authorized security testing only.

---

## OpenLearnX

Start a local blockchain (keep this terminal open):

```bash
anvil --fork-url https://eth.merkle.io
```

Start the backend:

```bash
cd backend
source venv/bin/activate
python3 main.py
```

The API runs at `http://127.0.0.1:5000`.

Start the frontend:

```bash
cd frontend
pnpm run dev
```

The frontend runs at `http://localhost:3000`.

---

## HAST-CMS

Create a new post:

```bash
npm run new:post "My Post Title"
```

This creates a draft file at `src/content/posts/my-post-title.md`.

Build the site:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

Validate all post frontmatter:

```bash
npm run validate
```

---

## Aval

After starting the backend server, open `frontend/index.html` in a browser to access the web interface.

The backend exposes an API for:
- SOS alert submission
- Live location updates
- ML-based threat detection
- Nearby services lookup
