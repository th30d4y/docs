---
title: Aval (அவள்)
description: AI-powered women's safety platform with real-time emergency response.
draft: false
---

Aval (Tamil: அவள், meaning "She") is an AI-powered women's safety platform combining machine learning threat detection with real-time emergency response.

**Language:** Python (backend), HTML (frontend)  
**Repository:** [github.com/th30d4y/Aval](https://github.com/th30d4y/Aval)

## Features

- **SOS Alerts** — One-tap emergency notification with GPS coordinates; auto-triggers on phone shake detection
- **Live Location Sharing** — Continuous real-time tracking sent to trusted contacts
- **ML Threat Detection** — Models trained on safety scenarios including low-light and night conditions
- **Crowd Analysis** — Computer vision detects unsafe crowd density patterns
- **Nearby Services Finder** — Locates police stations and hospitals via GPS
- **Admin Panel** — Monitors SOS logs and incident history
- **Self-Defense Resources** — Accessible guides via the frontend

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python (Flask/FastAPI) |
| ML | TensorFlow/Keras + TFLite |
| Frontend | HTML5 |
| Notifications | SMS / Firebase Cloud Messaging |

## Installation

```bash
git clone https://github.com/th30d4y/Aval.git
cd Aval
pip install -r requirements.txt
```

## Running

Start the backend:

```bash
cd backend
python app.py
```

Open `frontend/index.html` in a browser.
