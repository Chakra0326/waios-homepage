'use client'

import { LiveDot } from "./Common"

export function Footer() {
  const cols = [
    { title: 'Product', items: ['Platform', 'How it works', 'See it in action'] },
    { title: 'Depth',   items: ['Architecture', 'Trust and control', 'Security'] },
    { title: 'Company', items: ['About', 'Contact', 'Careers'] },
  ]
  return (
    <footer className="hairline-t">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-6 w-6 rounded-md bg-white grid place-items-center">
              <div className="h-2 w-2 rounded-[2px] bg-black" />
            </div>
            <span className="text-[15px] font-medium text-white">WAIOS</span>
          </div>
          <p className="mt-4 text-[13px] text-dim leading-relaxed max-w-xs">
            The autonomous enterprise operating system. Governed by design.
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] text-dimmer">
            <LiveDot /> systems nominal
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[11px] tracking-[0.2em] uppercase text-dimmer">{c.title}</div>
            <ul className="mt-4 space-y-2">
              {c.items.map((it) => (
                <li key={it}><a href="#" className="text-[13.5px] text-white/75 hover:text-white transition">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="hairline-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-dimmer">
          <div>© {new Date().getFullYear()} WAIOS. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

