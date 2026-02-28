# CVODEX Auto-Routing API Template (Express)

Architecture API with **0 manual route declaration**:

- Folder = URL segment
- `route.js` auto-mounted
- Versioning by folders (`/api/v1`, `/api/v2`)
- Hierarchical `layout.js` middlewares (Next.js-like)
- Dynamic folders supported (`[id]` -> `:id`)
- Supports `route.<method>.js` (e.g. `route.get.js`, `route.post.js`)

## Run

```bash
npm install
npm run dev
```

With logs:

```bash
npm run dev:log
npm run start:log
```

## Structure

```txt
src/
  api/
    v1/
      layout.js
      auth/
        layout.js
        route.js
      users/
        route.js
        [id]/
          route.js
      cv/
        route.get.js
        route.post.js
    v2/
      layout.js
      health/
        route.js
  core/
    autoLoader.js
```

Detailed behavior is documented in `docs/api-structure.md`.
