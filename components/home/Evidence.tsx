'use client'

import { Check, Database, FlaskConical, Route } from 'lucide-react'
import { Reveal } from './Common'

const groups = [
  { status: 'LIVE / VERIFIED', className: 'status-live', icon: Check, items: ['AWS discovery & events', 'Autonomous CMDB foundation', 'Risk Calculator', 'WAI Advisor', 'Human-in-the-Loop approval', 'BlackBox KMS encryption', 'EBS encryption remediation', 'Restore / rollback workflow', 'Problem Management & KEDB'] },
  { status: 'IN DEVELOPMENT', className: 'status-development', icon: FlaskConical, items: ['DR control expansion', 'Tenant-scoped RBAC & isolation'] },
  { status: 'ROADMAP', className: 'status-roadmap', icon: Route, items: ['External enterprise Spokes', 'Azure & Google Cloud', 'Advanced WAI Tech software factory', 'WAIMS', 'WAI-S-Oracle', 'WORM / Object Lock hardening'] },
]

export function Evidence() {
  return (
    <section id="evidence" className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3"><div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Product evidence</div><span className="status-reference">WAI Ecosystem</span></div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">Built foundation. <span className="text-dim">Explicit evidence.</span></h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-3xl">WAIOS distinguishes what is built from what is being built next. WAI Ecosystem is the internal live reference environment used to validate the current foundation.</p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon
            return <Reveal key={group.status} className="bg-[#08080A] p-6 md:p-7"><div className="flex items-center justify-between gap-4"><Icon className="h-4 w-4 text-white/50" /><span className={group.className}>{group.status}</span></div><div className="mt-6 space-y-3">{group.items.map((item) => <div key={item} className="flex gap-2.5 text-[13px] leading-5 text-white/65"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/35" />{item}</div>)}</div></Reveal>
          })}
        </div>
        <Reveal><div className="mt-7 flex items-start gap-3 border-l border-[#FF6B1A]/60 pl-5 text-[13px] leading-6 text-dim"><Database className="mt-1 h-4 w-4 shrink-0 text-[#FF6B1A]" />No customer claims, performance metrics, or certification claims are inferred from the internal reference environment. Public claims follow BUILD → VERIFY → CLAIM.</div></Reveal>
      </div>
    </section>
  )
}
