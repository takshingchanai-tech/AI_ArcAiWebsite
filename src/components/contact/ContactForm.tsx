'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-indigo-400" />
        <h3 className="text-xl font-semibold text-arc-text">{t('successTitle')}</h3>
        <p className="text-arc-muted max-w-sm">{t('successSub')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-arc-muted mb-2" htmlFor="name">
            {t('nameLabel')}
          </label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder={t('namePlaceholder')}
            className="w-full px-4 py-3 rounded-xl bg-arc-surface border border-arc-border text-arc-text placeholder:text-arc-muted/50 focus:outline-none focus:border-indigo-500/60 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-arc-muted mb-2" htmlFor="email">
            {t('emailLabel')}
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder={t('emailPlaceholder')}
            className="w-full px-4 py-3 rounded-xl bg-arc-surface border border-arc-border text-arc-text placeholder:text-arc-muted/50 focus:outline-none focus:border-indigo-500/60 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-arc-muted mb-2" htmlFor="company">
          {t('companyLabel')}
        </label>
        <input
          id="company" name="company" type="text"
          value={form.company} onChange={handleChange}
          placeholder={t('companyPlaceholder')}
          className="w-full px-4 py-3 rounded-xl bg-arc-surface border border-arc-border text-arc-text placeholder:text-arc-muted/50 focus:outline-none focus:border-indigo-500/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-arc-muted mb-2" htmlFor="message">
          {t('messageLabel')}
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={form.message} onChange={handleChange}
          placeholder={t('messagePlaceholder')}
          className="w-full px-4 py-3 rounded-xl bg-arc-surface border border-arc-border text-arc-text placeholder:text-arc-muted/50 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 group"
      >
        {t('submit')}
        <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>
  )
}
