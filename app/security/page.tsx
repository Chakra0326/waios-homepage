import type { Metadata } from 'next'
import { InfoPageLayout, InfoSection, SignalCard } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'Security & Trust | WAIOS',
  description: 'Learn how WAIOS approaches controlled access, encryption, Human-in-the-Loop governance, auditability, rollback, and enterprise security.',
}

export default function SecurityPage() {
  return (
    <InfoPageLayout eyebrow="Security & Trust" title="Security and governance by design." intro="WAIOS is designed around controlled access, auditable automation, encryption, reversible operations, and Human-in-the-Loop governance for sensitive actions.">
      <InfoSection title="Identity & Access">
        <p>WAIOS is designed to use scoped cloud-native permissions rather than permanent root credentials. Customer access should remain revocable. The future Spoke architecture is designed around tenant-scoped identity and role-based access control.</p>
      </InfoSection>
      <InfoSection title="Human-in-the-Loop">
        <div className="grid gap-4 md:grid-cols-3">
          <SignalCard label="Low risk">Policy-approved autonomous execution.</SignalCard>
          <SignalCard label="Medium risk">Policy-controlled execution or human review, depending on organization policy.</SignalCard>
          <SignalCard label="High / Critical">Mandatory approval by an authorized human.</SignalCard>
        </div>
        <p className="text-[20px] font-medium text-white">Autonomy does not remove authority.</p>
      </InfoSection>
      <InfoSection title="Encryption">
        <p>WAIOS Forensic BlackBox supports encryption at rest using AWS KMS in the current AWS implementation. This statement is specific to the verified implementation and does not imply that every future data system uses identical controls.</p>
      </InfoSection>
      <InfoSection title="Auditability">
        <p>Detection, risk evaluation, approval, remediation, verification, and rollback events can be captured as operational evidence, providing an <strong>encrypted forensic audit trail</strong>. WAIOS does not describe that trail as immutable until verified WORM protection is in place.</p>
      </InfoSection>
      <InfoSection title="Rollback & Reversibility">
        <p>Before high-impact remediation, WAIOS can prepare a restore point where the underlying service supports it. If execution fails, rollback mechanisms are designed to restore the last known safe state.</p>
      </InfoSection>
      <InfoSection title="Tenant Isolation">
        <p>The WAIOS Spoke architecture is designed around tenant-scoped access and isolation. External multi-tenant onboarding and RBAC are part of the enterprise platform expansion.</p>
      </InfoSection>
      <InfoSection title="Compliance Alignment">
        <p>WAIOS is designed to support and map selected controls associated with ISO/IEC 27001, ISO/IEC 20000-1, and ISO 22301.</p>
        <div className="rounded-2xl border border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.04] p-5 md:p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF6B1A]">Certification status</div>
          <p className="mt-3 text-[14px] leading-7 text-white/70">Control mapping and technical automation do not themselves constitute formal certification. WAIOS does not claim certification unless certification scope, issuing body, certificate details, and validity information are explicitly published.</p>
        </div>
      </InfoSection>
      <InfoSection title="AWS Foundation">
        <p>The current live foundation uses AWS services including AWS Lambda, AWS Config, EventBridge, SQS, SSM, CloudWatch, and KMS. Public materials intentionally exclude confidential account IDs, role ARNs, secrets, internal resource identifiers, API keys, and security-sensitive implementation details.</p>
      </InfoSection>
      <InfoSection title="Responsible Automation">
        <p>WAIOS should operate within explicit policies. AI recommendations do not automatically grant execution permission; authorization must be enforced by backend policy and identity systems, not merely by prompting the AI.</p>
      </InfoSection>
      <InfoSection title="Found a security issue?">
        <p>Use the security review path to contact the team without publishing sensitive details.</p>
        <a href="/contact?interest=security" className="inline-flex rounded-full border hairline px-4 py-2 text-[13px] text-white transition hover:border-white/25 hover:bg-white/5">Contact Security</a>
      </InfoSection>
    </InfoPageLayout>
  )
}
