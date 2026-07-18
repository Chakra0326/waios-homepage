'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Play, Pause, RotateCcw, Check, ChevronRight, Circle,
  Radar, Brain, Sparkles, Gavel, Cpu, Activity, Shield, Lock, GitBranch, FileCheck2,
  Server, Building2, Landmark, Phone, ShoppingBag, Factory, Truck, Stethoscope,
  Bell, MessagesSquare, Ticket, GitPullRequest, ClipboardList, FileSearch, Workflow,
  Zap, KeyRound, Database, Boxes, Layers, TerminalSquare, ShieldCheck, Cloud,
  BadgeCheck, Waypoints, Fingerprint, HardDrive, Undo2, ScrollText, Radio,
  PackageOpen, Hammer, PenTool, Bug, Wrench, Rocket, Trash2, Container,
} from 'lucide-react'

/* ========================================================================
   WAIOS · Final Landing Page
   Grounded in the WAIOS Build Roadmap.
   Authentic terminology, real AWS scenario, defensible numbers.
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

function Counter({ to, duration = 1.6, format = (v) => Math.round(v).toLocaleString(), prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(format(0))
  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, { duration, ease: EASE })
    const unsub = mv.on('change', (v) => setDisplay(format(v)))
    return () => { controls.stop(); unsub() }
  }, [inView, to])
  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

function LiveDot({ className = 'text-emerald-400' }) {
  return (
    <span className={`relative inline-block h-1.5 w-1.5 rounded-full ${className} pulse-dot`}>
      <span className="absolute inset-0 rounded-full bg-current" />
    </span>
  )
}

/* ---------- Data ---------- */
const LOOP = [
  { key: 'discover',   label: 'Discover',   icon: Radar,    caption: 'AWS Config, SSM Inventory, EventBridge and Spoke agents ingest signals continuously. Compliance drift and risk events are detected in real time.' },
  { key: 'understand', label: 'Understand', icon: Brain,    caption: 'Risk Calculator scores severity, blast radius, and exposure. WAI Advisor generates a CTO-grade briefing grounded in your CMDB and KEDB.' },
  { key: 'decide',     label: 'Decide',     icon: Sparkles, caption: 'A remediation plan is proposed. Known Error Database matches known-good fixes with historical success rates.' },
  { key: 'approve',    label: 'Approve',    icon: Gavel,    caption: 'One-click CAB approval, HMAC-signed. RBAC verified signer. No approval, no action.' },
  { key: 'act',        label: 'Act',        icon: Cpu,      caption: 'Remediation Lambda executes via short-lived tokens. Formal Restore Point recorded. Rollback Engine stands by.' },
  { key: 'learn',      label: 'Learn',      icon: Activity, caption: 'Signed, KMS-encrypted, Object-Locked record written to the Forensic BlackBox. KEDB reinforced. Loop closes.' },
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
          <span className="hidden sm:inline text-[11px] text-dimmer ml-1">/ Autonomous Enterprise OS</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-dim">
          <a href="#loop" className="hover:text-white transition">Loop</a>
          <a href="#live" className="hover:text-white transition">In Action</a>
          <a href="#differentiators" className="hover:text-white transition">Why WAIOS</a>
          <a href="#system" className="hover:text-white transition">System</a>
          <a href="#waims" className="hover:text-white transition">Agents</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-1.5 text-[11.5px] text-dimmer">
            <LiveDot /> zero installed footprint
          </span>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-1.5 text-[13px] font-medium hover:bg-white/90 transition">
            Book a demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ============================== HERO ============================== */
function MiniConsole() {
  // Real-feel WAIOS scenario: EBS unencrypted -> risk -> CAB -> remediation -> BlackBox
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

  const risk = useMemo(() => 82, [])
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
            <span className="ml-2 font-mono text-[11px] text-white/50">waios.console · ap‑southeast‑1</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10.5px] text-white/60"><LiveDot /> live</span>
        </div>

        <div className="grid grid-cols-5 gap-0">
          {/* left: violation panel */}
          <div className="col-span-3 hairline-r p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10.5px] tracking-[0.18em] uppercase text-white/40">Active violation</div>
              <span className="text-[10.5px] font-mono text-white/45">ISO 27001 A.10.1.1</span>
            </div>
            <div className="text-[14px] text-white font-medium">EBS volume unencrypted at rest</div>
            <div className="mt-1 text-[12px] text-white/55 font-mono">i‑04e71188…837 · vol‑09fa2d…d65b</div>

            <div className="mt-4 rounded-lg border hairline p-3 bg-black/40">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10.5px] uppercase tracking-widest text-white/40">Risk score</div>
                  <div className="text-[22px] font-mono text-white mt-0.5">{risk}<span className="text-white/45 text-[13px]">/100</span></div>
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

          {/* right: approval + audit */}
          <div className="col-span-2 p-4 space-y-3">
            <div className="rounded-lg border hairline p-3 bg-black/40">
              <div className="flex items-center justify-between">
                <div className="text-[10.5px] uppercase tracking-widest text-white/40">CAB approval</div>
                <span className={`text-[10px] font-mono ${approved ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {approved ? 'signed' : 'awaiting'}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-white/10 border hairline grid place-items-center text-[10px] text-white/80">SM</div>
                  <div className="h-6 w-6 rounded-full bg-white/10 border hairline grid place-items-center text-[10px] text-white/80">JK</div>
                </div>
                <div className="text-[11.5px] text-white/70">HMAC · RBAC</div>
              </div>
              <AnimatePresence>
                {approved && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <Check className="h-3 w-3" /> single‑use token consumed
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-lg border hairline p-3 bg-black/40">
              <div className="text-[10.5px] uppercase tracking-widest text-white/40">Remediation</div>
              <div className="mt-2 space-y-1 text-[11px] font-mono text-white/70">
                <div className={phase >= 4 ? 'text-emerald-400' : ''}>snapshot · encrypted copy</div>
                <div className={phase >= 4 ? 'text-emerald-400' : ''}>volume swap · restore point</div>
                <div className={phase >= 5 ? 'text-emerald-400' : ''}>rollback engine · armed</div>
              </div>
            </div>

            <div className="rounded-lg border hairline p-3 bg-black/40">
              <div className="text-[10.5px] uppercase tracking-widest text-white/40">Forensic BlackBox</div>
              <div className="mt-2 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-white/70" />
                <div className="text-[11.5px] text-white/70 font-mono">run‑id 8f2c…a91</div>
              </div>
              <div className="mt-1 text-[10.5px] text-white/45">KMS + Object Lock · immutable</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
        className="absolute -left-6 md:-left-10 bottom-10 rounded-full border hairline bg-black/80 backdrop-blur px-3 py-1.5 text-[11.5px] text-white/80 shadow-xl drift"
      >
        <span className="inline-flex items-center gap-1.5"><LiveDot /> real EBS remediation · not a mock</span>
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden noise grain">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border hairline px-3 py-1 text-[11.5px] text-white/70">
                <LiveDot /> Autonomous Ecosystem CMDB · governed by design
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
                WAIOS is the operating layer that connects your cloud, AI reasoning, governance,
                human approval, and controlled execution into one accountable operational loop.
                Zero footprint in your cloud.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-3">
                <a href="#live" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-[14px] font-medium hover:bg-white/90 transition">
                  See WAIOS in action <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-[14px] font-medium text-white/90 hover:bg-white/5 transition">
                  Book a demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                {[
                  { k: 'Governed',        v: 'CAB, HMAC, RBAC' },
                  { k: 'Credential\u2011less', v: 'Short\u2011lived STS tokens' },
                  { k: 'Immutable',       v: 'KMS + Object Lock' },
                ].map((c) => (
                  <div key={c.k} className="rounded-lg border hairline p-3">
                    <div className="text-[12px] text-white">{c.k}</div>
                    <div className="text-[11px] text-dimmer mt-0.5">{c.v}</div>
                  </div>
                ))}
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

      {/* Live capability ticker */}
      <div className="hairline-t hairline-b bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 md:gap-x-10 text-[12px] font-mono text-white/60">
          <span className="inline-flex items-center gap-2 text-white/85"><LiveDot /> operating today</span>
          <span>AWS · Azure · GCP</span>
          <span className="text-white/25">·</span>
          <span>ITIL v5 · ISO 27001 · ISO 22301 · ISO 20000‑1</span>
          <span className="text-white/25">·</span>
          <span>&lt;3s pipeline latency</span>
          <span className="text-white/25">·</span>
          <span>0 installed footprint</span>
          <span className="text-white/25">·</span>
          <span>100% actions attributable</span>
        </div>
      </div>
    </section>
  )
}

/* ============================== TRUST STRIP ============================== */
function TrustStrip() {
  const items = [
    { icon: Cloud,      label: 'AWS, Azure, GCP',        note: 'One brain, three clouds' },
    { icon: Fingerprint,label: 'Revocable IAM access',   note: 'Same model as Datadog and Wiz' },
    { icon: ShieldCheck,label: 'Zero installed footprint', note: 'Nothing runs in your cloud' },
    { icon: BadgeCheck, label: 'ITIL v5 · ISO 27001 · 22301', note: 'Aligned by architecture' },
  ]
  return (
    <section className="py-10 hairline-b">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, i) => {
          const I = it.icon
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border hairline bg-black/30 p-4 h-full">
                <div className="h-9 w-9 rounded-lg bg-white/5 grid place-items-center text-white/85 shrink-0"><I className="h-4 w-4" /></div>
                <div className="min-w-0">
                  <div className="text-[13px] text-white leading-tight">{it.label}</div>
                  <div className="text-[11.5px] text-dimmer mt-0.5">{it.note}</div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

/* ============================== INDUSTRIES ============================== */
function Industries() {
  const items = [
    { icon: Landmark,   label: 'Banking' },
    { icon: Shield,     label: 'Insurance' },
    { icon: Phone,      label: 'Telecom' },
    { icon: ShoppingBag,label: 'Retail' },
    { icon: Factory,    label: 'Manufacturing' },
    { icon: Building2,  label: 'Public Sector' },
    { icon: Stethoscope,label: 'Healthcare' },
    { icon: Truck,      label: 'Logistics' },
    { icon: Server,     label: 'Cloud Native' },
  ]
  const doubled = [...items, ...items]
  return (
    <section className="py-14 hairline-b">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6">
        <div className="text-[12px] tracking-[0.22em] uppercase text-dimmer md:w-56 shrink-0">Built for the operations of</div>
        <div className="relative overflow-hidden mask-fade-r flex-1">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
            {doubled.map((it, i) => {
              const I = it.icon
              return (
                <div key={i} className="inline-flex items-center gap-2 text-white/70">
                  <I className="h-4 w-4" /><span className="text-[14px] tracking-tight">{it.label}</span>
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
    { icon: Bell,           label: 'Monitoring' },
    { icon: Ticket,         label: 'Ticketing' },
    { icon: MessagesSquare, label: 'Approval chats' },
    { icon: ClipboardList,  label: 'Runbooks' },
    { icon: GitPullRequest, label: 'Change mgmt' },
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
            Cloud governance is fragmented
            <span className="text-dim"> across tools, people, and time zones.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            Every enterprise runs the same loop by hand. Detect. Investigate. Coordinate. Approve.
            Execute. Document. Except handoffs lose context, approvals stall, and postmortems become
            stories, not evidence.
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
                      className="rounded-lg border hairline bg-black/60 p-3 flex flex-col items-start gap-2 card-hover"
                      style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
                    >
                      <div className="h-7 w-7 rounded-md bg-white/5 grid place-items-center text-white/70"><I className="h-3.5 w-3.5" /></div>
                      <div className="text-[11.5px] text-white/80">{s.label}</div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-white/50">
                <Circle className="h-3 w-3 text-rose-400" /> Nobody can prove what happened, when, or who signed off.
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
    <section id="loop" className="relative py-24 md:py-32 hairline-b noise">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">The Loop</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            One event. <span className="text-dim">One accountable chain of reasoning.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            Every operation travels through six phases, the same ones an experienced SRE or auditor
            would follow, executed with AI reasoning and enterprise-grade control.
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

/* ============================== LIVE OPERATION (REAL SCENARIO) ============================== */
const SCENARIO = [
  { phase: 'DISCOVER',   ts: '14:02:18', text: 'AWS Config drift · EBS volume unencrypted at rest · ISO 27001 A.10.1.1' },
  { phase: 'DISCOVER',   ts: '14:02:18', text: 'Resource i-04e71188…837 · vol-09fa2d…d65b · region ap-southeast-1' },
  { phase: 'UNDERSTAND', ts: '14:02:19', text: 'WAI Advisor · assembling CTO briefing from CMDB …' },
  { phase: 'UNDERSTAND', ts: '14:02:20', ok: true, text: 'Risk Calculator · severity 0.9 × blast_radius 0.8 × exposure 0.7 = 82/100 HIGH' },
  { phase: 'UNDERSTAND', ts: '14:02:20', text: 'KEDB match · encryption_none · remediation_encrypt_ebs · 12 prior successes' },
  { phase: 'DECIDE',     ts: '14:02:21', text: 'Plan · snapshot, encrypted copy under KMS, swap volume, restart instance' },
  { phase: 'DECIDE',     ts: '14:02:21', text: 'Restore Point armed · Rollback Engine ready · estimated window 42s' },
  { phase: 'APPROVE',    ts: '14:02:22', text: 'CAB gate · HMAC-signed single-use token issued · SNS to on-call CTO' },
  { phase: 'APPROVE',    ts: '14:02:37', ok: true, text: 'Approval received · signer s.mehta@corp · RBAC verified · token consumed' },
  { phase: 'ACT',        ts: '14:02:38', text: 'Remediation Lambda · sts:AssumeRole · short-lived token · no static credentials' },
  { phase: 'ACT',        ts: '14:02:42', ok: true, text: 'Snapshot complete · encrypted copy created · vol-0855d5…f3c5c' },
  { phase: 'ACT',        ts: '14:02:56', ok: true, text: 'Volume swap complete · instance restarted · health checks 8/8 · KMS Encryption: Encrypted' },
  { phase: 'LEARN',      ts: '14:02:57', ok: true, text: 'Forensic BlackBox · run-id 8f2c…a91 · KMS + Object Lock · signed & immutable' },
  { phase: 'LEARN',      ts: '14:02:57', text: 'KEDB updated · pattern success_count 13 · avg_remediation_time 19s' },
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
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">In Action</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            A real compliance drift, <span className="text-dim">handled end to end.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            An unencrypted EBS volume on a live EC2 instance. ISO 27001 A.10.1.1 violation.
            From detection to signed, immutable BlackBox record in under a minute, with a human
            approval in the middle. Real AWS resource IDs, not a mock.
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
                  waios://ops/violation/ISO-A.10.1.1 · ap-southeast-1
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
                    Encryption drift resolved in 00:00:39. Signed BlackBox record written under KMS + Object Lock. KEDB pattern reinforced.
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Risk score</div>
                  <span className="text-[10.5px] font-mono text-dimmer">0–100 scale</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className={`text-[36px] font-mono ${phaseIndex >= 4 ? 'text-emerald-400' : 'text-[#FF6B1A]'}`}>
                    {phaseIndex >= 4 ? '00' : '82'}
                  </div>
                  <div className="text-[12px] text-white/50">{phaseIndex >= 4 ? 'resolved' : 'HIGH'}</div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div className="h-full bg-white/70" initial={{ width: '82%' }}
                    animate={{ width: phaseIndex >= 4 ? '4%' : '82%' }} transition={{ duration: 0.6 }} />
                </div>
              </div>
              <div className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">CAB</div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">SM</div>
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">JK</div>
                  </div>
                  <div className="text-[12px] text-white/70">HMAC, RBAC</div>
                </div>
                <div className={`mt-3 inline-flex items-center gap-1.5 text-[11.5px] ${phaseIndex >= 3 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {phaseIndex >= 3 ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-3 w-3" />}
                  {phaseIndex >= 3 ? 'signed by s.mehta@corp' : 'awaiting on-call CTO'}
                </div>
              </div>
              <div className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Instance health</div>
                <div className="mt-3 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={`h-5 rounded-sm transition-colors duration-500 ${i < passing ? 'bg-emerald-400/85' : 'bg-white/10'}`} />
                  ))}
                </div>
                <div className="mt-2 text-[11.5px] text-white/60 font-mono">{passing}/8 passing</div>
              </div>
              <div className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Forensic BlackBox</div>
                  <span className="text-[10.5px] font-mono text-white/50">KMS + Object Lock</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-[12px]">
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">run-id</div>
                    <div className="font-mono text-white mt-1">8f2c…a91</div>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">chain</div>
                    <div className="font-mono text-white mt-1">14 steps</div>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">status</div>
                    <div className="font-mono text-emerald-400 mt-1">immutable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 rounded-2xl border hairline overflow-hidden">
            {[
              { k: 'Time to resolution', v: '00:00:39' },
              { k: 'Human actions',      v: '1 approval' },
              { k: 'ISO control',        v: 'A.10.1.1' },
              { k: 'Audit trail',        v: 'KMS + Object Lock' },
            ].map((s, i, arr) => (
              <div key={s.k} className={`px-5 py-5 ${i < arr.length - 1 ? 'md:border-r hairline' : ''}`}>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/35">{s.k}</div>
                <div className="mt-1.5 text-[15px] text-white font-mono">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== DIFFERENTIATORS ============================== */
function MiniNodes() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-24">
      {[[20,50],[70,20],[70,80],[130,50],[180,20],[180,80]].map(([x,y], i) => (
        <g key={i}>
          {i > 0 && (
            <motion.line x1={[20,70,70,130,180,180][i-1] ?? 20} y1={[50,20,80,50,20,80][i-1] ?? 50} x2={x} y2={y}
              stroke="rgba(255,255,255,0.25)" strokeWidth="1"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }} />
          )}
        </g>
      ))}
      {[[20,50],[70,20],[70,80],[130,50],[180,20],[180,80]].map(([x,y], i) => (
        <motion.circle key={`c${i}`} cx={x} cy={y} r="4" fill="#fff"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }} />
      ))}
    </svg>
  )
}
function MiniGate() {
  return (
    <div className="flex items-center gap-2 h-24">
      <div className="flex flex-col gap-1">
        {['identity','policy','risk'].map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }} className="px-2 py-1 rounded-md border hairline text-[10.5px] text-white/75 bg-black/40">{t}</motion.div>
        ))}
      </div>
      <div className="flex-1 border-t border-dashed border-white/15" />
      <div className="h-14 w-14 rounded-xl border hairline bg-black grid place-items-center"><Lock className="h-5 w-5 text-white/85" /></div>
      <div className="flex-1 border-t border-dashed border-white/15" />
      <div className="h-10 w-10 rounded-lg bg-white text-black grid place-items-center text-[10px] font-semibold">ACT</div>
    </div>
  )
}
function MiniExecution() {
  return (
    <div className="h-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="h-8 w-8 rounded-full border hairline bg-black grid place-items-center text-white/75"><Zap className="h-4 w-4" /></div>
        <div className="flex-1 h-px bg-white/10 relative mx-2">
          <motion.div className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#FF6B1A]"
            animate={{ x: [0, 240, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <div className="h-8 w-8 rounded-full border hairline bg-black grid place-items-center text-white/75"><Server className="h-4 w-4" /></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-mono text-white/40">
        <span>WAIOS Master</span><span>sts token expires 60s</span>
      </div>
    </div>
  )
}
function MiniAudit() {
  return (
    <div className="h-24 relative">
      <div className="rounded-lg border hairline bg-black/50 p-3 h-full">
        <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
          <span>run-id 8f2c…a91</span>
          <span className="inline-flex items-center gap-1 text-emerald-400"><Check className="h-3 w-3" /> signed</span>
        </div>
        <div className="mt-2 space-y-1">
          {['discover','decide','approve','act'].map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: '100%' }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} className="h-1.5 shimmer rounded-full" />
          ))}
        </div>
      </div>
    </div>
  )
}
function Differentiators() {
  const cards = [
    { title: 'Context',        desc: 'A living CMDB across AWS, Azure and GCP. Every action is reasoned against your real infrastructure, not isolated prompts. RAG over the Forensic BlackBox for known-good fixes.', visual: <MiniNodes /> },
    { title: 'Control',        desc: 'Governance is a runtime. Every action passes identity, policy, Risk Calculator scoring, and one-click CAB approval. HMAC-signed, single-use tokens. RBAC on the signer.', visual: <MiniGate /> },
    { title: 'Execution',      desc: 'Real remediation, not recommendations. Short-lived STS tokens. Formal Restore Points. A Rollback Engine that automatically reverts on failure. No static credentials, ever.', visual: <MiniExecution /> },
    { title: 'Accountability', desc: 'Every decision, approval, and change writes a signed record to the Forensic BlackBox. KMS-encrypted, Object-Locked, deletion-protected. WORM-grade immutable.', visual: <MiniAudit /> },
  ]
  return (
    <section id="differentiators" className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Why WAIOS</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            Reasoning is not enough. <span className="text-dim">Enterprises need reasoning that can act, and answer for it.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="rounded-2xl border hairline p-6 md:p-8 bg-[#0A0A0C] card-hover h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white text-black grid place-items-center text-[12px] font-semibold">0{i + 1}</div>
                  <div className="text-[20px] font-semibold text-white tracking-tight">{c.title}</div>
                </div>
                <div className="mt-4">{c.visual}</div>
                <p className="mt-6 text-[15px] leading-relaxed text-dim">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== SYSTEM (real architecture) ============================== */
function System() {
  const groups = [
    {
      title: 'Discovery',
      note: 'How WAIOS sees your cloud',
      items: [
        { icon: Radar,     name: 'AWS Config + SSM Inventory', hint: 'Continuous compliance recording' },
        { icon: Radio,     name: 'EventBridge + SNS + SQS',    hint: 'Real-time event fabric' },
        { icon: Waypoints, name: 'Spoke Agents',               hint: 'Per-account telemetry, revocable' },
      ],
    },
    {
      title: 'Intelligence',
      note: 'How WAIOS reasons',
      items: [
        { icon: Brain,     name: 'WAI Advisor',       hint: 'CTO briefing narratives' },
        { icon: Sparkles,  name: 'WAI-S-Oracle',      hint: 'Strategic assistance layer' },
        { icon: Database,  name: 'KEDB',              hint: 'Known error database with RAG' },
      ],
    },
    {
      title: 'Governance',
      note: 'How WAIOS controls',
      items: [
        { icon: Gavel,     name: 'CAB Workflow',      hint: 'One-click, HMAC-signed' },
        { icon: Shield,    name: 'Risk Engine',       hint: 'Severity × blast × exposure' },
        { icon: Fingerprint,name:'RBAC + Identity',   hint: 'Only verified signers' },
      ],
    },
    {
      title: 'Execution',
      note: 'How WAIOS acts',
      items: [
        { icon: Cpu,       name: 'WAIOS Master',           hint: 'Central orchestrator' },
        { icon: Undo2,     name: 'Rollback Engine',        hint: 'Restore Points + auto-revert' },
        { icon: KeyRound,  name: 'Credential-less runtime', hint: 'Short-lived STS tokens' },
      ],
    },
    {
      title: 'Accountability',
      note: 'How WAIOS remembers',
      items: [
        { icon: HardDrive, name: 'Forensic BlackBox',       hint: 'KMS + Object Lock, WORM' },
        { icon: ScrollText,name: 'Signed audit chain',      hint: 'Every step, cryptographically bound' },
        { icon: FileCheck2,name: 'Ops Query Interface',     hint: 'Natural language over the record' },
      ],
    },
    {
      title: 'Distribution',
      note: 'How WAIOS reaches',
      items: [
        { icon: Cloud,     name: 'AWS, Azure, GCP adapters', hint: 'One brain, three clouds' },
        { icon: Container, name: 'Hub & Spoke',              hint: 'Cross-account, revocable' },
        { icon: ShieldCheck,name: 'Zero installed footprint',hint: 'Nothing lives in your cloud' },
      ],
    },
  ]
  return (
    <section id="system" className="relative py-24 md:py-32 hairline-b noise">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">The System</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            An operating system, <span className="text-dim">not a catalog of tools.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            WAIOS Master orchestrates six coherent layers. Each has a job. Together they close the loop.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.05}>
              <div className="rounded-2xl border hairline p-6 md:p-7 bg-[#0A0A0C] h-full card-hover">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-dimmer">Layer 0{gi + 1}</div>
                    <div className="mt-1 text-[20px] font-semibold text-white tracking-tight">{g.title}</div>
                  </div>
                  <Layers className="h-4 w-4 text-white/40" />
                </div>
                <p className="mt-2 text-[13.5px] text-dim">{g.note}</p>
                <div className="mt-5 space-y-2">
                  {g.items.map((it) => {
                    const I = it.icon
                    return (
                      <div key={it.name} className="flex items-center gap-3 rounded-lg border hairline bg-black/40 px-3 py-2.5">
                        <div className="h-7 w-7 rounded-md bg-white/5 grid place-items-center text-white/80"><I className="h-3.5 w-3.5" /></div>
                        <div className="min-w-0">
                          <div className="text-[13px] text-white truncate">{it.name}</div>
                          <div className="text-[11.5px] text-white/50 truncate">{it.hint}</div>
                        </div>
                        <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/30" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== WAIMS TECH · 9 AGENTS ============================== */
function Waims() {
  const agents = [
    { phase: 'Design & Template',       icon: PenTool,     name: 'Architect',            hint: 'Reference architectures' },
    { phase: 'Design & Template',       icon: Hammer,      name: 'Builder',              hint: 'Provisions the plan' },
    { phase: 'Design & Template',       icon: Boxes,       name: 'Modular Code',         hint: 'Composable IaC blocks' },
    { phase: 'Compliance & Security',   icon: FileCheck2,  name: 'Rule Checker',         hint: 'Policy-as-code' },
    { phase: 'Compliance & Security',   icon: Bug,         name: 'Cyber Auditor',        hint: 'Continuous posture scan' },
    { phase: 'Distribution & Release',  icon: Rocket,      name: 'DevOps Agent',         hint: 'Parallel multi-region release' },
    { phase: 'Distribution & Release',  icon: GitBranch,   name: 'GitOps',               hint: 'Declarative reconciliation' },
    { phase: 'Cleaning & Efficiency',   icon: Wrench,      name: 'AI Context Purger',    hint: 'Removes stale AI context safely' },
    { phase: 'Cleaning & Efficiency',   icon: Trash2,      name: 'Autonomous Site Janitor', hint: 'Reclaims idle cloud resources' },
  ]
  const groups = ['Design & Template', 'Compliance & Security', 'Distribution & Release', 'Cleaning & Efficiency']
  return (
    <section id="waims" className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">WAIMS Tech Engine</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            Nine specialized agents. <span className="text-dim">One orchestrator.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            WAIMS is the multi-agent tech layer behind WAIOS Master. Each agent owns a single job.
            None of them run without governance. All of them write to the same BlackBox.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {groups.map((phase, gi) => (
            <Reveal key={phase} delay={gi * 0.05}>
              <div className="rounded-2xl border hairline bg-[#0A0A0C] p-6">
                <div className="flex items-baseline justify-between">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#FF6B1A]">Phase 0{gi + 1}</div>
                  <div className="text-[13.5px] text-white">{phase}</div>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {agents.filter((a) => a.phase === phase).map((a) => {
                    const I = a.icon
                    return (
                      <div key={a.name} className="rounded-xl border hairline bg-black/40 p-4 card-hover">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-white/5 grid place-items-center text-white/85"><I className="h-4 w-4" /></div>
                          <div className="text-[14px] text-white font-medium">{a.name}</div>
                        </div>
                        <div className="mt-2 text-[12.5px] text-dim">{a.hint}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== METRICS ============================== */
function Metrics() {
  const items = [
    { v: <Counter to={6} />,   k: 'phases in the loop' },
    { v: <Counter to={9} />,   k: 'specialized agents' },
    { v: <Counter to={3} />,   k: 'clouds, one brain' },
    { v: <span>&lt;3s</span>,  k: 'pipeline latency' },
    { v: <span>0</span>,       k: 'installed footprint' },
    { v: <span>100%</span>,    k: 'actions attributable' },
  ]
  return (
    <section className="relative py-20 md:py-24 hairline-b">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="rounded-2xl border hairline bg-black/40 p-6 h-full">
              <div className="text-[36px] md:text-[44px] font-semibold tracking-[-0.03em] text-white">{it.v}</div>
              <div className="mt-1 text-[12.5px] text-dim">{it.k}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ============================== PRICING ============================== */
function Pricing() {
  const tiers = [
    {
      name: 'Base',
      price: 'From $99',
      unit: 'per tenant / month',
      tag: 'Visibility',
      desc: 'Compliance drift detection, risk scoring, and WAI Advisor briefings across your cloud footprint.',
      bullets: ['AWS Config + SSM inventory', 'Risk Calculator + WAI Advisor', 'Forensic BlackBox (read-only)', 'Ops Query natural language search'],
      highlight: false,
    },
    {
      name: 'Compliance',
      price: 'From $299',
      unit: 'per tenant / month',
      tag: 'Governance',
      desc: 'Everything in Base, plus one-click CAB approval, RBAC, and full ISO / ITIL evidence.',
      bullets: ['One-click CAB, HMAC signed', 'RBAC + identity verification', 'KMS + Object Lock BlackBox', 'ISO 27001 / ITIL v5 mapping'],
      highlight: true,
    },
    {
      name: 'Auto-Remediation',
      price: 'From $799',
      unit: 'per tenant / month',
      tag: 'Full loop',
      desc: 'Everything in Compliance, plus real remediation, rollback, multi-cloud and premium reasoning.',
      bullets: ['Remediation Lambda + Rollback Engine', 'WAIMS Tech, 9 agents', 'AWS + Azure + GCP', 'Priority premium reasoning (WAI-S-Oracle)'],
      highlight: false,
    },
  ]
  return (
    <section id="pricing" className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Pricing</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            Predictable base. <span className="text-dim">Fair usage-based overage.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            Every tenant sees their own AI cost, event count, and remediation history, straight from
            the BlackBox. No hidden markup, no per-seat surprise.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className={`relative rounded-2xl border p-7 h-full flex flex-col ${
                t.highlight ? 'border-white/30 bg-white/[0.04]' : 'hairline bg-[#0A0A0C]'
              }`}>
                {t.highlight && (
                  <div className="absolute -top-2.5 left-6 text-[10px] tracking-[0.22em] uppercase rounded-full bg-[#FF6B1A] text-black px-2 py-0.5">Most popular</div>
                )}
                <div className="text-[11px] tracking-[0.2em] uppercase text-dimmer">{t.tag}</div>
                <div className="mt-1 text-[22px] font-semibold text-white tracking-tight">{t.name}</div>
                <div className="mt-5">
                  <div className="text-[36px] font-semibold tracking-[-0.02em] text-white">{t.price}</div>
                  <div className="text-[12.5px] text-dimmer">{t.unit}</div>
                </div>
                <p className="mt-4 text-[13.5px] text-dim">{t.desc}</p>
                <ul className="mt-5 space-y-2">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13.5px] text-white/80">
                      <Check className="h-4 w-4 text-[#FF6B1A] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-auto pt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium ${
                  t.highlight ? 'text-white' : 'text-white/85 hover:text-white transition'
                }`}>Start with {t.name} <ArrowRight className="h-4 w-4" /></a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-dim rounded-2xl border hairline bg-black/40 px-5 py-4">
            <span className="inline-flex items-center gap-1.5 text-white"><Check className="h-3.5 w-3.5 text-[#FF6B1A]" /> Hybrid billing: base + usage overage</span>
            <span className="text-white/25">·</span>
            <span>Per-tenant token cost is logged to your BlackBox</span>
            <span className="text-white/25">·</span>
            <span>Metered via Stripe</span>
            <span className="text-white/25">·</span>
            <span>Annual plans available</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================== CTA ============================== */
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
            <span className="text-dim">a real event in your cloud.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 mx-auto max-w-2xl text-[18px] md:text-[20px] leading-relaxed text-dim text-pretty">
            A 30-minute session with the WAIOS team. We connect to a sandbox account, trigger a real
            compliance drift, and take it through the full loop with your context. You keep the BlackBox record.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-[14px] font-medium hover:bg-white/90 transition">
              Book a live demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-[14px] font-medium text-white/90 hover:bg-white/5 transition">
              Talk to the team
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
    { title: 'Product',      items: ['The Loop', 'In Action', 'Why WAIOS', 'The System', 'WAIMS Tech Engine', 'Pricing'] },
    { title: 'Architecture', items: ['WAIOS Master', 'WAI Advisor', 'WAI-S-Oracle', 'Risk Engine', 'CAB Workflow', 'Forensic BlackBox', 'KEDB'] },
    { title: 'Trust',        items: ['Security model', 'ISO 27001', 'ISO 22301', 'ITIL v5', 'Data processing'] },
    { title: 'Company',      items: ['About', 'Careers', 'Press', 'Contact'] },
  ]
  return (
    <footer className="hairline-t">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-6 w-6 rounded-md bg-white grid place-items-center">
              <div className="h-2 w-2 rounded-[2px] bg-black" />
            </div>
            <span className="text-[15px] font-medium text-white">WAIOS</span>
          </div>
          <p className="mt-4 text-[13px] text-dim leading-relaxed">
            The Autonomous Enterprise Operating System. Governed by design, built on Enterprise Linux.
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
            <a href="#" className="hover:text-white transition">Status</a>
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
      <TrustStrip />
      <Industries />
      <Problem />
      <Loop />
      <Live />
      <Differentiators />
      <System />
      <Waims />
      <Metrics />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
