import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getProductMetaById } from '@/lib/products'
import { notFound } from 'next/navigation'
import ProductHero from '@/components/products/ProductHero'
import FeatureGrid from '@/components/products/FeatureGrid'
import UseCaseList from '@/components/products/UseCaseList'

export const metadata: Metadata = {
  title: 'ArcBot — AI Chatbot for SMEs',
}

export default function ArcBotPage() {
  const meta = getProductMetaById('arcbot')
  if (!meta) notFound()

  const t = useTranslations('products.arcbot')
  const tP = useTranslations('products')

  const features = meta.featureIcons.map((icon, i) => ({
    icon,
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
  }))

  const useCases = [0, 1, 2].map((i) => ({
    title: t(`useCases.${i}.title`),
    description: t(`useCases.${i}.description`),
  }))

  return (
    <>
      <ProductHero
        meta={meta}
        name={t('name')}
        tagline={t('tagline')}
        tags={t.raw('tags') as string[]}
        description={t('description')}
        getStartedLabel={tP('getStarted', { name: t('name') })}
      />
      <FeatureGrid
        features={features}
        accentColor={meta.accentColor}
        heading={tP('featuresHeading')}
      />
      <UseCaseList
        useCases={useCases}
        accentColor={meta.accentColor}
        heading={tP('useCasesHeading')}
      />
    </>
  )
}
