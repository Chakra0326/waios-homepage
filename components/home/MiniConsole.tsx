'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'
import {
  Check, FileCheck2,
  } from 'lucide-react'
import { LiveDot, EASE } from "./Common"

export function MiniConsole() {
  const steps = ['DISCOVER','UNDERSTAND','DECIDE','APPROVE','ACT','LEARN']
  const [phase, setPhase] = useState(0)
  const [approved, setApproved] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setPhase((p) => (p + 1) % steps.length)
      setApproved((a) => (Math.random() > 0.5 ? true : a))
    }, 1500)
    return () => clearInterval(t)
  }, [])

  const spark = useMemo(() => {
    const pts = []; let v = 0.62
    for (let i = 0; i < 32; i++) { v = Math.max(0.05, Math.min(0.95, v + (Math.random() - 0.5) * 0.22)); pts.push(v) }
    return pts
  }, [])

  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent blur-2xl" />
      <div className="relative rounded-2xl border hairline bg-[#0A0A0C] overflow-hidden">
        <div className="flex items-center justify-between px-6 h-14 hairline-b">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-white/15" />
            <div className="h-3 w-3 rounded-full bg-white/15" />
            <div className="h-3 w-3 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[14px] text-white/50">waios.console · live</span>
          </div>
          <span className="inline-flex items-center gap-2 text-[13px] text-white/60"><LiveDot /> operating</span>
        </div>

        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-3 hairline-r p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[13px] tracking-[0.18em] uppercase text-white/40">Active event</div>
              <span className="text-[13px] font-mono text-white/45">EVT‑88214</span>
            </div>
            <div className="text-[20px] text-white font-medium">Compliance drift detected</div>
            <div className="mt-1.5 text-[15px] text-white/55">Production, cloud storage layer</div>

            <div className="mt-6 rounded-xl border hairline p-5 bg-black/40">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[12px] uppercase tracking-widest text-white/40">Risk</div>
                  <div className="text-[32px] font-mono text-white mt-1">82<span className="text-white/45 text-[18px]">/100</span></div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] uppercase tracking-widest text-white/40">Class</div>
                  <div className="text-[15px] font-mono text-red-600 mt-1">CRITICAL</div>
                </div>
              </div>
              <svg viewBox="0 0 120 32" className="mt-4 w-full h-14" preserveAspectRatio="none">
                <polyline fill="none" stroke="#FF6B1A" strokeWidth="1.5"
                  points={spark.map((v, i) => `${(i / (spark.length - 1)) * 120},${(1 - v) * 32}`).join(' ')} />
                <polyline fill="url(#g1)" stroke="none"
                  points={[`0,32`, ...spark.map((v, i) => `${(i / (spark.length - 1)) * 120},${(1 - v) * 32}`), `120,32`].join(' ')}
                  opacity="0.35" />
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="mt-6 flex items-center gap-1.5">
              {steps.map((_, i) => (
                <div key={i} className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                  i < phase ? 'bg-white/70' : i === phase ? 'bg-[#FF6B1A]' : 'bg-white/8'
                }`} />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[12px] text-white/45 font-mono">
              <span>DISCOVER</span><span>LEARN</span>
            </div>
          </div>

          <div className="col-span-2 p-8 space-y-5">
            <div className="rounded-xl border hairline p-5 bg-black/40">
              <div className="flex items-center justify-between">
                <div className="text-[12px] uppercase tracking-widest text-white/40">Approval</div>
                <span className={`text-[13px] font-mono ${approved ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {approved ? 'signed' : 'awaiting'}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-white/10 border hairline grid place-items-center text-[12px] text-white/80">SM</div>
                  <div className="h-8 w-8 rounded-full bg-white/10 border hairline grid place-items-center text-[12px] text-white/80">JK</div>
                </div>
                <div className="text-[14px] text-white/70">On‑call reviewer</div>
              </div>
              <AnimatePresence>
                {approved && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-3 flex items-center gap-2 text-[13px] text-emerald-400">
                    <Check className="h-4 w-4" /> approval recorded
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-xl border hairline p-5 bg-black/40">
              <div className="text-[12px] uppercase tracking-widest text-white/40">Action</div>
              <div className="mt-3 space-y-1.5 text-[14px] font-mono text-white/70">
                <div className={phase >= 4 ? 'text-emerald-400' : ''}>plan proposed</div>
                <div className={phase >= 4 ? 'text-emerald-400' : ''}>rollback ready</div>
                <div className={phase >= 5 ? 'text-emerald-400' : ''}>outcome verified</div>
              </div>
            </div>

            <div className="rounded-xl border hairline p-5 bg-black/40">
              <div className="text-[12px] uppercase tracking-widest text-white/40">Audit trail</div>
              <div className="mt-3 flex items-center gap-2.5">
                <FileCheck2 className="h-5 w-5 text-white/70" />
                <div className="text-[14px] text-white/70 font-mono">signed · immutable</div>
              </div>
              <div className="mt-1.5 text-[13px] text-white/45">every step, forever</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
        className="absolute -left-6 md:-left-10 bottom-10 rounded-full border hairline bg-black/80 backdrop-blur px-3 py-1.5 text-[11.5px] text-white/80 shadow-xl drift"
      >
        <span className="inline-flex items-center gap-1.5"><LiveDot /> handled end to end</span>
      </motion.div>
    </div>
  )
}

