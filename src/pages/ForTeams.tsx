import BoomerangVideoBg from '../components/BoomerangVideoBg'
import { Reveal } from '../components/Reveal'

const MARK_COLOR = '#336443'

const capabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke={MARK_COLOR} strokeWidth="1.5"/>
        <circle cx="7" cy="8" r="2" stroke={MARK_COLOR} strokeWidth="1.5"/>
        <path d="M2 15c1-2 2.5-3 5-3s4 1 5 3" stroke={MARK_COLOR} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 6l3 3-3 3" stroke={MARK_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Brand Kit',
    description: 'Upload your fonts, colors, and logos once. Every editor on your team works within your brand — automatically, on every project.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 5h12M4 10h8M4 15h10" stroke={MARK_COLOR} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Style Guide',
    description: 'Define how your team edits — cut style, intro/outro rules, caption formatting. The Style Model enforces it across every video.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke={MARK_COLOR} strokeWidth="1.5"/>
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke={MARK_COLOR} strokeWidth="1.5"/>
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke={MARK_COLOR} strokeWidth="1.5"/>
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke={MARK_COLOR} strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Shared Asset Library',
    description: 'Stock footage, B-roll, music, intro animations — one library for the whole team. Stop hunting through Slack for "the new logo file."',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 6v8L10 18 2 14V6L10 2z" stroke={MARK_COLOR} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 2v16M2 6l8 4 8-4" stroke={MARK_COLOR} strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Project Handoffs',
    description: 'Pass a project from your filming team to your editor to your thumbnail designer — without losing context, comments, or version history.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke={MARK_COLOR} strokeWidth="1.5"/>
        <path d="M10 6v4l3 3" stroke={MARK_COLOR} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Version History',
    description: '30-day version history per project. See exactly what changed, who changed it, and restore any previous version in one click.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M10 4l6 6-6 6" stroke={MARK_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Publish Approvals',
    description: 'Set a review step before anything goes live. Editors create, leads approve, nothing publishes without sign-off. Coming soon.',
  },
]

export function ForTeams() {
  return (
    <main>
      {/* Hero — full screen boomerang video */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <BoomerangVideoBg src="/teams_boomerang.mp4" className="absolute inset-0 w-full h-full" />
        {/* Radial cream overlay — same language as home hero */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 75% 65% at 50% 45%, rgba(250,248,244,0.78) 0%, rgba(250,248,244,0.42) 45%, transparent 75%)' }}
        />
        <div className="relative z-10 flex flex-col items-center text-center pt-36 sm:pt-40 lg:pt-44 px-4 sm:px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-8"
              style={{ backgroundColor: 'rgba(51,100,67,0.08)', border: '1px solid rgba(51,100,67,0.18)', color: MARK_COLOR }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: MARK_COLOR }} />
              For Teams
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="font-normal leading-[0.95] text-[2.25rem] sm:text-5xl lg:text-[5rem] xl:text-[5.5rem] max-w-4xl text-balance"
              style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: MARK_COLOR }}
            >
              One studio.{' '}
              <span style={{ color: '#85AB8B' }}>Your whole team.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg rounded-2xl px-5 py-3"
              style={{ color: 'rgba(31,42,29,0.80)', backgroundColor: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.50)' }}
            >
              Agencies and brand teams spend hours enforcing consistency that should be automatic.
              Vivido makes your brand, your style, and your workflow the default — not the afterthought.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-3 mt-8">
              <a
                href="https://yz0i0epjoqe.typeform.com/to/udwohN7N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors shadow-md"
                style={{ backgroundColor: MARK_COLOR }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a5238')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = MARK_COLOR)}
              >
                Teams — Coming Soon
              </a>
            </div>
          </Reveal>
        </div>
        {/* Scroll hint */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 opacity-60">
          <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: MARK_COLOR }}>scroll</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MARK_COLOR} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* Team workspace screenshot */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="text-3xl md:text-5xl font-normal text-center mb-12 leading-[0.95]"
              style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#1f2a1d' }}
            >
              Built for how teams{' '}
              <span style={{ color: MARK_COLOR }}>actually work.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid #D8D5CC' }}>
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ backgroundColor: '#F0EEE8', borderBottom: '1px solid #D8D5CC' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.65)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234,179,8,0.65)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.65)' }} />
                <span className="ml-2 text-xs font-mono" style={{ color: '#7a8a76' }}>teams.vivido</span>
              </div>
              <div className="relative">
                <img src="/teamview.png" alt="Vivido team workspace" className="w-full block object-cover" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2" style={{ background: 'linear-gradient(to top, rgba(14,20,14,0.80) 0%, transparent 100%)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#85AB8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-xs font-semibold" style={{ color: '#85AB8B' }}>Brand kit · shared library · team handoffs</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 80}>
                <div className="feature-card h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(51,100,67,0.08)', border: '1px solid rgba(51,100,67,0.15)' }}>
                    {cap.icon}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1f2a1d' }}>{cap.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4b5b47' }}>{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / With Vivido — dark section */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: '#1f2a1d' }}>
        <div className="absolute inset-0 opacity-10 bg-grid-green pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2
              className="text-3xl md:text-4xl font-normal text-center mb-12"
              style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#ffffff' }}
            >
              What changes when your team moves to Vivido.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4">
              {[
                { before: '"Does anyone have the latest logo file?"', after: 'Shared brand kit, always current, always one click away.' },
                { before: '"Can you match the style from last week\'s video?"', after: 'Style Model enforces your edit rhythm automatically.' },
                { before: '"I\'ll send you the final export, then you can add the captions."', after: 'One project. Every step. All in Vivido.' },
                { before: '"Whose version is the most recent?"', after: '30-day version history. Every change tracked.' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
                    <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>Before</p>
                    <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.60)' }}>{row.before}</p>
                  </div>
                  <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(51,100,67,0.15)', border: '1px solid rgba(133,171,139,0.25)' }}>
                    <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#85AB8B' }}>With Vivido</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{row.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border text-center">
        <div className="max-w-lg mx-auto px-6">
          <Reveal>
            <h2
              className="text-3xl md:text-4xl font-normal mb-4"
              style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#1f2a1d' }}
            >
              Teams are coming.{' '}
              <span style={{ color: MARK_COLOR }}>Be first in.</span>
            </h2>
            <p className="mt-4 mb-8 text-base leading-relaxed" style={{ color: '#4b5b47' }}>
              Join the waitlist and we'll reach out when team access opens.
            </p>
            <a
              href="https://yz0i0epjoqe.typeform.com/to/udwohN7N"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors shadow-md"
              style={{ backgroundColor: MARK_COLOR }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a5238')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = MARK_COLOR)}
            >
              Join the Waitlist
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
