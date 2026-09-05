'use client'

import { ReactNode, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Radar, Brain, Sparkles, Gavel, Cpu, Activity, ShieldCheck, } from 'lucide-react'

export const EASE = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 20, className = '' }: { children: ReactNode, delay?: number, y?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function LiveDot({ className = 'text-emerald-400' }: { className?: string }) {
  return (
    <span className={`relative inline-block h-1.5 w-1.5 rounded-full ${className} pulse-dot`}>
      <span className="absolute inset-0 rounded-full bg-current" />
    </span>
  )
}

export const LOOP = [
  { key: 'discover', label: 'Discover', icon: Radar, caption: 'Infrastructure state and events are discovered.', detail: 'AWS inventory, configuration, and event sources feed the current operational picture.' },
  { key: 'understand', label: 'Understand', icon: Brain,    caption: 'Context is assembled. Risk is measured.', detail: 'Every signal is cross-referenced against the CMDB to build full context: what changed, what it affects, and how severe it is. Risk is scored automatically before any decision is made.' },
  { key: 'decide',     label: 'Decide',     icon: Sparkles, caption: 'A plan is proposed, scored against impact.', detail: "A remediation plan is generated and scored against business impact, including a rollback path, before it's ever put in front of a human." },
  { key: 'approve', label: 'Approve', icon: Gavel, caption: 'Policy determines where human authority is required.', detail: 'Low-risk actions may be policy-approved; critical actions require authorized Human-in-the-Loop approval.' },
  { key: 'act', label: 'Act', icon: Cpu, caption: 'Controlled remediation executes with a restore path.', detail: 'WAIOS performs the operational work through controlled cloud-native permissions.' },
  { key: 'verify', label: 'Verify', icon: ShieldCheck, caption: 'Expected state is validated; rollback remains available.', detail: 'Execution is not success until the resulting infrastructure state is verified.' },
  { key: 'learn', label: 'Learn', icon: Activity, caption: 'CMDB, BlackBox, and KEDB retain the outcome.', detail: 'The current state, operational evidence, and verified remediation knowledge are updated.' },
]
