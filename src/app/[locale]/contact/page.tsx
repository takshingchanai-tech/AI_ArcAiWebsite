import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { Mail, MessageSquare } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact ArcAI',
}

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <AnimatedSection>
          <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-widest">
            {t('label')}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-arc-text mb-6 leading-tight">
            {t('headline1')}{' '}
            <GradientText>{t('headline2')}</GradientText>
          </h1>
          <p className="text-arc-muted text-lg leading-relaxed mb-10">{t('sub')}</p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-arc-muted">
              <Mail size={16} className="text-indigo-400 shrink-0" />
              <span className="text-sm">{t('email')}</span>
            </div>
            <div className="flex items-center gap-3 text-arc-muted">
              <MessageSquare size={16} className="text-indigo-400 shrink-0" />
              <span className="text-sm">{t('replyTime')}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-arc-border p-8 bg-arc-surface/50">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
