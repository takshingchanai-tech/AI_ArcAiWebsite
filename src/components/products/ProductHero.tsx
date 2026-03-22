import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProductData } from '@/types'
import Tag from '@/components/ui/Tag'

interface ProductHeroProps {
  product: ProductData
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: product.bgGradient.replace('0.08', '0.12') }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0F)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-arc-muted hover:text-arc-text text-sm mb-10 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          All Products
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <Tag key={tag} label={tag} color={product.accentColor} />
          ))}
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl font-bold text-arc-text mb-6 tracking-tight"
          style={{ textShadow: `0 0 80px ${product.accentColor}30` }}
        >
          {product.name}
        </h1>

        {/* Tagline */}
        <p
          className="text-2xl sm:text-3xl font-medium mb-6"
          style={{ color: product.accentColor }}
        >
          {product.tagline}
        </p>

        {/* Description */}
        <p className="text-arc-muted text-lg leading-relaxed max-w-2xl mb-10">
          {product.description}
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}cc)`,
          }}
        >
          Get Started with {product.name}
        </Link>
      </div>
    </section>
  )
}
