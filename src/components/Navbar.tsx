import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { VividoBrand } from './VividoBrand'

const pillLinks = [
  { href: '/#edit',     label: 'Edit' },
  { href: '/for-teams', label: 'For Teams' },
  { href: '/pricing',   label: 'Pricing' },
]

const mobileLinks = [
  { href: '/#edit',           label: 'Transcript Editing' },
  { href: '/#sentinel-audio', label: 'Sentinel Audio™' },
  { href: '/#style-model',    label: 'Style Model' },
  { href: '/#repurpose',      label: 'Repurpose' },
  { href: '/#publish',        label: 'Smart Publish' },
  { href: '/for-teams',       label: 'For Teams' },
  { href: '/pricing',         label: 'Pricing' },
]

const NAV_H = 64        // px — single-row bar height
const MARK_COLOR = '#336443'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = pillLinks.map((link) =>
    link.href.startsWith('/') && !link.href.includes('#') ? (
      <Link
        key={link.href}
        to={link.href}
        className="font-medium text-sm px-3 py-2 rounded-full transition-colors"
        style={{ color: '#4b5b47' }}
        onMouseEnter={e => (e.currentTarget.style.color = MARK_COLOR)}
        onMouseLeave={e => (e.currentTarget.style.color = '#4b5b47')}
      >
        {link.label}
      </Link>
    ) : (
      <a
        key={link.href}
        href={link.href}
        className="font-medium text-sm px-3 py-2 rounded-full transition-colors"
        style={{ color: '#4b5b47' }}
        onMouseEnter={e => (e.currentTarget.style.color = MARK_COLOR)}
        onMouseLeave={e => (e.currentTarget.style.color = '#4b5b47')}
      >
        {link.label}
      </a>
    )
  )

  return (
    <>
      {/* ── Single-row header — frosted glass fades in on scroll ── */}
      <header
        className="fixed top-0 left-0 right-0 z-30"
        style={{
          height: `${NAV_H}px`,
          background: scrolled
            ? 'rgba(250,250,248,0.92)'
            : 'linear-gradient(to right, rgba(250,248,244,0.28) 0%, transparent 20%)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(216,213,204,0.45)' : '1px solid transparent',
          transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
        }}
      >
        {/* ── Desktop: mark left | nav center | CTA right ── */}
        <div className="hidden lg:flex items-center justify-between h-full px-8">
          <Link to="/" className="flex items-center shrink-0" aria-label="Vivido home">
            <VividoBrand markSize={40} color={MARK_COLOR} />
          </Link>

          <div className="flex items-center gap-1 pill-nav rounded-full pl-6 pr-1 py-1">
            {navLinks}
            <a
              href="https://yz0i0epjoqe.typeform.com/to/udwohN7N"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: MARK_COLOR }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a5238')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = MARK_COLOR)}
            >
              Get Early Access
            </a>
          </div>
        </div>

        {/* ── Mobile: mark left | hamburger right ── */}
        <div className="lg:hidden flex items-center justify-between h-full px-5">
          <Link to="/" className="flex items-center shrink-0" aria-label="Vivido home">
            <VividoBrand markSize={36} color={MARK_COLOR} />
          </Link>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300"
            style={{ backgroundColor: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.60)', color: MARK_COLOR }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Menu className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(18,60,42,0.40)' }} />
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-20 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {mobileLinks.map((link, i) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-semibold py-3.5 border-b transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ color: MARK_COLOR, borderColor: 'rgba(18,60,42,0.10)', transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-semibold py-3.5 border-b transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ color: MARK_COLOR, borderColor: 'rgba(18,60,42,0.10)', transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
          <div
            className={`mt-8 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
            style={{ transitionDelay: menuOpen ? '700ms' : '0ms' }}
          >
            <a
              href="https://yz0i0epjoqe.typeform.com/to/udwohN7N"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center text-white text-sm font-semibold px-5 py-3.5 rounded-full"
              style={{ backgroundColor: MARK_COLOR }}
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
