# Liquid Glass Monorepo

This repository contains:

- `apps/web`: a Next.js app that consumes the library and exposes `/liquid-gallery`.
- `packages/ui-liquid`: reusable Liquid Glass component system.

## Prerequisites

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Run locally

From the repository root:

```bash
npm run dev
```

Then open:

- `http://localhost:3000` (home)
- `http://localhost:3000/liquid-gallery` (validation gallery)

## Helpful commands

```bash
npm run typecheck
npm run build
```

## Notes

- The app imports package styles once at `apps/web/app/layout.tsx`.
- All glass visuals are implemented in `LiquidSurface`; higher-level components compose it.
