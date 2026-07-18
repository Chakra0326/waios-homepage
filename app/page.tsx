'use client'

import { Nav } from "@/components/home/Nav"
import { Hero } from "@/components/home/Hero"
import { Industries } from "@/components/home/Industries"
import { Problem } from "@/components/home/Problem"
import { Loop } from "@/components/home/LoopSection"
import { Live } from "@/components/home/Live"
import { SoftwareFactory } from "@/components/home/SoftwareFactory"
import { Control } from "@/components/home/Control"
import { Oracle } from "@/components/home/Oracle"
import { ArchitectureHint } from "@/components/home/ArchitectureHint"
import { Pricing } from "@/components/home/Pricing"
import { CTA } from "@/components/home/CTA"
import { Footer } from "@/components/home/Footer"


export default function App() {
  return (
    <div className="min-h-screen text-white/90 selection:bg-white/20">
      <Nav />
      <Hero />
      <Industries />
      <Problem />
      <Loop />
      <Live />
      <SoftwareFactory />
      <Control />
      <Oracle />
      <ArchitectureHint />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
