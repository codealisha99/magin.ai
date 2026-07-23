# Muzer Music Streaming

A realtime music streaming room app where users create spaces, add songs, vote on the queue, and listen together.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Prisma](https://img.shields.io/badge/Prisma-2D3748)
![Redis](https://img.shields.io/badge/Redis-DC382D)
![WebSocket](https://img.shields.io/badge/WebSocket-realtime-4B5563)

## Project Preview

The project includes a Next.js web app and a separate realtime websocket service for queue updates and playback coordination.

Screenshots can be added in a future `screenshots/` folder:

- Home page
- Space dashboard
- Live queue and now-playing screen

## Features

- Google sign-in with NextAuth.
- Music spaces for shared listening.
- YouTube search and song submission.
- Upvote, downvote, remove, and skip queue behavior.
- Realtime updates through a websocket service.
- PostgreSQL persistence through Prisma.
- Redis-backed realtime service coordination.
- Solana wallet payment hooks for paid submissions.
- Docker setup for local development.

## Tech Stack

- Next.js
- React
- TypeScript
- pnpm
- Prisma
- PostgreSQL
- Redis
- BullMQ
- WebSocket
- NextAuth
- Solana Web3.js
- Tailwind CSS

## Repository Structure

```text
next-app/   Next.js web application
ws/         Websocket service
```

## Getting Started

Install dependencies for both services:

```bash
cd next-app
pnpm install

cd ../ws
pnpm install
```

Create environment files:

```bash
cp next-app/.env.example next-app/.env
cp ws/.env.example ws/.env
```

Start supporting services with Docker:

```bash
docker compose up -d
```

Run the web app:

```bash
cd next-app
pnpm dev
```

Run the websocket service:

```bash
cd ws
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Documentation

- [Project Overview](./OVERVIEW.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Improvement Roadmap](./ROADMAP.md)

## Status

The core web app, database models, auth flow, room UI, and realtime service are in place. The next major step is production hardening around websocket reliability, payment confirmation, queue rules, and mobile polish.
