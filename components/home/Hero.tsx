'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal, LiveDot } from "./Common"
import { MiniConsole } from "./MiniConsole"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden noise grain flex flex-col items-center pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border hairline px-3 py-1 text-[11.5px] text-white/70 mb-8">
            <LiveDot /> The autonomous enterprise operating system
          </div>
        </Reveal>
        
        <Reveal delay={0.05}>
          <h1 className="text-[52px] md:text-[80px] lg:text-[96px] leading-[1.05] font-semibold tracking-[-0.04em] text-white text-balance max-w-4xl mx-auto">
            From detection to resolution. <span className="text-dim">Autonomously.</span>
          </h1>
        </Reveal>
        
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#live" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-[15px] font-medium hover:bg-white/90 transition">
              See WAIOS in action <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border hairline px-6 py-3.5 text-[15px] font-medium text-white/90 hover:bg-white/5 transition">
              Book a demo
            </a>
          </div>
        </Reveal>
        
        <Reveal delay={0.18}>
          <div className="mt-16 md:mt-24 w-full max-w-5xl mx-auto shadow-2xl relative">
            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
            <MiniConsole />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-20 md:mt-28 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[13px] font-semibold tracking-widest uppercase text-white/40">
            <span>ITIL v5 Aligned</span>
            <span className="text-white/20">&middot;</span>
            <span>ISO 27001, 22301 & 20000-1</span>
            <span className="text-white/20">&middot;</span>
            <span>Zero-Footprint</span>
            <span className="text-white/20">&middot;</span>
            <span>AWS Live</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

