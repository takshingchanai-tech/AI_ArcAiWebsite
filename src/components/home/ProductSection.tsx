'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProductData } from '@/types'
import Tag from '@/components/ui/Tag'
import ArrowButton from '@/components/ui/ArrowButton'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface ProductSectionProps {
  product: ProductData
  index: number
}

export default function ProductSection({ product, index }: ProductSectionProps) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <Link href={product.href} className="block group">
        <motion.div
          className="relative flex items-center h-[22vh] min-h-[150px] px-8 md:px-12 rounded-2xl border border-arc-border cursor-pointer overflow-hidden"
          whileHover={{
            scale: 1.012,
            boxShadow: `0 0 48px ${product.accentColor}20`,
            borderColor: `${product.accentColor}40`,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Subtle gradient background */}
          <div
            className="absolute inset-0 opacity-100 pointer-events-none"
            style={{ background: product.bgGradient }}
            aria-hidden="true"
          />

          {/* Hover shimmer */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${product.accentColor}08 0%, transparent 50%)`,
            }}
            aria-hidden="true"
          />

          {/* Left accent bar */}
          <div
            className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
            style={{ background: `linear-gradient(to bottom, ${product.accentColor}, ${product.accentColor}44)` }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between w-full gap-8">
            <div className="flex flex-col gap-3 min-w-0">
              {/* Product name */}
              <div className="flex items-center gap-3">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-arc-text tracking-tight"
                  style={{ textShadow: `0 0 40px ${product.accentColor}30` }}
                >
                  {product.name}
                </h2>
              </div>

              {/* Tagline */}
              <p className="text-arc-muted text-sm sm:text-base leading-snug max-w-xl">
                {product.tagline}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Tag key={tag} label={tag} color={product.accentColor} />
                ))}
              </div>
            </div>

            {/* Arrow */}
            <ArrowButton color={product.accentColor} />
          </div>
        </motion.div>
      </Link>
    </AnimatedSection>
  )
}
