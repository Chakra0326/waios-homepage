'use client'

import { useRef, useEffect } from 'react'
import { Scale, LineChart, TerminalSquare, Shield, Lock, FileCheck } from 'lucide-react'
import { Reveal } from './Common'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function CoreBrain() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const el = containerRef.current
    if (!el) return

    const cards = el.querySelectorAll<HTMLElement>('[data-tenant-card]')

    const ctx = gsap.context(() => {
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
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
    <section className="relative py-24 md:py-32 hairline-b bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">GOVERNANCE, BUILT IN</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-4xl">
              It doesn't just run your infrastructure. <span className="text-dim">It governs your business.</span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
              Every environment runs under continuous compliance, cost control, and crisis communication, enforced the same way, every time, across every tenant.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div ref={containerRef} className="mt-16 w-full max-w-4xl mx-auto rounded-2xl border hairline bg-[#0A0A0C] overflow-hidden shadow-2xl relative p-6 md:p-8 float-slow">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.06)_0%,transparent_70%)] glow-breathe" />
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 relative z-10">
               <div className="flex items-center gap-2">
                 <Lock className="h-4 w-4 text-emerald-400" />
                 <span className="font-mono text-[11.5px] uppercase tracking-widest text-white/50">Master Hub Policy Engine</span>
               </div>
               <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[9px] font-medium tracking-widest uppercase text-emerald-400">
                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" /> Global Enforce
               </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
               {['Tenant-A (FinTech)', 'Tenant-B (Healthcare)', 'Tenant-C (Retail)'].map((tenant, i) => (
                 <div key={i} data-tenant-card className="rounded-xl border hairline bg-black/40 p-4 card-hover">
                   <div className="text-[12px] font-medium text-white mb-3">{tenant}</div>
                   <div className="space-y-2">
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><Shield className="h-3 w-3 text-emerald-400"/> ISO 27001</span>
                       <span className="text-emerald-400">Compliant</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><Scale className="h-3 w-3 text-emerald-400"/> ISO 22301</span>
                       <span className="text-emerald-400">Compliant</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><LineChart className="h-3 w-3 text-emerald-400"/> ISO 20000-1</span>
                       <span className="text-emerald-400">Compliant</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><FileCheck className="h-3 w-3 text-emerald-400"/> AES-256 Auth</span>
                       <span className="text-emerald-400">Locked</span>
                     </div>
                   </div>
                 </div>
               ))}
               <div data-tenant-card className="rounded-xl border hairline border-dashed bg-white/[0.02] p-4 flex flex-col items-center justify-center text-center card-hover">
                 <TerminalSquare className="h-5 w-5 text-white/20 mb-2" />
                 <div className="text-[11.5px] font-medium text-white/40">Zero-Trust Architecture</div>
                 <div className="text-[10px] text-white/20 mt-1">No exceptions allowed.</div>
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
