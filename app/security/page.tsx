import type { Metadata } from 'next'
import { Check, ShieldCheck, X } from 'lucide-react'
import { InfoPageLayout, InfoSection, SignalCard } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'Security & Trust | WAIOS',
  description: 'The WAIOS trust model for identity, authority, encryption, tenant isolation, responsible AI, operational evidence, continuity, and compliance mapping.',
}

const evidenceFlow = ['Event detected','Resource identified','Risk evaluated','Remediation proposed','Authority checked','Restore point prepared','Action executed','Outcome verified','CMDB updated','Evidence recorded']

export default function SecurityPage() {
  return (
    <InfoPageLayout wide eyebrow="Security & Trust" title="Security and governance by design." intro="AI advises. Policy authorizes. WAIOS executes. BlackBox proves. Backend policy—not an AI prompt—determines whether an action may execute.">
      <InfoSection title="Authority remains explicit">
        <p className="text-[20px] font-medium text-white">Autonomy does not remove authority.</p>
        <div className="grid gap-4 md:grid-cols-3"><SignalCard label="Low risk">Policy-approved autonomous execution.</SignalCard><SignalCard label="Medium risk">Policy-controlled execution or Human-in-the-Loop review.</SignalCard><SignalCard label="High / Critical">Mandatory Human-in-the-Loop approval.</SignalCard></div>
        <p>The AI does not grant itself authority, cannot bypass policy, and cannot decide that its own output is permission to execute. The backend evaluates whether a proposed action is allowed.</p>
      </InfoSection>

      <InfoSection title="Security architecture">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{[
          ['Identity & Access','Scoped, revocable cloud-native permissions. No permanent root credentials as the target architecture.','Live foundation'],
          ['Human-in-the-Loop','Sensitive actions remain behind a Human-in-the-Loop approval gate. Identity-bound enterprise approver controls and tenant-scoped RBAC are in development.','Live'],
          ['Encryption','Current verified Forensic BlackBox records use AWS KMS encryption at rest.','Verified'],
          ['Auditability','Detection, risk, authority, remediation, rollback, verification, and outcome can produce evidence.','Live foundation'],
          ['Tenant Isolation','Designed to be enforced by identity, authorization, policy, and the data layer—never by an AI prompt.','In development'],
          ['Business Continuity','Restore point and rollback foundations are verified; broader DR controls continue to expand.','In development'],
        ].map(([title,copy,status])=><div key={title} className="bg-[#070708] p-6"><div className="flex items-center justify-between gap-3"><ShieldCheck className="h-4 w-4 text-emerald-400"/><span className={status==='In development'?'status-development':'status-live'}>{status}</span></div><h3 className="mt-5 text-[15px] text-white">{title}</h3><p className="mt-2 text-[13px] leading-6 text-white/55">{copy}</p></div>)}</div>
      </InfoSection>

      <InfoSection title="External enterprise onboarding gate" label="Priority engineering requirement · In development">
        <p>Tenant isolation and identity-bound authorization / RBAC are blockers for external enterprise onboarding. They must be implemented and verified before separate customer Spokes are connected. WAI Ecosystem remains the internal reference environment.</p>
        <div className="rounded-2xl border hairline bg-[#0A0A0C] p-6">
          <p className="text-[16px] leading-8 text-white">Tenant A identity → Tenant A policy → Tenant A CMDB → Tenant A credentials → Tenant A execution → Tenant A BlackBox</p>
        </div>
        <p>Each tenant requires this complete boundary. AI reasoning, retrieval, execution context, and operational evidence must remain within the authenticated tenant and authorized role scope, including CMDB, BlackBox, and KEDB access. Identity, authorization, policy, and data-layer controls must enforce isolation; an AI prompt cannot provide it.</p>
      </InfoSection>

      <InfoSection title="Responsible AI">
        <p>AI must never receive data outside the authenticated tenant and authorized role scope. Tenant-scoped RBAC and isolation are architecture requirements currently in development.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-t border-emerald-500/30 pt-5"><div className="text-[11px] uppercase tracking-[0.18em] text-emerald-400">AI can</div><div className="mt-5 space-y-3">{['Analyze operational context made available to it','Summarize evidence','Recommend a controlled response'].map(item=><div key={item} className="flex items-center gap-3 text-[14px] text-white/70"><Check className="h-4 w-4 text-emerald-400"/>{item}</div>)}</div></div>
          <div className="border-t border-[#FF6B1A]/30 pt-5"><div className="text-[11px] uppercase tracking-[0.18em] text-[#FF6B1A]">AI must never</div><div className="mt-5 space-y-3">{['Increase its own privilege or change authorization','Serve as the tenant-isolation or authorization control','Authorize itself or execute approval-gated changes'].map(item=><div key={item} className="flex items-center gap-3 text-[14px] text-white/70"><X className="h-4 w-4 text-[#FF6B1A]"/>{item}</div>)}</div></div>
        </div>
      </InfoSection>

      <InfoSection title="Every autonomous action should leave evidence" label="Forensic BlackBox">
        <p>BlackBox is the historical operational record for detection, affected resources, risk, recommendations, authority, remediation, rollback, verification, and outcomes. <strong>CMDB tells WAIOS what is true now. BlackBox proves what happened.</strong></p>
        <div className="rounded-2xl border hairline bg-[#0A0A0C] p-6 md:p-8"><div className="flex items-center justify-between gap-4"><span className="text-[10px] uppercase tracking-[0.2em] text-white/45">Example evidence flow</span><span className="status-reference">Conceptual · not telemetry</span></div><div className="mt-7 grid gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">{evidenceFlow.map((item,i)=><div key={item} className="relative border-t border-white/10 pt-3"><div className="font-mono text-[9px] text-[#FF6B1A]">{String(i+1).padStart(2,'0')}</div><div className="mt-2 text-[12px] leading-5 text-white/65">{item}</div></div>)}</div></div>
        <p><span className="status-live">Verified</span> KMS-encrypted forensic evidence. WAIOS does not claim full immutability or WORM protection. Object Lock, WORM retention, legal hold, and cryptographic integrity verification remain <span className="status-roadmap">roadmap</span>.</p>
      </InfoSection>

      <InfoSection title="Compliance mapping">
        <p>WAIOS supports implementation and evidence collection for selected controls. The mapping below is limited to currently supported foundations and does not represent certification.</p>
        <div className="overflow-x-auto rounded-2xl border hairline"><table className="w-full min-w-[760px] text-left text-[13px]"><thead className="bg-white/[0.035] text-[10px] uppercase tracking-[0.16em] text-white/40"><tr>{['Framework','Control area','WAIOS capability','Evidence status'].map(h=><th key={h} className="px-5 py-4 font-medium">{h}</th>)}</tr></thead><tbody className="divide-y divide-white/[0.08] text-white/65">{[
          ['ISO/IEC 27001','Access · encryption · logging · change governance','Scoped access foundation, KMS-encrypted BlackBox, policy and approval evidence','Live / verified foundation'],
          ['ISO/IEC 20000-1','Incident · problem · change · service operations','Autonomous CMDB, governed remediation, Problem Management and KEDB','Live / verified foundation'],
          ['ISO 22301','Restore · rollback · failover · recovery','Restore and rollback foundation; DR control expansion','Verified / in development'],
        ].map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={cell} className={`px-5 py-4 align-top ${i===0?'text-white':''}`}>{cell}</td>)}</tr>)}</tbody></table></div>
        <div className="border-l border-[#FF6B1A]/60 pl-5"><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF6B1A]">Certification status</div><p className="mt-2 text-[14px] leading-7 text-white/65">Control mapping and automation do not constitute formal certification. Certification is a separate independent assessment process.</p></div>
      </InfoSection>

      <InfoSection title="Public disclosure boundary">
        <p>Public materials explain system boundaries, data flow, authority, status, and security principles. They intentionally exclude exact IAM policies, role ARNs, account identifiers, internal schemas, risk formulas, orchestration logic, remediation algorithms, prompts, secrets, and security-sensitive APIs.</p>
      </InfoSection>
      <InfoSection title="Found a security issue?"><p>Contact the team privately without publishing sensitive details.</p><a href="/contact?interest=security" className="inline-flex rounded-full border hairline px-4 py-2 text-[13px] text-white transition hover:border-white/25 hover:bg-white/5">Contact Security</a></InfoSection>
    </InfoPageLayout>
  )
}
