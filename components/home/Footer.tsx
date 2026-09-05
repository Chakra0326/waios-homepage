'use client'

import { LiveDot } from './Common'

const columns = [
  ['Product', [['Platform', '/#top'], ['How it works', '/#platform'], ['See it in action', '/#live']]],
  ['Architecture', [['Architecture', '/#architecture'], ['Autonomous CMDB', '/#architecture'], ['Trust & Control', '/#trust'], ['Security', '/security']]],
  ['Company', [['About', '/about'], ['Contact', '/contact']]],
] as const

export function Footer() {
  return (
    <footer className="hairline-t pb-14">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 px-6 py-16 md:px-8 lg:flex-row">
        <div>
          <a href="/" className="flex items-center gap-2.5" aria-label="WAIOS home">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-white"><div className="h-2 w-2 rounded-[2px] bg-black" /></div>
            <span className="text-[15px] font-medium text-white">WAIOS</span>
          </a>
          <p className="mt-4 max-w-xs text-[13px] text-dim">The autonomous enterprise operating system. Governed by design.</p>
          <p className="mt-6 text-[17px] text-white">From detection to resolution.<br /><span className="text-[#FF6B1A]">Autonomously.</span></p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] text-dimmer"><LiveDot />AWS foundation live</div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-14">
          {columns.map(([title, items]) => (
            <div key={title}>
              <div className="text-[11px] uppercase tracking-[0.2em] text-dimmer">{title}</div>
              <ul className="mt-4 space-y-2">
                {items.map(([label, href]) => <li key={label}><a href={href} className="text-[13px] text-white/65 transition hover:text-white">{label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="hairline-t">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-6 py-6 text-[12px] text-dimmer md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} PT WAI Ekosistem Indonesia. All rights reserved.</div>
          <div className="flex gap-5"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/security">Security</a></div>
        </div>
      </div>
    </footer>
  )
}
