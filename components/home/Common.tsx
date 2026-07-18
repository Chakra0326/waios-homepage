'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import {
  Radar, Brain, Sparkles, Gavel, Cpu, Activity, } from 'lucide-react'

export const EASE = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 24, className = '' }: { children: ReactNode, delay?: number, y?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
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
  { key: 'discover',   label: 'Discover',   icon: Radar,    caption: 'Signals from every system, continuously.' },
  { key: 'understand', label: 'Understand', icon: Brain,    caption: 'Context is assembled. Risk is measured.' },
  { key: 'decide',     label: 'Decide',     icon: Sparkles, caption: 'A plan is proposed, scored against impact.' },
  { key: 'approve',    label: 'Approve',    icon: Gavel,    caption: 'Humans stay in control where it matters.' },
  { key: 'act',        label: 'Act',        icon: Cpu,      caption: 'Execution happens with control, not with static keys.' },
  { key: 'learn',      label: 'Learn',      icon: Activity, caption: 'Every decision leaves a signed, auditable record.' },
]
