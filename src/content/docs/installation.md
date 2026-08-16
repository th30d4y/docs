---
title: Installation
description: Installation instructions for each th30d4y project.
draft: false
---

## ExecuTrace

ExecuTrace is available on PyPI.

```bash
pip install exectrace-workflow
```

Or install from source:

```bash
git clone https://github.com/th30d4y/ExecuTrace.git
cd ExecuTrace
pip install -e .
```

**Requirements:** Python 3.9+, Linux or macOS.

Verify the installation:

```bash
exectrace --help
```

---

## BURP-AI

BURP-AI is a Burp Suite extension loaded via Jython.

**Requirements:** Burp Suite (Pro or Community), Python 2.7+ via Jython, Java 8+, DigitalOcean AI API key.

1. Clone the repository:

```bash
git clone https://github.com/th30d4y/BURP-AI.git
```

2. In Burp Suite, open **Extensions → Installed → Add**.
3. Set extension type to **Python** and select `burpaai.py`.
4. Open the **BurpAI** tab, enter your API key, and click **Save**.

---

## OpenLearnX

**Requirements:** Node.js 18+, Python 3.10+, MongoDB, Git, MetaMask, Foundry.

Install Foundry:

```bash
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup
```

Clone and set up the backend:

```bash
git clone https://github.com/th30d4y/OpenLearnX.git
cd OpenLearnX/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 scripts/deploy.py
```

Set up the frontend:

```bash
cd ../frontend
pnpm install
pnpm run dev
```

Or use Docker:

```bash
docker compose up --build
```

The npm package is also available:

```bash
npm install @th30d4y/openlearnx
```

---

## HAST-CMS

**Requirements:** Node.js 18+, npm, Git.

```bash
git clone https://github.com/th30d4y/HAST-CMS.git
cd HAST-CMS
npm install
npm run dev
```

The development server starts at `http://localhost:4321`.

---

## Aval

**Requirements:** Python 3, pip.

```bash
git clone https://github.com/th30d4y/Aval.git
cd Aval
pip install -r requirements.txt
cd backend && python app.py
```

Open `frontend/index.html` in a browser.
