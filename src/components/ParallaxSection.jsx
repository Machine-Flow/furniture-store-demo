import { useEffect, useRef, useState } from 'react'

/* ═══════════════════════════════════════════
   PARALLAX PAIR — couch & chair slide together
   The CHAIR sits on the LEFT, far from the couch,
   and slides RIGHT toward the couch (on the right)
   as the section scrolls up through the viewport.

   Driven by a continuous requestAnimationFrame loop
   that reads the live scroll position every frame —
   no scroll-event or IntersectionObserver dependency,
   so it works in every browser and preview context.
   ═══════════════════════════════════════════ */
export default function ParallaxSection() {
  const stageRef = useRef(null)
  const couchRef = useRef(null)
  const chairRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stage = stageRef.current
    const couch = couchRef.current
    const chair = chairRef.current
    if (!stage || !couch || !chair) return

    let travel = 0
    let raf = 0

    // How far right the chair must slide to sit flush beside the couch.
    const measure = () => {
      // Clear any applied transform first so we read the true CSS-anchored
      // positions (avoids a mid-scroll resize skewing the travel distance).
      couch.style.transform = ''
      chair.style.transform = ''
      const cr = couch.getBoundingClientRect() // couch anchored RIGHT
      const hr = chair.getBoundingClientRect() // chair anchored LEFT
      travel = Math.max(0, cr.left - hr.right)
      setReady(true)
    }

    const apply = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight || 800
      const sr = stage.getBoundingClientRect()
      if (sr.height <= 0) return
      // progress 0 → section enters from the bottom, 1 → it leaves the top
      let progress = (vh - sr.top) / (sr.height + vh)
      // Start shortly after it appears; glide for as long as it is on screen.
      progress = Math.min(1, Math.max(0, (progress - 0.2) ))
      const eased = 1 - Math.pow(1 - progress, 2)
      // POSITIVE translateX → the chair slides RIGHT toward the couch.
      chair.style.transform = `translateX(${(travel * eased).toFixed(2)}px)`
      // The couch drifts the opposite way (left) a touch for depth.
      couch.style.transform = `translateX(${(-travel * eased * 0.1).toFixed(1)}px)`
    }

    const tick = () => {
      apply()
      raf = requestAnimationFrame(tick)
    }

    // Re-measure once the images are available in case layout shifts.
    const measureWhenReady = () => {
      if (couch.complete && couch.naturalWidth > 0 && chair.complete && chair.naturalWidth > 0) {
        measure()
      }
    }
    couch.addEventListener('load', measureWhenReady)
    chair.addEventListener('load', measureWhenReady)
    measureWhenReady()

    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    apply()
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      couch.removeEventListener('load', measureWhenReady)
      chair.removeEventListener('load', measureWhenReady)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="parallax-section">
      {/* <span className="overline">The Perfect Pair</span>
      <h2>Scroll to Bring Them Together</h2>
      <p className="parallax-intro">
        A quiet moment between the couch and its favourite chair — watch them meet.
      </p> */}

      <div className={`parallax-stage${ready ? ' ready' : ''}`} ref={stageRef}>
        <img src="/chair.png" alt="Chair" className="parallax-chair" ref={chairRef} />
        <img src="/couch.png" alt="Couch" className="parallax-couch" ref={couchRef} />
      </div>
    </section>
  )
}
