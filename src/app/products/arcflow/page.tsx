import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/products'
import ProductHero from '@/components/products/ProductHero'
import FeatureGrid from '@/components/products/FeatureGrid'
import UseCaseList from '@/components/products/UseCaseList'

export const metadata: Metadata = {
  title: 'ArcFlow — AI Workflow Automation',
  description:
    'ArcFlow connects your existing SME tools and automates multi-step business processes — no code required.',
}

export default function ArcFlowPage() {
  const product = getProductById('arcflow')
  if (!product) notFound()

  return (
    <>
      <ProductHero product={product} />
      <FeatureGrid features={product.features} accentColor={product.accentColor} />
      <UseCaseList useCases={product.useCases} accentColor={product.accentColor} />
    </>
  )
}
