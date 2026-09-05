'use client'

import {
  Shield, Server, Building2, Landmark, Phone, ShoppingBag, Factory, Truck, Stethoscope,
  } from 'lucide-react'


export function Industries() {
  const items = [
    { icon: Landmark,    label: 'Banking' },
    { icon: Shield,      label: 'Insurance' },
    { icon: Phone,       label: 'Telecom' },
    { icon: ShoppingBag, label: 'Retail' },
    { icon: Factory,     label: 'Manufacturing' },
    { icon: Building2,   label: 'Public Sector' },
    { icon: Stethoscope, label: 'Healthcare' },
    { icon: Truck,       label: 'Logistics' },
    { icon: Server,      label: 'Cloud Native' },
  ]
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full py-3 hairline-t bg-black/80 backdrop-blur-md">
      <div className="w-full px-6 flex flex-col md:flex-row md:items-center gap-6">
        <div className="text-[11.5px] tracking-[0.22em] uppercase text-dimmer md:w-72 shrink-0">Designed for complex operations across</div>
        <div className="relative overflow-hidden mask-fade-r flex-1">
          <div className="marquee-track flex w-max items-center whitespace-nowrap">
            {[0, 1].map((group) => (
              <div key={group} aria-hidden={group === 1 ? true : undefined} className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
                {items.map((it) => {
                  const I = it.icon
                  return (
                    <div key={it.label} className="inline-flex shrink-0 items-center gap-2 text-white/60">
                      <I className="h-4 w-4" /><span className="text-[13.5px] tracking-tight">{it.label}</span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
