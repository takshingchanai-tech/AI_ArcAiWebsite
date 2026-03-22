'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { locales, type Locale } from '@/i18n'

const labels: Record<Locale, string> = {
  en: 'EN',
  'zh-TW': '繁中',
  'zh-CN': '简中',
}

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(next: Locale) {
    if (next === locale) return
    // pathname includes the current locale prefix, e.g. /en/about → /zh-TW/about
    const segments = pathname.split('/')
    segments[1] = next
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-arc-border p-0.5">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
            l === locale
              ? 'bg-indigo-600 text-white'
              : 'text-arc-muted hover:text-arc-text'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}
