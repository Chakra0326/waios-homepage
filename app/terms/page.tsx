// Legal review required before production publication.
// Qualified counsel must review the limitation-of-liability language and complete any company-specific legal terms before launch.

import type { Metadata } from 'next'
import { InfoPageLayout, InfoSection } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'Terms of Use | WAIOS',
  description: 'Read the initial Terms of Use governing access to and use of the public WAIOS website.',
}

export default function TermsPage() {
  return (
    <InfoPageLayout eyebrow="Legal" title="Terms of Use" intro="These terms govern access to and use of the public WAIOS website. They do not replace an enterprise SaaS agreement, MSA, SLA, DPA, or other commercial contract.">
      <p className="mb-10 text-[12px] uppercase tracking-[0.16em] text-white/40">Last updated: September 5, 2026</p>
      <InfoSection title="Acceptance of Terms">
        <p>By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the website.</p>
      </InfoSection>
      <InfoSection title="Informational Nature">
        <p>Website materials describe WAIOS capabilities, architecture, product direction, and services for general informational purposes. Content may evolve as the platform changes, and roadmap information may change without notice.</p>
      </InfoSection>
      <InfoSection title="Product Availability">
        <p>Capabilities identified as roadmap, planned, preview, design-partner, or future functionality may not yet be generally available. Their scope, timing, and release are not guaranteed.</p>
      </InfoSection>
      <InfoSection title="No Certification Guarantee">
        <p>References to security standards, compliance controls, or control frameworks do not themselves constitute formal certification and do not guarantee that WAIOS or a customer will achieve certification.</p>
      </InfoSection>
      <InfoSection title="Intellectual Property">
        <p>WAIOS branding, software concepts, website materials, graphics, and original content are protected by applicable intellectual-property rights. These terms do not grant a license beyond the limited right to access and use the public website as intended.</p>
      </InfoSection>
      <InfoSection title="Acceptable Use">
        <p>You must not interfere with the website, attempt unauthorized access, abuse forms or services, distribute malicious content, or attempt to compromise website security.</p>
      </InfoSection>
      <InfoSection title="Third-Party Services">
        <p>The website may reference or link to third-party services and integrations. Those services are governed by their own terms and policies, and WAIOS does not control their availability or content.</p>
      </InfoSection>
      <InfoSection title="Disclaimer">
        <p>The website is provided for informational purposes and may be changed, suspended, or unavailable from time to time. We do not promise uninterrupted or error-free website availability. Specific product commitments must be stated in an applicable written commercial agreement.</p>
      </InfoSection>
      <InfoSection title="Limitation of Liability">
        <p>To the extent permitted by applicable law, WAIOS will not be liable for indirect or consequential loss arising solely from use of, or inability to use, this public website. Nothing in these terms excludes liability that cannot lawfully be excluded, and any liability relating to enterprise services remains governed by the applicable written agreement.</p>
      </InfoSection>
      <InfoSection title="Changes">
        <p>We may update these terms as the website and services evolve. Updated terms will be posted on this page with a revised effective date.</p>
      </InfoSection>
      <InfoSection title="Contact">
        <p>Questions about these website terms can be submitted through the <a href="/contact">contact page</a>.</p>
      </InfoSection>
    </InfoPageLayout>
  )
}
