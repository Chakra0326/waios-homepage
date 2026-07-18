'use client'

import {
  ArrowRight, } from 'lucide-react'
import { Reveal, LiveDot } from "./Common"

export function CTA() {
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

