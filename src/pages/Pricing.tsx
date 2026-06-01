import { Reveal } from '../components/Reveal'
import { WaitlistForm } from '../components/WaitlistForm'

const features = [
  'All features, no exceptions',
  'Transcript-first editing',
  'Sentinel Audio™ — AI noise removal & loudness',
  'Style Model — AI that learns your editing',
  'Built-in screen + webcam recording',
  'One-click repurpose to Shorts & Reels',
  'Smart Publish with AI metadata',
  'Unlimited projects & exports',
  'All updates throughout the year',
  'macOS native — offline capable',
]

export function Pricing() {
  return (
    <main className="pt-40">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-violet opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-4">
              <span className="section-badge">Pricing</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-center text-text mt-6 leading-tight">
              Simple pricing.<br />
              <span className="gradient-text">One decision.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-center text-text-muted mt-6 text-lg max-w-xl mx-auto">
              No tiers. No feature gates. One app, everything included.
              Early access pricing is locked for waitlist members.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
              {/* Annual */}
              <div className="pricing-card">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">Annual</p>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-display text-5xl font-bold text-text">$99</span>
                      <span className="text-text-muted">/year</span>
                    </div>
                    <p className="text-sm text-text-subtle mt-1">
                      <span className="line-through">$199/year</span>
                      <span className="ml-2 text-green-400 font-medium">50% off</span>
                    </p>
                  </div>
                  <span className="bg-moss/10 text-violet text-xs font-semibold px-3 py-1 rounded-full border border-moss/30">
                    Early Access
                  </span>
                </div>

                <div className="h-px bg-border" />

                <ul className="space-y-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-muted">
                      <div className="w-4 h-4 rounded-full bg-moss/10 border border-moss/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.5 6L6.5 2" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="/early-access" className="btn-primary justify-center py-4">
                  Join Waitlist → Annual
                </a>
                <p className="text-xs text-text-subtle text-center -mt-2">
                  Renew at $99/yr. Update anytime within your year.
                </p>
              </div>

              {/* Lifetime */}
              <div className="pricing-card border-moss/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    Best Value
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-moss/5 pointer-events-none" />
                <div className="flex items-start justify-between relative">
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">Lifetime</p>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-display text-5xl font-bold text-text">$249</span>
                      <span className="text-text-muted">once</span>
                    </div>
                    <p className="text-sm text-text-subtle mt-1">
                      <span className="line-through">$399</span>
                      <span className="ml-2 text-green-400 font-medium">$150 off</span>
                    </p>
                  </div>
                  <span className="bg-moss/10 text-violet text-xs font-semibold px-3 py-1 rounded-full border border-moss/30">
                    Early Access
                  </span>
                </div>

                <div className="h-px bg-border relative" />

                <ul className="space-y-3 flex-1 relative">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-muted">
                      <div className="w-4 h-4 rounded-full bg-moss/10 border border-moss/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.5 6L6.5 2" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-sm font-medium text-violet">
                    <div className="w-4 h-4 rounded-full bg-moss/10 border border-moss/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M4 1v6M1 4h6" stroke="#336443" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    Lifetime updates — pay once, use forever
                  </li>
                </ul>

                <a href="/early-access" className="btn-primary justify-center py-4 relative violet-glow">
                  Join Waitlist → Lifetime
                </a>
                <p className="text-xs text-text-subtle text-center -mt-2 relative">
                  Pay once. All future updates included. Always.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 max-w-2xl mx-auto bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-moss/10 border border-moss/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#336443" strokeWidth="1.5"/>
                    <path d="M9 6v4M9 13v.5" stroke="#336443" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text mb-1">Early access pricing is time-limited.</p>
                  <p className="text-sm text-text-muted">
                    These prices are locked for creators who join the waitlist before we launch publicly.
                    When Vivido ships, prices return to $199/yr and $399 lifetime.
                    Waitlist members lock in their price the day they join — it doesn't expire.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-lg mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-text mb-4">
              Lock in your price today.
            </h2>
            <p className="text-text-muted mb-8">
              Join the waitlist and reserve your early access pricing before we launch.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <WaitlistForm variant="page" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
