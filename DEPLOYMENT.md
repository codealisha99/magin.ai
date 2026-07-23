# Muzer Music Streaming Deployment

## Production Targets

Recommended setup:

- **Next app**: Vercel.
- **Websocket service**: Render, Railway, Fly.io, or Docker on a VPS.
- **Database**: Neon PostgreSQL, Supabase PostgreSQL, or another managed PostgreSQL provider.
- **Redis**: Upstash Redis, Redis Cloud, or a managed Redis instance.
- **OAuth**: Google Cloud OAuth.
- **Payments**: Solana wallet public key and payment amount.

Before deploying with the Vercel CLI, upgrade it:

```bash
npm i -g vercel@latest
```

## Required Environment Variables

### `next-app`

```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
DATABASE_URL=
NEXT_PUBLIC_SECRET=
NEXT_PUBLIC_WSS_URL=
NEXT_PUBLIC_PUBLICKEY=
NEXT_PUBLIC_SOL_PER_PAYMENT=
```

### `ws`

```bash
PORT=
NEXTAUTH_SECRET=
DATABASE_URL=
REDIS_USERNAME=
REDIS_PASSWORD=
REDIS_HOST=
REDIS_PORT=
```

Use the same `NEXTAUTH_SECRET` in both services so websocket authentication can validate tokens.

## Local Setup With Docker

1. Create env files from:

```text
next-app/.env.example
ws/.env.example
```

2. Start services:

```bash
docker compose up -d
```

3. Open:

```text
App: http://localhost:3000
Redis UI: http://localhost:8001/redis-stack/browser
Prisma Studio: http://localhost:5555
```

## Local Setup Without Docker

1. Install app dependencies:

```bash
cd next-app
pnpm install
```

2. Install websocket dependencies:

```bash
cd ../ws
pnpm install
```

3. Start PostgreSQL and Redis locally.

4. Run Prisma generation and migrations for each service:

```bash
cd next-app
pnpm postinstall
pnpm prisma:migrate

cd ../ws
pnpm postinstall
```

5. Start both services:

```bash
cd next-app
pnpm dev

cd ../ws
pnpm dev
```

## Google OAuth Setup

Create a Google OAuth web client and add callback URLs:

```text
http://localhost:3000/api/auth/callback/google
https://YOUR_DOMAIN/api/auth/callback/google
```

Set:

```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=https://YOUR_DOMAIN
```

## Database Setup

1. Create a managed PostgreSQL database.
2. Set `DATABASE_URL` in both services.
3. Run migrations:

```bash
cd next-app
pnpm prisma migrate deploy
```

4. Run Prisma generation:

```bash
pnpm postinstall
```

If the websocket service uses its own Prisma schema in production, run the equivalent migration and generation steps for `ws`.

## Redis Setup

Use a managed Redis provider and set:

```bash
REDIS_USERNAME=
REDIS_PASSWORD=
REDIS_HOST=
REDIS_PORT=
```

If the provider uses a URL format, either adapt the code to support `REDIS_URL` or split the URL into the current env fields.

## Vercel Setup For `next-app`

1. Import the repository into Vercel.
2. Set the root directory to `next-app`.
3. Set install command:

```bash
pnpm install
```

4. Set build command:

```bash
pnpm build
```

5. Add all `next-app` environment variables.
6. Set `NEXT_PUBLIC_WSS_URL` to the deployed websocket URL:

```bash
wss://YOUR_WS_DOMAIN
```

## Websocket Service Deployment

For Render or Railway:

- Root directory: `ws`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Start command: `pnpm start`
- Expose the configured `PORT`

The deployed URL must support websocket traffic. Use `wss://` in production.

## Solana Payment Setup

Set:

```bash
NEXT_PUBLIC_PUBLICKEY=
NEXT_PUBLIC_SOL_PER_PAYMENT=
```

Use a public wallet address only. Never place a private key or seed phrase in frontend variables.

## External Services And API Keys

- Google OAuth is required for sign-in.
- PostgreSQL is required for Prisma.
- Redis is required by the realtime service.
- A Solana public wallet address and payment amount are required for paid submissions.
- Neon can be used as the PostgreSQL provider.
- Supabase is optional unless you choose Supabase PostgreSQL.
- Anthropic and OpenAI keys are not used by the current code.

## Deployment Checklist

- `next-app` builds successfully.
- `ws` builds successfully.
- Google OAuth callback URLs are correct.
- `NEXTAUTH_SECRET` matches in both services.
- Database migrations are applied.
- Redis credentials work from the websocket service.
- `NEXT_PUBLIC_WSS_URL` points to the live websocket service.
- Queue actions update in realtime after deployment.
