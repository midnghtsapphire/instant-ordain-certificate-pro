# Instant Ordain Certificate Pro


<!-- AUTO-PACKAGE-BADGES:START -->

<!-- AUTO-PACKAGE-BADGES:END -->
Instant Ordain Certificate Pro is a hybrid Vite + FastAPI product for SmartMinisterBot / EverUnity Church. It combines a consumer-facing ordination website with certificate browsing, pricing, reviews, account screens, an admin surface, and backend APIs for authentication and Stripe billing.

## What the repository does

- markets ordination packages and premium certificate upgrades
- lets visitors browse certificate templates and pricing tiers
- exposes login, signup, dashboard, review, contact, legal info, and admin screens
- serves backend auth, public config, billing, and health endpoints
- supports local full-stack development through Docker

## Project analysis

- **Value:** this repository already contains the full funnel surface needed to sell online ordination and certificate upgrades instead of only a backend or only a marketing shell.
- **Goal priority:** the highest-priority next step is turning the existing UI + API surface into a launchable revenue path with verified billing fulfillment and deployment traceability.
- **How it advances overall goals:** this product can convert direct consumer search demand for fast ordination into one-time certificate revenue, premium upsells, and repeat ministry-support offers.

## Current repository status

- baseline repo test is available with `npm test`
- frontend build is working with `npm run build`
- revvel baseline build validation is available with `npm run build:baseline`
- repo validation is available with `python validate.py`
- frontend lint has pre-existing issues unrelated to this S2M documentation pass
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
npm test
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

## Website in Test / deployment traceability

- **Website in Test (Vercel):** pending Vercel project hookup for this repository
- **Deployment automation reference:** no `.github/workflows` deployment automation is committed yet; target deployment platform for the test site is Vercel once environment variables and database wiring are finalized

## Automated research artifacts

- Run `npm run research:artifacts` to automatically emit the revvel/S2M research bundle for this repository.
- Generated machine-readable assets are written to `data/research/`.
- Generated reviewable artifacts are written to `artifacts/research/`.
- `npm test` and `npm run build:baseline` both invoke this automation so S2M requests emit research outputs by default.

## Validation commands

```bash
npm run research:artifacts
npm test
npm run build
npm run build:baseline
python validate.py
```

## Ship-to-market docs

- [CHANGELOG.md](./CHANGELOG.md)
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- [GO_TO_MARKET.md](./GO_TO_MARKET.md)
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)
- [SECURITY.md](./SECURITY.md)

## Support

This repository is proprietary to MIDNGHTSAPPHIRE / Audrey Evans. Use the repository issue tracker or owner contact path for support and launch coordination.
