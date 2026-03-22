import { UseCase } from '@/types'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface UseCaseListProps {
  useCases: UseCase[]
  accentColor: string
}

export default function UseCaseList({ useCases, accentColor }: UseCaseListProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8 pb-24">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-arc-text mb-10">
          Built for real business needs
        </h2>
      </AnimatedSection>
      <div className="flex flex-col gap-4">
        {useCases.map((uc, i) => (
          <AnimatedSection key={uc.title} delay={i * 0.1}>
            <div className="flex gap-6 p-6 rounded-2xl border border-arc-border hover:border-white/15 transition-colors duration-200">
              <div
                className="w-1 rounded-full shrink-0 mt-1"
                style={{ background: accentColor, minHeight: '100%' }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-arc-text mb-1">{uc.title}</h3>
                <p className="text-arc-muted text-sm leading-relaxed">{uc.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
