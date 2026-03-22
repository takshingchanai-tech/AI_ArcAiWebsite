import type { Metadata } from 'next'
import { Mail, MessageSquare } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact ArcAI',
  description: 'Get in touch with ArcAI to discuss how we can build a customized AI assistant for your business.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: copy */}
        <AnimatedSection>
          <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-widest">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-arc-text mb-6 leading-tight">
            Let&apos;s build your{' '}
            <GradientText>AI together.</GradientText>
          </h1>
          <p className="text-arc-muted text-lg leading-relaxed mb-10">
            Whether you know exactly what you want or are just exploring what AI
            can do for your business, we would love to talk. Fill out the form
            and we will respond within 1 business day.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-arc-muted">
              <Mail size={16} className="text-indigo-400 shrink-0" />
              <span className="text-sm">hello@arcai.io</span>
            </div>
            <div className="flex items-center gap-3 text-arc-muted">
              <MessageSquare size={16} className="text-indigo-400 shrink-0" />
              <span className="text-sm">Typical reply time: under 24 hours</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: form */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-arc-border p-8 bg-arc-surface/50">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
