# Muzer Music Streaming Roadmap

## Immediate Polish

- Add clear empty states for spaces, queues, and search results.
- Add loading and error states for song search, queue actions, and room loading.
- Improve mobile layout for the player, queue, and room controls.
- Add stronger validation for YouTube links and duplicate submissions.
- Add clearer sign-in redirects and unauthenticated states.
- Make websocket connection state visible to the user.

## Product Features

- Add host controls for skip, pause, remove, and lock room.
- Add listener roles: host, moderator, listener.
- Add queue rules: max songs per user, cooldowns, and room limits.
- Add payment confirmation before adding paid songs.
- Add user profiles with history of submitted songs.
- Add public and private spaces.
- Add share links and room invite previews.
- Add search filters and better YouTube metadata display.

## Realtime Reliability

- Add reconnect handling in the frontend.
- Add event acknowledgements for critical queue actions.
- Add idempotency for vote and remove actions.
- Store enough playback state to recover after service restart.
- Add Redis connection health checks.
- Add websocket auth expiry handling.
- Add server-side validation for every websocket event.

## Production Readiness

- Add tests for API routes, queue ordering, votes, and stream manager behavior.
- Add build and lint checks in CI.
- Add structured logs for queue actions and websocket connections.
- Add monitoring for Redis, database, and websocket disconnect rate.
- Add rate limits for search and queue submission.
- Add database indexes for room, queue, user, and vote queries.
- Add backup and restore notes for PostgreSQL.

## UI/UX Improvements

- Make the current track the strongest visual element in a room.
- Use clearer controls for vote, remove, and add song actions.
- Add animations for queue reorder and now-playing changes.
- Show who added each song and how many votes it has.
- Add a compact mobile player pinned to the bottom.
- Add a first-time user path: sign in, create space, add first song.

## Step-by-Step Priority

1. Stabilize websocket reconnect and queue refresh.
2. Add full empty, loading, and error states.
3. Add host controls and room roles.
4. Harden payment confirmation.
5. Add tests for queue and room behavior.
6. Add monitoring and rate limits.
7. Polish mobile listening experience.
