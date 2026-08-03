import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, getProductsByCategory } from '../data/products'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('category') || 'All'

  const filtered = getProductsByCategory(active)

  const selectCategory = (cat) => {
    if (cat === 'All') setSearchParams({})
    else setSearchParams({ category: cat })
  }

  return (
    <div className="page">
      <PageHeader
        overline="Our Collection"
        title="Products"
        intro="Every piece in the Furniture Store range — curated for every style and built to last."
      />

      <div className="filter-chips">
        {['All', ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            className={`chip${cat === active ? ' active' : ''}`}
            onClick={() => selectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="overline">Nothing here yet</span>
          <h2>No pieces in this category</h2>
          <p>Try another category — our newest arrivals are added every month.</p>
          <button className="btn btn-primary" onClick={() => selectCategory('All')}>
            View All Products
          </button>
        </div>
      )}
    </div>
  )
}
