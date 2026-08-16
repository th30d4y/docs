---
title: BURP-AI
description: Burp Suite extension with AI-powered vulnerability detection.
draft: false
---

BURP-AI is a Burp Suite extension that integrates AI for automated vulnerability detection and HTTP request analysis in real-time.

**Language:** Python  
**Repository:** [github.com/th30d4y/BURP-AI](https://github.com/th30d4y/BURP-AI)

:::caution
BURP-AI is for authorized security testing only. Only use it on systems you have explicit permission to test.
:::

## Features

- Background vulnerability analysis with multiple AI models
- Detects: RCE, IDOR, SQLi, XSS, auth bypass, and other vulnerability classes
- Interactive AI chat for custom security queries
- Native request history and repeater functionality
- Supports 11+ AI models with automatic fallback

## Prerequisites

- Burp Suite (Pro or Community)
- Python 2.7+ via Jython runtime
- Java 8+ (bundled with Burp Suite)
- DigitalOcean AI API key (or compatible provider)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/th30d4y/BURP-AI.git
```

2. In Burp Suite, open **Extensions → Installed → Add**.
3. Set **Extension type** to **Python**.
4. Select `burpaai.py` from the cloned directory.
5. Open the **BurpAI** tab in Burp Suite.
6. Enter your API key and click **Save**.

## Usage

| Action | How |
|--------|-----|
| Analyze a request | Select the request → click **Analyze with AI** |
| Send to AI | Right-click a request → **Send to BurpAI** |
| Chat with AI | Type in the input box → press **Enter** or click **Send** |
| Switch model | Use the **Model** dropdown |
| View history | Click an entry in the history table |

## Files

| File | Purpose |
|------|---------|
| `burpaai.py` | Main extension file |
| `SECURITY.md` | Security policy |
| `SECURITY_ADVISORY.md` | Security advisories |
| `COLLABORATION.md` | Contribution guidelines |
| `requirements.txt` | Python dependencies |
