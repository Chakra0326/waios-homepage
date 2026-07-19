'use client'

import { Scale, LineChart, Megaphone } from 'lucide-react'
import { Reveal } from './Common'

export function CoreBrain() {
  const pillars = [
    {
      title: "WAI Trust & Legal",
      subtitle: "ISO 27001 / ISO 20000-1",
      desc: "Acts as automated digital law. Enforces Zero-Trust architecture and validates business contract SLA boundaries in real-time.",
      icon: Scale,
    },
    {
      title: "WAI Operations & FinOps",
      subtitle: "ISO 22301 / Cloud FinOps",
      desc: "Smart sensors detect drift in <15s via the Forensic Blackbox, while the AI Accountant actively prevents cloud tenant cost bloat.",
      icon: LineChart,
    },
    {
      title: "WAI Kreatif & Marketing",
      subtitle: "Automated Crisis Protocol",
      desc: "Eliminates miscommunication. Automatically composes and releases public status pages and investor reports during critical incidents.",
      icon: Megaphone,
    }
  ]

  return (
    <section className="relative py-24 md:py-32 hairline-b bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">The WAI BoD</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-4xl">
              Autonomous <span className="text-dim">Enterprise Governance.</span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
              WAIOS doesn't just manage servers; it governs your entire business. Operating securely from the Master Hub, the WAI BoD enforces strict ISO compliance, AES-256 encryption, and zero-trust policies across all tenant environments.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="relative rounded-2xl border hairline p-8 h-full bg-[#0A0A0C] overflow-hidden transition-all hover:bg-white/[0.03]">
                  <div className="h-10 w-10 mb-6 rounded-xl bg-white/5 border hairline grid place-items-center text-white/70">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">{pillar.subtitle}</div>
                  <h3 className="text-[20px] font-medium text-white">{pillar.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-dim">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
