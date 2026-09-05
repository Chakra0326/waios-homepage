'use client'

import { motion, animate } from 'framer-motion'
import {
  ArrowRight, Lock, } from 'lucide-react'
import { Reveal } from "./Common"

export function Control() {
  return (
    <section id="trust" className="relative py-24 md:py-32 hairline-b overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Why you can trust it</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance">
              Autonomous, <span className="text-dim">not unaccountable.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-xl">
              Every decision follows policy. Sensitive actions require authorized human approval. Every operational step is recorded.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 space-y-3 max-w-lg">
              {[
                { k: 'Human in the loop where it matters', v: 'Critical production actions remain behind defined authorization boundaries.' },
                { k: 'Encrypted, auditable record', v: 'Detection, risk, approval, remediation, and outcome evidence are recorded in the Forensic BlackBox.' },
                { k: 'Controlled, revocable access', v: 'Scoped cloud-native permissions are used rather than permanent root credentials.' },
              ].map((r) => (
                <div key={r.k} className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF6B1A] shrink-0" />
                  <div>
                    <div className="text-[15px] text-white">{r.k}</div>
                    <div className="text-[13.5px] text-dim">{r.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <a href="#trust-deep" className="mt-10 inline-flex items-center gap-1.5 text-[14px] text-white hover:opacity-80 transition">
              Explore the trust architecture <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid sm:grid-cols-3 gap-2 max-w-xl">
              <div className="rounded-xl border hairline p-3"><div className="text-[10px] uppercase tracking-widest text-emerald-400">Low risk</div><div className="mt-2 text-[12px] text-white/65">Policy-approved autonomous execution</div></div>
              <div className="rounded-xl border hairline p-3"><div className="text-[10px] uppercase tracking-widest text-amber-400">Medium risk</div><div className="mt-2 text-[12px] text-white/65">Policy-based execution or human review</div></div>
              <div className="rounded-xl border border-[#FF6B1A]/25 p-3"><div className="text-[10px] uppercase tracking-widest text-[#FF6B1A]">High / critical</div><div className="mt-2 text-[12px] text-white/65">Mandatory authorized human approval</div></div>
            </div>
          </Reveal>
        </div>

        {/* subtle animated visual: lock + orbit */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative mx-auto h-[360px] w-[360px] md:h-[420px] md:w-[420px]">
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 6" />
                <motion.circle cx="200" cy="200" r="110" fill="none" stroke="#FF6B1A" strokeWidth="1.2" strokeLinecap="round"
                  strokeDasharray="20 690" transform="rotate(-90 200 200)"
                  animate={{ rotate: [ -90, 270 ] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />
              </svg>
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
                const x = Math.cos(angle) * 150
                const y = Math.sin(angle) * 150
                return (
                  <motion.div key={i} className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-white/50"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }} />
                )
              })}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-24 w-24 rounded-2xl bg-white text-black grid place-items-center shadow-2xl">
                  <Lock className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] tracking-widest uppercase text-white/50">
                policy · authority · evidence
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
