import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoIcon}>🍞</span>
          <span className={styles.logoText}>
            <span className={styles.logoBrand}>Sweet Hearth</span>
            <span className={styles.logoSub}>Bakery</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/menu" className={`btn btn-primary ${styles.ctaBtn}`}>
          Order Now
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/menu"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
