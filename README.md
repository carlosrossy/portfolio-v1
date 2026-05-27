# Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (dark/light)
- lucide-react

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Structure

```
src/
├── app/                    # App Router (pages, layout, sitemap, robots, og image)
│   ├── layout.tsx
│   ├── page.tsx            # Home
│   ├── projects/           # /projects page (full archive)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── opengraph-image.tsx
├── components/
│   ├── sections/           # Hero, About, Experience, Projects, Contact
│   ├── sidebar/            # Navigation sidebar (with scroll spy + theme toggle)
│   ├── ui/                 # shadcn primitives (button)
│   ├── footer.tsx
│   ├── icons.tsx           # Custom social icons (GitHub, LinkedIn)
│   └── providers.tsx       # next-themes provider
├── data/
│   └── projects.ts         # Projects data (edit to add/remove)
├── lib/
│   └── utils.ts            # cn helper
└── styles/
    └── globals.css         # Tailwind v4 + design tokens
```

## Adding projects

Edit `src/data/projects.ts` — each project shows on the home section (first 4) and the `/projects` page (all).

## Deploy

The site is ready for [Vercel](https://vercel.com). Set the production URL in `metadataBase` (`src/app/layout.tsx`), `sitemap.ts`, and `robots.ts` after deploy.
