import { clsx } from 'clsx'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
}

export default function GradientText({
  children,
  className,
  from = 'from-indigo-400',
  via = 'via-violet-400',
  to = 'to-cyan-400',
}: GradientTextProps) {
  return (
    <span
      className={clsx(
        'bg-gradient-to-r bg-clip-text text-transparent',
        from,
        via,
        to,
        className
      )}
    >
      {children}
    </span>
  )
}
