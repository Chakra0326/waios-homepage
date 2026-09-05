// Legal review required before production publication.
// Founder/legal review must supply and approve any required company address, registration, DPO, jurisdiction, processor, and product-data details.

import type { Metadata } from 'next'
import { InfoPageLayout, InfoSection } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | WAIOS',
  description: 'Read the initial WAIOS website Privacy Policy and learn how information submitted through the public website is handled.',
}

export default function PrivacyPage() {
  return (
    <InfoPageLayout eyebrow="Legal" title="Privacy Policy" intro="This policy explains how information submitted through the public WAIOS website may be collected, used, protected, and retained.">
      <p className="mb-10 text-[12px] uppercase tracking-[0.16em] text-white/40">Last updated: September 5, 2026</p>
      <InfoSection title="Information We Collect">
        <p>We may collect contact details, work email addresses, business or company information, and other information you voluntarily submit through website forms or correspondence.</p>
        <p>We may also receive limited technical website information, browser or device information, and security logs needed to operate and protect the website. This policy does not claim the use of analytics or tracking tools that have not been confirmed.</p>
      </InfoSection>
      <InfoSection title="How We Use Information">
        <p>We use information to respond to inquiries, provide requested demonstrations, communicate about WAIOS, maintain website security, improve our services, and meet applicable legal obligations.</p>
      </InfoSection>
      <InfoSection title="Enterprise Customer Data">
        <p>WAIOS product data is governed separately by applicable customer agreements and product terms. This public website Privacy Policy does not create unsupported commitments about production Spoke data, customer environments, or future platform capabilities.</p>
      </InfoSection>
      <InfoSection title="Data Sharing">
        <p>We do not sell personal information submitted through this website. Service providers may process information where reasonably required to operate the website or provide requested services, subject to applicable agreements and safeguards.</p>
      </InfoSection>
      <InfoSection title="Data Security">
        <p>We use reasonable technical and organizational measures appropriate to the nature of the information and the services involved. No website, transmission method, or storage system can be guaranteed to be absolutely secure.</p>
      </InfoSection>
      <InfoSection title="Data Retention">
        <p>We retain information only for as long as reasonably necessary for the purposes described, subject to applicable contractual and legal requirements.</p>
      </InfoSection>
      <InfoSection title="Your Rights">
        <p>Depending on your jurisdiction, you may have rights regarding access, correction, deletion, restriction, objection, or portability of personal information. Requests can be submitted through the <a href="/contact">contact page</a>.</p>
      </InfoSection>
      <InfoSection title="International Processing">
        <p>Information may be processed in locations where WAIOS or relevant service providers operate, subject to applicable law and appropriate safeguards. We do not make unverified data-residency commitments in this policy.</p>
      </InfoSection>
      <InfoSection title="Changes to This Policy">
        <p>We may update this policy as the website, services, or applicable requirements evolve. The revised policy will be posted on this page with an updated effective date.</p>
      </InfoSection>
      <InfoSection title="Contact">
        <p>For privacy questions or requests, contact the WAIOS team through our <a href="/contact">contact page</a>.</p>
      </InfoSection>
    </InfoPageLayout>
  )
}
