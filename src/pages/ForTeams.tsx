import { Reveal } from '../components/Reveal'
import { WaitlistForm } from '../components/WaitlistForm'

const capabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="#336443" strokeWidth="1.5"/>
        <circle cx="7" cy="8" r="2" stroke="#336443" strokeWidth="1.5"/>
        <path d="M2 15c1-2 2.5-3 5-3s4 1 5 3" stroke="#336443" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 6l3 3-3 3" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Brand Kit',
    description: 'Upload your fonts, colors, and logos once. Every editor on your team works within your brand — automatically, on every project.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 5h12M4 10h8M4 15h10" stroke="#336443" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Style Guide',
    description: 'Define how your team edits — cut style, intro/outro rules, caption formatting. The Style Model enforces it across every video.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="#336443" strokeWidth="1.5"/>
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="#336443" strokeWidth="1.5"/>
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="#336443" strokeWidth="1.5"/>
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="#336443" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Shared Asset Library',
    description: 'Stock footage, B-roll, music, intro animations — one library for the whole team. Stop hunting through Slack for "the new logo file."',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 6v8L10 18 2 14V6L10 2z" stroke="#336443" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 2v16M2 6l8 4 8-4" stroke="#336443" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Project Handoffs',
    description: 'Pass a project from your filming team to your editor to your thumbnail designer — without losing context, comments, or version history.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#336443" strokeWidth="1.5"/>
        <path d="M10 6v4l3 3" stroke="#336443" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Version History',
    description: '30-day version history per project. See exactly what changed, who changed it, and restore any previous version in one click.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M10 4l6 6-6 6" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Publish Approvals',
    description: 'Set a review step before anything goes live. Editors create, leads approve, nothing publishes without sign-off. Coming soon.',
  },
]

export function ForTeams() {
  return (
    <main className="pt-28 lg:pt-72">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-violet opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-badge mb-6">For Teams</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text mt-6 leading-tight text-balance">
              One studio.<br />
              <span className="gradient-text">Your whole team.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-text-muted mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Agencies and brand teams spend hours enforcing consistency that should be automatic.
              Vivido makes your brand, your style, and your workflow the default — not the afterthought.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <a href="/early-access" className="btn-primary">
                Join the Waitlist for Teams
              </a>
              <a href="/pricing" className="btn-outline">
                See pricing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text text-center mb-16">
              Built for how teams actually work.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 80}>
                <div className="feature-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-moss/10 border border-moss/20 flex items-center justify-center mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="font-semibold text-text mb-2">{cap.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-text text-center mb-12">
              What changes when your team moves to Vivido.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4">
              {[
                {
                  before: '"Does anyone have the latest logo file?"',
                  after: 'Shared brand kit, always current, always one click away.',
                },
                {
                  before: '"Can you match the style from last week\'s video?"',
                  after: 'Style Model enforces your edit rhythm automatically.',
                },
                {
                  before: '"I\'ll send you the final export, then you can add the captions."',
                  after: 'One project. Every step. All in Vivido.',
                },
                {
                  before: '"Whose version is the most recent?"',
                  after: '30-day version history. Every change tracked.',
                },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <div className="bg-surface border border-border rounded-xl p-4">
                    <p className="text-xs text-text-subtle mb-2 uppercase tracking-wider">Before</p>
                    <p className="text-sm text-text-muted italic">{row.before}</p>
                  </div>
                  <div className="bg-moss/5 border border-moss/20 rounded-xl p-4">
                    <p className="text-xs text-violet mb-2 uppercase tracking-wider">With Vivido</p>
                    <p className="text-sm text-text">{row.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-lg mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-text mb-4">
              Get early access for your team.
            </h2>
            <p className="text-text-muted mb-8">
              Join the waitlist. Mention your team size and we'll prioritize your access.
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
