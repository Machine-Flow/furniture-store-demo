import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ───── Social icons as inline SVGs ───── */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

/* ═══════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false)

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
          <button className="menu-trigger" aria-label="Open menu">
            <span className="hamburger">
              <span /><span /><span />
            </span>
            MENU
          </button>

          <a href="/" className="header-logo">
            <svg viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" fontFamily="serif" fontSize="26" fontWeight="700" fill="#ffffff" letterSpacing="3">MOBILITOP</text>
            </svg>
          </a>
        </div>

        {/* Right */}
        <div className="header-right">
          <a href="/login" className="header-icon">
            <UserIcon />
            <span>Login</span>
          </a>
          <a href="/checkout" className="header-icon">
            <CartIcon />
            <span>Cart</span>
            <span className="cart-badge">0</span>
          </a>
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

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero">
      {/* Background image with green gradient overlay */}
      <div className="hero-bg">
        <img
          className="hero-bg-video"
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt=""
          loading="eager"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-gradient" />

      <div className="hero-content">
        <p className="hero-subtitle">Premium Home Furniture</p>
        <h1 className="hero-title">
          Design Your <em>Dream Space</em>
        </h1>
        <p className="hero-tagline">One home, a million stories</p>
        <div className="hero-actions">
          <button className="btn btn-primary">
            Explore Collection
          </button>
          <button className="btn btn-outline">
            Watch The Video
          </button>
        </div>
      </div>

      <a href="#showcase-start" className="scroll-indicator">
        <span className="mouse" />
        Scroll Down
      </a>
    </section>
  )
}

/* ═══════════════════════════════════════════
   SHOWCASE (kitchen / dining)
   ═══════════════════════════════════════════ */
function Showcase({ image, label, overline, title, description, cta, reverse, id }) {
  return (
    <div className={`showcase${reverse ? ' reverse' : ''}`} id={id}>
      <div className="showcase-image">
        <img src={image} alt={title} loading="lazy" />
        <span className="showcase-label">{label}</span>
      </div>
      <div className="showcase-text">
        <span className="overline">{overline}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn btn-primary">{cta}</button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   INTERIOR COLLAGE
   ═══════════════════════════════════════════ */
const collageItems = [
  { img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80', label: 'Lighting', accent: false },
  { img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80', label: 'Accessories', accent: false },
  { img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80', label: 'Artworks', accent: true },
  { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', label: 'Fabric Sofas', accent: false },
  { img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&q=80', label: 'Coffee Tables', accent: false },
]

function InteriorCollage() {
  return (
    <section className="collage-section">
      <span className="overline">Curated Selection</span>
      <h2>Interior Design</h2>
      <p>From lighting to sofas — every piece tells a story in your home.</p>

      <div className="collage-grid">
        {collageItems.map((item, i) => (
          <div
            key={i}
            className={`collage-item${item.accent ? ' item-accent' : ''}`}
          >
            <img src={item.img} alt={item.label} loading="lazy" />
            <div className="item-label">{item.label}</div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary">Shop Now</button>
    </section>
  )
}

/* ═══════════════════════════════════════════
   BRAND STATEMENT
   ═══════════════════════════════════════════ */
function BrandStatement() {
  return (
    <section className="brand-section">
      <div className="brand-inner">
        <span className="brand-icon">✦</span>
        <h2>One home, a million stories</h2>
        <p className="tagline-large">
          Crafted for <em>Life</em>, Designed for <em>You</em>
        </p>
        <p>
          Add life to your home. Discover our wide range of modern furniture,
          curated for every style and built to last. Comfort and durability
          are our most important assets — because your home deserves the best.
        </p>
        <button className="btn btn-outline">Our Story</button>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
const categories = [
  {
    group: 'Living Rooms',
    items: ['Armchairs', 'Coffee Tables', 'Fabric Sofas', 'Leather Sofas', 'Recliners', 'Sofa Beds'],
  },
  {
    group: 'Bedrooms',
    items: ['Master Beds', 'Single & Bunk Beds', 'Shoe Cabinets', 'Storages'],
  },
  {
    group: 'Dining Rooms',
    items: ['Dining Tables', 'Dining Chairs', 'Dining Sets', 'Bar Tables'],
  },
  {
    group: 'Kitchens',
    items: ['Modern Kitchens', 'Classic Kitchens'],
  },
  {
    group: 'Accessories',
    items: ['Lighting', 'Artworks', 'Carpets', 'Decorative', 'Tableware'],
  },
  {
    group: 'Outdoors',
    items: ['Outdoor Living', 'Sun Loungers', 'Umbrellas', 'Outdoor Dining'],
  },
]

const quickLinks = ['About Us', 'Get In Touch', 'Careers', 'Customer Care', 'Terms of Use', 'Privacy Policy', 'Return Policy']

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <svg viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" fontFamily="serif" fontSize="26" fontWeight="700" fill="#ffffff" letterSpacing="3">MOBILITOP</text>
            </svg>
          </a>
          <p>Lebanese furniture crafted with passion. Since we aim to deliver you the best, comfort and durability are our most important assets.</p>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://instagram.com" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>

        {/* Categories */}
        <div className="footer-categories">
          {categories.map((cat) => (
            <div className="footer-cat-group" key={cat.group}>
              <h5>{cat.group}</h5>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}><a href="/products">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}><a href="/">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li><a href="/login">Log In</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/checkout">Cart</a></li>
          </ul>
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Follow Us</h4>
            <div className="footer-social" style={{ marginTop: '0.75rem' }}>
              <a href="https://facebook.com" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://instagram.com" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar">
        <div className="bottom-links">
          <a href="/ourstory">Our Story</a>
          <span className="divider">|</span>
          <a href="/contact">Get In Touch</a>
          <span className="divider">|</span>
          <a href="/careers">Careers</a>
          <span className="divider">|</span>
          <a href="/customercare">Customer Care</a>
          <span className="divider">|</span>
          <a href="/terms">Terms of Use</a>
          <span className="divider">|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="bottom-copy">
          &copy; 2026 <a href="/">Mobilitop</a> &mdash; All Rights Reserved. &nbsp;|&nbsp; Website by <a href="https://nascode.com" target="_blank" rel="noopener noreferrer">Nascode</a>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <Hero />

      {/* Kitchen Showcase */}
      <div id="showcase-start">
        <Showcase
          image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
          label="STRATOS — Modern Kitchen"
          overline="Discover Our"
          title="Kitchens"
          description="Check the latest modern, contemporary, and classical kitchens, all produced with innovative materials and finishes, and designed to meet all styles."
          cta="Explore Kitchens"
        />
      </div>

      <div className="section-divider" />

      {/* Dining Showcase */}
      <Showcase
        image="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
        label="FUSION — Modern Dining"
        overline="Discover Our"
        title="Dining Rooms"
        description="Discover the widest choice of modern and contemporary style Dining Rooms that fit every home, from intimate dinners to grand entertaining."
        cta="Shop Now"
        reverse
      />

      <div className="section-divider" />

      <InteriorCollage />

      <BrandStatement />

      <Footer />
    </>
  )
}

export default App
