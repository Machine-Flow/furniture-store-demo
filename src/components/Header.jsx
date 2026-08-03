import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserIcon, CartIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from './Icons'
import { useCart } from '../context/cart-context'

/* ═══════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════ */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        {/* Left: Menu + Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/products" className="menu-trigger" aria-label="Open menu">
            <span className="hamburger">
              <span /><span /><span />
            </span>
            MENU
          </Link>

          <Link to="/" className="header-logo">
            <svg viewBox="0 0 350 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" fontFamily="serif" fontSize="26" fontWeight="700" fill="#ffffff" letterSpacing="3">FURNITURE STORE</text>
            </svg>
          </Link>
        </div>

        {/* Right */}
        <div className="header-right">
          <Link to="/login" className="header-icon">
            <UserIcon />
            <span>Login</span>
          </Link>
          <Link to="/checkout" className="header-icon">
            <CartIcon />
            <span>Cart</span>
            <span className="cart-badge">{count}</span>
          </Link>
          <div className="header-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
          </div>
        </div>
      </div>
    </header>
  )
}
