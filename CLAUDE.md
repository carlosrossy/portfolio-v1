# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack is the default in Next 16)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + TS presets)

There is no test runner configured in this project.

## Stack

- **Next.js 16.2.6** + **React 19.2** (App Router only — no `pages/` directory)
- **TypeScript** strict, path alias `@/*` → `src/*`
- **Tailwind CSS v4** via `@tailwindcss/postcss` (see `postcss.config.mjs`) — no `tailwind.config.*` file; theme tokens are defined in CSS with `@theme inline` (see `src/styles/globals.css`)
- **shadcn/ui** components consumed via the `shadcn` npm package; `shadcn/tailwind.css` is imported into `globals.css`
- `radix-ui` (single-package import surface, e.g. `import { Slot } from "radix-ui"`), `class-variance-authority`, `clsx` + `tailwind-merge` (combined in `src/lib/utils.ts` as `cn`)
- `framer-motion`, `lucide-react`, `next-themes`, `tw-animate-css`

## Architecture

Single-page portfolio. `src/app/layout.tsx` wraps everything in a fixed-position `Sidebar` (`src/components/sidebar/sidebar-content.tsx`, `'use client'`) plus a `main` shifted by `md:ml-[280px]`. `src/app/page.tsx` stacks five section components from `src/components/sections/` (`hero`, `about`, `experience`, `projects`, `contact`) — each one is a plain server component anchored by an `id` matching the sidebar's hash links (`#about`, `#experience`, ...). UI primitives live in `src/components/ui/` and follow the shadcn `cva` + `data-slot` pattern (see `button.tsx`).

Dark mode is currently hard-coded: `<html lang="pt-BR" className="dark">` in the root layout. `next-themes` is installed but not wired up yet. UI copy is Portuguese (pt-BR).

The design tokens in `globals.css` mix two systems: the standard shadcn oklch tokens (`--background`, `--primary`, `--muted-foreground`, ...) and a project-specific palette (`--accent-500/600`, `--alert-600`, `--gray-100/200/700/800/900`). Both are exposed to Tailwind through `@theme inline` so utilities like `bg-gray-800`, `text-accent-500`, and `bg-muted-foreground` all resolve.

## Next.js 16 reminders

Per `AGENTS.md`, this is Next 16 — assume App Router APIs may differ from older training data and consult `node_modules/next/dist/docs/01-app/` before writing routing, data-fetching, or config code. Notable shifts to watch for: async `params`/`searchParams`, async `cookies()`/`headers()`/`draftMode()`, Turbopack as the default bundler, and the `cacheComponents` config. The dev server runs on http://localhost:3000.
