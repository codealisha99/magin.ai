# Muzer Music Streaming Overview

## What This Project Does

Muzer Music Streaming lets users create or join music spaces, add songs, vote on a queue, and play tracks in a shared room. The project is split into a web application and a realtime websocket service.

## Main Features

- Google sign-in and user sessions.
- Space creation and room-based music queues.
- Add songs through YouTube search.
- Upvote, downvote, remove, and skip queue items.
- Realtime queue updates through websocket connections.
- Solana wallet payment hooks for paid song submissions.
- PostgreSQL database models for users, spaces, streams, votes, and playback state.
- Redis-backed queue processing in the websocket service.

## Technology Stack

- **Next.js 14**: Web app, API routes, routing, and server-rendered pages.
- **React 18**: UI components and interactive screens.
- **TypeScript**: Typed frontend and backend code.
- **pnpm**: Package manager for both services.
- **Prisma**: Database schema, migrations, and generated clients.
- **PostgreSQL**: Main relational database.
- **NextAuth**: Google OAuth and session handling.
- **Redis**: Queue and realtime service coordination.
- **BullMQ**: Background queue tooling.
- **WebSocket**: Realtime communication between browser and service.
- **Solana Web3.js**: Wallet payment integration.
- **Tailwind CSS and Radix UI**: Styling and UI primitives.
- **Docker Compose**: Local multi-service environment.

## Application Structure

- `next-app`: Main web app.
- `next-app/app`: Pages, layouts, and API routes.
- `next-app/components`: UI components, stream view, auth screens, and shared controls.
- `next-app/prisma`: Web app database schema and migrations.
- `next-app/lib`: Auth, database, and utility code.
- `ws`: Realtime websocket service.
- `ws/src/app.ts`: Websocket server entry point.
- `ws/src/StreamManager.ts`: Queue and stream coordination.
- `ws/prisma`: Websocket service database schema.
- `docker-compose.yml`: Local infrastructure for app, database, and Redis.

## Data Flow

1. A user signs in with Google through the Next.js app.
2. The app stores user and session data in PostgreSQL through Prisma.
3. The user creates or joins a music space.
4. Songs are searched and added to the stream queue.
5. Votes and queue actions are handled by API routes and stored in the database.
6. The browser connects to the websocket service.
7. Redis and the websocket service coordinate queue updates and playback events.
8. The UI updates the current song, queue order, and room state.

## Current State

The project already has a strong split between product UI, API routes, database schema, and realtime service. The main work left is hardening deployment, improving queue reliability, tightening payment behavior, and making the listening room feel finished across mobile and desktop.
