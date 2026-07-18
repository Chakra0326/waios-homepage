'use client'

import { Check } from 'lucide-react'
import { Reveal } from './Common'

export function Pricing() {
  const tiers = [
    {
      name: "Tier 1",
      title: "Base Infrastructure",
      price: "$1K",
      desc: "Core CMDB Engine for complete architectural visibility and mapping.",
      features: ["Continuous asset discovery", "Automatic inventory sync", "Multi-account mapping"],
      highlight: false
    },
    {
      name: "Tier 2",
      title: "Compliance & Security",
      price: "$5K",
      desc: "Advanced security auditors and automated evidence collection.",
      features: ["Real-time audit evidence", "Zero-trust enforcement", "Policy drift mitigation (ISO 27001)"],
      highlight: true
    },
    {
      name: "Tier 3",
      title: "Hyper-Automation",
      price: "$10K",
      desc: "The full AI Swarm for complete zero-touch orchestration.",
      features: ["Sub-15s auto-remediation", "Autonomous CAB approvals", "Zero-touch DR sync (ISO 22301)"],
      highlight: false
    }
  ]
  
  return (
    <section className="relative py-24 md:py-32 hairline-b bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">Business Model</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance">
              Predictable, <span className="text-dim">Value-Driven Scale.</span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
              A high-margin B2B SaaS architecture designed for scale. Structured monetization using a predictable per-tenant subscription model.
            </p>
          </div>
        </Reveal>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div className={`relative flex flex-col h-full rounded-3xl p-8 border ${tier.highlight ? 'border-[#0C1A3E] bg-[#0C1A3E]/20 shadow-[0_0_40px_rgba(12,26,62,0.6)]' : 'hairline bg-[#0A0A0C]'}`}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0C1A3E] text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-[13px] font-semibold tracking-widest uppercase text-white/50">{tier.name}</div>
                <h3 className="mt-2 text-2xl font-medium text-white">{tier.title}</h3>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm font-medium text-white/40">/month per tenant</span>
                </div>
                
                <p className="mt-6 text-[15px] leading-relaxed text-dim h-12">{tier.desc}</p>
                
                <div className="mt-8 pt-8 border-t border-white/10 flex-1">
                  <ul className="space-y-4">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-[14.5px] text-white/80">
                        <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`mt-10 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${tier.highlight ? 'bg-[#0C1A3E] text-white hover:bg-[#152b66]' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  Explore {tier.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
