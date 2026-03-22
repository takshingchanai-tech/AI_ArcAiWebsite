'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 20)
  })

  const navLinks = [
    { label: t('products'), href: `/${locale}/#products` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('contact'), href: `/${locale}/contact` },
  ]

  return (
    <motion.header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-arc-bg/80 backdrop-blur-xl border-b border-arc-border'
          : 'bg-transparent'
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-arc-text font-semibold text-lg tracking-tight">
            Arc<span className="text-indigo-400">AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors duration-200',
                pathname === link.href
                  ? 'text-arc-text'
                  : 'text-arc-muted hover:text-arc-text'
              )}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href={`/${locale}/contact`}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
          >
            {t('getStarted')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-arc-muted hover:text-arc-text transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t('toggleMenu')}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-arc-surface border-b border-arc-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-arc-muted hover:text-arc-text text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium text-center transition-colors"
              >
                {t('getStarted')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
