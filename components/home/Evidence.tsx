'use client'

import { Check, Database, FileLock2, Gauge, RotateCcw } from 'lucide-react'
import { Reveal } from './Common'

const evidence = [
  ['Discovery & control','AWS infrastructure discovery, SSM Inventory, AWS Config, configuration/control checking, EventBridge, SQS, and Lambda-based WAIOS services.'],
  ['Governed remediation','Risk Calculator, WAI Advisor, signed Human-in-the-Loop approval, restore-point creation, real EBS encryption remediation, and rollback architecture.'],
  ['Operational evidence','Forensic BlackBox logging encrypted with AWS KMS, natural-language Ops Query, per-tenant AI token/cost logging, and processing-latency measurement.'],
  ['Operational learning','Problem Management, Known Error Database remediation patterns, DR standby/failover work, and continuous operational governance.'],
]

export function Evidence() {
  return <section id="evidence" className="relative py-24 md:py-32 hairline-b">
    <div className="max-w-6xl mx-auto px-6">
      <Reveal><div className="flex items-center gap-3"><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Product evidence</div><span className="status-reference">WAI Ecosystem</span></div><h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">Built foundation. <span className="text-dim">Explicit evidence.</span></h2><p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-3xl">WAI Ecosystem is WAIOS’s internal live reference environment for validating discovery, governance, remediation, rollback, audit, and infrastructure-control workflows before external Spoke introduction.</p></Reveal>
      <Reveal><div className="mt-12 rounded-2xl border hairline bg-[#0A0A0C] overflow-hidden"><div className="px-6 py-4 border-b border-white/10 flex items-center justify-between"><div className="flex items-center gap-2"><Database className="h-4 w-4 text-emerald-400"/><span className="text-[11px] font-mono uppercase tracking-widest text-white/45">Verified / built foundation</span></div><span className="status-reference">Internal reference</span></div><div className="grid md:grid-cols-2">{evidence.map(([title,copy],i)=><div key={title} className={`p-6 md:p-7 ${i%2===0?'md:border-r':''} ${i<2?'border-b':''} border-white/10`}><div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/><h3 className="text-[14px] text-white">{title}</h3></div><p className="mt-3 text-[13px] leading-relaxed text-dim">{copy}</p></div>)}</div></div></Reveal>
      <div className="mt-6 grid sm:grid-cols-3 gap-3 text-[12px] text-white/55"><div className="flex gap-2"><FileLock2 className="h-4 w-4 text-[#FF6B1A]"/>KMS-encrypted BlackBox</div><div className="flex gap-2"><RotateCcw className="h-4 w-4 text-[#FF6B1A]"/>Restore and rollback path</div><div className="flex gap-2"><Gauge className="h-4 w-4 text-[#FF6B1A]"/>Latency measured, not inflated</div></div>
    </div>
  </section>
}
