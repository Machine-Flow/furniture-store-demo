import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Scrolls to the top on every route change. Temporarily disables
   the CSS smooth-scroll so navigation snaps instead of animating. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    html.style.scrollBehavior = prev
  }, [pathname])

  return null
}
