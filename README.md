# Personal Website

A personal site built with:

- **Frontend:** React + TypeScript (Vite) — [`frontend/`](frontend/)
- **Backend:** Rust + [Axum](https://github.com/tokio-rs/axum) — [`server/`](server/)
- **Vercel deploy:** Static frontend + Rust serverless functions in [`api/`](api/)

## Layout

```
.
├── frontend/        # Vite React+TS app (built to frontend/dist)
├── server/          # Local Axum server: serves /api/* + static frontend
├── api/             # Vercel serverless Rust functions (one binary per file)
├── vercel.json      # Vercel build + runtime config
└── Cargo.toml       # Rust workspace (server only; api is built by Vercel)
```

## Local development

You need: Node.js 18+, npm, and a recent Rust toolchain.

In one terminal, run the Rust API server:

```bash
cargo run -p personal-website-server
# listens on http://localhost:3000
```

In another, run the Vite dev server (proxies `/api/*` to the Rust server):

```bash
cd frontend
npm install
npm run dev
# open http://localhost:5173
```

## Production build (single Rust binary serving everything)

```bash
npm run build           # builds frontend (frontend/dist) + release server
npm start               # serves /api/* and static frontend on :3000
```

`PORT` and `STATIC_DIR` env vars override defaults.

## Deploying to Vercel

This project uses the [`vercel-rust`](https://github.com/vercel-community/rust)
community runtime, declared in [`vercel.json`](vercel.json). On Vercel:

- The frontend is built via `cd frontend && npm install && npm run build` and
  served as static assets from `frontend/dist`.
- Each `api/*.rs` file is compiled into an independent Rust serverless
  function, available at `/api/<filename>` (e.g. `/api/hello`, `/api/health`).

### One-time setup

1. Install the Vercel CLI: `npm i -g vercel`
2. From the repo root: `vercel link` (creates `.vercel/`)
3. Deploy a preview: `vercel`
4. Deploy to production: `vercel --prod`

Or push to a Git provider and import the repo via the Vercel dashboard — no
extra configuration needed; `vercel.json` handles it.

> **Note:** The local `Cargo.toml` workspace excludes `api/` because the
> `vercel-rust` builder generates its own manifest per function during deploy.
> You can still build and test the API binaries locally with
> `cd api && cargo build`.

## Endpoints

| Path           | Description                          |
| -------------- | ------------------------------------ |
| `GET /api/health` | Liveness probe (`{"status":"ok"}`) |
| `GET /api/hello`  | Returns a greeting JSON message     |
