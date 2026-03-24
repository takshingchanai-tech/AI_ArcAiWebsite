# ArcAI Website

Marketing website for [ArcAI](https://arcai.io) — a company that helps small and medium-sized enterprises build customized AI assistants.

## Tech Stack

- **Next.js 14** (App Router) — React framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling with custom `arc.*` design tokens
- **Framer Motion** — animations and hover effects
- **Lucide React** — icons
- **next-intl v4** — internationalization (EN / 繁中 / 简中)
- **OpenAI SDK v6** — powers the ArcBot chat widget (`gpt-4o-mini`, streaming)

## Getting Started

```bash
npm install
cp .env.example .env.local   # add your OPENAI_API_KEY
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
│   ├── api/chat/route.ts      # POST /api/chat — ArcBot streaming chat endpoint
│   └── [locale]/              # All pages scoped by locale
│       ├── layout.tsx          # Locale layout (NextIntlClientProvider + ChatWidget)
│       ├── page.tsx
│       ├── about/
│       ├── contact/
│       └── products/arcbot|arcflow/
├── components/
│   ├── chat/                  # ChatWidget (floating button + slide-in panel)
│   ├── layout/                # Navbar, Footer, LanguageSwitcher
│   ├── home/                  # HeroSection, ProductSection
│   ├── products/              # ProductHero, FeatureGrid, UseCaseList, ArcBotVersions
│   ├── ui/                    # GlassCard, Tag, AnimatedSection, etc.
│   └── contact/               # ContactForm
├── messages/                  # en.json, zh-TW.json, zh-CN.json
├── lib/
│   ├── products.ts            # Non-translatable product metadata
│   ├── knowledge.ts           # ArcAI knowledge chunks (RAG reference)
│   ├── rag.ts                 # RAG pipeline: embeddings + cosine retrieval (reference)
│   └── fonts.ts
├── i18n.ts                    # next-intl config
├── routing.ts                 # Locale routing definition
├── middleware.ts              # Locale detection & redirect (excludes /api/*)
└── types/
    └── index.ts
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Yes | Powers the ArcBot chat widget (`/api/chat`) |

Set in `.env.local` locally. In Vercel, add via the project's Environment Variables settings.

## ArcBot Chat Widget

A floating **"Talk to Us"** button (bottom-right, indigo gradient) opens a 1/4-screen panel on the right side of every page.

- Powered by `gpt-4o-mini` with a structured system prompt covering all ArcAI products, technical stack, values, and contact info
- Streams tokens in real time — no wait for the full response
- Responds in the user's language (EN / 繁中 / 简中 and more)
- Includes reset button, online status indicator, and typing animation
- **Why system prompt, not RAG**: the knowledge base is ~3k tokens — well within GPT-4o-mini's 128k context window. RAG is the right architecture when knowledge exceeds ~100 pages; for a fixed marketing knowledge base this size, a structured system prompt is simpler, faster, and more reliable. See `src/lib/rag.ts` and `src/lib/knowledge.ts` for the RAG reference implementation used in real ArcBot deployments.

### Files
| File | Role |
|---|---|
| `src/components/chat/ChatWidget.tsx` | Floating button + slide-in chat panel (`'use client'`) |
| `src/app/api/chat/route.ts` | `POST /api/chat` — streams `gpt-4o-mini` responses |
| `src/lib/knowledge.ts` | Structured knowledge chunks (reference — not used at runtime for website chatbot) |
| `src/lib/rag.ts` | RAG pipeline: embed, cosine retrieval (reference — used in real ArcBot deployments) |

## Deployment

Deploys to [Vercel](https://vercel.com) with zero configuration. Connect the GitHub repo and push to `main`.
