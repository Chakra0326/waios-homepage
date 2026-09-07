'use client'

import { ArrowRight, Cloud, KeyRound, Layers3, LifeBuoy, LockKeyhole } from 'lucide-react'
import { Reveal } from './Common'

const protections = [
  { title: 'Identity & Access', body: 'Current AWS controls use scoped cloud-native access patterns. Identity-bound enterprise approver controls remain in development.', icon: KeyRound, status: 'In development', statusClass: 'status-development' },
  { title: 'Encryption', body: 'Forensic BlackBox records are encrypted at rest using AWS KMS. Full WORM immutability is not claimed.', icon: LockKeyhole, status: 'Verified', statusClass: 'status-live' },
  { title: 'Tenant Isolation', body: 'Designed to be enforced by identity, authorization, policy, and the data layer—never by an AI prompt.', icon: Layers3, status: 'In development', statusClass: 'status-development' },
  { title: 'Business Continuity', body: 'Restore and rollback foundations are verified. Broader DR controls and failover capabilities continue to be developed.', icon: LifeBuoy, status: 'In development', statusClass: 'status-development' },
]

export function SecurityTrust() {
  return (
    <section id="trust-deep" className="py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Security &amp; Trust</div>
          <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white">Protected by architecture, <span className="text-dim">not promises.</span></h2>
          <p className="mt-5 max-w-3xl text-[17px] md:text-[19px] leading-relaxed text-dim">A compact view of the current protection model and the controls still being built. Detailed authority, Responsible AI, BlackBox, continuity, and compliance information lives in the Security &amp; Trust center.</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border-y border-white/10 bg-white/10 md:grid-cols-2">
          {protections.map(({ title, body, icon: Icon, status, statusClass }) => (
            <Reveal key={title} className="bg-[#070707] px-6 py-7 md:px-8">
              <div className="flex items-center justify-between gap-4"><Icon className="h-5 w-5 text-emerald-400"/><span className={statusClass}>{status}</span></div>
              <h3 className="mt-5 text-[16px] text-white">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-dim">{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col justify-between gap-6 border-l border-[#FF6B1A]/60 pl-5 md:flex-row md:items-center">
            <div><div className="flex items-center gap-2"><Cloud className="h-4 w-4 text-[#FF6B1A]"/><span className="text-[11px] tracking-widest uppercase text-white/50">Current AWS foundation</span></div><p className="mt-2 max-w-3xl text-[13px] leading-6 text-dim">Supports implementation and evidence collection for selected ISO/IEC 27001, ISO/IEC 20000-1, and ISO 22301 controls. This does not constitute certification.</p></div>
            <a href="/security" className="inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-white transition hover:text-[#FF6B1A]">Open Security &amp; Trust <ArrowRight className="h-4 w-4"/></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
