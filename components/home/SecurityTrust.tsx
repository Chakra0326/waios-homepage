'use client'

import { KeyRound, UserCheck, LockKeyhole, FileSearch, Layers3, MapPin, LifeBuoy, Cloud } from 'lucide-react'
import { Reveal } from './Common'

const trust = [
  ['Identity & Access','Controlled cloud-native access patterns avoid permanent root credentials. Future Spokes use revocable, scoped identity relationships.',KeyRound],
  ['Human-in-the-Loop','High-impact production actions remain behind defined human authorization boundaries.',UserCheck],
  ['Encryption','Forensic BlackBox records are encrypted at rest using AWS KMS. Full WORM immutability is not claimed.',LockKeyhole],
  ['Auditability','Detection, risk, approval, remediation, rollback, and outcomes can be recorded as operational evidence.',FileSearch],
  ['Tenant Isolation','Designed around tenant-scoped isolation and RBAC. Backend boundaries—not prompts—must enforce authorized access.',Layers3],
  ['Data Residency','The current foundation runs in AWS. Enterprise residency options depend on the selected deployment architecture.',MapPin],
  ['Disaster Recovery','Restore-point, rollback, and standby/failover work support continuity without implying global DR certification.',LifeBuoy],
]

export function SecurityTrust() {
  return <section id="trust-deep" className="py-24 md:py-32 hairline-b">
    <div className="max-w-6xl mx-auto px-6">
      <Reveal><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Security &amp; Trust</div><h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">Trust is part of <span className="text-dim">the architecture.</span></h2></Reveal>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">{trust.map(([title,body,Icon]: any) => <Reveal key={title} className="bg-[#070707] p-6"><Icon className="h-5 w-5 text-emerald-400"/><h3 className="mt-5 text-[16px] text-white">{title}</h3><p className="mt-2 text-[13.5px] leading-relaxed text-dim">{body}</p></Reveal>)}</div>
      <Reveal><div className="mt-8 rounded-2xl border hairline bg-[#0A0A0C] p-6 md:p-8 grid lg:grid-cols-[1fr_1.4fr] gap-8"><div><div className="flex items-center gap-2"><Cloud className="h-4 w-4 text-[#FF6B1A]"/><span className="text-[11px] tracking-widest uppercase text-white/50">Current AWS foundation</span></div><div className="mt-4 flex flex-wrap gap-2">{['Lambda','AWS Config','EventBridge','SQS','SSM','CloudWatch','KMS','EC2 reference infrastructure','AWS-native identity'].map(x => <span key={x} className="rounded-full border hairline px-3 py-1 text-[11px] text-white/65">{x}</span>)}</div></div><div><div className="text-[12px] uppercase tracking-widest text-white/50">Certification status</div><p className="mt-3 text-[14px] text-dim leading-relaxed">WAIOS automates and maps selected technical and operational controls. Formal certification is a separate independent process and is not implied unless certification evidence is explicitly published.</p><p className="mt-3 text-[12px] text-white/40">ISO/IEC 27001 security · ISO/IEC 20000-1 service management · ISO 22301 business continuity — control mapping.</p></div></div></Reveal>
    </div>
  </section>
}
