import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'ArcAI — Customized AI Assistants for SMEs',
    template: '%s | ArcAI',
  },
  description:
    'ArcAI helps small and medium-sized enterprises build powerful, customized AI assistants — from customer-facing chatbots to workflow automation.',
  keywords: ['AI assistant', 'SME', 'chatbot', 'workflow automation', 'ArcAI'],
  openGraph: {
    title: 'ArcAI — Customized AI Assistants for SMEs',
    description:
      'Build AI that works for your business. ArcAI provides enterprise-grade AI assistants tailored to your workflows.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-arc-bg text-arc-text min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
