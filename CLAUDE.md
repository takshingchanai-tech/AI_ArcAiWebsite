# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start local dev server at http://localhost:3000
npm run build     # production build (run this to verify TypeScript and page generation)
npm run lint      # ESLint via next lint
```

There are no tests yet. After adding features, verify correctness with `npm run build` (zero errors = passing).

## Architecture

**Next.js 14 App Router** with TypeScript and Tailwind CSS. All pages are Server Components by default; only components that require interactivity are marked `'use client'`.

### Data flow

`src/lib/products.ts` is the **single source of truth** for all product content. It exports a `products: ProductData[]` array used by:
- `src/app/page.tsx` — renders one `ProductSection` banner per product
- `src/app/products/arcbot/page.tsx` and `arcflow/page.tsx` — pull product data via `getProductById()`

Adding a new product means adding one entry to `products.ts`; no other files need changing for the banner to appear on the homepage.

### Key types

`src/types/index.ts` defines `ProductData` and `FeatureItem`. Every component that renders product data imports from here.

### Design system

Custom Tailwind tokens are defined in `tailwind.config.ts` under `theme.extend.colors.arc` (`arc-bg`, `arc-surface`, `arc-border`, `arc-primary`, `arc-secondary`, `arc-cyan`, `arc-muted`, `arc-text`). Always use these tokens rather than raw Tailwind colors for backgrounds and text.

Global CSS variables and the `gradient-text`, `glass`, `glow-*` utility classes live in `src/app/globals.css`.

### Server vs Client boundary

- **Server Components** (no directive): Navbar static shell, Footer, all page layouts, ProductHero, FeatureGrid, UseCaseList
- **`'use client'`**: `Navbar.tsx` (scroll detection), `AnimatedSection.tsx` (Framer Motion viewport), `ProductSection.tsx` (Framer Motion hover), `ContactForm.tsx` (form state)

Passing event handlers (`onMouseEnter`, etc.) as props from a Server Component causes a build error — use CSS hover classes instead, or move the component to a client boundary.

### Icons

Icons come from `lucide-react`. The icon name on each `FeatureItem` (e.g. `"Shield"`, `"Zap"`) is resolved to a Lucide component via the `iconMap` object in `src/components/products/FeatureGrid.tsx`. Add new icon names there when adding features.
