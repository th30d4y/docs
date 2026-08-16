---
title: OpenLearnX
description: Decentralized learning platform with adaptive AI and blockchain certificates.
draft: false
---

OpenLearnX is an open-source decentralized learning and assessment platform combining adaptive AI quizzes, real-time sandboxed code execution, and blockchain-based NFT certificates.

**Language:** TypeScript (frontend), Python (backend)  
**License:** AGPL-3.0  
**npm package:** `@th30d4y/openlearnx`  
**Repository:** [github.com/th30d4y/OpenLearnX](https://github.com/th30d4y/OpenLearnX)

## Features

- Adaptive learning via IRT (Item Response Theory) — questions adjust based on learner performance
- NFT certificates — ERC-721 tokens minted on Ethereum
- Multi-language sandboxed code execution: Python, JavaScript, Java, C++, Go, Rust, and more
- AI-powered quiz generation with auto-grading
- Peer review with AI-monitored grading bias detection
- Decentralized peer-to-peer encrypted chat
- Student and instructor dashboards

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 19, TypeScript, TailwindCSS |
| Backend | Python 3, Flask |
| Database | MongoDB |
| Cache | Redis |
| Blockchain | Ethereum (Solidity, Foundry/Anvil) |
| Wallet | MetaMask (ethers.js v6) |
| ML/AI | TensorFlow, LLM integration |
| Storage | IPFS |
| Container | Docker |

## Prerequisites

- Node.js 18+
- Python 3.10+
- MongoDB
- Git
- MetaMask browser extension
- Foundry (`forge`, `anvil`)

## Installation

### 1. Install Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup
```

### 2. Clone the repository

```bash
git clone https://github.com/th30d4y/OpenLearnX.git
cd OpenLearnX
```

### 3. Start a local blockchain

Keep this terminal open while developing:

```bash
anvil --fork-url https://eth.merkle.io
```

### 4. Set up the backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 scripts/deploy.py
```

Note the contract address printed by `deploy.py`.

Create `backend/.env`:

```
FLASK_ENV=development
SECRET_KEY=dev-secret-key-change-in-production
MONGODB_URI=mongodb://localhost:27017/openlearnx
WEB3_PROVIDER_URL=http://127.0.0.1:8545
CONTRACT_ADDRESS=<YOUR_DEPLOYED_CONTRACT_ADDRESS>
JWT_SECRET_KEY=jwt-secret-key
```

Start the backend:

```bash
python3 main.py
```

The API runs at `http://127.0.0.1:5000`.

### 5. Set up the frontend

```bash
cd frontend
pnpm install
```

Create `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_CHAIN_ID=31337
NEXT_PUBLIC_CONTRACT_ADDRESS=<YOUR_DEPLOYED_CONTRACT_ADDRESS>
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
```

Start the frontend:

```bash
pnpm run dev
```

The frontend runs at `http://localhost:3000`.

### 6. Configure MetaMask

- Add a custom network with RPC `http://127.0.0.1:8545`, Chain ID `31337`, symbol `ETH`.
- Import a test account using a private key printed by Anvil.

## Docker

Run the full stack with Docker Compose:

```bash
docker compose up --build
```

## npm Package

```bash
npm install @th30d4y/openlearnx
```

:::note
Use only the scoped `@th30d4y/openlearnx` package. The unscoped `openlearnx` package name should not be used.
:::

## Project Structure

```
OpenLearnX/
├── backend/          # Flask API, smart-contract scripts, ML models
│   ├── contracts/    # Solidity smart contracts
│   ├── models/       # Database models
│   ├── routes/       # API route handlers
│   ├── services/     # Business logic
│   └── scripts/      # Deployment and utility scripts
├── frontend/         # Next.js application
│   ├── app/          # App Router pages
│   ├── components/   # Reusable UI components
│   ├── context/      # React context providers
│   └── hooks/        # Custom React hooks
├── chatApp/          # Decentralized chat application
└── docker-compose.yml
```

## Documentation Files

The repository includes:

| File | Purpose |
|------|---------|
| `DOCUMENTATION.md` | Full technical documentation |
| `ARCHITECTURE.md` | System architecture |
| `QUICK_START.md` | Step-by-step setup guide |
| `SECURITY.md` | Security policies |
| `DEPLOYMENT_COMPLETE.md` | Deployment guide |
