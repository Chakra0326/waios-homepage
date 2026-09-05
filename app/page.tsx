'use client'

import { Nav } from "@/components/home/Nav"
import { Hero } from "@/components/home/Hero"
import { Industries } from "@/components/home/Industries"
import { Problem } from "@/components/home/Problem"
import { Loop } from "@/components/home/LoopSection"
import { Live } from "@/components/home/Live"
import { SoftwareFactory } from "@/components/home/SoftwareFactory"
import { CoreBrain } from "@/components/home/CoreBrain"
import { Control } from "@/components/home/Control"
import { Oracle } from "@/components/home/Oracle"
import { CTA } from "@/components/home/CTA"
import { Footer } from "@/components/home/Footer"
import { Architecture } from "@/components/home/Architecture"
import { SecurityTrust } from "@/components/home/SecurityTrust"
import { Roadmap } from "@/components/home/Roadmap"
import { Evidence } from "@/components/home/Evidence"


export default function App() {
  return (
    <div className="min-h-screen text-white/90 selection:bg-white/20">
      <Nav />
      <Hero />
      <Industries />
      <Problem />
      <Loop />
      <Architecture />
      <Live />
      <SoftwareFactory />
      <Evidence />
      <CoreBrain />
      <Control />
      <SecurityTrust />
      <Oracle />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  )
}
