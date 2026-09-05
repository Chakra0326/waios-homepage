import type { Metadata } from 'next'
import { InfoPageLayout, InfoSection, SignalCard } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'About WAIOS | Autonomous Enterprise Operations',
  description: 'Learn about WAIOS, the Autonomous Ecosystem CMDB designed to connect infrastructure context, governance, remediation, verification, and operational intelligence.',
}

export default function AboutPage() {
  return (
    <InfoPageLayout eyebrow="About WAIOS" title="Building autonomous enterprise operations." intro="WAIOS is building an autonomous enterprise operations platform around a continuously maintained CMDB, combining infrastructure context, risk intelligence, governance, remediation, verification, and operational evidence into one accountable control loop.">
      <InfoSection title="What We Are Building">
        <p>WAIOS is an Autonomous Ecosystem CMDB designed to reduce repetitive manual enterprise IT operations. Its operating loop connects <strong>Discover → Understand → Decide → Approve → Act → Verify → Learn</strong>.</p>
        <p className="text-[20px] font-medium text-white">From detection to resolution. <span className="text-[#FF6B1A]">Autonomously.</span></p>
        <p>Human-in-the-Loop governance remains part of the architecture for high-impact actions and any execution controlled by organizational policy. Autonomy increases operational speed; it does not remove authority.</p>
      </InfoSection>
      <InfoSection title="Our Architecture">
        <div className="grid gap-4 md:grid-cols-2">
          <SignalCard label="Hub / Master">WAIOS provides the central operational intelligence, CMDB context, policy, governance, remediation, and evidence layer.</SignalCard>
          <SignalCard label="Spoke">A company using WAIOS retains control of its own infrastructure and systems, connected through scoped and revocable permissions.</SignalCard>
        </div>
        <p>External enterprise Spokes are part of the platform expansion. WAI Ecosystem currently functions as the internal reference environment for validating the model.</p>
      </InfoSection>
      <InfoSection title="The Autonomous CMDB">
        <p>The CMDB is the current operational source of truth. It connects infrastructure, services, applications, dependencies, risks, incidents, changes, and operational relationships so actions can be evaluated in context.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <SignalCard label="CMDB">What is true now.</SignalCard>
          <SignalCard label="BlackBox">What happened.</SignalCard>
          <SignalCard label="KEDB">What previously worked.</SignalCard>
        </div>
      </InfoSection>
      <InfoSection title="WAI Ecosystem">
        <p>WAI Ecosystem serves as the internal live reference environment used to validate WAIOS discovery, governance, remediation, verification, rollback, and audit workflows before broader external deployment.</p>
      </InfoSection>
      <InfoSection title="Where WAIOS Is Going" label="Platform roadmap">
        <p>The platform direction includes external company Spokes, broader enterprise integrations, multi-cloud support, WAI Tech, WAIMS, and WAI-S-Oracle. These are roadmap areas, not representations of currently live production capability.</p>
        <div className="flex flex-wrap gap-2">{['External Spokes', 'Enterprise integrations', 'Multi-cloud', 'WAI Tech', 'WAIMS', 'WAI-S-Oracle'].map((item) => <span key={item} className="status-roadmap">{item}</span>)}</div>
      </InfoSection>
    </InfoPageLayout>
  )
}
