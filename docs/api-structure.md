# Next.js API Template Structure (Folder-Based Routing)

This template follows the **Next.js App Router** API convention where folders map directly to endpoints.

## Folder map

```txt
app/
  layout.js                       -> root app layout
  page.js                         -> landing page documentation
  api/
    v1/
      health/
        route.js                  -> /api/v1/health
      users/
        route.js                  -> /api/v1/users
        [paramsId]/
          route.js                -> /api/v1/users/:paramsId
lib/
  api-version.js                  -> controlled API version constants
  route-layout.js                 -> before-handler API layout wrapper
middleware.js                     -> global version validation
jsconfig.json                     -> @/* alias path configuration
```

## Alias path (`@/`)

Use `@/` imports to avoid relative traversal:

```js
import { withApiLayout } from '@/lib/route-layout';
import { API_VERSION } from '@/lib/api-version';
```

## Route layout system (before access route)

`withApiLayout()` wraps handlers and runs before the route logic.

Features:

- Request/response logs
- Unified error handling (`500` on unexpected errors)
- Shared headers (`x-api-version`, `x-response-time`)

Example:

```js
export const GET = withApiLayout('GET /api/v1/health', async () => {
  return NextResponse.json({ success: true });
});
```

## Controlled version behavior

- Current API version: `v1` (`lib/api-version.js`).
- Middleware reads `x-api-version` request header.
- If provided and mismatched, request is rejected with status `400`.
- API responses include `x-api-version: v1`.

## Script commands

```bash
npm run dev
npm run build
npm run start
npm run dev:log
npm run build:log
npm run start:log
```

Log scripts write output into `logs/*.log`.
