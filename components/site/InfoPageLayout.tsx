import type { ReactNode } from 'react'
import { Footer } from '@/components/home/Footer'
import { Nav } from '@/components/home/Nav'

type InfoPageLayoutProps = {
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
  wide?: boolean
}

export function InfoPageLayout({ eyebrow, title, intro, children, wide = false }: InfoPageLayoutProps) {
  return (
    <div className="min-h-screen text-white/90 selection:bg-white/20">
      <Nav />
      <main id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_72%_10%,rgba(255,107,26,0.09),transparent_36%),radial-gradient(circle_at_18%_16%,rgba(120,140,255,0.04),transparent_30%)]" />
        <section className="relative hairline-b">
          <div className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-6 py-20 md:px-8 md:py-28`}>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#FF6B1A]">{eyebrow}</div>
            <h1 className="mt-6 max-w-4xl text-balance text-[42px] font-semibold leading-[0.98] tracking-[-0.035em] text-white md:text-[68px]">{title}</h1>
            <p className="mt-7 max-w-3xl text-pretty text-[17px] leading-8 text-dim md:text-[19px]">{intro}</p>
          </div>
        </section>
        <div className={`relative ${wide ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-6 py-16 md:px-8 md:py-24`}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export function InfoSection({ title, children, label }: { title: string; children: ReactNode; label?: string }) {
  return (
    <section className="border-t border-white/[0.08] py-10 first:border-t-0 first:pt-0 md:py-14">
      {label && <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">{label}</div>}
      <h2 className="text-[25px] font-medium tracking-[-0.02em] text-white md:text-[32px]">{title}</h2>
      <div className="info-copy mt-5 space-y-4 text-[15px] leading-7 text-dim md:text-[16px] md:leading-8">{children}</div>
    </section>
  )
}

export function SignalCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border hairline bg-[#0A0A0C] p-5 md:p-6">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="mt-3 text-[14px] leading-7 text-white/70">{children}</div>
    </div>
  )
}
