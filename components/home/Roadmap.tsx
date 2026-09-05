'use client'

import { ArrowDown, BookOpenCheck, BriefcaseBusiness, Building2, ShieldCheck } from 'lucide-react'
import { Reveal } from './Common'

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32 hairline-b bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3"><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Platform direction</div><span className="status-roadmap">Roadmap</span></div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">Beyond infrastructure. <span className="text-dim">Evidence-led expansion.</span></h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-3xl">The current autonomous operations foundation expands toward reusable service knowledge, governed business intelligence, and strategic analysis—without presenting those future layers as live today.</p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl border hairline bg-[#0A0A0C] p-6 md:p-8 h-full">
              <div className="flex items-center justify-between"><BookOpenCheck className="h-5 w-5 text-emerald-400"/><span className="status-roadmap">Service expansion</span></div>
              <h3 className="mt-6 text-[20px] text-white">From incident to reusable resolution</h3>
              <div className="mt-6 flex flex-col items-center">
                {['Incident','Problem','Known Error','Reusable Resolution'].map((item,i)=><div key={item} className="w-full flex flex-col items-center"><div className="w-full rounded-xl border hairline bg-black/40 px-4 py-3 text-[13px] text-white/70">{item}</div>{i<3&&<ArrowDown className="h-4 w-4 text-white/20 my-2"/>}</div>)}
              </div>
              <p className="mt-5 text-[13.5px] leading-relaxed text-dim">The CMDB provides relationship context. The KEDB retains proven remediation knowledge. Once a resolution is successfully verified, WAIOS should recognize and reuse it for future matching incidents when policy permits.</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 md:p-8 h-full">
              <div className="flex items-center justify-between"><BriefcaseBusiness className="h-5 w-5 text-[#FF6B1A]"/><span className="status-roadmap">WAIMS</span></div>
              <h3 className="mt-6 text-[20px] text-white">WAI Management System</h3>
              <p className="mt-2 text-[13.5px] text-dim">Planned intelligence modules that assist human executive functions; they do not replace legal or organizational leadership roles.</p>
              <div className="mt-6 space-y-3">
                {[['WAIMS-FinOps','Financial intelligence: cost, margin, burn rate, runway, and cloud spending.'],['WAIMS-Ops','Operational intelligence: incidents, bottlenecks, builds, and service performance.'],['WAIMS-Kreatif','Marketing intelligence: content, campaigns, brand, growth, and performance.']].map(([title,copy])=><div key={title} className="rounded-xl border hairline p-4"><div className="text-[13px] text-white">{title}</div><div className="mt-1 text-[12px] text-dimmer">{copy}</div></div>)}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 rounded-2xl border border-dashed border-white/15 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
              <div className="lg:w-1/3"><span className="status-roadmap">WAI-S-Oracle</span><h3 className="mt-5 text-[20px] text-white">Strategic intelligence, bounded by authorization.</h3><p className="mt-2 text-[13.5px] text-dim">Designed to assist CEOs, directors, and Boards—not act as an autonomous Board or artificial CEO.</p></div>
              <div className="flex-1 grid sm:grid-cols-4 gap-2 items-center">
                {[['CEO / Board',Building2],['WAI-S-Oracle',BriefcaseBusiness],['Authorized Intelligence Gateway',ShieldCheck],['Tenant-scoped sources',BookOpenCheck]].map(([title,Icon]:any,i)=><div key={title} className="relative rounded-xl border hairline bg-black/40 p-4 min-h-24"><Icon className="h-4 w-4 text-emerald-400"/><div className="mt-3 text-[12px] text-white/70">{title}</div>{i<3&&<span className="hidden sm:block absolute -right-2.5 top-1/2 text-white/25">→</span>}</div>)}
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-white/40"><span>Authenticated</span><span>Tenant scoped</span><span>Role restricted</span><span>Audited</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
