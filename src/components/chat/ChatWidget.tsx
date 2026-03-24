'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Bot, X, Send, Loader2, RotateCcw } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const ACCENT = '#6366F1'
const GREETING: Message = {
  role: 'assistant',
  content:
    "Hi! I'm ArcBot — ArcAI's AI assistant. Ask me anything about our products, RAG technology, or how we can help your business.",
}

function TypingDots() {
  return (
    <span className="flex gap-1 items-center py-1">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="w-1.5 h-1.5 rounded-full animate-bounce"
          style={{ background: 'rgba(255,255,255,0.35)', animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || streaming) return

    const history = [...messages, { role: 'user' as const, content: text }]
    setMessages([...history, { role: 'assistant', content: '' }])
    setInput('')
    setStreaming(true)

    abortRef.current = new AbortController()

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
        signal: abortRef.current.signal,
      })

      if (!response.ok || !response.body) throw new Error('Request failed')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const last = prev[prev.length - 1]
          return [...prev.slice(0, -1), { ...last, content: last.content + chunk }]
        })
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return
      setMessages((prev) => {
        const last = prev[prev.length - 1]
        return [
          ...prev.slice(0, -1),
          { ...last, content: 'Sorry, something went wrong. Please try again.' },
        ]
      })
    } finally {
      setStreaming(false)
      abortRef.current = null
    }
  }, [input, messages, streaming])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  function resetChat() {
    abortRef.current?.abort()
    setMessages([GREETING])
    setInput('')
    setStreaming(false)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open ArcBot chat"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30 active:scale-100"
        style={{
          background: `linear-gradient(135deg, ${ACCENT}, #8B5CF6)`,
          boxShadow: `0 8px 32px rgba(99,102,241,0.35)`,
          opacity: open ? 0 : 1,
          pointerEvents: open ? 'none' : 'auto',
          transform: open ? 'scale(0.9)' : undefined,
        }}
      >
        <Bot size={26} />
        <span className="text-base tracking-wide">Talk to Us</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat panel — 1/4 screen width */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col w-full sm:w-1/4 sm:min-w-[320px] transition-transform duration-300 ease-in-out"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          background: '#0D0D14',
          borderLeft: `1px solid rgba(99,102,241,0.25)`,
          boxShadow: open ? `-8px 0 48px rgba(99,102,241,0.12)` : 'none',
        }}
        role="dialog"
        aria-label="ArcBot chat"
        aria-modal="true"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{
            background: 'rgba(99,102,241,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${ACCENT}22`, color: ACCENT }}
            >
              <Bot size={18} />
            </div>
            <div>
              <p className="font-semibold text-arc-text text-sm leading-none mb-0.5">ArcBot</p>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <p className="text-xs text-arc-muted leading-none">Online · Powered by ArcAI</p>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={resetChat}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-arc-muted hover:text-arc-text hover:bg-white/5 transition-colors"
              title="Reset chat"
              aria-label="Reset chat"
            >
              <RotateCcw size={15} />
            </button>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-arc-muted hover:text-arc-text hover:bg-white/5 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scrollbar-thin">
          {messages.map((msg, i) => {
            const isUser = msg.role === 'user'
            const isLastAssistant =
              !isUser && i === messages.length - 1 && streaming && msg.content === ''

            return (
              <div
                key={i}
                className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mb-0.5"
                    style={{ background: `${ACCENT}20`, color: ACCENT }}
                  >
                    <Bot size={13} />
                  </div>
                )}
                <div
                  className="max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={
                    isUser
                      ? {
                          background: `linear-gradient(135deg, ${ACCENT}, #8B5CF6)`,
                          color: '#fff',
                          borderBottomRightRadius: '6px',
                        }
                      : {
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--color-arc-text, #F0F0F5)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderBottomLeftRadius: '6px',
                        }
                  }
                >
                  {isLastAssistant ? <TypingDots /> : msg.content}
                </div>
              </div>
            )
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="flex-shrink-0 px-4 py-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="flex items-end gap-2.5 rounded-2xl px-4 py-3"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about ArcBot, pricing, RAG…"
              rows={1}
              className="flex-1 bg-transparent text-sm text-arc-text placeholder:text-arc-muted resize-none outline-none leading-relaxed"
              style={{ maxHeight: '96px' }}
              disabled={streaming}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || streaming}
              className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 hover:opacity-90"
              style={{ background: ACCENT, color: '#fff' }}
              aria-label="Send message"
            >
              {streaming ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <Send size={15} />
              )}
            </button>
          </div>
          <p className="text-center text-[10px] text-arc-muted mt-2 opacity-60">
            ArcBot · ArcAI &mdash; Responses may not be perfectly accurate
          </p>
        </div>
      </div>
    </>
  )
}
