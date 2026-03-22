import { clsx } from 'clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}
