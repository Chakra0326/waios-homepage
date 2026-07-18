'use client'

import { motion } from 'framer-motion'
import { Server, TerminalSquare, Shield, Activity } from 'lucide-react'
import { Reveal, EASE } from './Common'

export function SoftwareFactory() {
  const agents = [
    {
      role: "Maker",
      title: "Design & Template",
      description: "AI Architects & Builders generate topology mapping and deploy code baselines directly to your CMDB.",
      icon: Server,
    },
    {
      role: "Checker",
      title: "Compliance & Security",
      description: "Rule Checkers & Cyber Auditors audit changes against global rules and log immutable states to the Blackbox.",
      icon: Shield,
    },
    {
      role: "Deployment",
      title: "Distribution & Release",
      description: "DevOps & GitOps agents coordinate zero-touch PRs, testing, staging alignment, and automated disaster recovery.",
      icon: TerminalSquare,
    },
    {
      role: "Cleaner",
      title: "Cleaning & Efficiency",
      description: "Context Janitors & Resource Reclaimers optimize AI token use, clear caches, and prevent OOM errors.",
      icon: Activity,
    }
  ]

  return (
    <section className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">WAIMS Tech Engine</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-4xl">
              The Automated <span className="text-dim">Software Factory.</span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
              WAIOS isn't just for operations. The WAIMS Tech Engine deploys a swarm of 9 specialized autonomous AI agents across 4 phases to design, secure, release, and self-heal your infrastructure—shifting your lifecycle from weeks to sub-hour deployments.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {agents.map((agent, i) => {
            const Icon = agent.icon
            return (
              <Reveal key={agent.title} delay={i * 0.1}>
                <div className="relative rounded-2xl border hairline p-8 h-full bg-[#0A0A0C] overflow-hidden transition-all hover:bg-white/[0.03]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border hairline grid place-items-center text-white/70">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-white/40">{agent.role}</div>
                  </div>
                  <h3 className="text-[18px] font-medium text-white">{agent.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-dim">
                    {agent.description}
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
