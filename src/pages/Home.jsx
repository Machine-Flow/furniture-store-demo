import { Link } from 'react-router-dom'

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
          <Link to="/products" className="btn btn-primary">
            Explore Collection
          </Link>
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
function Showcase({ image, label, overline, title, description, cta, ctaTo, reverse, id }) {
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
        <Link to={ctaTo} className="btn btn-primary">{cta}</Link>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   INTERIOR COLLAGE
   ═══════════════════════════════════════════ */
const collageItems = [
  { img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80', label: 'Lighting', accent: false, to: '/products?category=Accessories' },
  { img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80', label: 'Accessories', accent: false, to: '/products?category=Accessories' },
  { img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80', label: 'Artworks', accent: true, to: '/products?category=Accessories' },
  { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', label: 'Fabric Sofas', accent: false, to: '/products?category=Living%20Rooms' },
  { img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&q=80', label: 'Coffee Tables', accent: false, to: '/products?category=Living%20Rooms' },
]

function InteriorCollage() {
  return (
    <section className="collage-section">
      <span className="overline">Curated Selection</span>
      <h2>Interior Design</h2>
      <p>From lighting to sofas — every piece tells a story in your home.</p>

      <div className="collage-grid">
        {collageItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className={`collage-item${item.accent ? ' item-accent' : ''}`}
          >
            <img src={item.img} alt={item.label} loading="lazy" />
            <div className="item-label">{item.label}</div>
          </Link>
        ))}
      </div>

      <Link to="/products" className="btn btn-primary">Shop Now</Link>
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
        <Link to="/ourstory" className="btn btn-outline">Our Story</Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
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
          ctaTo="/products?category=Kitchens"
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
        ctaTo="/products?category=Dining%20Rooms"
        reverse
      />

      <div className="section-divider" />

      <InteriorCollage />

      <BrandStatement />
    </>
  )
}
