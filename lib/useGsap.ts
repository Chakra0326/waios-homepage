'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function registerGSAP() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
}

/**
 * Animate stat counters from 0 to final value on scroll.
 */
export function useStatCounter(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    registerGSAP()
    const el = containerRef.current
    if (!el) return

    const statEls = el.querySelectorAll<HTMLElement>('[data-stat-value]')
    if (!statEls.length) return

    const ctx = gsap.context(() => {
      statEls.forEach((statEl, i) => {
        const raw = statEl.getAttribute('data-stat-value') || '0'
        const prefix = statEl.getAttribute('data-stat-prefix') || ''
        const suffix = statEl.getAttribute('data-stat-suffix') || ''
        const target = parseFloat(raw)
        const isFloat = raw.includes('.')
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 1.4,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            const formatted = isFloat
              ? obj.val.toFixed(2)
              : Math.round(obj.val).toLocaleString()
            statEl.textContent = prefix + formatted + suffix
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [containerRef])
}

/**
 * Draw SVG lines from outer icons toward center using strokeDashoffset.
 */
export function useStrokeDraw(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    registerGSAP()
    const el = containerRef.current
    if (!el) return

    const lines = el.querySelectorAll<SVGLineElement>('[data-draw-line]')
    const icons = el.querySelectorAll<HTMLElement>('[data-draw-icon]')
    if (!lines.length) return

    const ctx = gsap.context(() => {
      // Set initial states
      lines.forEach((line) => {
        const dx = (line.x2?.baseVal?.value || 200) - (line.x1?.baseVal?.value || 0)
        const dy = (line.y2?.baseVal?.value || 110) - (line.y1?.baseVal?.value || 0)
        const length = Math.sqrt(dx * dx + dy * dy)
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
      })

      // Fade + scale icons
      gsap.fromTo(
        icons,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Draw connecting lines
      lines.forEach((line, i) => {
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 0.9,
          delay: 0.2 + i * 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [containerRef])
}

/**
 * Draw orbit path then fade in phase icons in sequence.
 */
export function useOrbitReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    registerGSAP()
    const el = containerRef.current
    if (!el) return

    const orbitPath = el.querySelector<SVGCircleElement>('[data-orbit-path]')
    const phaseIcons = el.querySelectorAll<HTMLElement>('[data-phase-icon]')

    const ctx = gsap.context(() => {
      if (orbitPath) {
        const circumference = 2 * Math.PI * 130
        gsap.set(orbitPath, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        })
        gsap.to(orbitPath, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      }

      if (phaseIcons.length) {
        gsap.fromTo(
          phaseIcons,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [containerRef])
}

/**
 * Stagger pricing cards with special emphasis on the highlighted one.
 */
export function usePricingReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    registerGSAP()
    const el = containerRef.current
    if (!el) return

    const cards = el.querySelectorAll<HTMLElement>('[data-pricing-card]')
    if (!cards.length) return

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const isHighlight = card.getAttribute('data-pricing-highlight') === 'true'
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
            scale: isHighlight ? 0.93 : 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: isHighlight ? 0.25 : i * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    }, el)

    return () => ctx.revert()
  }, [containerRef])
}

/**
 * Animate event stream log lines sequentially and then fade in side panels.
 */
export function useEventStreamReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    registerGSAP()
    const el = containerRef.current
    if (!el) return

    const lines = el.querySelectorAll<HTMLElement>('[data-log-line]')
    const panels = el.querySelectorAll<HTMLElement>('[data-side-panel]')

    const ctx = gsap.context(() => {
      if (lines.length) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }

      if (panels.length) {
        gsap.fromTo(
          panels,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 75%',
              once: true,
            },
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [containerRef])
}

/**
 * Card Stacking effect on scroll.
 * Applies a sticky stack animation to elements matching selector.
 */
export function useScrollStack(containerRef: React.RefObject<HTMLElement | null>, selector = '[data-scroll-stack]') {
  useEffect(() => {
    registerGSAP()
    const el = containerRef.current
    if (!el) return

    const cards = el.querySelectorAll<HTMLElement>(selector)
    if (!cards.length) return

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.6,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          })
        }
      })
    }, el)

    return () => ctx.revert()
  }, [containerRef, selector])
}
