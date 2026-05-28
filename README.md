# Mancora Kite Club

Monorepo with:
- `client/`: React + Vite + SWC + Tailwind v4
- `server/`: Express API + sitemap + SEO-safe trailing slash redirects

## Requirements

- Node.js 20+
- npm 10+

## Install

```bash
npm run install:all
```

## Development

```bash
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000`

## Build

```bash
npm run build
```

## Start server

```bash
npm run start
```

## Lint

```bash
npm run lint
```

## Deployments

- `main` is the production branch.
- Feature branches must stay as Vercel preview deployments only.
- Do not merge incomplete work into `main`; use PRs to promote changes.
- If you need internal testing with a stable URL, use a separate `staging` branch or preview deployment, not the production domain.
