# Deployment Guide

## Product
Instant Ordain Certificate Pro serves a Vite frontend and FastAPI backend for SmartMinisterBot / EverUnity Church ordination workflows.

## Local validation
1. Copy `.env.example` to `.env`.
2. Set backend secrets plus `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Install frontend dependencies with `npm install`.
4. Validate the frontend bundle with `npm run build`.
5. Start the full stack with `docker-compose up -d`.

## Docker deployment
- The `Dockerfile` builds the frontend with Vite and copies the `dist/` output into the Python image as `/app/static`.
- The production container serves FastAPI on port `8080`.
- `docker-compose.yml` is configured for local development with the app exposed at `http://localhost:8002`.

## Website in Test traceability
- target platform: Vercel
- current URL status: pending Vercel project hookup for this repository
- automation status: no deployment workflow is committed yet, so Vercel hookup remains a manual launch prerequisite

## Required environment variables
### Backend
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_ALGORITHM`
- `JWT_EXPIRATION_MINUTES`
- `STRIPE_MODE`
- `STRIPE_TEST_SECRET_KEY`
- `STRIPE_LIVE_SECRET_KEY`
- `STRIPE_TEST_PUBLISHABLE_KEY`
- `STRIPE_LIVE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `OPENAI_API_KEY`
- `REDIS_URL`

### Frontend
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Production checklist
- provision PostgreSQL and Redis
- set a strong `JWT_SECRET`
- choose the correct `STRIPE_MODE`
- configure Stripe webhook delivery to `/api/billing/webhook`
- build the frontend before publishing the container
- verify `/health` and `/api/config`

## Launch note
The current repository is ready for documentation-aligned deployment, but Stripe webhook lifecycle updates should be completed before advertising fully automated paid subscription fulfillment.
