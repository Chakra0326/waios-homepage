'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion'
import {
  ArrowRight, Play, Pause, RotateCcw, Check, ChevronRight, Circle,
  Radar, Brain, Sparkles, Gavel, Cpu, Activity, Shield, Lock, FileCheck2,
  Server, Building2, Landmark, Phone, ShoppingBag, Factory, Truck, Stethoscope,
  Bell, MessagesSquare, Ticket, GitPullRequest, ClipboardList, FileSearch, Workflow,
  KeyRound, TerminalSquare,
} from 'lucide-react'

/* ========================================================================
   WAIOS · Homepage
   Guided argument. Progressive disclosure. Not a product manual.
   ======================================================================== */

const EASE = [0.16, 1, 0.3, 1]

function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function LiveDot({ className = 'text-emerald-400' }) {
  return (
    <span className={`relative inline-block h-1.5 w-1.5 rounded-full ${className} pulse-dot`}>
      <span className="absolute inset-0 rounded-full bg-current" />
    </span>
  )
}

/* Plain-language captions. No internal nouns. */
const LOOP = [
  { key: 'discover',   label: 'Discover',   icon: Radar,    caption: 'Signals from every system, continuously.' },
  { key: 'understand', label: 'Understand', icon: Brain,    caption: 'Context is assembled. Risk is measured.' },
  { key: 'decide',     label: 'Decide',     icon: Sparkles, caption: 'A plan is proposed, scored against impact.' },
  { key: 'approve',    label: 'Approve',    icon: Gavel,    caption: 'Humans stay in control where it matters.' },
  { key: 'act',        label: 'Act',        icon: Cpu,      caption: 'Execution happens with control, not with static keys.' },
  { key: 'learn',      label: 'Learn',      icon: Activity, caption: 'Every decision leaves a signed, auditable record.' },
]

/* ============================== NAV ============================== */
function Nav() {
  return (
    <header className="sticky top-0 z-50 hairline-b backdrop-blur-xl bg-black/55">
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-md bg-white grid place-items-center">
            <div className="h-2 w-2 rounded-[2px] bg-black" />
          </div>
          <span className="text-[15px] font-medium tracking-tight text-white">WAIOS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] text-dim">
          <a href="#platform" className="hover:text-white transition">Platform</a>
          <a href="#architecture" className="hover:text-white transition">Architecture</a>
          <a href="#trust" className="hover:text-white transition">Trust</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#live" className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-white/85 hover:text-white transition">
            See it in action
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-1.5 text-[13px] font-medium hover:bg-white/90 transition">
            Book a demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ============================== HERO MINI CONSOLE (softer copy) ============================== */
function MiniConsole() {
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
        <div className="flex items-center justify-between px-4 h-10 hairline-b">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/15" />
            <div className="h-2 w-2 rounded-full bg-white/15" />
            <div className="h-2 w-2 rounded-full bg-white/15" />
            <span className="ml-2 font-mono text-[11px] text-white/50">waios.console · live</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10.5px] text-white/60"><LiveDot /> operating</span>
        </div>

        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-3 hairline-r p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10.5px] tracking-[0.18em] uppercase text-white/40">Active event</div>
              <span className="text-[10.5px] font-mono text-white/45">EVT‑88214</span>
            </div>
            <div className="text-[14px] text-white font-medium">Compliance drift detected</div>
            <div className="mt-1 text-[12px] text-white/55">Production, cloud storage layer</div>

            <div className="mt-4 rounded-lg border hairline p-3 bg-black/40">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10.5px] uppercase tracking-widest text-white/40">Risk</div>
                  <div className="text-[22px] font-mono text-white mt-0.5">82<span className="text-white/45 text-[13px]">/100</span></div>
                </div>
                <div className="text-right">
                  <div className="text-[10.5px] uppercase tracking-widest text-white/40">Class</div>
                  <div className="text-[12.5px] font-mono text-[#FF6B1A] mt-0.5">HIGH</div>
                </div>
              </div>
              <svg viewBox="0 0 120 32" className="mt-2 w-full h-10" preserveAspectRatio="none">
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

            <div className="mt-4 flex items-center gap-1">
              {steps.map((_, i) => (
                <div key={i} className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                  i < phase ? 'bg-white/70' : i === phase ? 'bg-[#FF6B1A]' : 'bg-white/8'
                }`} />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[10.5px] text-white/45 font-mono">
              <span>DISCOVER</span><span>LEARN</span>
            </div>
          </div>

          <div className="col-span-2 p-4 space-y-3">
            <div className="rounded-lg border hairline p-3 bg-black/40">
              <div className="flex items-center justify-between">
                <div className="text-[10.5px] uppercase tracking-widest text-white/40">Approval</div>
                <span className={`text-[10px] font-mono ${approved ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {approved ? 'signed' : 'awaiting'}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-white/10 border hairline grid place-items-center text-[10px] text-white/80">SM</div>
                  <div className="h-6 w-6 rounded-full bg-white/10 border hairline grid place-items-center text-[10px] text-white/80">JK</div>
                </div>
                <div className="text-[11.5px] text-white/70">On‑call reviewer</div>
              </div>
              <AnimatePresence>
                {approved && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <Check className="h-3 w-3" /> approval recorded
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-lg border hairline p-3 bg-black/40">
              <div className="text-[10.5px] uppercase tracking-widest text-white/40">Action</div>
              <div className="mt-2 space-y-1 text-[11px] font-mono text-white/70">
                <div className={phase >= 4 ? 'text-emerald-400' : ''}>plan proposed</div>
                <div className={phase >= 4 ? 'text-emerald-400' : ''}>rollback ready</div>
                <div className={phase >= 5 ? 'text-emerald-400' : ''}>outcome verified</div>
              </div>
            </div>

            <div className="rounded-lg border hairline p-3 bg-black/40">
              <div className="text-[10.5px] uppercase tracking-widest text-white/40">Audit trail</div>
              <div className="mt-2 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-white/70" />
                <div className="text-[11.5px] text-white/70 font-mono">signed · immutable</div>
              </div>
              <div className="mt-1 text-[10.5px] text-white/45">every step, forever</div>
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

/* ============================== HERO ============================== */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden noise grain">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border hairline px-3 py-1 text-[11.5px] text-white/70">
                <LiveDot /> The autonomous enterprise operating system
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[44px] md:text-[76px] leading-[0.98] font-semibold tracking-[-0.03em] text-white text-balance">
                From detection
                <br />
                to resolution.
                <br />
                <span className="text-dim">Autonomously.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[17px] md:text-[19px] leading-relaxed text-dim">
                Enterprise operations are fragmented across tools, people and time zones.
                WAIOS connects them into one accountable loop, so every event is seen,
                reasoned, approved, and resolved in the same place.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-3">
                <a href="#live" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-[14px] font-medium hover:bg-white/90 transition">
                  See WAIOS in action <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#architecture" className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-[14px] font-medium text-white/90 hover:bg-white/5 transition">
                  Explore the architecture
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <MiniConsole />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== INDUSTRIES (small credibility line) ============================== */
function Industries() {
  const items = [
    { icon: Landmark,    label: 'Banking' },
    { icon: Shield,      label: 'Insurance' },
    { icon: Phone,       label: 'Telecom' },
    { icon: ShoppingBag, label: 'Retail' },
    { icon: Factory,     label: 'Manufacturing' },
    { icon: Building2,   label: 'Public Sector' },
    { icon: Stethoscope, label: 'Healthcare' },
    { icon: Truck,       label: 'Logistics' },
    { icon: Server,      label: 'Cloud Native' },
  ]
  const doubled = [...items, ...items]
  return (
    <section className="py-10 hairline-t hairline-b">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6">
        <div className="text-[11.5px] tracking-[0.22em] uppercase text-dimmer md:w-56 shrink-0">Built for the operations of</div>
        <div className="relative overflow-hidden mask-fade-r flex-1">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
            {doubled.map((it, i) => {
              const I = it.icon
              return (
                <div key={i} className="inline-flex items-center gap-2 text-white/60">
                  <I className="h-4 w-4" /><span className="text-[13.5px] tracking-tight">{it.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== PROBLEM ============================== */
function Problem() {
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

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="relative rounded-2xl border hairline p-8 h-full bg-black/40 dot-grid overflow-hidden">
              <div className="text-[11px] tracking-widest uppercase text-dimmer">Today</div>
              <div className="mt-2 text-white text-[18px] font-medium">Eight tools. One incident. Zero accountability.</div>
              <div className="mt-8 grid grid-cols-4 gap-3">
                {scattered.map((s, i) => {
                  const I = s.icon
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                      className="rounded-lg border hairline bg-black/60 p-3 flex flex-col items-start gap-2"
                      style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
                    >
                      <div className="h-7 w-7 rounded-md bg-white/5 grid place-items-center text-white/70"><I className="h-3.5 w-3.5" /></div>
                      <div className="text-[11.5px] text-white/80">{s.label}</div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-white/55">
                <Circle className="h-3 w-3 text-rose-400" /> No one can prove what happened, when, or who signed off.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-2xl border hairline p-8 h-full bg-[#0A0A0C] overflow-hidden">
              <div className="text-[11px] tracking-widest uppercase text-[#FF6B1A]">With WAIOS</div>
              <div className="mt-2 text-white text-[18px] font-medium">One operational loop. One accountable chain.</div>

              <div className="mt-8 relative h-[220px] grid place-items-center">
                <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = 200 + Math.cos(angle) * 130
                    const y = 110 + Math.sin(angle) * 80
                    return (
                      <motion.line key={i} x1={x} y1={y} x2={200} y2={110}
                        stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3"
                        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }} />
                    )
                  })}
                </svg>
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2
                  const x = Math.cos(angle) * 130
                  const y = Math.sin(angle) * 80
                  const Icon = scattered[i].icon
                  return (
                    <div key={i} className="absolute h-8 w-8 rounded-md border hairline bg-black grid place-items-center text-white/70"
                      style={{ transform: `translate(${x}px, ${y}px)` }}>
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  )
                })}
                <div className="relative z-10 h-16 w-16 rounded-xl bg-white text-black grid place-items-center shadow-2xl">
                  <div className="text-[10px] tracking-[0.18em] font-semibold">WAIOS</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[12px] text-white/70">
                <Check className="h-3.5 w-3.5 text-emerald-400" /> Context assembled once. Executed with control. Recorded forever.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============================== LOOP ============================== */
function LoopRing({ active }) {
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

function Loop() {
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

/* ============================== LIVE OPERATION ============================== */
const SCENARIO = [
  { phase: 'DISCOVER',   ts: '14:02:18', text: 'Signal ingested · compliance drift detected in production' },
  { phase: 'DISCOVER',   ts: '14:02:18', text: 'Correlated across telemetry and inventory · scope isolated' },
  { phase: 'UNDERSTAND', ts: '14:02:19', text: 'Assembling operational context …' },
  { phase: 'UNDERSTAND', ts: '14:02:20', ok: true, text: 'Risk 82/100 HIGH · blast radius contained · reversible' },
  { phase: 'UNDERSTAND', ts: '14:02:20', text: 'Known-good pattern matched · 12 prior successful fixes' },
  { phase: 'DECIDE',     ts: '14:02:21', text: 'Plan proposed · safe path with rollback available' },
  { phase: 'DECIDE',     ts: '14:02:21', text: 'Estimated window · 42s · restore point armed' },
  { phase: 'APPROVE',    ts: '14:02:22', text: 'Governance check · approval routed to on-call reviewer' },
  { phase: 'APPROVE',    ts: '14:02:37', ok: true, text: 'Approved by s.mehta@corp · single-use, verifiable' },
  { phase: 'ACT',        ts: '14:02:38', text: 'Executing with control · no static keys · scoped access' },
  { phase: 'ACT',        ts: '14:02:42', ok: true, text: 'Step 1 complete · rollback ready' },
  { phase: 'ACT',        ts: '14:02:56', ok: true, text: 'Outcome verified · 8/8 health checks passing' },
  { phase: 'LEARN',      ts: '14:02:57', ok: true, text: 'Audit record written · signed and immutable' },
  { phase: 'LEARN',      ts: '14:02:57', text: 'Loop closed · pattern reinforced' },
]

function Live() {
  const [visible, setVisible] = useState(1)
  const [running, setRunning] = useState(true)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!running || visible >= SCENARIO.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 780 + Math.random() * 520)
    return () => clearTimeout(t)
  }, [visible, running])

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight }, [visible])

  const currentPhase = SCENARIO[Math.max(0, Math.min(visible - 1, SCENARIO.length - 1))].phase
  const phaseIndex = ['DISCOVER','UNDERSTAND','DECIDE','APPROVE','ACT','LEARN'].indexOf(currentPhase)
  const passing = Math.min(8, Math.max(0, phaseIndex + 2))
  const done = visible >= SCENARIO.length
  const reset = () => { setVisible(1); setRunning(true) }

  return (
    <section id="live" className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">See it in action</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            A real event, <span className="text-dim">handled end to end.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            An operational event moves through the loop. One click of human approval,
            an accountable outcome, and a signed record. In under a minute.
          </p>
        </Reveal>

        <div className="mt-12">
          <div className="grid grid-cols-6 gap-3 mb-6">
            {['DISCOVER','UNDERSTAND','DECIDE','APPROVE','ACT','LEARN'].map((p, i) => {
              const state = phaseIndex > i ? 'done' : phaseIndex === i ? 'active' : 'idle'
              return (
                <div key={p} className="flex flex-col gap-2">
                  <div className={`h-[3px] rounded-full transition-all duration-500 ${
                    state === 'done' ? 'bg-white/85' : state === 'active' ? 'bg-[#FF6B1A]' : 'bg-white/10'
                  }`} />
                  <div className={`text-[10.5px] tracking-[0.18em] uppercase transition-colors ${
                    state === 'idle' ? 'text-white/25' : 'text-white/75'
                  }`}>{p}</div>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border hairline bg-black">
              <div className="flex items-center justify-between px-5 h-11 hairline-b">
                <div className="font-mono text-[12px] text-white/50 flex items-center gap-2">
                  <TerminalSquare className="h-3.5 w-3.5" />
                  waios.console · event stream
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-white/50"><LiveDot /> live</span>
                  <button onClick={() => setRunning((r) => !r)} className="text-white/55 hover:text-white transition">
                    {running ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </button>
                  <button onClick={reset} className="text-white/55 hover:text-white transition"><RotateCcw className="h-3.5 w-3.5" /></button>
                </div>
              </div>
              <div ref={bodyRef} className="term-scroll h-[440px] overflow-y-auto px-6 py-6 font-mono text-[13px] leading-[1.9]">
                {SCENARIO.slice(0, visible).map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-[70px_110px_1fr] gap-4 items-baseline">
                    <span className="text-white/30">{line.ts}</span>
                    <span className="inline-flex items-center justify-center h-[20px] rounded-full border hairline text-[10px] tracking-[0.16em] text-white/70 px-2">{line.phase}</span>
                    <span className={line.ok ? 'text-white' : 'text-white/60'}>
                      {line.ok && <span className="text-[#FF6B1A] mr-1.5">✔</span>}{line.text}
                    </span>
                  </motion.div>
                ))}
                {visible < SCENARIO.length && running && <div className="mt-2 text-white/40"><span className="caret" /></div>}
                {done && (
                  <div className="mt-6 pt-5 hairline-t text-white/85">
                    <span className="text-[#FF6B1A] mr-2">•</span>
                    Resolved in 00:00:39. Signed audit trail written. No one paged out of hours.
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Risk</div>
                  <span className="text-[10.5px] font-mono text-dimmer">0–100</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className={`text-[36px] font-mono ${phaseIndex >= 4 ? 'text-emerald-400' : 'text-[#FF6B1A]'}`}>
                    {phaseIndex >= 4 ? '00' : '82'}
                  </div>
                  <div className="text-[12px] text-white/50">{phaseIndex >= 4 ? 'resolved' : 'high'}</div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div className="h-full bg-white/70" initial={{ width: '82%' }}
                    animate={{ width: phaseIndex >= 4 ? '4%' : '82%' }} transition={{ duration: 0.6 }} />
                </div>
              </div>
              <div className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Approval</div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">SM</div>
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">JK</div>
                  </div>
                  <div className="text-[12px] text-white/70">On‑call reviewer</div>
                </div>
                <div className={`mt-3 inline-flex items-center gap-1.5 text-[11.5px] ${phaseIndex >= 3 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {phaseIndex >= 3 ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-3 w-3" />}
                  {phaseIndex >= 3 ? 'signed' : 'awaiting'}
                </div>
              </div>
              <div className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Health</div>
                <div className="mt-3 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={`h-5 rounded-sm transition-colors duration-500 ${i < passing ? 'bg-emerald-400/85' : 'bg-white/10'}`} />
                  ))}
                </div>
                <div className="mt-2 text-[11.5px] text-white/60 font-mono">{passing}/8 passing</div>
              </div>
              <div className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Audit trail</div>
                  <span className="text-[10.5px] font-mono text-white/50">signed · immutable</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-[12px]">
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">record</div>
                    <div className="font-mono text-white mt-1">8f2c…a91</div>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">steps</div>
                    <div className="font-mono text-white mt-1">14</div>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">status</div>
                    <div className="font-mono text-emerald-400 mt-1">complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== CONTROL (single focused section) ============================== */
function Control() {
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
              Every decision is reasoned. Every action is approved. Every step is recorded.
              WAIOS runs from our infrastructure, never inside yours, and you can revoke it in a
              single click.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 space-y-3 max-w-lg">
              {[
                { k: 'Human in the loop where it matters', v: 'Governance is built into the run, not bolted on after.' },
                { k: 'Signed, immutable record',            v: 'Every decision and action is written to a tamper-evident trail.' },
                { k: 'Zero footprint inside your cloud',    v: 'We connect through revocable access, the same trust model you already use.' },
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
              How trust and control work <ArrowRight className="h-4 w-4" />
            </a>
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
                approved · signed · recorded
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============================== ARCHITECTURE HINT ============================== */
function ArchitectureHint() {
  const words = ['Reason', 'Govern', 'Act']
  return (
    <section id="architecture" className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Under the hood</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 mx-auto max-w-4xl text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance">
            Behind the loop, a purpose-built system of
            <br className="hidden md:block" />{' '}
            <span className="text-dim">reasoning, governance and execution layers.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {words.map((w, i) => (
              <div key={w} className="flex items-center gap-6 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  className="text-[36px] md:text-[56px] font-semibold tracking-[-0.03em] text-white"
                >
                  {w}
                </motion.div>
                {i < words.length - 1 && (
                  <span className="text-white/25 text-[28px] md:text-[40px]">·</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-10 mx-auto max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-dim">
            The homepage only tells part of the story. If you are technical, an operator, or an
            architect, the full picture is worth a closer look.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-[14px] font-medium hover:bg-white/90 transition">
              Explore the architecture <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-[14px] font-medium text-white/90 hover:bg-white/5 transition">
              Talk to an engineer
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================== FINAL CTA ============================== */
function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border hairline px-3 py-1 text-[11.5px] text-white/70">
            <LiveDot /> Ready when you are
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[40px] md:text-[76px] leading-[1] font-semibold tracking-[-0.03em] text-white text-balance">
            See WAIOS run
            <br />
            <span className="text-dim">a real event.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 mx-auto max-w-2xl text-[18px] md:text-[20px] leading-relaxed text-dim text-pretty">
            Thirty minutes with the WAIOS team. Bring a real incident, alert, or change request,
            and we will take it through the full loop with you.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-[14px] font-medium hover:bg-white/90 transition">
              Book a live demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#architecture" className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-[14px] font-medium text-white/90 hover:bg-white/5 transition">
              Explore the architecture
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================== FOOTER ============================== */
function Footer() {
  const cols = [
    { title: 'Product', items: ['Platform', 'How it works', 'See it in action'] },
    { title: 'Depth',   items: ['Architecture', 'Trust and control', 'Security'] },
    { title: 'Company', items: ['About', 'Contact', 'Careers'] },
  ]
  return (
    <footer className="hairline-t">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-6 w-6 rounded-md bg-white grid place-items-center">
              <div className="h-2 w-2 rounded-[2px] bg-black" />
            </div>
            <span className="text-[15px] font-medium text-white">WAIOS</span>
          </div>
          <p className="mt-4 text-[13px] text-dim leading-relaxed max-w-xs">
            The autonomous enterprise operating system. Governed by design.
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] text-dimmer">
            <LiveDot /> systems nominal
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[11px] tracking-[0.2em] uppercase text-dimmer">{c.title}</div>
            <ul className="mt-4 space-y-2">
              {c.items.map((it) => (
                <li key={it}><a href="#" className="text-[13.5px] text-white/75 hover:text-white transition">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="hairline-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-dimmer">
          <div>© {new Date().getFullYear()} WAIOS. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============================== APP ============================== */
function App() {
  return (
    <div className="min-h-screen text-white/90 selection:bg-white/20">
      <Nav />
      <Hero />
      <Industries />
      <Problem />
      <Loop />
      <Live />
      <Control />
      <ArchitectureHint />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
