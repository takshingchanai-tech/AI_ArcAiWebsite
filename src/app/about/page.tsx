import type { Metadata } from 'next'
import GradientText from '@/components/ui/GradientText'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About ArcAI',
  description: 'Learn about ArcAI — on a mission to make enterprise AI accessible for every SME.',
}

const values = [
  {
    title: 'Built for real businesses',
    description:
      'We design AI tools that work inside the messy, nuanced reality of how SMEs actually operate — not idealized enterprise scenarios.',
  },
  {
    title: 'Safety first',
    description:
      'Every product ships with guardrails that prevent hallucinations, protect sensitive data, and keep AI behavior predictable and auditable.',
  },
  {
    title: 'Radical simplicity',
    description:
      'You should not need an AI team to run AI. Our products are designed to be configured in hours and maintained by anyone on your team.',
  },
  {
    title: 'Honest partnerships',
    description:
      'We work closely with each client to build something that genuinely fits their needs — and we tell you when AI is not the right tool.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      {/* Hero */}
      <AnimatedSection>
        <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-widest">
          About ArcAI
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-arc-text mb-6 leading-tight">
          AI that fits your business,{' '}
          <GradientText>not the other way around.</GradientText>
        </h1>
        <p className="text-arc-muted text-lg leading-relaxed mb-12 max-w-2xl">
          ArcAI was founded on the belief that powerful AI should not be
          exclusive to large enterprises. Small and medium-sized businesses
          deserve the same capabilities — without the six-figure consulting bill.
        </p>
      </AnimatedSection>

      {/* Mission */}
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
          <h2 className="text-xl font-semibold text-arc-text mb-3">Our mission</h2>
          <p className="text-arc-muted leading-relaxed text-lg">
            To make enterprise-grade AI accessible and practical for every SME
            — with products that are safe, accurate, and genuinely useful from
            day one.
          </p>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection delay={0.15}>
        <h2 className="text-2xl font-bold text-arc-text mb-8">What we stand for</h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={0.2 + i * 0.08}>
            <div className="p-6 rounded-2xl border border-arc-border hover:border-white/15 transition-colors duration-200 h-full">
              <h3 className="font-semibold text-arc-text mb-2">{v.title}</h3>
              <p className="text-arc-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Closing statement */}
      <AnimatedSection delay={0.3}>
        <div className="rounded-2xl border border-arc-border p-8">
          <p className="text-arc-muted text-sm uppercase tracking-widest mb-4">Why ArcAI</p>
          <p className="text-arc-text leading-relaxed text-lg italic">
            &ldquo;We started ArcAI because we kept seeing great businesses held back
            by the complexity and cost of modern AI. Our goal is simple: build
            tools that are powerful enough to matter, and simple enough that
            you actually use them.&rdquo;
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
