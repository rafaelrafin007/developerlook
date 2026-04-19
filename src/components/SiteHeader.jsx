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
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

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

  const closeMenu = () => setMobileOpen(false)

  return (
    <header className={`site-header ${headerHidden ? 'is-hidden' : ''}`}>
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
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="menu-toggle__text">{mobileOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-toggle__lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
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