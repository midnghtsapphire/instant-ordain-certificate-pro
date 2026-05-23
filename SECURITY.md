# Security

## Supported deployment assumptions
- secrets live in environment variables only
- Stripe mode must be explicit (`test` or `live`)
- Supabase client values should be public anon credentials only

## Operational guidance
- rotate `JWT_SECRET` before any public deployment
- do not commit `.env`
- validate Stripe webhook signatures with `STRIPE_WEBHOOK_SECRET`
- use least-privilege database credentials outside local Docker
- restrict CORS before public production rollout

## Reporting
If you discover a security issue in this repository, report it privately to the repository owner instead of opening a public issue with exploit details.
