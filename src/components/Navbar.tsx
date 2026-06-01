import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const pillLinks = [
  { href: '/#edit',     label: 'Edit' },
  { href: '/for-teams', label: 'For Teams' },
  { href: '/pricing',   label: 'Pricing' },
  { href: '/roadmap',   label: 'Roadmap' },
]

const mobileLinks = [
  { href: '/#edit',           label: 'Transcript Editing' },
  { href: '/#sentinel-audio', label: 'Sentinel Audio™' },
  { href: '/#style-model',    label: 'Style Model' },
  { href: '/#repurpose',      label: 'Repurpose' },
  { href: '/#publish',        label: 'Smart Publish' },
  { href: '/for-teams',       label: 'For Teams' },
  { href: '/pricing',         label: 'Pricing' },
  { href: '/roadmap',         label: 'Roadmap' },
]

const EXPANDED_H = 264  // px — logo h-44(176) + gap(12) + pill(44) + padding(32)
const COMPRESSED_H = 56 // px — slim single-line bar

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = (size: 'full' | 'slim') => pillLinks.map((link) =>
    link.href.startsWith('/') && !link.href.includes('#') ? (
      <Link
        key={link.href}
        to={link.href}
        className={`font-medium text-sage hover:text-forest transition-colors rounded-full ${size === 'full' ? 'text-sm px-3 py-2' : 'text-xs px-2.5 py-1.5'}`}
      >
        {link.label}
      </Link>
    ) : (
      <a
        key={link.href}
        href={link.href}
        className={`font-medium text-sage hover:text-forest transition-colors rounded-full ${size === 'full' ? 'text-sm px-3 py-2' : 'text-xs px-2.5 py-1.5'}`}
      >
        {link.label}
      </a>
    )
  )

  return (
    <>
      {/* ── Main header — height animates between expanded and compressed ── */}
      <header
        className="fixed top-0 left-0 right-0 z-30 overflow-hidden"
        style={{
          height: scrolled ? `${COMPRESSED_H}px` : `${EXPANDED_H}px`,
          backgroundColor: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(216,213,204,0.45)' : '1px solid transparent',
          transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
        }}
      >

        {/* ── Desktop EXPANDED: logo centered top, pill below (at top) ── */}
        <div
          className="hidden lg:flex flex-col items-center pt-5 pb-3 absolute inset-x-0 top-0"
          style={{
            opacity: scrolled ? 0 : 1,
            transform: scrolled ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: scrolled ? 'none' : 'auto',
          }}
        >
          <Link to="/" className="flex items-center mb-3">
            <img src="/logo.png" alt="Vivido" className="h-44 w-auto" />
          </Link>
          <div className="flex items-center gap-1 pill-nav rounded-full pl-6 pr-1 py-1">
            {navLinks('full')}
            <Link
              to="/early-access"
              className="ml-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#1f2a1d' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a3827')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1f2a1d')}
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* ── Desktop COMPRESSED: logo left, nav right, one slim line ── */}
        <div
          className="hidden lg:flex items-center justify-between absolute inset-x-0 px-8"
          style={{
            height: `${COMPRESSED_H}px`,
            top: 0,
            opacity: scrolled ? 1 : 0,
            transform: scrolled ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s',
            pointerEvents: scrolled ? 'auto' : 'none',
          }}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="Vivido" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-0.5">
            {navLinks('slim')}
            <Link
              to="/early-access"
              className="ml-2 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              style={{ backgroundColor: '#1f2a1d' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a3827')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1f2a1d')}
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* ── Mobile: logo left, hamburger right ── */}
        <div
          className="lg:hidden flex items-center justify-between px-4 absolute inset-x-0"
          style={{ height: `${COMPRESSED_H}px`, top: 0 }}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Vivido"
              className="w-auto transition-all duration-350"
              style={{ height: scrolled ? '28px' : '48px' }}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-forest transition-all duration-300 hover:bg-white/90"
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
        <div className="absolute inset-0 bg-forest/40 backdrop-blur-sm" />
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
                  className={`text-xl font-semibold text-forest py-3.5 border-b border-forest/10 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-semibold text-forest py-3.5 border-b border-forest/10 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
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
            <Link
              to="/early-access"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center text-white text-sm font-semibold px-5 py-3.5 rounded-full transition-colors"
              style={{ backgroundColor: '#1f2a1d' }}
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
