# ArcAI Website

Marketing website for [ArcAI](https://arcai.io) — a company that helps small and medium-sized enterprises build customized AI assistants.

## Tech Stack

- **Next.js 14** (App Router) — React framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling with custom `arc.*` design tokens
- **Framer Motion** — animations and hover effects
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build + type check |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero + product banners |
| `/products/arcbot` | ArcBot product detail |
| `/products/arcflow` | ArcFlow product detail |
| `/about` | About ArcAI |
| `/contact` | Contact form |

## Adding a New Product

All product content lives in `src/lib/products.ts`. Add a new `ProductData` entry there — the homepage banner and the shared component structure (`ProductHero`, `FeatureGrid`, `UseCaseList`) will pick it up automatically. Then create the corresponding page at `src/app/products/[id]/page.tsx`.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── home/             # HeroSection, ProductSection
│   ├── products/         # ProductHero, FeatureGrid, UseCaseList
│   ├── ui/               # Reusable primitives (GlassCard, Tag, etc.)
│   └── contact/          # ContactForm
├── lib/
│   ├── products.ts       # Single source of truth for product data
│   └── fonts.ts          # next/font configuration
└── types/
    └── index.ts          # ProductData, FeatureItem interfaces
```

## Deployment

The site is a standard Next.js static-compatible app and deploys to [Vercel](https://vercel.com) with zero configuration. Connect the GitHub repo and push to `main`.
