import { Link } from 'react-router-dom'
import { VividoBrand } from './VividoBrand'

const links = [
  { label: 'Edit',      href: '/#edit' },
  { label: 'For Teams', href: '/for-teams' },
  { label: 'Pricing',   href: '/pricing' },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#123C2A', borderTop: '1px solid #1a5238' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" aria-label="Vivido home">
              <VividoBrand markSize={36} color="rgba(255,255,255,0.90)" />
            </Link>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>
              The All-in-One Studio for Creators
            </p>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/thevividoapp"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.50)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                aria-label="Vivido on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* macOS chip */}
              <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-xs">Coming soon on macOS</span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs transition-colors"
                  style={{ color: 'rgba(255,255,255,0.60)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs transition-colors"
                  style={{ color: 'rgba(255,255,255,0.60)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Vivido. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.18)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.18)')}>
              Privacy
            </Link>
            <Link to="/terms" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.18)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.18)')}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
