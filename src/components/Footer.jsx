import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './Icons'

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

const quickLinks = [
  { label: 'About Us', to: '/ourstory' },
  { label: 'Get In Touch', to: '/contact' },
  { label: 'Careers', to: '/careers' },
  { label: 'Customer Care', to: '/customercare' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Return Policy', to: '/customercare' },
]

const bottomLinks = [
  { label: 'Our Story', to: '/ourstory' },
  { label: 'Get In Touch', to: '/contact' },
  { label: 'Careers', to: '/careers' },
  { label: 'Customer Care', to: '/customercare' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <svg viewBox="0 0 350 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" fontFamily="serif" fontSize="26" fontWeight="700" fill="#ffffff" letterSpacing="3">FURNITURE STORE</text>
            </svg>
          </Link>
          <p>Lebanese furniture crafted with passion. Since we aim to deliver you the best, comfort and durability are our most important assets.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>

        {/* Categories */}
        <div className="footer-categories">
          {categories.map((cat) => (
            <div className="footer-cat-group" key={cat.group}>
              <h5><Link to={`/products?category=${encodeURIComponent(cat.group)}`}>{cat.group}</Link></h5>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}><Link to={`/products?category=${encodeURIComponent(cat.group)}`}>{item}</Link></li>
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
              <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/checkout">Cart</Link></li>
          </ul>
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Follow Us</h4>
            <div className="footer-social" style={{ marginTop: '0.75rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar">
        <div className="bottom-links">
          {bottomLinks.map((link, i) => (
            <span key={link.to}>
              {i > 0 && <span className="divider">|</span>}
              <Link to={link.to}>{link.label}</Link>
            </span>
          ))}
        </div>
        <div className="bottom-copy">
          &copy; 2026 <Link to="/">Furniture Store</Link> &mdash; All Rights Reserved. &nbsp;|&nbsp; Website by <a href="https://nascode.com" target="_blank" rel="noopener noreferrer">Nascode</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
