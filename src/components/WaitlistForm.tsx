import { useState } from 'react'

interface WaitlistFormProps {
  variant?: 'hero' | 'inline' | 'page'
}

export function WaitlistForm({ variant = 'inline' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [channel, setChannel] = useState('')
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setStep('success')
  }

  if (step === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-12 h-12 rounded-full bg-moss/10 border border-moss/30 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10L8 14L16 6" stroke="#336443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-center">
          <p className="font-semibold text-text">You're on the list.</p>
          <p className="text-sm text-text-muted mt-1">
            Share your unique link to jump the queue — every 3 referrals move you up.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2.5 w-full max-w-sm">
          <span className="text-xs text-text-muted truncate flex-1">
            https://vividoapp.com/ref/{email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `https://vividoapp.com/ref/${email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}`
              )
            }}
            className="text-xs text-moss hover:text-fern font-medium shrink-0 transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-surface border border-border text-text placeholder:text-text-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-moss/60 transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary py-3 px-6 text-sm shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Joining...
            </span>
          ) : (
            'Get Early Access'
          )}
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-muted uppercase tracking-wider">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="bg-surface border border-border text-text placeholder:text-text-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-moss/60 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-muted uppercase tracking-wider">
          YouTube Channel URL <span className="normal-case text-text-subtle font-normal">(optional)</span>
        </label>
        <input
          type="url"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          placeholder="https://youtube.com/@yourchannel"
          className="bg-surface border border-border text-text placeholder:text-text-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-moss/60 transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Securing your spot...
          </span>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 8L8 15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Join the Waitlist
          </>
        )}
      </button>
      <p className="text-xs text-center text-text-subtle">
        Refer 3 friends → jump the queue. No spam, ever.
      </p>
    </form>
  )
}
