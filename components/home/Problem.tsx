'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Check, Circle,
  Bell, MessagesSquare, Ticket, GitPullRequest, ClipboardList, FileSearch, Workflow,
  KeyRound, } from 'lucide-react'
import { Reveal, EASE } from "./Common"
import { useStrokeDraw } from '@/lib/useGsap'

export function Problem() {
  const hubRef = useRef<HTMLDivElement>(null)
  const scattered = [
    { icon: Bell,           label: 'Alerts' },
    { icon: Ticket,         label: 'Tickets' },
    { icon: MessagesSquare, label: 'Approvals' },
    { icon: ClipboardList,  label: 'Runbooks' },
    { icon: GitPullRequest, label: 'Changes' },
    { icon: FileSearch,     label: 'Postmortems' },
    { icon: KeyRound,       label: 'Credentials' },
    { icon: Workflow,       label: 'Manual glue' },
  ]
  const consequences = [
    { label: 'Fragmented Context', desc: 'State and ownership live in separate systems.' },
    { label: 'Manual Handoffs', desc: 'Detection, approval, and execution lose continuity.' },
    { label: 'Unclear Authority', desc: 'Teams cannot quickly prove who authorized change.' },
    { label: 'Lost Learning', desc: 'Verified resolutions are rarely retained for reuse.' },
  ]
  useStrokeDraw(hubRef)

  return (
    <section className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">The problem</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            Every incident travels through eight tools
            <span className="text-dim"> and no one owns the whole chain.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            An alert lives here. Context lives there. Approval happens somewhere else. Execution
            somewhere else again. By the time it is documented, the story has been rewritten. WAIOS
            replaces that chain with a single, accountable loop.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/5 lg:divide-x divide-white/10">
            {consequences.map((s, i) => (
              <div key={s.label} className="flex flex-col lg:pl-8 first:pl-0">
                <div className="text-[11px] font-mono text-[#FF6B1A]">0{i + 1}</div>
                <div className="mt-2 text-[15px] font-medium text-white/80">{s.label}</div>
                <div className="mt-1 text-[13px] text-dimmer leading-relaxed max-w-[200px]">{s.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border hairline bg-black/40 p-6 dot-grid sm:p-8">
              <div className="text-[11px] tracking-widest uppercase text-dimmer">Today</div>
              <div className="mt-2 text-white text-[18px] font-medium">Eight tools. One incident. Fragmented accountability.</div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {scattered.map((s, i) => {
                  const I = s.icon
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                      className="flex min-w-0 flex-col items-start gap-2 rounded-lg border hairline bg-black/60 p-3"
                      style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
                    >
                      <div className="h-7 w-7 rounded-md bg-white/5 grid place-items-center text-white/70"><I className="h-3.5 w-3.5" /></div>
                      <div className="text-[11.5px] text-white/80">{s.label}</div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-white/55">
                <Circle className="h-3 w-3 text-rose-400" /> No single system preserves the complete chain of context, action, and authority.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div ref={hubRef} className="relative rounded-2xl border hairline p-8 h-full bg-[#0A0A0C] overflow-hidden">
              <div className="text-[11px] tracking-widest uppercase text-[#FF6B1A]">With WAIOS</div>
              <div className="mt-2 text-white text-[18px] font-medium">One operational loop. One accountable chain.</div>

              <div className="mt-8 relative h-[220px] grid place-items-center">
                <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = 200 + Math.cos(angle) * 130
                    const y = 110 + Math.sin(angle) * 80
                    return (
                      <line key={i} data-draw-line x1={x} y1={y} x2={200} y2={110}
                        stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3" />
                    )
                  })}
                </svg>
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2
                  const x = Math.cos(angle) * 130
                  const y = Math.sin(angle) * 80
                  const Icon = scattered[i].icon
                  return (
                    <div key={i} data-draw-icon className="absolute h-8 w-8 rounded-md border hairline bg-black grid place-items-center text-white/70"
                      style={{ transform: `translate(${x}px, ${y}px)`, opacity: 0 }}>
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  )
                })}
                <div className="relative z-10 h-16 w-16 rounded-xl bg-white text-black grid place-items-center shadow-2xl">
                  <div className="text-[10px] tracking-[0.18em] font-semibold">WAIOS</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[12px] text-white/70">
                <Check className="h-3.5 w-3.5 text-emerald-400" /> Context assembled once. Executed with control. Recorded as operational evidence.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Single Source of Truth</div>
            <h3 className="mt-4 text-[24px] md:text-[32px] leading-[1.02] font-semibold tracking-[-0.02em] text-white text-balance max-w-2xl">
              Everything runs on one source of truth.
            </h3>
            <p className="mt-4 text-[16px] md:text-[18px] leading-relaxed text-dim max-w-2xl">
              Every discovery, decision, incident, remediation, and verified state change connects back to one continuously maintained CMDB, giving WAIOS the context to reason about impact rather than treating resources as isolated records.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
