import { useEffect, useState } from 'react'
import ActionButton from './ActionButton'
import HypedLogo from './HypedLogo'

const NAV_LINKS = [
  { href: '#expertises', label: 'Expertises' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    root.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
      root.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const isDesktop = window.innerWidth > 991
      const currentScrollY = window.scrollY

      if (!isDesktop) {
        setHeaderHidden(false)
        lastScrollY = currentScrollY
        return
      }

      if (mobileOpen) {
        setHeaderHidden(false)
        lastScrollY = currentScrollY
        return
      }

      if (currentScrollY <= 12) {
        setHeaderHidden(false)
        lastScrollY = currentScrollY
        return
      }

      if (currentScrollY > lastScrollY + 6) {
        setHeaderHidden(true)
      } else if (currentScrollY < lastScrollY - 6) {
        setHeaderHidden(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <header className={`site-header ${headerHidden ? 'is-hidden' : ''} ${mobileOpen ? 'is-menu-open' : ''}`}>
      <div className="site-header__bar">
        <a href="#top" className="site-header__logo" aria-label="Home">
          <HypedLogo className="logo-svg" />
        </a>

        <nav className="site-header__desktop-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-pill__link">
              <span className="nav-pill__bg" aria-hidden="true">
                <span style={{ '--index': 0 }} className="nav-pill__bg-inner is-first" />
                <span style={{ '--index': 1 }} className="nav-pill__bg-inner is-second" />
              </span>
              <span data-text={link.label} className="nav-pill__inner">
                <span className="nav-pill__text">{link.label}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ActionButton label="Get Results" icon="spark" className="header-results-btn" />
        </div>

        <button
          type="button"
          className={`menu-toggle ${mobileOpen ? 'is-open' : ''}`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="menu-toggle__lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`mobile-menu-backdrop ${mobileOpen ? 'is-open' : ''}`}
        aria-label="Close mobile menu"
        onClick={closeMenu}
      />

      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="mobile-menu__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <ActionButton label="Get Results" icon="spark" className="mobile-menu__cta" onClick={closeMenu} />
      </div>
    </header>
  )
}

export default SiteHeader
