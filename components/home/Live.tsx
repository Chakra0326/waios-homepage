'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Play, Pause, RotateCcw, Check, Circle,
  TerminalSquare,
} from 'lucide-react'
import { Reveal, LiveDot } from "./Common"
import { useEventStreamReveal } from '@/lib/useGsap'

export const SCENARIO = [
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

export function Live() {
  const [running, setRunning] = useState(true)
  const bodyRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEventStreamReveal(sectionRef)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [])

  const currentPhase = SCENARIO[SCENARIO.length - 1].phase
  const phaseIndex = ['DISCOVER','UNDERSTAND','DECIDE','APPROVE','ACT','LEARN'].indexOf(currentPhase)
  const passing = Math.min(8, Math.max(0, phaseIndex + 2))

  return (
    <section id="live" ref={sectionRef} className="relative py-24 md:py-32 hairline-b">
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
                </div>
              </div>
              <div ref={bodyRef} className="term-scroll h-[440px] overflow-y-auto px-6 py-6 font-mono text-[13px] leading-[1.9]">
                {SCENARIO.map((line, i) => (
                  <div key={i} data-log-line
                    className="grid grid-cols-[70px_110px_1fr] gap-4 items-baseline">
                    <span className="text-white/30">{line.ts}</span>
                    <span className="inline-flex items-center justify-center h-[20px] rounded-full border hairline text-[10px] tracking-[0.16em] text-white/70 px-2">{line.phase}</span>
                    <span className={line.ok ? 'text-white' : 'text-white/60'}>
                      {line.ok && <span className="text-[#FF6B1A] mr-1.5">✔</span>}{line.text}
                    </span>
                  </div>
                ))}
                <div className="mt-6 pt-5 hairline-t text-white/85" data-log-line>
                  <span className="text-[#FF6B1A] mr-2">•</span>
                  Resolved in 00:00:39. Signed audit trail written. No one paged out of hours.
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div data-side-panel className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Risk</div>
                  <span className="text-[10.5px] font-mono text-dimmer">0–100</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className="text-[36px] font-mono text-emerald-400">
                    00
                  </div>
                  <div className="text-[12px] text-white/50">resolved</div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white/70 w-[4%]" />
                </div>
              </div>
              <div data-side-panel className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Approval</div>
                  <div className="inline-flex items-center rounded-full border hairline px-2 py-0.5 text-[9px] font-medium tracking-widest uppercase text-white/50 bg-white/5">
                    One-click CAB approval
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">SM</div>
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">JK</div>
                  </div>
                  <div className="text-[12px] text-white/70">On‑call reviewer</div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-emerald-400">
                  <Check className="h-3.5 w-3.5" />
                  signed
                </div>
              </div>
              <div data-side-panel className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Health</div>
                <div className="mt-3 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-5 rounded-sm bg-emerald-400/85" />
                  ))}
                </div>
                <div className="mt-2 text-[11.5px] text-white/60 font-mono">8/8 passing</div>
              </div>
              <div data-side-panel className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
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
