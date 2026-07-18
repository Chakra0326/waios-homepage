'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Radar,
  Brain,
  Gavel,
  CheckCircle2,
  Cpu,
  Sparkles,
  Terminal,
  ChevronRight,
  Lock,
  GitBranch,
  Activity,
} from 'lucide-react'

/* -----------------------------------------------------------
   WAIOS Landing — Phase 1 (aha moment)
   Sections: Hero, Autonomous Loop, Live Operation, Final CTA
   ----------------------------------------------------------- */

const LOOP_PHASES = [
  { key: 'discover',   label: 'Discover',    icon: Radar,        blurb: 'Signals, alerts, and anomalies detected across connected enterprise systems.' },
  { key: 'understand', label: 'Understand',  icon: Brain,        blurb: 'Operational context assembled. Root cause analyzed against the CMDB and knowledge.' },
  { key: 'decide',     label: 'Decide',      icon: Sparkles,     blurb: 'Reasoning produces a remediation plan scored against risk, policy and impact.' },
  { key: 'approve',    label: 'Approve',     icon: Gavel,        blurb: 'Governed by identity, policy and CAB workflow — human where it must be, automated where it can be.' },
  { key: 'act',        label: 'Act',         icon: Cpu,          blurb: 'Controlled execution across cloud, workloads and endpoints — without static credentials.' },
  { key: 'learn',      label: 'Learn',       icon: Activity,     blurb: 'Every decision and action recorded to the Forensic BlackBox and knowledge graph.' },
]

function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b hairline backdrop-blur-md bg-[#08090B]/70">
      <div className="container flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="relative h-7 w-7 rounded-md bg-gradient-to-br from-waios-orange to-waios-amber grid place-items-center">
            <div className="h-3 w-3 rounded-sm bg-waios-ink" />
            <div className="absolute inset-0 rounded-md ring-1 ring-white/20" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-waios-text">WAIOS</span>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.18em] text-waios-muted ml-1">Autonomous Enterprise OS</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-waios-muted">
          <a href="#loop" className="hover:text-waios-text transition">The Loop</a>
          <a href="#live" className="hover:text-waios-text transition">Live Operation</a>
          <a href="#architecture" className="hover:text-waios-text transition">Architecture</a>
          <a href="#contact" className="hover:text-waios-text transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#live" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-waios-text/90 hover:text-white transition px-3 py-1.5 rounded-md border hairline">
            <Play className="h-3.5 w-3.5" /> Watch
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-md bg-waios-orange text-black hover:brightness-110 transition">
            Book a demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ---------- HERO ---------- */
function LoopOrbit({ active = 0 }) {
  // Subtle rotating loop visual: 6 nodes on a circle
  const nodes = LOOP_PHASES
  const R = 128
  return (
    <div className="relative mx-auto h-[320px] w-[320px] md:h-[380px] md:w-[380px]">
      <div className="absolute inset-0 rounded-full border border-white/5" />
      <div className="absolute inset-6 rounded-full border border-white/5" />
      <div className="absolute inset-14 rounded-full border border-dashed border-white/10" />
      {/* rotating sweep */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute left-1/2 top-1/2 h-[1px] w-[46%] origin-left"
          style={{ background: 'linear-gradient(90deg, rgba(255,107,26,0.65), transparent)' }} />
      </motion.div>

      {/* center */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-20 w-20 rounded-full glass-strong grid place-items-center">
          <div className="text-[10px] uppercase tracking-[0.2em] text-waios-muted">WAIOS</div>
        </div>
      </div>

      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
        const x = Math.cos(angle) * R
        const y = Math.sin(angle) * R
        const isActive = i === active
        const Icon = n.icon
        return (
          <div
            key={n.key}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <div className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${isActive ? 'scale-110' : 'opacity-70'}`}>
              <div className={`h-11 w-11 rounded-xl grid place-items-center border ${isActive ? 'bg-waios-orange text-black border-waios-orange glow-orange' : 'glass text-waios-text/80'}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className={`text-[10px] uppercase tracking-widest ${isActive ? 'text-waios-orange' : 'text-waios-muted'}`}>{n.label}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Hero() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % LOOP_PHASES.length), 1800)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 waios-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        style={{ background: 'radial-gradient(600px 260px at 50% 0%, rgba(255,107,26,0.10), transparent 70%)' }} />

      <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border hairline glass px-3 py-1 text-xs text-waios-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-waios-orange animate-pulse-soft" />
              Autonomous Ecosystem CMDB · Enterprise Linux · Governed by design
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white text-balance leading-[1.05]">
              The Operating Layer for
              <br className="hidden md:block" />{' '}
              <span className="bg-gradient-to-r from-waios-orange to-waios-amber bg-clip-text text-transparent">
                Autonomous Enterprise Operations.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-waios-muted text-balance">
              WAIOS connects your enterprise systems, AI reasoning, governance, human approval, execution and learning
              into <span className="text-waios-text">one accountable operational loop</span> — from detection to resolution, autonomously.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#live" className="inline-flex items-center gap-2 rounded-md bg-waios-orange text-black px-5 py-3 font-medium hover:brightness-110 transition">
                See WAIOS in Action <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#architecture" className="inline-flex items-center gap-2 rounded-md border hairline glass px-5 py-3 text-waios-text hover:bg-white/5 transition">
                Explore the Architecture
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { icon: ShieldCheck, k: 'Governed', v: 'Policy, identity & CAB approval' },
                { icon: Lock,        k: 'Credential-less', v: 'No static root credentials' },
                { icon: GitBranch,   k: 'Auditable', v: 'Forensic BlackBox trail' },
              ].map(({ icon: I, k, v }) => (
                <div key={k} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-md glass grid place-items-center text-waios-orange">
                    <I className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white">{k}</div>
                    <div className="text-xs text-waios-muted">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-waios-orange/10 via-transparent to-transparent blur-2xl" />
              <div className="relative rounded-2xl border hairline glass-strong p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-waios-muted">The WAIOS Loop</div>
                  <div className="text-[10px] text-waios-muted font-mono">phase · {String(active + 1).padStart(2, '0')}/06</div>
                </div>
                <LoopOrbit active={active} />
                <div className="mt-4 min-h-[48px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                      className="text-sm text-waios-text/90"
                    >
                      <span className="text-waios-orange font-medium">{LOOP_PHASES[active].label}.</span>{' '}
                      <span className="text-waios-muted">{LOOP_PHASES[active].blurb}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-x h-px w-full" />
    </section>
  )
}

/* ---------- LOOP SECTION ---------- */
function LoopSection() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % LOOP_PHASES.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="loop" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-waios-orange">The core mechanism</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
            One operational event. One accountable chain of reasoning.
          </h2>
          <p className="mt-4 text-waios-muted text-lg text-balance">
            Every operation in WAIOS travels through the same six-phase loop — the same one an experienced operator would follow,
            executed with AI reasoning and enterprise-grade control.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* Horizontal connector */}
          <div className="hidden md:block absolute left-0 right-0 top-[54px] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 12%, rgba(255,255,255,0.12) 88%, transparent)' }} />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2">
            {LOOP_PHASES.map((p, i) => {
              const Icon = p.icon
              const isActive = i === active
              return (
                <button
                  type="button"
                  key={p.key}
                  onClick={() => setActive(i)}
                  className="group text-left focus:outline-none"
                >
                  <div className="flex flex-col items-center">
                    <div className={`relative h-[108px] w-full rounded-xl border transition-all duration-500 grid place-items-center
                      ${isActive ? 'border-waios-orange/60 bg-gradient-to-b from-waios-orange/[0.12] to-transparent' : 'hairline glass'}`}>
                      <div className={`h-12 w-12 rounded-lg grid place-items-center border transition-colors
                        ${isActive ? 'bg-waios-orange text-black border-waios-orange' : 'border-white/10 text-waios-text/80'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="absolute top-2 left-2 text-[10px] font-mono text-waios-muted">0{i + 1}</div>
                    </div>
                    <div className={`mt-3 text-sm font-medium ${isActive ? 'text-white' : 'text-waios-text/80'}`}>{p.label}</div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 rounded-xl border hairline glass p-5 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="h-9 w-9 rounded-md bg-waios-orange text-black grid place-items-center flex-shrink-0">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-white text-lg font-medium">{LOOP_PHASES[active].label}</div>
                  <div className="text-waios-muted mt-1 max-w-3xl">{LOOP_PHASES[active].blurb}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- LIVE OPERATION TERMINAL ---------- */
const SCENARIO = [
  { phase: 'DISCOVER',   ts: '09:14:22', level: 'info',  text: 'Signal ingested · payments-api-prod · error-rate 4.9% (5m)  ↑ SLO breach imminent' },
  { phase: 'DISCOVER',   ts: '09:14:22', level: 'info',  text: 'Correlated 12 telemetry sources · 3 downstream deps · CMDB CI: svc-pay-01' },
  { phase: 'UNDERSTAND', ts: '09:14:24', level: 'info',  text: 'WAI Advisor · assembling operational context …' },
  { phase: 'UNDERSTAND', ts: '09:14:26', level: 'ok',    text: 'Root cause · connection pool exhaustion after deploy v4.12.3 (14m ago)' },
  { phase: 'UNDERSTAND', ts: '09:14:26', level: 'info',  text: 'KEDB match · KE-2231 · previously resolved by pool resize + canary rollback' },
  { phase: 'DECIDE',     ts: '09:14:27', level: 'info',  text: 'Plan proposed · (a) rollback v4.12.3 on 20% canary  (b) raise pool 64 → 128' },
  { phase: 'DECIDE',     ts: '09:14:27', level: 'info',  text: 'Risk score · 0.21 (low)  · Blast radius · 1 service · Reversible · yes' },
  { phase: 'APPROVE',    ts: '09:14:28', level: 'warn',  text: 'Policy gate · production write requires CAB approval · notifying on-call SRE' },
  { phase: 'APPROVE',    ts: '09:14:41', level: 'ok',    text: 'CAB · 1-click approval received · signer: s.mehta@corp · MFA verified' },
  { phase: 'ACT',        ts: '09:14:42', level: 'info',  text: 'Executing via WAIOS Master · no static credentials · scoped short-lived token' },
  { phase: 'ACT',        ts: '09:14:47', level: 'ok',    text: 'Canary rollback complete · pool resized · health checks passing (8/8)' },
  { phase: 'ACT',        ts: '09:14:52', level: 'ok',    text: 'Error-rate 0.4% · latency p95 · 214ms · SLO restored' },
  { phase: 'LEARN',      ts: '09:14:53', level: 'ok',    text: 'Recorded to Forensic BlackBox · run-id 8f2c…a91 · signed & immutable' },
  { phase: 'LEARN',      ts: '09:14:53', level: 'info',  text: 'KEDB updated · playbook confidence 0.94 · next-time · auto-approve within policy' },
]

const LEVEL_COLORS = {
  info: 'text-waios-muted',
  ok:   'text-emerald-400',
  warn: 'text-amber-400',
  err:  'text-rose-400',
}
const PHASE_COLORS = {
  DISCOVER:   'text-cyan-300 bg-cyan-500/10 border-cyan-400/20',
  UNDERSTAND: 'text-violet-300 bg-violet-500/10 border-violet-400/20',
  DECIDE:     'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/20',
  APPROVE:    'text-amber-300 bg-amber-500/10 border-amber-400/20',
  ACT:        'text-orange-300 bg-orange-500/10 border-orange-400/20',
  LEARN:      'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
}

function LiveOperation() {
  const [visible, setVisible] = useState(1)
  const [running, setRunning] = useState(true)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!running) return
    if (visible >= SCENARIO.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 700 + Math.random() * 600)
    return () => clearTimeout(t)
  }, [visible, running])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [visible])

  const currentPhase = useMemo(() => {
    const idx = Math.min(visible - 1, SCENARIO.length - 1)
    return SCENARIO[Math.max(0, idx)].phase
  }, [visible])

  const progress = useMemo(() => {
    const map = { DISCOVER: 1, UNDERSTAND: 2, DECIDE: 3, APPROVE: 4, ACT: 5, LEARN: 6 }
    return map[currentPhase] || 1
  }, [currentPhase])

  const reset = () => { setVisible(1); setRunning(true) }

  return (
    <section id="live" className="relative py-24 md:py-32">
      <div className="absolute inset-0 waios-grid-fine opacity-30 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-waios-orange">Live operation</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
              Watch WAIOS handle a real operational event.
            </h2>
            <p className="mt-4 text-waios-muted text-lg text-balance">
              A production incident on <span className="text-waios-text font-mono">payments-api-prod</span> — from first signal to signed audit trail — in under a minute.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border hairline text-waios-text hover:bg-white/5">
              <Play className="h-3.5 w-3.5" /> Replay
            </button>
            <button onClick={() => setRunning((r) => !r)} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border hairline text-waios-text hover:bg-white/5">
              {running ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>

        {/* Phase progress bar */}
        <div className="mt-8 grid grid-cols-6 gap-2">
          {['DISCOVER','UNDERSTAND','DECIDE','APPROVE','ACT','LEARN'].map((p, i) => {
            const state = progress > i + 1 ? 'done' : progress === i + 1 ? 'active' : 'idle'
            return (
              <div key={p} className="flex flex-col gap-1.5">
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  state === 'done' ? 'bg-emerald-500/70' : state === 'active' ? 'bg-waios-orange' : 'bg-white/8'
                }`} />
                <div className={`text-[10px] tracking-widest uppercase ${state === 'idle' ? 'text-waios-muted/60' : 'text-waios-text/90'}`}>{p}</div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 rounded-2xl border hairline glass-strong overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-3 px-4 h-10 border-b hairline bg-black/40">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="text-xs text-waios-muted font-mono flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" /> waios://ops/incident/INC-88214 · region:eu-west-1
            </div>
            <div className="ml-auto flex items-center gap-3 text-[11px] text-waios-muted">
              <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" /> live</span>
              <span className="font-mono">run-id 8f2c…a91</span>
            </div>
          </div>

          {/* Log body */}
          <div ref={scrollRef} className="term-scroll max-h-[440px] overflow-y-auto p-5 font-mono text-[13px] leading-relaxed bg-[#0A0B0D]">
            {SCENARIO.slice(0, visible).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-[76px_110px_1fr] gap-3 py-1"
              >
                <span className="text-waios-muted/70">{line.ts}</span>
                <span className={`inline-flex items-center justify-center px-1.5 rounded border text-[10px] tracking-widest ${PHASE_COLORS[line.phase]}`}>
                  {line.phase}
                </span>
                <span className={LEVEL_COLORS[line.level]}>
                  {line.level === 'ok' && <CheckCircle2 className="inline h-3.5 w-3.5 mr-1 -mt-0.5 text-emerald-400" />}
                  {line.text}
                </span>
              </motion.div>
            ))}
            {visible < SCENARIO.length && running && (
              <div className="mt-2 text-waios-muted">
                <span className="caret" />
              </div>
            )}
            {visible >= SCENARIO.length && (
              <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 text-emerald-300">
                <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4" /> Incident resolved · 00:00:31</div>
                <div className="mt-1 text-emerald-200/80 text-xs">Signed audit trail written to Forensic BlackBox. KEDB updated. No human paged out of hours.</div>
              </div>
            )}
          </div>

          {/* Footer strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t hairline">
            {[
              { k: 'Time to resolution', v: '00:00:31' },
              { k: 'Human actions',     v: '1 · CAB approval' },
              { k: 'Services touched',  v: 'svc-pay-01' },
              { k: 'Auditable',         v: 'Signed · immutable' },
            ].map((s) => (
              <div key={s.k} className="px-5 py-4 border-r hairline last:border-r-0">
                <div className="text-[10px] uppercase tracking-widest text-waios-muted">{s.k}</div>
                <div className="mt-1 text-sm text-white font-mono">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border hairline glass-strong p-10 md:p-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-waios-orange/20 blur-3xl" />
          <div className="absolute inset-0 waios-grid opacity-40 pointer-events-none" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-waios-orange">Ready when you are</div>
              <h3 className="mt-3 text-3xl md:text-5xl font-semibold text-white tracking-tight text-balance">
                See WAIOS run one of your own operational events — end to end.
              </h3>
              <p className="mt-4 text-waios-muted text-lg max-w-2xl">
                A guided 30-minute session with the WAIOS team. Bring a real incident, alert, or change request.
                We will show you the full loop — discover, understand, decide, approve, act, learn — with your context.
              </p>
            </div>
            <div className="md:col-span-4 flex md:flex-col gap-3 md:items-stretch">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-waios-orange text-black px-5 py-3 font-medium hover:brightness-110 transition">
                Book a live demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#architecture" className="inline-flex items-center justify-center gap-2 rounded-md border hairline text-white px-5 py-3 hover:bg-white/5 transition">
                Talk to the WAIOS Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer id="architecture" className="mt-16 border-t hairline">
        <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-waios-orange to-waios-amber grid place-items-center">
              <div className="h-3 w-3 rounded-sm bg-waios-ink" />
            </div>
            <div>
              <div className="text-sm text-white">WAIOS</div>
              <div className="text-xs text-waios-muted">Autonomous Enterprise Operating System</div>
            </div>
          </div>
          <div className="text-xs text-waios-muted">
            © {new Date().getFullYear()} WAIOS. Governed by design. Built on Enterprise Linux.
          </div>
        </div>
      </footer>
    </section>
  )
}

/* ---------- APP ---------- */
function App() {
  return (
    <div className="min-h-screen text-waios-text">
      <NavBar />
      <Hero />
      <LoopSection />
      <LiveOperation />
      <FinalCTA />
    </div>
  )
}

export default App
