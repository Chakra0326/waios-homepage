'use client'

import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'
import {
  ChevronRight, } from 'lucide-react'
import { Reveal, LOOP, EASE } from "./Common"

export function LoopRing({ active }: { active: number }) {
  const R = 130
  return (
    <div className="relative mx-auto h-[360px] w-[360px] md:h-[420px] md:w-[420px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <circle cx="200" cy="200" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="200" cy="200" r={R + 22} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 5" />
        <motion.circle cx="200" cy="200" r={R} fill="none" stroke="#FF6B1A" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray={2 * Math.PI * R}
          strokeDashoffset={2 * Math.PI * R * (1 - (active + 1) / 6)}
          transform="rotate(-90 200 200)"
          transition={{ duration: 0.6, ease: EASE }} />
      </svg>
      {LOOP.map((p, i) => {
        const angle = (i / LOOP.length) * Math.PI * 2 - Math.PI / 2
        const x = Math.cos(angle) * R
        const y = Math.sin(angle) * R
        const isActive = i === active
        const Icon = p.icon
        return (
          <div key={p.key} className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
            <motion.div animate={{ scale: isActive ? 1.06 : 1 }} transition={{ duration: 0.4, ease: EASE }} className="flex flex-col items-center gap-2">
              <div className={`h-12 w-12 rounded-full grid place-items-center border transition-colors duration-500 ${
                isActive ? 'bg-white text-black border-white' : 'bg-black text-white/70 hairline'
              }`}><Icon className="h-5 w-5" /></div>
              <div className={`text-[11px] tracking-widest uppercase transition-colors ${isActive ? 'text-white' : 'text-white/50'}`}>
                {p.label}
              </div>
            </motion.div>
          </div>
        )
      })}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="text-center">
          <div className="text-[10px] tracking-[0.24em] uppercase text-dimmer">Phase</div>
          <div className="mt-1 text-[36px] font-mono text-white">0{active + 1}</div>
          <div className="text-[11px] tracking-widest uppercase text-white/70 mt-1">{LOOP[active].label}</div>
        </div>
      </div>
    </div>
  )
}

export function Loop() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % LOOP.length), 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="platform" className="relative py-24 md:py-32 hairline-b noise">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">How it works</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            One event. <span className="text-dim">One accountable chain.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            Every operation moves through the same six phases. The same ones an experienced operator
            would follow, run with the discipline of a system.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal><LoopRing active={active} /></Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="space-y-2">
                {LOOP.map((p, i) => {
                  const isActive = i === active
                  const Icon = p.icon
                  return (
                    <button key={p.key} onClick={() => setActive(i)}
                      className={`w-full text-left rounded-xl border transition-all duration-500 p-4 flex items-start gap-4 ${
                        isActive ? 'border-white/25 bg-white/[0.03]' : 'hairline hover:border-white/15'
                      }`}>
                      <div className={`h-9 w-9 shrink-0 rounded-lg grid place-items-center border transition-colors ${
                        isActive ? 'bg-white text-black border-white' : 'bg-black text-white/70 hairline'
                      }`}><Icon className="h-4 w-4" /></div>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-3">
                          <span className="text-[15px] font-medium text-white">{p.label}</span>
                          <span className="text-[11px] font-mono text-dimmer">0{i + 1}</span>
                        </div>
                        <div className="text-[13.5px] text-dim mt-0.5">{p.caption}</div>
                      </div>
                      <ChevronRight className={`ml-auto h-4 w-4 mt-1 transition-colors ${isActive ? 'text-white' : 'text-white/30'}`} />
                    </button>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

