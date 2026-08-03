import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Re-runs the IntersectionObserver on every route change so freshly
   mounted `.fade-in` elements reveal as they scroll into view. */
export default function ScrollReveal() {
  // location.key changes on every navigation — including search-only
  // changes (e.g. category filter chips), so freshly mounted .fade-in
  // nodes always get observed.
  const { key } = useLocation()

  useEffect(() => {
    let raf = 0
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

    // Wait a frame so the newly mounted page's DOM is present.
    raf = requestAnimationFrame(() => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [key])

  return null
}
