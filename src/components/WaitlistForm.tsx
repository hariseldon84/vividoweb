import { useState, useId } from 'react'

interface WaitlistFormProps {
  variant?: 'hero' | 'inline' | 'page'
}

type FormState = 'idle' | 'loading' | 'success' | 'duplicate' | 'error'

function getUtmParams() {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  return {
    utmSource: p.get('utm_source') ?? undefined,
    utmCampaign: p.get('utm_campaign') ?? undefined,
  }
}

const Spinner = () => (
  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
)

function SuccessView({ alreadyOnList }: { alreadyOnList?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: 'rgba(51,100,67,0.10)', border: '1px solid rgba(51,100,67,0.30)' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10L8 14L16 6" stroke="#336443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="text-center">
        <p className="font-semibold" style={{ color: '#1f2a1d' }}>
          {alreadyOnList ? "You're already on the list." : "You're on the list."}
        </p>
        <p className="text-sm mt-1" style={{ color: '#4b5b47' }}>
          We'll email you when early access opens.
        </p>
      </div>
    </div>
  )
}

export function WaitlistForm({ variant = 'inline' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [channel, setChannel] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  // Honeypot: hidden from real users, filled by bots
  const [honeypot, setHoneypot] = useState('')
  const honeypotId = useId()

  const loading = formState === 'loading'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return

    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          youtubeChannelUrl: channel.trim() || undefined,
          _hp: honeypot || undefined,
          pageUrl: window.location.href,
          referrer: document.referrer || undefined,
          ...getUtmParams(),
        }),
      })

      // Parse JSON defensively — a server crash returns text/html, not JSON
      let data: { ok?: boolean; error?: string } = {}
      try { data = await res.json() } catch { /* non-JSON response */ }

      if (res.status === 409 || data.error === 'already_on_waitlist') {
        setFormState('duplicate')
        return
      }

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        setFormState('error')
        return
      }

      setFormState('success')
    } catch {
      setErrorMessage('Network error — please check your connection and try again.')
      setFormState('error')
    }
  }

  if (formState === 'success') return <SuccessView />
  if (formState === 'duplicate') return <SuccessView alreadyOnList />

  // ── Hero variant: single-line email + CTA ──────────────────────────────────
  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        {/* Honeypot — visually hidden, do not change these styles */}
        <input
          id={honeypotId}
          name="_hp"
          type="text"
          value={honeypot}
          onChange={e => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
          style={{ backgroundColor: '#F0EEE8', border: '1px solid #D8D5CC', color: '#1f2a1d' }}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary py-3 px-6 text-sm shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2"><Spinner />Joining...</span>
          ) : (
            'Get Early Access'
          )}
        </button>
        {formState === 'error' && (
          <p className="w-full text-xs mt-1" style={{ color: '#c0392b' }}>{errorMessage}</p>
        )}
      </form>
    )
  }

  // ── Full form variant (inline / page) ─────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {/* Honeypot — visually hidden, do not change these styles */}
      <input
        id={honeypotId}
        name="_hp"
        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-wider" style={{ color: '#4b5b47' }}>
          Email *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
          style={{ backgroundColor: '#F0EEE8', border: '1px solid #D8D5CC', color: '#1f2a1d' }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-wider" style={{ color: '#4b5b47' }}>
          YouTube Channel URL{' '}
          <span className="normal-case font-normal" style={{ color: '#7a8a76' }}>(optional)</span>
        </label>
        <input
          type="url"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          placeholder="https://youtube.com/@yourchannel"
          className="rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
          style={{ backgroundColor: '#F0EEE8', border: '1px solid #D8D5CC', color: '#1f2a1d' }}
        />
      </div>

      {formState === 'error' && (
        <p className="text-xs rounded-lg px-3 py-2" style={{ color: '#c0392b', backgroundColor: 'rgba(192,57,43,0.07)', border: '1px solid rgba(192,57,43,0.2)' }}>
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2"><Spinner />Securing your spot...</span>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 8L8 15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Join the Waitlist
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: '#7a8a76' }}>
        No spam, ever. We'll email you when early access opens.
      </p>
    </form>
  )
}
