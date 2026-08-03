import PageHeader from '../components/PageHeader'

export default function OurStory() {
  return (
    <div className="page">
      <PageHeader
        overline="About us"
        title="Our Story"
        intro="Lebanese furniture crafted with passion — where comfort and durability meet timeless design."
      />

      <div className="content-section">
        <h2>Rooted in Lebanon</h2>
        <p>
          MOBILITOP began as a family workshop with a simple conviction: that a home should be
          lived in, loved, and built to last. What started around a single workbench has grown
          into one of the region's most loved furniture houses — yet every piece still carries
          the same care that went into our very first sofa.
        </p>
        <p>
          We design and manufacture locally, working with craftspeople who treat wood, fabric
          and leather with the respect they deserve. Because we make our furniture ourselves,
          we can stand behind every stitch, joint and finish for years to come.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-stat">
          <span className="info-stat-value">20+</span>
          <span className="info-stat-label">Years of craftsmanship</span>
        </div>
        <div className="info-stat">
          <span className="info-stat-value">6</span>
          <span className="info-stat-label">Curated collections</span>
        </div>
        <div className="info-stat">
          <span className="info-stat-value">500+</span>
          <span className="info-stat-label">Homes furnished</span>
        </div>
      </div>

      <div className="content-section">
        <h2>Why comfort and durability come first</h2>
        <p>
          Trends fade; a well-made sofa does not. We use kiln-dried hardwood frames, high-density
          foams and top-grain leathers so that your investment still looks and feels as good in
          ten years as the day it arrived. Our promise is simple — comfort and durability are our
          most important assets, because your home deserves the best.
        </p>
      </div>
    </div>
  )
}
