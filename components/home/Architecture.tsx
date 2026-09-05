'use client'

import { ArrowDown, Building2, Database, History, Network, ShieldCheck, Wrench } from 'lucide-react'
import { Reveal } from './Common'

const flow = [
  ['Discovery & Events', 'AWS Config · EventBridge · SQS · SSM'],
  ['Autonomous CMDB', 'Current operational truth and relationships'],
  ['Risk & Policy Engine', 'Impact, control, and permitted action'],
  ['WAI Advisor', 'Context, recommendation, and approval intelligence'],
  ['Policy / Human Approval Gate', 'Authority applied according to risk'],
  ['Remediation Engine', 'Controlled and reversible execution'],
  ['Verification / Rollback', 'Validate outcome, restore when required'],
]

export function Architecture() {
  return (
    <section id="architecture" className="relative py-24 md:py-32 hairline-b bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">System architecture</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white max-w-4xl">
            One governed chain, <span className="text-dim">from signal to verified state.</span>
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-3xl">The WAIOS Hub / Master centralizes operational intelligence and governance. Customer environments remain under customer control and connect through scoped, revocable permissions.</p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.4fr] gap-6 items-start">
          <Reveal>
            <div className="rounded-2xl border hairline bg-black/60 p-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between"><span className="text-[11px] tracking-widest uppercase text-white/50">Customer / Spoke</span><span className="status-roadmap">Enterprise onboarding</span></div>
              <div className="mt-5 flex items-center gap-3"><Building2 className="h-6 w-6 text-[#FF6B1A]"/><div><div className="text-white font-medium">One customer organization</div><div className="text-[13px] text-dimmer">Not merely one cloud account</div></div></div>
              <div className="mt-6 pt-5 border-t border-white/10 text-[13px] text-dim leading-relaxed">A Spoke can eventually connect cloud accounts, applications, repositories, operational systems, and business systems. AWS is the currently proven foundation; Azure and GCP are roadmap.</div>
              <div className="mt-5 text-[11px] font-mono text-emerald-400">↓ scoped cloud-native permissions</div>
              <div className="mt-5 rounded-xl border border-[#FF6B1A]/25 bg-[#FF6B1A]/5 p-4"><div className="text-[11px] tracking-widest uppercase text-[#FF6B1A]">WAIOS Hub / Master</div><div className="mt-2 text-[13px] text-white/60">Central control plane, CMDB, risk, governance, remediation, evidence, and orchestration.</div></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border hairline bg-[#0A0A0C] p-5 md:p-7">
              {flow.map(([title, detail], i) => <div key={title} className="flex flex-col items-center"><div className="w-full rounded-xl border hairline bg-black/50 p-4 flex items-center gap-4"><div className="h-8 w-8 rounded-lg bg-white/5 grid place-items-center text-[11px] font-mono text-white/50">{String(i+1).padStart(2,'0')}</div><div><div className="text-[14px] text-white">{title}</div><div className="text-[12.5px] text-dimmer">{detail}</div></div></div>{i < flow.length - 1 && <ArrowDown className="h-4 w-4 text-white/20 my-2"/>}</div>)}
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {[['CMDB','What is true now',Database],['BlackBox','What happened',History],['KEDB','What previously worked',Wrench]].map(([k,v,Icon]: any) => <div key={k} className="rounded-xl border hairline p-4"><Icon className="h-4 w-4 text-emerald-400"/><div className="mt-3 text-[13px] text-white">{k}</div><div className="text-[11.5px] text-dimmer">{v}</div></div>)}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border hairline p-6 md:p-8">
            <div className="flex items-center gap-2"><Network className="h-4 w-4 text-[#FF6B1A]"/><span className="text-[11px] tracking-widest uppercase text-white/50">Hub and Spoke direction</span></div>
            <div className="mt-7 grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5"><span className="status-reference">Internal reference</span><div className="mt-4 text-white">WAI Ecosystem</div><p className="mt-2 text-[13px] text-dim">Live environment for validating discovery, governance, remediation, rollback, audit, and infrastructure-control workflows.</p></div>
              {['Company A Spoke','Company B Spoke'].map(x => <div key={x} className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-5"><span className="status-roadmap">Roadmap</span><div className="mt-4 text-white">{x}</div><p className="mt-2 text-[13px] text-dimmer">Logically isolated enterprise onboarding with tenant-scoped access.</p></div>)}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="status-live">AWS · Live</span>
            <span className="status-reference">WAI Ecosystem · Internal reference</span>
            <span className="status-roadmap">External Spoke onboarding · Roadmap</span>
            <span className="status-roadmap">Azure · Roadmap</span>
            <span className="status-roadmap">GCP · Roadmap</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
