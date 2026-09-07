'use client'

import { BarChart3, BriefcaseBusiness, Megaphone, Workflow } from 'lucide-react'
import { Reveal } from './Common'

const modules = [
  ['WAIMS-FinOps','Financial intelligence across cost, margin, burn rate, runway, and cloud spending.',BarChart3],
  ['WAIMS-Ops','Operational intelligence across incidents, bottlenecks, builds, and service performance.',Workflow],
  ['WAIMS-Kreatif','Marketing intelligence across content, campaigns, brand, growth, and performance.',Megaphone],
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32 hairline-b bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3"><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Management intelligence</div><span className="status-roadmap">WAIMS · Roadmap</span></div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">WAI Management System. <span className="text-dim">Executive-function intelligence.</span></h2>
          <p className="mt-5 max-w-3xl text-[17px] md:text-[19px] leading-relaxed text-dim">Planned management intelligence modules designed to assist human executive functions. WAIMS does not replace legal or organizational leadership roles.</p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border-y border-white/10 bg-white/10 md:grid-cols-3">
          {modules.map(([title,copy,Icon]:any) => <Reveal key={title} className="bg-[#050505] px-6 py-8 md:px-8"><Icon className="h-5 w-5 text-[#FF6B1A]"/><div className="mt-6 text-[17px] text-white">{title}</div><p className="mt-3 text-[13.5px] leading-6 text-dim">{copy}</p></Reveal>)}
        </div>
        <Reveal><div className="mt-7 flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-white/35"><BriefcaseBusiness className="h-4 w-4"/>Human-led · policy-bounded · tenant-scoped</div></Reveal>
      </div>
    </section>
  )
}
