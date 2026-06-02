import { Reveal } from '../components/Reveal'
import { WaitlistForm } from '../components/WaitlistForm'

export function EarlyAccess() {
  return (
    <main className="pt-24 lg:pt-28 min-h-screen flex items-center" style={{ backgroundColor: '#FAFAF8' }}>
      <section className="w-full py-20">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-badge mb-6">Early Access</span>
              <h1
                className="text-4xl md:text-5xl font-normal mt-6 leading-tight"
                style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#1f2a1d' }}
              >
                Get in before{' '}
                <span style={{ color: '#336443' }}>the doors open.</span>
              </h1>
              <p className="mt-4 text-lg" style={{ color: '#4b5b47' }}>
                Lock in your early access price. Join the community. Help shape what gets built next.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#ffffff', border: '1px solid #D8D5CC' }}>
              <WaitlistForm variant="page" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              {[
                { label: 'Early access pricing', detail: 'Locked on signup' },
                { label: 'Jump the queue',       detail: 'Refer 3 friends' },
                { label: 'macOS',                detail: 'Native app' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4" style={{ backgroundColor: '#F0EEE8', border: '1px solid #D8D5CC' }}>
                  <p className="text-xs mb-1" style={{ color: '#7a8a76' }}>{item.detail}</p>
                  <p className="text-sm font-semibold" style={{ color: '#1f2a1d' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(51,100,67,0.06)', border: '1px solid rgba(51,100,67,0.15)' }}>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="8" cy="8" r="6.5" stroke="#336443" strokeWidth="1.2"/>
                  <path d="M8 5v4M8 11v.5" stroke="#336443" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <p className="text-xs leading-relaxed" style={{ color: '#4b5b47' }}>
                  Early access pricing ($99/yr or $249 lifetime) is available only to waitlist members.
                  When Vivido launches publicly, prices return to $199/yr and $399 lifetime.
                  Your price is locked the day you join — no expiry.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
