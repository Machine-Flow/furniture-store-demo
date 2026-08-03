import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cart-context'
import { formatPrice } from '../data/products'

const SHIPPING_FLAT = 49
const SHIPPING_FREE_THRESHOLD = 500

function Field({ label, error, children }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

export default function Checkout() {
  const { items, count, subtotal, updateQty, removeItem, clearCart } = useCart()

  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvc: '',
  })
  const [errors, setErrors] = useState({})
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (form.name.trim().length < 2) errs.name = 'Enter the full name on the order.'
    if (form.address.trim().length < 5) errs.address = 'Enter a street address.'
    if (!form.city.trim()) errs.city = 'Required.'
    if (!/^\d{4,6}$/.test(form.zip)) errs.zip = 'Enter a valid postal code.'
    if (!/^\d{13,19}$/.test(form.card.replace(/\s/g, ''))) errs.card = 'Enter a valid card number.'
    if (!/^\d{2}\s?\/\s?\d{2}$/.test(form.expiry)) errs.expiry = 'MM / YY.'
    if (!/^\d{3,4}$/.test(form.cvc)) errs.cvc = '3–4 digits.'
    return errs
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setPlacing(true)
    // Mock order submission
    setTimeout(() => {
      setPlacing(false)
      setPlaced(true)
      clearCart()
      window.scrollTo(0, 0)
    }, 1200)
  }

  if (placed) {
    return (
      <div className="page">
        <div className="success-panel fade-in">
          <span className="success-check">✓</span>
          <span className="overline">Order confirmed</span>
          <h1>Thank you for your order!</h1>
          <p>
            A confirmation has been sent to <strong>{form.email}</strong>. Our team will be in
            touch shortly to arrange delivery of your new furniture.
          </p>
          <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  if (count === 0) {
    return (
      <div className="page">
        <div className="empty-state fade-in">
          <span className="overline">Your cart</span>
          <h1>Your cart is empty</h1>
          <p>Add a few pieces and they will appear here, ready for checkout.</p>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    )
  }

  const shipping = subtotal >= SHIPPING_FREE_THRESHOLD ? 0 : SHIPPING_FLAT
  const total = subtotal + shipping

  return (
    <div className="page">
      <header className="page-header fade-in">
        <span className="overline">Almost there</span>
        <h1>Checkout</h1>
        <p className="page-intro">{count} item{count > 1 ? 's' : ''} in your cart — shipping is free over {formatPrice(SHIPPING_FREE_THRESHOLD)}.</p>
      </header>

      <div className="checkout-layout">
        {/* Order form */}
        <form className="checkout-form" onSubmit={handlePlaceOrder} noValidate>
          <h2 className="form-section-title">Contact</h2>
          <Field label="Email address" error={errors.email}>
            <input
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set('email')}
            />
          </Field>

          <h2 className="form-section-title">Shipping</h2>
          <Field label="Full name" error={errors.name}>
            <input
              className="form-input"
              placeholder="Jane Doe"
              value={form.name}
              onChange={set('name')}
            />
          </Field>
          <Field label="Street address" error={errors.address}>
            <input
              className="form-input"
              placeholder="123 Comfort Street"
              value={form.address}
              onChange={set('address')}
            />
          </Field>
          <div className="form-row">
            <Field label="City" error={errors.city}>
              <input
                className="form-input"
                placeholder="Beirut"
                value={form.city}
                onChange={set('city')}
              />
            </Field>
            <Field label="Postal code" error={errors.zip}>
              <input
                className="form-input"
                placeholder="1100"
                value={form.zip}
                onChange={set('zip')}
              />
            </Field>
          </div>

          <h2 className="form-section-title">Payment</h2>
          <Field label="Card number" error={errors.card}>
            <input
              className="form-input"
              inputMode="numeric"
              placeholder="4242 4242 4242 4242"
              value={form.card}
              onChange={set('card')}
            />
          </Field>
          <div className="form-row">
            <Field label="Expiry" error={errors.expiry}>
              <input
                className="form-input"
                placeholder="MM / YY"
                value={form.expiry}
                onChange={set('expiry')}
              />
            </Field>
            <Field label="CVC" error={errors.cvc}>
              <input
                className="form-input"
                inputMode="numeric"
                placeholder="123"
                value={form.cvc}
                onChange={set('cvc')}
              />
            </Field>
          </div>
          <p className="form-hint">This is a demo storefront — no payment is processed and no card details are stored.</p>
        </form>

        {/* Order summary */}
        <aside className="checkout-summary">
          <h2>Order Summary</h2>
          <ul className="cart-lines">
            {items.map((item) => (
              <li className="cart-line" key={item.slug}>
                <img className="cart-line-img" src={item.image} alt={item.name} />
                <div className="cart-line-meta">
                  <span className="cart-line-name">{item.name}</span>
                  <span className="cart-line-unit">{formatPrice(item.price)} each</span>
                  <div className="cart-qty">
                    <button onClick={() => updateQty(item.slug, item.qty - 1)} aria-label="Decrease quantity">−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.slug, item.qty + 1)} aria-label="Increase quantity">+</button>
                  </div>
                </div>
                <div className="cart-line-right">
                  <span className="cart-line-total">{formatPrice(item.price * item.qty)}</span>
                  <button className="cart-line-remove" onClick={() => removeItem(item.slug)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <button
            className="btn btn-primary btn-block"
            onClick={handlePlaceOrder}
            disabled={placing}
          >
            {placing ? 'Placing Order…' : 'Place Order'}
          </button>
          <p className="form-hint">Orders are fulfilled by our Beirut showroom team.</p>
        </aside>
      </div>
    </div>
  )
}
