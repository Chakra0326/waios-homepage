'use client'

import { FormEvent, useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const interests = ['WAIOS Demo', 'Enterprise Deployment', 'Design Partnership', 'Security / Technical Review', 'Investor Inquiry', 'Partnership', 'Other']
const fieldClass = 'mt-2 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/60 focus:bg-white/[0.05]'

export function ContactForm() {
  const [interest, setInterest] = useState('WAIOS Demo')

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('interest') === 'security') setInterest('Security / Technical Review')
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`[WAIOS] ${String(form.get('interest'))} inquiry from ${String(form.get('company'))}`)
    const body = encodeURIComponent([
      `Full name: ${String(form.get('fullName'))}`,
      `Work email: ${String(form.get('email'))}`,
      `Company: ${String(form.get('company'))}`,
      `Job title: ${String(form.get('jobTitle'))}`,
      `Company size: ${String(form.get('companySize') || 'Not provided')}`,
      `Interest: ${String(form.get('interest'))}`,
      '',
      String(form.get('message')),
    ].join('\n'))
    window.location.href = `mailto:contact@waios.ai?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border hairline bg-[#0A0A0C] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-[12px] text-white/70">Full Name<input className={fieldClass} name="fullName" autoComplete="name" required /></label>
        <label className="text-[12px] text-white/70">Work Email<input className={fieldClass} name="email" type="email" autoComplete="email" required /></label>
        <label className="text-[12px] text-white/70">Company<input className={fieldClass} name="company" autoComplete="organization" required /></label>
        <label className="text-[12px] text-white/70">Job Title<input className={fieldClass} name="jobTitle" autoComplete="organization-title" required /></label>
        <label className="text-[12px] text-white/70">Company Size <span className="text-white/35">(optional)</span><select className={fieldClass} name="companySize" defaultValue=""><option value="">Select company size</option><option>1–50</option><option>51–250</option><option>251–1,000</option><option>1,001–5,000</option><option>5,000+</option></select></label>
        <label className="text-[12px] text-white/70">What are you interested in?<select className={fieldClass} name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>{interests.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <label className="mt-5 block text-[12px] text-white/70">Tell us about your environment or use case<textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required /></label>
      <label className="mt-5 flex items-start gap-3 text-[12px] leading-5 text-white/60">
        <input className="mt-1 accent-[#FF6B1A]" name="privacy" type="checkbox" required />
        <span>I agree to the <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" href="/privacy">Privacy Policy</a>.</span>
      </label>
      <button type="submit" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition hover:bg-white/90">Contact WAIOS <ArrowRight className="h-4 w-4" /></button>
      <p className="mt-4 text-[11px] leading-5 text-white/35">This opens your email application with the form details prepared. Nothing is sent automatically.</p>
    </form>
  )
}
