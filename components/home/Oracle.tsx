'use client'

import { Activity, Lock } from 'lucide-react'
import { Reveal } from './Common'

export function Oracle() {
  return (
    <section className="relative py-24 md:py-32 hairline-b">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">WAI-S-Oracle</div>
          <h2 className="mt-5 text-[34px] md:text-[48px] leading-[1.05] font-semibold tracking-[-0.025em] text-white text-balance">
            Radical <span className="text-dim">Investor Transparency.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-dim max-w-lg">
            Remove information asymmetry with an on-demand, AI-driven investor cockpit. The WAI-S-Oracle pulls aggregate growth data, compliance states, and tenant licenses directly from the untamperable Forensic Black Box—guaranteeing absolute objectivity without the monthly reporting lag.
          </p>
          
          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/5 p-2.5 rounded-lg border hairline"><Activity className="w-5 h-5 text-emerald-400" /></div>
              <div>
                <h4 className="text-[16px] font-medium text-white">Direct Natural Language Queries</h4>
                <p className="mt-1.5 text-[14px] text-dimmer leading-relaxed">Investors and executives can request macro-economic reports and live SLA validations instantly, bypassing manual reporting.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/5 p-2.5 rounded-lg border hairline"><Lock className="w-5 h-5 text-emerald-400" /></div>
              <div>
                <h4 className="text-[16px] font-medium text-white">Immutable Data Isolation</h4>
                <p className="mt-1.5 text-[14px] text-dimmer leading-relaxed">Data is pulled strictly from permanent, encrypted forensic logs—never from mutable operational databases.</p>
              </div>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="relative rounded-2xl border hairline p-6 bg-[#0A0A0C] h-[440px] flex flex-col overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.08)_0%,transparent_50%)]" />
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-white/40">WAI-S-Oracle Interface</div>
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-rose-500/30"/><div className="w-2.5 h-2.5 rounded-full bg-amber-500/30"/><div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30"/></div>
            </div>
            
            <div className="flex-1 space-y-6 relative z-10">
               <div className="bg-white/5 rounded-xl p-4 border border-white/5 backdrop-blur-md">
                 <div className="text-[11px] font-medium uppercase tracking-wider text-white/40 mb-2">Investor Query</div>
                 <div className="text-[14px] text-white/90">"Generate a Q3 ISO 27001 compliance and drift report across all tenants. Include risk exposure factors."</div>
               </div>
               
               <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20 ml-8 relative">
                 <div className="absolute -left-2.5 top-5 w-5 h-px bg-emerald-500/20" />
                 <div className="flex items-center gap-2 mb-3">
                   <Activity className="w-4 h-4 text-emerald-400" />
                   <div className="text-[11px] text-emerald-400 uppercase tracking-widest font-semibold">Oracle Analysis</div>
                 </div>
                 <div className="text-[14px] text-emerald-50/80 leading-relaxed font-mono">
                   &gt; Analyzing Forensic Blackbox...<br/>
                   &gt; 14,230 immutable event logs verified.<br/><br/>
                   Zero critical compliance drift detected. Sub-15s MTTD maintained across 100% of global tenant environments. Exposure factor remains &lt; 0.01.
                 </div>
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
