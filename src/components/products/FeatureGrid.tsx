import {
  Shield,
  Zap,
  Brain,
  FileText,
  Globe,
  BarChart2,
  GitBranch,
  Plug,
  Bell,
  Lock,
  RefreshCw,
  LucideIcon,
} from 'lucide-react'
import { FeatureItem } from '@/types'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Zap,
  Brain,
  FileText,
  Globe,
  BarChart2,
  GitBranch,
  Plug,
  Bell,
  Lock,
  RefreshCw,
}

interface FeatureGridProps {
  features: FeatureItem[]
  accentColor: string
}

export default function FeatureGrid({ features, accentColor }: FeatureGridProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-arc-text mb-10">
          Everything you need
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => {
          const Icon = iconMap[feature.icon] ?? Zap
          return (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <GlassCard className="p-6 h-full hover:border-white/20 transition-colors duration-200">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${accentColor}18`, color: accentColor }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-arc-text mb-2">{feature.title}</h3>
                <p className="text-arc-muted text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
