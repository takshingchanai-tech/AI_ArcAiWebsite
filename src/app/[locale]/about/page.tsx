import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import GradientText from '@/components/ui/GradientText'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About ArcAI',
}

export default function AboutPage() {
  const t = useTranslations('about')

  const values = [
    { title: t('values.v1.title'), desc: t('values.v1.desc') },
    { title: t('values.v2.title'), desc: t('values.v2.desc') },
    { title: t('values.v3.title'), desc: t('values.v3.desc') },
    { title: t('values.v4.title'), desc: t('values.v4.desc') },
  ]

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-widest">
          {t('label')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-arc-text mb-6 leading-tight">
          {t('headline1')}{' '}
          <GradientText>{t('headline2')}</GradientText>
        </h1>
        <p className="text-arc-muted text-lg leading-relaxed mb-12 max-w-2xl">
          {t('intro')}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="rounded-2xl border border-arc-border p-8 mb-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <h2 className="text-xl font-semibold text-arc-text mb-3">{t('missionLabel')}</h2>
          <p className="text-arc-muted leading-relaxed text-lg">{t('mission')}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <h2 className="text-2xl font-bold text-arc-text mb-8">{t('valuesHeading')}</h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={0.2 + i * 0.08}>
            <div className="p-6 rounded-2xl border border-arc-border hover:border-white/15 transition-colors duration-200 h-full">
              <h3 className="font-semibold text-arc-text mb-2">{v.title}</h3>
              <p className="text-arc-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="rounded-2xl border border-arc-border p-8">
          <p className="text-arc-muted text-sm uppercase tracking-widest mb-4">{t('whyLabel')}</p>
          <p className="text-arc-text leading-relaxed text-lg italic">
            &ldquo;{t('quote')}&rdquo;
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
