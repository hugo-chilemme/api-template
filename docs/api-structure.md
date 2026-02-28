# Next.js API Template Structure (Folder-Based Routing)

This template follows the **Next.js App Router** API convention where folders map directly to endpoints.

## Folder map

```txt
app/
  api/
    v1/
      health/
        route.js            -> /api/v1/health
      users/
        route.js            -> /api/v1/users
        [paramsId]/
          route.js          -> /api/v1/users/:paramsId
lib/
  api-version.js            -> controlled API version constants
middleware.js               -> version validation + API response header
```

## Dynamic folder: `[paramsId]`

The folder `[paramsId]` creates a route parameter automatically.
In `app/api/v1/users/[paramsId]/route.js`, Next.js injects params:

```js
export async function GET(request, { params }) {
  const id = params.paramsId;
}
```

## Controlled version behavior

- Current API version: `v1` (`lib/api-version.js`).
- Middleware reads `x-api-version` request header.
- If provided and mismatched, request is rejected with status `400`.
- All API responses include `x-api-version: v1`.

## Example requests

```bash
# health
curl http://localhost:3000/api/v1/health

# list users
curl http://localhost:3000/api/v1/users

# get one user
curl http://localhost:3000/api/v1/users/1

# create user
curl -X POST http://localhost:3000/api/v1/users \
  -H "content-type: application/json" \
  -d '{"name":"Grace Hopper","email":"grace@example.com"}'

# update user
curl -X PATCH http://localhost:3000/api/v1/users/1 \
  -H "content-type: application/json" \
  -d '{"name":"Ada Byron"}'

# delete user
curl -X DELETE http://localhost:3000/api/v1/users/2
```
