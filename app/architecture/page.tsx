import type { Metadata } from 'next'
import { ArrowDown, Building2, Database, History, KeyRound, LockKeyhole, ShieldCheck, Wrench } from 'lucide-react'
import { InfoPageLayout, InfoSection, SignalCard } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'Technical Reference Architecture | WAIOS',
  description: 'A public-safe reference architecture for the WAIOS Hub, customer Spokes, authority boundaries, autonomous CMDB, controlled remediation, and operational evidence.',
}

const waiosFlow = [
  ['Authorized discovery & events','Cloud-native inventory, configuration, and event sources'],
  ['Autonomous CMDB','Current operational truth, context, and relationships'],
  ['Risk & Policy Engine','Impact and permitted-action evaluation'],
  ['WAI Advisor','Analysis and recommended response'],
  ['Authority Gate','Identity, policy, and Human-in-the-Loop control'],
  ['Remediation','Controlled execution through authorized permissions'],
  ['Verification / Rollback','Validate desired state or restore safely'],
  ['BlackBox + KEDB','Retain evidence and verified operational knowledge'],
]

export default function ArchitecturePage() {
  return (
    <InfoPageLayout wide eyebrow="Reference architecture" title="WAIOS Technical Reference Architecture" intro="A high-level view of how WAIOS separates customer authority, operational intelligence, governance, execution, and evidence.">
      <InfoSection title="Two trust boundaries" label="Public-safe system view">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
          <div className="rounded-2xl border border-[#FF6B1A]/25 bg-[#FF6B1A]/[0.035] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4"><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">Customer trust boundary</span><span className="status-roadmap">Roadmap</span></div>
            <div className="mt-7 space-y-3">
              {[['Customer environment / Spoke',Building2],['Scoped cloud-native identity',KeyRound],['Revocable permissions',LockKeyhole]].map(([label,Icon]:any,i) => <div key={label} className="flex flex-col items-center"><div className="flex w-full items-center gap-3 border-y border-white/10 px-4 py-4 text-[14px] text-white/75"><Icon className="h-4 w-4 text-[#FF6B1A]"/>{label}</div>{i<2&&<ArrowDown className="my-2 h-4 w-4 text-white/25"/>}</div>)}
            </div>
            <p className="mt-6 text-[12.5px] leading-6 text-white/50">AWS IAM / AWS STS describe the high-level direction for future external AWS onboarding. Exact policies, role identifiers, and permission sets are intentionally not published.</p>
          </div>
          <div className="rounded-2xl border hairline bg-[#0A0A0C] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4"><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">WAIOS trust boundary</span><span className="status-live">AWS foundation live</span></div>
            <div className="mt-7">
              {waiosFlow.map(([title,copy],i) => <div key={title} className="flex flex-col items-center"><div className="grid w-full grid-cols-[28px_1fr] gap-3 border-y border-white/[0.08] px-3 py-3"><span className="font-mono text-[10px] text-white/30">{String(i+1).padStart(2,'0')}</span><div><div className="text-[13.5px] text-white/80">{title}</div><div className="mt-0.5 text-[11.5px] leading-5 text-white/40">{copy}</div></div></div>{i<waiosFlow.length-1&&<ArrowDown className="my-1.5 h-3.5 w-3.5 text-white/20"/>}</div>)}
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="Hub / Master and Spoke">
        <div className="grid gap-4 md:grid-cols-2"><SignalCard label="WAIOS = Hub / Master">The central control plane for operational intelligence, CMDB context, risk, governance, remediation, verification, and evidence.</SignalCard><SignalCard label="Spoke = a company using WAIOS">A company—not merely one AWS account. A Spoke may connect multiple authorized environments and business systems while retaining ownership and control.</SignalCard></div>
        <p>WAI Ecosystem is the current internal live reference environment. External enterprise Spoke onboarding is <span className="status-roadmap">roadmap</span>. Tenant-scoped RBAC and isolation are <span className="status-development">in development</span>. Azure and Google Cloud connectivity remain <span className="status-roadmap">roadmap</span>.</p>
        <p>External enterprise onboarding is blocked until tenant isolation and identity-bound authorization / RBAC are implemented and verified. Each tenant must retain its own identity → policy → CMDB → credentials → execution → BlackBox boundary, with tenant-scoped KEDB access. AI reasoning, retrieval, execution context, and operational evidence must never cross that boundary.</p>
      </InfoSection>

      <InfoSection title="Why the boundary matters">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">{[
          ['Customer ownership','Infrastructure and access remain under customer control.'],
          ['Revocable access','Connectivity is designed around scoped, revocable identity—not permanent root credentials.'],
          ['Explicit authority','Identity and policy determine whether an action may execute.'],
          ['Bounded AI','AI prompts are never the authorization or tenant-isolation boundary.'],
        ].map(([title,copy])=><div key={title} className="bg-[#070708] p-6"><ShieldCheck className="h-4 w-4 text-emerald-400"/><h3 className="mt-4 text-[15px] text-white">{title}</h3><p className="mt-2 text-[13px] leading-6 text-white/55">{copy}</p></div>)}</div>
      </InfoSection>

      <InfoSection title="Three operational knowledge layers">
        <div className="grid gap-4 md:grid-cols-3">{[[Database,'CMDB','What is true now.'],[History,'BlackBox','What happened.'],[Wrench,'KEDB','What previously worked.']].map(([Icon,title,copy]:any)=><SignalCard key={title} label={title}><Icon className="mb-3 h-4 w-4 text-[#FF6B1A]"/>{copy}</SignalCard>)}</div>
        <p>This page explains boundaries and guarantees, not implementation mechanics. Internal schemas, risk formulas, orchestration logic, remediation algorithms, role policies, prompts, and security-sensitive APIs remain confidential.</p>
      </InfoSection>
    </InfoPageLayout>
  )
}
