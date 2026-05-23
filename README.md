# Instant Ordain Certificate Pro

Instant Ordain Certificate Pro is a hybrid Vite + FastAPI product for SmartMinisterBot / EverUnity Church. It combines a consumer-facing ordination website with certificate browsing, pricing, reviews, account screens, an admin surface, and backend APIs for authentication and Stripe billing.

## What the repository does

- markets ordination packages and premium certificate upgrades
- lets visitors browse certificate templates and pricing tiers
- exposes login, signup, dashboard, review, contact, legal info, and admin screens
- serves backend auth, public config, billing, and health endpoints
- supports local full-stack development through Docker

## Current repository status

- frontend build is working with `npm run build`
- frontend lint has pre-existing issues unrelated to this S2M documentation pass
- no automated test runner is configured in the current clone
- Stripe checkout session creation exists; webhook lifecycle completion is still partial

## Quick start

### Prerequisites
- Node.js 20+
- Python 3.11+
- Docker and Docker Compose (for the easiest local full stack)

### Environment setup
Copy `.env.example` to `.env` and fill in:
- backend values such as `DATABASE_URL`, `JWT_SECRET`, and Stripe keys
- frontend Supabase values `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

### Frontend-only development
```bash
npm install
npm run build
npm run dev
```

The Vite dev server will run on the default local frontend port.

### Backend-only development
```bash
pip install -r requirements.txt
uvicorn server.main:app --reload --port 8080
```

### Full stack with Docker
```bash
docker-compose up -d
```

- app: `http://localhost:8002`
- docs: `http://localhost:8002/docs`
- database: `localhost:9002`
- redis: `localhost:10002`

## Core routes

### Frontend
- `/`
- `/certificates`
- `/pricing`
- `/reviews`
- `/contact`
- `/login`
- `/signup`
- `/dashboard`
- `/admin`

### API
- `GET /health`
- `GET /api/config`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/billing/create-checkout-session`
- `POST /api/billing/webhook`
- `GET /api/billing/subscription`

## Tech stack

- frontend: React, TypeScript, Vite, Tailwind, shadcn/ui
- backend: FastAPI, SQLAlchemy, Pydantic Settings
- auth: Supabase on the frontend, JWT auth endpoints on the backend
- billing: Stripe
- data services: PostgreSQL and Redis
- deployment: Docker multi-stage build + docker-compose

## Ship-to-market docs

- [CHANGELOG.md](./CHANGELOG.md)
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- [GO_TO_MARKET.md](./GO_TO_MARKET.md)
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)
- [SECURITY.md](./SECURITY.md)

## Support

This repository is proprietary to MIDNGHTSAPPHIRE / Audrey Evans. Use the repository issue tracker or owner contact path for support and launch coordination.
