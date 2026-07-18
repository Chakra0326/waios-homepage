'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight, } from 'lucide-react'
import { Reveal, EASE } from "./Common"

export function ArchitectureHint() {
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

