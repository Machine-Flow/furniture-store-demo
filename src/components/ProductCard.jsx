import { Link } from 'react-router-dom'
import { useCart } from '../context/cart-context'
import { formatPrice } from '../data/products'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="product-card fade-in">
      <Link to={`/product/${product.slug}`} className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-card-badge">{product.badge}</span>}
      </Link>
      <div className="product-card-body">
        <span className="product-card-cat">{product.subcategory || product.category}</span>
        <Link to={`/product/${product.slug}`} className="product-card-name">
          {product.name}
        </Link>
        <div className="product-card-row">
          <span className="product-card-price">{formatPrice(product.price)}</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
