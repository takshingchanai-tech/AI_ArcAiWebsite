'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ProductMeta } from '@/lib/products'
import Tag from '@/components/ui/Tag'
import ArrowButton from '@/components/ui/ArrowButton'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface ProductSectionProps {
  meta: ProductMeta
  index: number
}

export default function ProductSection({ meta, index }: ProductSectionProps) {
  const t = useTranslations(`products.${meta.id}`)
  const locale = useLocale()

  const tags = t.raw('tags') as string[]

  return (
    <AnimatedSection delay={index * 0.12}>
      <Link href={`/${locale}${meta.href}`} className="block group">
        <motion.div
          className="relative flex items-center h-[22vh] min-h-[150px] px-8 md:px-12 rounded-2xl border border-arc-border cursor-pointer overflow-hidden"
          whileHover={{
            scale: 1.012,
            boxShadow: `0 0 48px ${meta.accentColor}20`,
            borderColor: `${meta.accentColor}40`,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Subtle gradient background */}
          <div
            className="absolute inset-0 opacity-100 pointer-events-none"
            style={{ background: meta.bgGradient }}
            aria-hidden="true"
          />

          {/* Hover shimmer */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${meta.accentColor}08 0%, transparent 50%)`,
            }}
            aria-hidden="true"
          />

          {/* Left accent bar */}
          <div
            className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
            style={{ background: `linear-gradient(to bottom, ${meta.accentColor}, ${meta.accentColor}44)` }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between w-full gap-8">
            <div className="flex flex-col gap-3 min-w-0">
              <h2
                className="text-2xl sm:text-3xl font-bold text-arc-text tracking-tight"
                style={{ textShadow: `0 0 40px ${meta.accentColor}30` }}
              >
                {t('name')}
              </h2>
              <p className="text-arc-muted text-sm sm:text-base leading-snug max-w-xl">
                {t('tagline')}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} color={meta.accentColor} />
                ))}
              </div>
            </div>
            <ArrowButton color={meta.accentColor} />
          </div>
        </motion.div>
      </Link>
    </AnimatedSection>
  )
}
