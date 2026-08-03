import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/cart-context'
import { getProductBySlug, getRelatedProducts, formatPrice } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="page">
        <div className="empty-state">
          <span className="overline">Product not found</span>
          <h2>This piece has moved</h2>
          <p>It may have sold out or been retired from the collection.</p>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product)

  const handleAdd = () => {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </nav>

      <div className="product-detail">
        {/* Gallery */}
        <div className="detail-gallery fade-in">
          <div className="detail-main-image">
            <img src={product.gallery[activeImage]} alt={product.name} />
            {product.badge && <span className="product-card-badge">{product.badge}</span>}
          </div>
          {product.gallery.length > 1 && (
            <div className="detail-thumbs">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  className={`detail-thumb${i === activeImage ? ' active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="detail-info fade-in">
          <span className="overline">{product.category} — {product.subcategory}</span>
          <h1>{product.name}</h1>
          <div className="detail-meta">
            <span className="detail-rating">★ {product.rating.toFixed(1)}</span>
            <span className="detail-price">{formatPrice(product.price)}</span>
          </div>
          <p className="detail-description">{product.description}</p>

          <div className="detail-actions">
            <div className="qty-selector">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => Math.min(99, q + 1))} aria-label="Increase quantity">+</button>
            </div>
            <button className="btn btn-primary" onClick={handleAdd}>
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>

          <Link to="/products" className="btn btn-outline btn-outline-dark">Back to Products</Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="related-section">
          <span className="overline">You may also like</span>
          <h2>Complete the Look</h2>
          <div className="products-grid related-grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
