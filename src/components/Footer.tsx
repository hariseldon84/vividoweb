import { Link } from 'react-router-dom'
import { VividoBrand } from './VividoBrand'

const footerLinks = {
  Product: [
    { label: 'Transcript Editing', href: '/#edit' },
    { label: 'Sentinel Audio™',    href: '/#sentinel-audio' },
    { label: 'Style Model',        href: '/#style-model' },
    { label: 'Repurpose',          href: '/#repurpose' },
    { label: 'Smart Publish',      href: '/#publish' },
  ],
  Company: [
    { label: 'For Teams', href: '/for-teams' },
    { label: 'Roadmap',   href: '/roadmap' },
    { label: 'Pricing',   href: '/pricing' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#123C2A', borderTop: '1px solid #1a5238' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-5" aria-label="Vivido home">
              <VividoBrand markSize={48} color="rgba(255,255,255,0.90)" />
            </Link>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The all-in-one studio for YouTube creators. Coming soon to Mac.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/thevividoapp"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                aria-label="Vivido on Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'rgba(255,255,255,0.40)' }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>Available on macOS</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.40)' }}>
                {section}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        className="text-sm transition-colors"
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm transition-colors"
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid #1a5238' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} The Morning Company Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}
