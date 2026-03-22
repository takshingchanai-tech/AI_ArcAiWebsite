import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'

interface ArrowButtonProps {
  label?: string
  color?: string
  className?: string
}

export default function ArrowButton({ label = 'Learn More', color, className }: ArrowButtonProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 text-sm font-medium shrink-0',
        'transition-all duration-200 group-hover:gap-3',
        className
      )}
      style={color ? { color } : { color: '#F4F4F5' }}
    >
      <span className="hidden sm:inline">{label}</span>
      <ArrowRight
        size={18}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </div>
  )
}
