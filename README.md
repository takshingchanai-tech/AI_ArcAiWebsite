# ArcAI Website

Marketing website for [ArcAI](https://arcai.io) — a company that helps small and medium-sized enterprises build customized AI assistants.

## Tech Stack

- **Next.js 14** (App Router) — React framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling with custom `arc.*` design tokens
- **Framer Motion** — animations and hover effects
- **Lucide React** — icons
- **next-intl v4** — internationalization (EN / 繁中 / 简中)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects automatically to `/en/`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build + type check |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

## Languages

The site supports 3 languages via URL-based locale routing:

| URL prefix | Language |
|---|---|
| `/en/` | English |
| `/zh-TW/` | Traditional Chinese |
| `/zh-CN/` | Simplified Chinese |

A language switcher (`EN | 繁中 | 简中`) in the Navbar switches locale while staying on the same page.

All translations live in:
```
src/messages/
├── en.json
├── zh-TW.json
└── zh-CN.json
```

To update content, edit the relevant key in **each** of the 3 JSON files.

## Pages

Each page exists in all 3 locales (18 total static pages):

| Route | Description |
|---|---|
| `/[locale]/` | Homepage — hero + product banners |
| `/[locale]/products/arcbot` | ArcBot product detail — editions overview + ArcBot Basic technical capabilities |
| `/[locale]/products/arcflow` | ArcFlow product detail |
| `/[locale]/about` | About ArcAI |
| `/[locale]/contact` | Contact form |

## Adding a New Product

1. Add a `ProductMeta` entry to `src/lib/products.ts` (non-translatable fields: id, href, colors, icon names)
2. Add the translated content under `products.[id]` in each of the 3 message files
3. Create the page at `src/app/[locale]/products/[id]/page.tsx` (copy arcbot/page.tsx as a template)

## Project Structure

```
src/
├── app/
│   └── [locale]/             # All pages scoped by locale
│       ├── layout.tsx         # Locale layout (NextIntlClientProvider)
│       ├── page.tsx
│       ├── about/
│       ├── contact/
│       └── products/arcbot|arcflow/
├── components/
│   ├── layout/               # Navbar, Footer, LanguageSwitcher
│   ├── home/                 # HeroSection, ProductSection
│   ├── products/             # ProductHero, FeatureGrid, UseCaseList, ArcBotVersions
│   ├── ui/                   # GlassCard, Tag, AnimatedSection, etc.
│   └── contact/              # ContactForm
├── messages/                 # en.json, zh-TW.json, zh-CN.json
├── lib/
│   ├── products.ts           # Non-translatable product metadata
│   └── fonts.ts
├── i18n.ts                   # next-intl config
├── routing.ts                # Locale routing definition
├── middleware.ts             # Locale detection & redirect
└── types/
    └── index.ts
```

## Deployment

Deploys to [Vercel](https://vercel.com) with zero configuration. Connect the GitHub repo and push to `main`.
