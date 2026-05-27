# Carlos Rossy — Portfolio

Personal portfolio of Carlos Eduardo Pinto Rossy — Full Stack Developer based in Manaus, AM. Built with Next.js 16 and the App Router, styled with Tailwind CSS v4.

**Live:** [carlosrossy.vercel.app](https://carlosrossy.vercel.app)

## Highlights

- **Top navigation** with hide-on-scroll, scroll-spy, numbered section links and a `CR_` typewriter logo
- **Hero** with animated intro, accent-bordered CTAs and gradient title
- **About** with an offset accent frame around the photo (square moves back on hover) and stack pills
- **Experience timeline** with filled dot for the current role (live ping) and outlined dots that fill on hover
- **Project cards** with accent-tinted icon chip, year next to title and stronger hover lift
- **Bilingual `/resume`** route (EN / PT toggle) optimized for print — generates an A4 PDF straight from the browser, with all theme tokens forced to light mode in `@media print`
- **Fixed Social Dock** on the left edge (xl+) plus socials row in the footer for smaller viewports
- **Light & dark themes** via `next-themes` (no flicker, system default)
- **SEO / sharing**: dynamic `icon`, `apple-icon` and `opengraph-image` generated with `next/og`; sitemap and robots routes; 404 page
- **Accessibility**: skip link, focus rings, `aria-current` scroll-spy, `prefers-reduced-motion` handling

## Stack

| Layer        | Tools                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) · [React 19](https://react.dev/) · [TypeScript](https://www.typescriptlang.org/) |
| Styling      | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme inline` tokens, no `tailwind.config.*`) · `tw-animate-css`                       |
| UI           | [shadcn/ui](https://ui.shadcn.com/) · `radix-ui` · `class-variance-authority` · `clsx` · `tailwind-merge`                            |
| Motion       | [framer-motion](https://www.framer.com/motion/)                                                                                      |
| Icons        | [lucide-react](https://lucide.dev/) + custom SVGs for brand marks (GitHub, LinkedIn, Instagram)                                       |
| Theming      | [next-themes](https://github.com/pacocoursey/next-themes)                                                                            |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — dev server (Turbopack is the default in Next 16)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config with `eslint-config-next` core-web-vitals + TS)

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # root layout (navbar + dock + footer + theme provider)
│   ├── page.tsx                # home — stacks all sections
│   ├── icon.tsx                # dynamic 32x32 favicon (next/og)
│   ├── apple-icon.tsx          # dynamic 180x180 apple touch icon
│   ├── opengraph-image.tsx     # dynamic 1200x630 OG/Twitter card
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── not-found.tsx           # 404
│   ├── projects/               # /projects (full archive)
│   │   ├── page.tsx
│   │   └── projects-list.tsx
│   └── resume/                 # /resume (bilingual, print-optimized)
│       ├── page.tsx
│       └── resume-content.tsx
├── components/
│   ├── sections/               # Hero · About · Experience · Projects · Contact
│   ├── sidebar/                # Top navbar (hide-on-scroll, CR_ logo, scroll-spy)
│   ├── ui/                     # shadcn primitives
│   ├── icons.tsx               # GitHub, LinkedIn, Instagram SVGs
│   ├── social-dock.tsx         # fixed left vertical strip with line
│   ├── footer.tsx
│   └── providers.tsx           # next-themes
├── data/
│   ├── projects.ts             # projects list
│   └── socials.ts              # social links (single source of truth)
├── lib/
│   └── utils.ts                # cn() helper
└── styles/
    └── globals.css             # Tailwind v4 + design tokens + @media print
```

## Customizing your own version

| What                       | Where                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------ |
| Personal photo             | Replace `public/me_2.png` (used in About)                                            |
| Hero copy / bio            | `src/components/sections/hero.tsx`                                                   |
| About paragraphs + stack   | `src/components/sections/about.tsx` (`techs` array)                                  |
| Experience entries         | `src/components/sections/experience.tsx` (`experiences` array)                       |
| Projects                   | `src/data/projects.ts` — home shows the first 3, `/projects` shows all               |
| Social links               | `src/data/socials.ts` — one place updates navbar drawer, dock and footer             |
| Resume content (EN + PT)   | `src/app/resume/resume-content.tsx` (`content` object with both languages)           |
| Design tokens / palette    | `src/styles/globals.css` — `--accent-500`, `--accent-600`, `--hero-glow`, chart tokens |
| SEO defaults               | `src/app/layout.tsx` — `metadata` (`metadataBase`, `openGraph`, `twitter`)            |

## Deploy

Optimized for [Vercel](https://vercel.com). After deploying:

1. Update `metadataBase` in `src/app/layout.tsx` to the production URL.
2. Update the base URL in `src/app/sitemap.ts` and `src/app/robots.ts`.
3. Drop a `public/me_2.png` (portrait, ~4:5) if you swap the personal photo.

Every push to `main` triggers a Vercel build and a fresh preview URL on PRs.

## License

Personal project — feel free to use the structure and patterns as a reference for your own portfolio. The content (text, photos, project descriptions) is mine.
