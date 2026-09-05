'use client'

import {
  ArrowRight, } from 'lucide-react'


export function Nav() {
  return (
    <header className="sticky top-0 z-50 hairline-b backdrop-blur-xl bg-black/55">
      <div className="w-full px-6 md:px-8 mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5" aria-label="WAIOS home">
          <div className="h-6 w-6 rounded-md bg-white grid place-items-center">
            <div className="h-2 w-2 rounded-[2px] bg-black" />
          </div>
          <span className="text-[15px] font-medium tracking-tight text-white">WAIOS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] text-dim absolute left-1/2 -translate-x-1/2">
          <a href="/#platform" className="hover:text-white transition">Platform</a>
          <a href="/#architecture" className="hover:text-white transition">Architecture</a>
          <a href="/#trust" className="hover:text-white transition">Security &amp; Trust</a>
          <a href="/#live" className="hover:text-white transition">Workflow</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#live" className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-white/85 hover:text-white transition">
            See it in action
          </a>
          <a href="/#architecture" className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-1.5 text-[13px] font-medium hover:bg-white/90 transition">
            Architecture <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
