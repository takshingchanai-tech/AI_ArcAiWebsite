import { clsx } from 'clsx'

interface TagProps {
  label: string
  color?: string
  className?: string
}

export default function Tag({ label, color, className }: TagProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'border border-white/10 bg-white/5',
        className
      )}
      style={color ? { color, borderColor: `${color}33` } : undefined}
    >
      {label}
    </span>
  )
}
