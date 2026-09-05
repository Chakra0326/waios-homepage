'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Play, Pause, Check,
  TerminalSquare,
} from 'lucide-react'
import { Reveal, LiveDot } from "./Common"
import { useEventStreamReveal } from '@/lib/useGsap'

export const SCENARIO = [
  { phase: 'DISCOVER', text: 'Infrastructure drift detected.' },
  { phase: 'DISCOVER', text: 'Affected resource identified through CMDB context.' },
  { phase: 'UNDERSTAND', text: 'Operational dependencies assembled.' },
  { phase: 'UNDERSTAND', text: 'Risk and blast radius evaluated.' },
  { phase: 'DECIDE', text: 'Known remediation knowledge checked.' },
  { phase: 'DECIDE', text: 'Restore and rollback path prepared.' },
  { phase: 'APPROVE', text: 'Governance policy evaluated.' },
  { phase: 'APPROVE', text: 'Authorized human approval required for high-impact action.' },
  { phase: 'ACT', text: 'Controlled remediation executed.' },
  { phase: 'VERIFY', ok: true, text: 'Result validated against expected infrastructure state.' },
  { phase: 'LEARN', ok: true, text: 'CMDB updated and encrypted audit record written.' },
  { phase: 'LEARN', ok: true, text: 'Successful remediation knowledge retained.' },
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
  const phases = ['DISCOVER','UNDERSTAND','DECIDE','APPROVE','ACT','VERIFY','LEARN']
  const phaseIndex = phases.indexOf(currentPhase)

  return (
    <section id="live" ref={sectionRef} className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
            <div className="flex items-center gap-3"><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">See it in action</div><span className="status-reference">Representative workflow</span></div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-3xl">
            See the autonomous loop <span className="text-dim">in action.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
            A representative WAIOS workflow showing how an operational event moves from detection through risk evaluation, governance, remediation, verification, and learning.
          </p>
        </Reveal>

        <div className="mt-12">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mb-6">
            {phases.map((p, i) => {
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
                  waios.console · workflow demonstration
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-white/50"><LiveDot className="text-[#FF6B1A]" /> simulated</span>
                  <button onClick={() => setRunning((r) => !r)} className="text-white/55 hover:text-white transition">
                    {running ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
              <div ref={bodyRef} className="term-scroll h-[440px] overflow-y-auto px-6 py-6 font-mono text-[13px] leading-[1.9]">
                {SCENARIO.map((line, i) => (
                  <div key={i} data-log-line
                    className="grid grid-cols-[70px_110px_1fr] gap-4 items-baseline">
                    <span className="text-white/30">STEP {String(i+1).padStart(2,'0')}</span>
                    <span className="inline-flex items-center justify-center h-[20px] rounded-full border hairline text-[10px] tracking-[0.16em] text-white/70 px-2">{line.phase}</span>
                    <span className={line.ok ? 'text-white' : 'text-white/60'}>
                      {line.ok && <span className="text-[#FF6B1A] mr-1.5">✔</span>}{line.text}
                    </span>
                  </div>
                ))}
                <div className="mt-6 pt-5 hairline-t text-white/85" data-log-line>
                  <span className="text-[#FF6B1A] mr-2">•</span>
                  Workflow complete. Outcome verified and operational evidence retained.
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
                  <div className="text-[12px] text-white/50">policy evaluated</div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white/70 w-[4%]" />
                </div>
              </div>
              <div data-side-panel className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Approval</div>
                  <div className="inline-flex items-center rounded-full border hairline px-2 py-0.5 text-[9px] font-medium tracking-widest uppercase text-white/50 bg-white/5">
                    Authority gate
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full bg-white/10 border hairline grid place-items-center text-[10.5px] text-white/85">H</div>
                  </div>
                  <div className="text-[12px] text-white/70">On‑call reviewer</div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-emerald-400">
                  <Check className="h-3.5 w-3.5" />
                  policy satisfied
                </div>
              </div>
              <div data-side-panel className="rounded-2xl border hairline bg-black/60 p-5">
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Verification</div>
                <div className="mt-3 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-5 rounded-sm bg-emerald-400/85" />
                  ))}
                </div>
                <div className="mt-2 text-[11.5px] text-white/60 font-mono">expected state matched</div>
              </div>
              <div data-side-panel className="col-span-2 rounded-2xl border hairline bg-black/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-dimmer">Audit trail</div>
                  <span className="text-[10.5px] font-mono text-white/50">encrypted · auditable</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-[12px]">
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">record</div>
                    <div className="font-mono text-white mt-1">BlackBox</div>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase tracking-widest text-[9.5px]">steps</div>
                    <div className="font-mono text-white mt-1">complete chain</div>
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
