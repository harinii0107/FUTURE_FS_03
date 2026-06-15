import { useEffect, useRef } from 'react'

/**
 * Custom hook to trigger CSS animations when elements scroll into view.
 * Adds 'visible' class to elements with 'fade-in-up' or 'fade-in' classes.
 */
export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const animatedEls = document.querySelectorAll('.fade-in-up, .fade-in')
    animatedEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/**
 * Hook to animate elements staggered by index.
 * @param {number} delay - delay multiplier in ms (default 100)
 */
export function useStaggerAnimation(delay = 100) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll('.stagger-item')
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * delay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.stagger-item')
            items.forEach((item) => item.classList.add('visible'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (container) observer.observe(container)
    return () => observer.disconnect()
  }, [delay])

  return containerRef
}
