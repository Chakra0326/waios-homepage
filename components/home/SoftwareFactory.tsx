'use client'

import { useRef, useEffect } from 'react'
import { Server, TerminalSquare, Shield, Activity } from 'lucide-react'
import { Reveal } from './Common'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function SoftwareFactory() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const el = containerRef.current
    if (!el) return

    const cols = el.querySelectorAll<HTMLElement>('[data-pipeline-col]')

    const ctx = gsap.context(() => {
      if (cols.length) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              once: true,
            },
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">SELF-HEALING BY DESIGN</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-4xl">
              Built, secured, and shipped. <span className="text-dim">Automatically.</span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
              From first design to production release, your infrastructure builds itself, checks itself, and heals itself, turning weeks of manual work into minutes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div ref={containerRef} className="mt-16 w-full max-w-5xl mx-auto rounded-2xl border hairline bg-[#0A0A0C] overflow-hidden shadow-2xl relative float-slow">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.08)_0%,transparent_70%)] glow-breathe" />
            <div className="flex items-center justify-between px-5 h-12 hairline-b relative z-10">
               <div className="flex items-center gap-3">
                 <TerminalSquare className="h-4 w-4 text-white/50" />
                 <span className="font-mono text-[12px] text-white/50">waios.factory · pipeline</span>
               </div>
               <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-white/10"/><div className="w-2.5 h-2.5 rounded-full bg-white/10"/><div className="w-2.5 h-2.5 rounded-full bg-white/10"/></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 relative z-10">
               <div data-pipeline-col className="p-8 card-hover">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 grid place-items-center"><Server className="h-4 w-4 text-emerald-400" /></div>
                   <div className="text-[13px] font-medium text-white">1. Design & Build</div>
                 </div>
                 <div className="space-y-3 font-mono text-[11px] text-white/50">
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Topology mapped</div>
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> IaC generated</div>
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Baseline deployed</div>
                 </div>
               </div>
               
               <div data-pipeline-col className="p-8 card-hover">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 grid place-items-center"><Shield className="h-4 w-4 text-emerald-400" /></div>
                   <div className="text-[13px] font-medium text-white">2. Secure & Audit</div>
                 </div>
                 <div className="space-y-3 font-mono text-[11px] text-white/50">
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Zero-trust verified</div>
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Compliance passed</div>
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Immutable state logged</div>
                 </div>
               </div>

               <div data-pipeline-col className="p-8 card-hover">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 grid place-items-center"><Activity className="h-4 w-4 text-emerald-400" /></div>
                   <div className="text-[13px] font-medium text-white">3. Ship & Heal</div>
                 </div>
                 <div className="space-y-3 font-mono text-[11px] text-white/50">
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> PR merged</div>
                   <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Production live</div>
                   <div className="flex items-center gap-2 text-white/80"><span className="caret text-emerald-400"></span> Monitoring drift...</div>
                 </div>
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
