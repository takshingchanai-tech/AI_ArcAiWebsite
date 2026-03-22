import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()

  const footerLinks = [
    { label: tNav('products'), href: `/${locale}/#products` },
    { label: 'ArcBot', href: `/${locale}/products/arcbot` },
    { label: 'ArcFlow', href: `/${locale}/products/arcflow` },
    { label: tNav('about'), href: `/${locale}/about` },
    { label: tNav('contact'), href: `/${locale}/contact` },
  ]

  return (
    <footer className="border-t border-arc-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-arc-text font-semibold">
              Arc<span className="text-indigo-400">AI</span>
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-arc-muted hover:text-arc-text text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-arc-muted text-sm">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
