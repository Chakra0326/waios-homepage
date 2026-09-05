import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { ContactForm } from '@/components/site/ContactForm'
import { InfoPageLayout } from '@/components/site/InfoPageLayout'

export const metadata: Metadata = {
  title: 'Contact WAIOS',
  description: 'Contact WAIOS about demonstrations, enterprise deployments, design partnerships, security reviews, investment, or partnerships.',
}

export default function ContactPage() {
  return (
    <InfoPageLayout wide eyebrow="Contact" title="Talk to the WAIOS team." intro="Interested in autonomous infrastructure governance, an enterprise design partnership, or seeing WAIOS operate against a live environment? Contact us.">
      <div className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr] lg:items-start">
        <ContactForm />
        <aside className="rounded-2xl border hairline bg-white/[0.025] p-6 md:p-8">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">Technical walkthrough</div>
          <h2 className="mt-4 text-[24px] font-medium tracking-[-0.02em] text-white">Book a technical walkthrough</h2>
          <p className="mt-4 text-[14px] leading-7 text-dim">See the WAIOS operational loop across discovery, CMDB context, risk assessment, Human-in-the-Loop governance, remediation, verification, rollback protection, and auditability.</p>
          <a href="mailto:contact@waios.ai?subject=WAIOS%20technical%20walkthrough" className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-white hover:text-[#FF6B1A]">Book a demo <ArrowRight className="h-4 w-4" /></a>
        </aside>
      </div>
    </InfoPageLayout>
  )
}
