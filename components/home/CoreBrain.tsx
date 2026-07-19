'use client'

import { Scale, LineChart, Megaphone, TerminalSquare, Shield, Lock, FileCheck } from 'lucide-react'
import { Reveal } from './Common'

export function CoreBrain() {
  return (
    <section className="relative py-24 md:py-32 hairline-b bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-[12px] tracking-[0.24em] uppercase text-dimmer">GOVERNANCE, BUILT IN</div>
            <h2 className="mt-5 text-[34px] md:text-[56px] leading-[1.02] font-semibold tracking-[-0.025em] text-white text-balance max-w-4xl">
              It doesn't just run your infrastructure. <span className="text-dim">It governs your business.</span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-dim max-w-2xl">
              Every environment runs under continuous compliance, cost control, and crisis communication, enforced the same way, every time, across every tenant.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 w-full max-w-4xl mx-auto rounded-2xl border hairline bg-[#0A0A0C] overflow-hidden shadow-2xl relative p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
               <div className="flex items-center gap-2">
                 <Lock className="h-4 w-4 text-emerald-400" />
                 <span className="font-mono text-[11.5px] uppercase tracking-widest text-white/50">Master Hub Policy Engine</span>
               </div>
               <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-medium tracking-widest uppercase text-emerald-400">
                 Global Enforce
               </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {['Tenant-A (FinTech)', 'Tenant-B (Healthcare)', 'Tenant-C (Retail)'].map((tenant, i) => (
                 <div key={i} className="rounded-xl border hairline bg-black/40 p-4">
                   <div className="text-[12px] font-medium text-white mb-3">{tenant}</div>
                   <div className="space-y-2">
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><Shield className="h-3 w-3 text-emerald-400"/> ISO 27001</span>
                       <span className="text-emerald-400">Compliant</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><Scale className="h-3 w-3 text-emerald-400"/> ISO 22301</span>
                       <span className="text-emerald-400">Compliant</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><LineChart className="h-3 w-3 text-emerald-400"/> ISO 20000-1</span>
                       <span className="text-emerald-400">Compliant</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-mono">
                       <span className="flex items-center gap-2 text-white/50"><FileCheck className="h-3 w-3 text-emerald-400"/> AES-256 Auth</span>
                       <span className="text-emerald-400">Locked</span>
                     </div>
                   </div>
                 </div>
               ))}
               <div className="rounded-xl border hairline border-dashed bg-white/[0.02] p-4 flex flex-col items-center justify-center text-center">
                 <TerminalSquare className="h-5 w-5 text-white/20 mb-2" />
                 <div className="text-[11.5px] font-medium text-white/40">Zero-Trust Architecture</div>
                 <div className="text-[10px] text-white/20 mt-1">No exceptions allowed.</div>
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
