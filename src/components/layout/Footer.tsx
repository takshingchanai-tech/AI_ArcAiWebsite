import Link from 'next/link'

const footerLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'ArcBot', href: '/products/arcbot' },
  { label: 'ArcFlow', href: '/products/arcflow' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-arc-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-arc-text font-semibold">
              Arc<span className="text-indigo-400">AI</span>
            </span>
          </Link>

          {/* Links */}
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

          {/* Copyright */}
          <p className="text-arc-muted text-sm">
            © {new Date().getFullYear()} ArcAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
