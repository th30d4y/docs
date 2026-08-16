---
title: IP
description: IP lookup web tool with Firebase authentication and a Node.js server.
draft: false
---

IP is a web-based IP lookup tool with Firebase-based authentication, hosted at `w4nn4d13.tech/IP/`.

**Language:** HTML / JavaScript  
**Repository:** [github.com/th30d4y/IP](https://github.com/th30d4y/IP)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js (`server.js`) |
| Frontend | HTML, CSS |
| Authentication | Firebase (`firebaseauth.js`) |
| CI/CD | GitHub Actions |

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Main entry point |
| `login.html` | Login page |
| `homepage.html` | Authenticated home |
| `forgot-password.html` | Password reset |
| `abuse.html` | Abuse report handling |
| `virus.html` | Virus/threat handling |
| `both.html` | Combined handling |
| `error.html` | Error state |

## Configuration

Copy `.env.example` to `.env` and fill in your Firebase project credentials before running.

## Security

The repository includes `SECURITY.md` and `SECURITY_FIXES.md` documenting security policies and past fixes.
