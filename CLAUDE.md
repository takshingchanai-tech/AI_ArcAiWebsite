# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# User instruction:
"After building or adding new features to the project or app, always run the tests and check the logs until every new functions and features work properly. And update both Readme.md and Claude.md ."


## Commands

```bash
npm run dev       # start local dev server at http://localhost:3000
npm run build     # production build (run this to verify TypeScript and 18 pages generate)
npm run lint      # ESLint via next lint
```

There are no tests yet. After adding features, verify correctness with `npm run build` (zero errors, 18 static pages = passing).

## Architecture

**Next.js 14 App Router** with TypeScript, Tailwind CSS, and **next-intl v4** for i18n. All pages live under `src/app/[locale]/` and are statically generated for 3 locales: `en`, `zh-TW`, `zh-CN`.

### i18n

- Locale routing is defined in `src/routing.ts` via `defineRouting()` and used by both `src/middleware.ts` (redirect/detection) and `src/i18n.ts` (message loading).
- All user-visible strings live in `src/messages/en.json`, `zh-TW.json`, `zh-CN.json`. The JSON key structure mirrors page/component hierarchy (e.g. `nav.*`, `hero.*`, `products.arcbot.*`).
- Server components use `useTranslations()` from `next-intl`. Client components also use `useTranslations()` — messages are passed down via `NextIntlClientProvider` in `src/app/[locale]/layout.tsx`.
- `useLocale()` gives the current locale string for building locale-prefixed hrefs (e.g. `` `/${locale}/contact` ``).
- `LanguageSwitcher` (`src/components/layout/LanguageSwitcher.tsx`) switches locale by rewriting the first path segment.

### Data flow

`src/lib/products.ts` exports `productsMeta: ProductMeta[]` — **non-translatable** fields only (id, href, accentColor, gradients, featureIcons). All translatable product content (name, tagline, tags, description, features, useCases) lives in the message JSON files under `products.[id].*`.

Product pages (`arcbot/page.tsx`, `arcflow/page.tsx`) merge `productsMeta` with `useTranslations('products.[id]')` and pass the result as props to `ProductHero`, `FeatureGrid`, `UseCaseList`.

Adding a new product requires:
1. A new entry in `src/lib/products.ts`
2. A new `products.[id]` block in all 3 message files
3. A new page at `src/app/[locale]/products/[id]/page.tsx`

### Design system

Custom Tailwind tokens in `tailwind.config.ts` under `theme.extend.colors.arc` (`arc-bg`, `arc-surface`, `arc-border`, `arc-primary`, `arc-secondary`, `arc-cyan`, `arc-muted`, `arc-text`). Always use these tokens rather than raw Tailwind colors.

Global utilities (`gradient-text`, `glass`, `glow-*`) are in `src/app/globals.css`.

### Server vs Client boundary

- **`'use client'`**: `Navbar.tsx` (scroll + translations), `LanguageSwitcher.tsx` (router), `AnimatedSection.tsx` (Framer Motion), `ProductSection.tsx` (Framer Motion hover), `ContactForm.tsx` (form state), `HeroSection.tsx` (Framer Motion)
- **Server Components**: `Footer.tsx`, all page files, `ProductHero.tsx`, `FeatureGrid.tsx`, `UseCaseList.tsx`, `ArcBotVersions.tsx`

Do not pass event handlers as props from a Server Component — use CSS hover classes or promote to a client component.

### ArcBot Editions

`ArcBotVersions` (`src/components/products/ArcBotVersions.tsx`) renders the three-tier comparison section on the ArcBot page. Translation keys live under `products.arcbot.versions.{basic|mega|agent}` (name, status, tagline, caps array). Pass `accentColor` from `productsMeta`.

- **ArcBot Basic** — Available Now. Production-grade RAG: Hybrid Search (Dense + BM25), Cross-Encoder reranking (BGE/Cohere) on top 50–100 chunks, GraphRAG with Knowledge Graphs, RAGAS-benchmarked accuracy, safety guardrails, AES-256 security.
- **ArcBot Mega** — Coming Soon. Multi-format document ingestion, domain fine-tuning, custom embeddings, million-document scale.
- **ArcBot Agent** — Coming Soon. Autonomous tool use, multi-step planning, human-in-the-loop controls.

### Icons

Icons come from `lucide-react`. The `icon` field on each feature in the message JSON (e.g. `"Shield"`, `"Zap"`) is resolved to a Lucide component via `iconMap` in `src/components/products/FeatureGrid.tsx`. Add new icon names to that map when adding features. Current ArcBot Basic icons: `Layers`, `Filter`, `Network`, `Shield`, `Lock`, `Target`.
