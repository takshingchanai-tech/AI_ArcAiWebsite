import { useTranslations } from 'next-intl'
import { Bot, Database, Cpu, Check } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface VersionCardProps {
  icon: React.ReactNode
  name: string
  status: string
  statusActive: boolean
  tagline: string
  caps: string[]
  accentColor: string
  featured: boolean
}

function VersionCard({
  icon,
  name,
  status,
  statusActive,
  tagline,
  caps,
  accentColor,
  featured,
}: VersionCardProps) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col h-full transition-all duration-200"
      style={{
        background: featured ? `${accentColor}0a` : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${featured ? `${accentColor}50` : 'rgba(255,255,255,0.08)'}`,
        opacity: featured ? 1 : 0.72,
      }}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${accentColor}18`, color: accentColor }}
        >
          {icon}
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={
            statusActive
              ? { background: 'rgba(52,211,153,0.12)', color: '#34d399' }
              : { background: 'rgba(251,191,36,0.12)', color: '#fbbf24' }
          }
        >
          {status}
        </span>
      </div>

      <h3 className="text-lg font-bold text-arc-text mb-1">{name}</h3>
      <p className="text-sm text-arc-muted mb-5 leading-relaxed">{tagline}</p>

      <ul className="space-y-2.5 mt-auto">
        {caps.map((cap, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check
              size={13}
              className="mt-0.5 flex-shrink-0"
              style={{ color: accentColor }}
            />
            <span className="text-arc-muted leading-snug">{cap}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ArcBotVersionsProps {
  accentColor: string
}

export default function ArcBotVersions({ accentColor }: ArcBotVersionsProps) {
  const t = useTranslations('products.arcbot')

  const versions = [
    {
      icon: <Bot size={20} />,
      name: t('versions.basic.name'),
      status: t('versions.basic.status'),
      statusActive: true,
      tagline: t('versions.basic.tagline'),
      caps: t.raw('versions.basic.caps') as string[],
      featured: true,
    },
    {
      icon: <Database size={20} />,
      name: t('versions.mega.name'),
      status: t('versions.mega.status'),
      statusActive: false,
      tagline: t('versions.mega.tagline'),
      caps: t.raw('versions.mega.caps') as string[],
      featured: false,
    },
    {
      icon: <Cpu size={20} />,
      name: t('versions.agent.name'),
      status: t('versions.agent.status'),
      statusActive: false,
      tagline: t('versions.agent.tagline'),
      caps: t.raw('versions.agent.caps') as string[],
      featured: false,
    },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-arc-text mb-3">
          {t('versionsHeading')}
        </h2>
        <p className="text-arc-muted mb-10 max-w-2xl leading-relaxed">
          {t('versionsSub')}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {versions.map((v, i) => (
          <AnimatedSection key={v.name} delay={i * 0.1}>
            <VersionCard {...v} accentColor={accentColor} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
