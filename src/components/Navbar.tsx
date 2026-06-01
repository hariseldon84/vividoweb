import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const pillLinks = [
  { href: '/#edit',         label: 'Edit' },
  { href: '/for-teams',     label: 'For Teams' },
  { href: '/pricing',       label: 'Pricing' },
  { href: '/roadmap',       label: 'Roadmap' },
  { href: '/changelog',     label: 'Changelog' },
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
  { href: '/changelog',       label: 'Changelog' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHero = location.pathname === '/'
  const textColor = isHero ? 'text-forest' : 'text-forest'
  const navBg = !isHero && scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border' : 'bg-transparent'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}>
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 h-36">
          {/* Logo — frosted glass frame so it stays visible over video */}
          <Link to="/" className="flex items-center shrink-0">
            <div className="rounded-xl px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.55)' }}>
              <img src="/logo.png" alt="Vivido" className="h-24 w-auto" />
            </div>
          </Link>

          {/* Desktop pill nav */}
          <div className="hidden lg:flex items-center gap-1 pill-nav rounded-full pl-6 pr-1 py-1">
            {pillLinks.map((link, i) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm px-3 py-2 transition-colors rounded-full ${
                    i === 0
                      ? 'font-semibold text-forest hover:text-moss'
                      : 'font-medium text-sage hover:text-forest'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm px-3 py-2 transition-colors rounded-full ${
                    i === 0
                      ? 'font-semibold text-forest hover:text-moss'
                      : 'font-medium text-sage hover:text-forest'
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
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

          {/* Right side */}
          <div className={`flex items-center gap-4 sm:gap-6 ${textColor}`}>
            <Link
              to="/early-access"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-sage hover:text-forest transition-colors"
            >
              Join Waitlist
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-forest transition-all duration-300 hover:bg-white/90"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
              <X className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
            </button>
          </div>
        </nav>
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
        <div className="flex flex-col h-full pt-28 px-8 pb-8">
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
              className="block w-full text-center bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-5 py-3.5 rounded-full transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
