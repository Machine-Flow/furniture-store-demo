import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './cart-context'

const STORAGE_KEY = 'furniture-store-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  // Persist whenever the cart changes (idempotent under StrictMode).
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable — cart stays in memory */
    }
  }, [items])

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug)
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug ? { ...i, qty: Math.min(99, i.qty + qty) } : i
        )
      }
      return [
        ...prev,
        { slug: product.slug, name: product.name, price: product.price, image: product.image, qty },
      ]
    })
  }

  const updateQty = (slug, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(99, qty) } : i))
    )
  }

  const removeItem = (slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    return { items, count, subtotal, addItem, updateQty, removeItem, clearCart }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
