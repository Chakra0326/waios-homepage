'use client'

import { ArrowRight, Check, Code2, GitBranch, ShieldCheck } from 'lucide-react'
import { Reveal } from './Common'

export function SoftwareFactory() {
  return (
    <section className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3"><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">WAI Tech</div><span className="status-live">Automation foundation</span></div>
          <h2 className="mt-5 max-w-4xl text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">Governed technical automation, <span className="text-dim">extending toward delivery.</span></h2>
          <p className="mt-5 max-w-3xl text-[17px] md:text-[19px] leading-relaxed text-dim">The proven WAIOS foundation governs infrastructure discovery, risk, approval, remediation, verification, and evidence. WAI Tech extends that same control model into code and delivery.</p>
        </Reveal>

        <Reveal>
          <div className="mt-14 grid gap-8 border-y border-white/10 py-9 md:grid-cols-[0.9fr_auto_1.2fr] md:items-center">
            <div><span className="status-live">LIVE / VERIFIED</span><h3 className="mt-5 text-[20px] text-white">Operational automation foundation</h3><div className="mt-5 space-y-3">{['Infrastructure control','Policy & Human-in-the-Loop governance','Verified remediation & operational evidence'].map(item => <div key={item} className="flex items-center gap-2 text-[13px] text-white/65"><Check className="h-3.5 w-3.5 text-emerald-400" />{item}</div>)}</div></div>
            <ArrowRight className="hidden h-5 w-5 text-white/20 md:block" />
            <div><span className="status-roadmap">ROADMAP</span><h3 className="mt-5 text-[20px] text-white">Advanced software factory</h3><div className="mt-5 grid gap-4 sm:grid-cols-3">{[[Code2,'Code & IaC'],[ShieldCheck,'Security validation'],[GitBranch,'GitOps, release & production delivery']].map(([Icon,label]:any)=><div key={label} className="border-l border-white/10 pl-4"><Icon className="h-4 w-4 text-[#FF6B1A]"/><div className="mt-3 text-[12px] leading-5 text-white/60">{label}</div></div>)}</div></div>
          </div>
        </Reveal>
        <Reveal><p className="mt-7 max-w-3xl text-[14px] leading-7 text-dim">WAI Tech expands WAIOS governance into code, infrastructure, security validation, release, and production delivery. The complete automated software-factory capability is not presented as live.</p></Reveal>
      </div>
    </section>
  )
}
