'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal, LiveDot } from "./Common"
import { MiniConsole } from "./MiniConsole"

const trustSignals = [
  'ITIL-aligned operations',
  'ISO control-mapped architecture',
  'AWS Live',
  'Human-Governed Autonomy',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden noise grain flex flex-col items-center pt-12 md:pt-16 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border hairline px-3 py-1 text-[11.5px] text-white/70 mb-8">
            <LiveDot /> The autonomous enterprise operating system
          </div>
        </Reveal>
        
        <Reveal delay={0.05}>
          <h1 className="text-[52px] md:text-[80px] lg:text-[96px] leading-[1.05] font-semibold tracking-[-0.04em] text-white text-balance max-w-4xl mx-auto">
            Deploy Once, Govern Globally. <span className="text-dim">The Enterprise CMDB Factory.</span>
          </h1>
          <p className="mt-6 text-[22px] md:text-[30px] font-medium tracking-[-0.02em] text-white">
            From detection to resolution. <span className="text-[#FF6B1A]">Autonomously.</span>
          </p>
          <p className="mt-6 text-[18px] md:text-[20px] leading-relaxed text-dim max-w-3xl mx-auto text-balance">
            WAIOS continuously discovers infrastructure, assembles operational context through its CMDB, evaluates risk, routes approval where required, executes controlled remediation, verifies the outcome, and records the complete operational chain.
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#live" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-[15px] font-medium hover:bg-white/90 transition">
              See WAIOS in action <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#architecture" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border hairline px-6 py-3.5 text-[15px] font-medium text-white/90 hover:bg-white/5 transition">
              Explore the architecture
            </a>
          </div>
        </Reveal>
        
        <Reveal delay={0.18}>
          <div className="mt-16 md:mt-24 w-full max-w-5xl mx-auto shadow-2xl relative float-slow">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full glow-breathe" />
            <MiniConsole />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-20 grid w-full max-w-5xl auto-rows-fr grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-white/[0.08] md:mt-28 sm:grid-cols-4">
            {trustSignals.map((signal) => (
              <span key={signal} className="relative flex min-h-[88px] items-end justify-center bg-[#070708] px-3 pb-4 pt-10 text-center text-[9px] font-medium uppercase leading-4 tracking-[0.13em] text-white/55 sm:text-[10px]">
                <span aria-hidden="true" className="absolute left-1/2 top-5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.55)]" />
                {signal}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
