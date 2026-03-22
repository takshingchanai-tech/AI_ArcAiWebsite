import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { ProductMeta } from '@/lib/products'
import Tag from '@/components/ui/Tag'

interface ProductHeroProps {
  meta: ProductMeta
  name: string
  tagline: string
  tags: string[]
  description: string
  getStartedLabel: string
}

export default function ProductHero({
  meta,
  name,
  tagline,
  tags,
  description,
  getStartedLabel,
}: ProductHeroProps) {
  const locale = useLocale()
  const tP = useTranslations('products')

  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: meta.bgGradient.replace('0.08', '0.12') }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0F)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Link
          href={`/${locale}/#products`}
          className="inline-flex items-center gap-2 text-arc-muted hover:text-arc-text text-sm mb-10 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          {tP('backLink')}
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} color={meta.accentColor} />
          ))}
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold text-arc-text mb-6 tracking-tight"
          style={{ textShadow: `0 0 80px ${meta.accentColor}30` }}
        >
          {name}
        </h1>

        <p className="text-2xl sm:text-3xl font-medium mb-6" style={{ color: meta.accentColor }}>
          {tagline}
        </p>

        <p className="text-arc-muted text-lg leading-relaxed max-w-2xl mb-10">{description}</p>

        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ background: `linear-gradient(135deg, ${meta.accentColor}, ${meta.accentColor}cc)` }}
        >
          {getStartedLabel}
        </Link>
      </div>
    </section>
  )
}
