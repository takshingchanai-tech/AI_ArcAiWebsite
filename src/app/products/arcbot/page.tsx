import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/products'
import ProductHero from '@/components/products/ProductHero'
import FeatureGrid from '@/components/products/FeatureGrid'
import UseCaseList from '@/components/products/UseCaseList'

export const metadata: Metadata = {
  title: 'ArcBot — AI Chatbot for SMEs',
  description:
    'ArcBot is a robust, reliable, and accurate AI chatbot for internal company use and customer service — customized to your business.',
}

export default function ArcBotPage() {
  const product = getProductById('arcbot')
  if (!product) notFound()

  return (
    <>
      <ProductHero product={product} />
      <FeatureGrid features={product.features} accentColor={product.accentColor} />
      <UseCaseList useCases={product.useCases} accentColor={product.accentColor} />
    </>
  )
}
