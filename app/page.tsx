import Link from 'next/link'
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

const services = [
  { number: '01', title: 'Pre-Opening Consulting', description: 'Practical planning support for owners and teams preparing a new hospitality operation.' },
  { number: '02', title: 'Operational Review', description: 'An objective look at workflows, standards, and readiness to identify clear next steps.' },
  { number: '03', title: 'Revenue Advisory', description: 'Focused guidance on pricing, distribution, and commercial foundations for launch.' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{children}</p>
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link className="text-sm font-semibold tracking-tight" href="#top">HM Business Services</Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-neutral-600 sm:flex">
            <Link className="hover:text-black" href="#about">About</Link>
            <Link className="hover:text-black" href="#services">Services</Link>
            <Link className="hover:text-black" href="#contact">Contact</Link>
          </nav>
          <Link className="text-sm font-semibold underline underline-offset-4 sm:hidden" href="#contact">Contact</Link>
        </div>
      </header>

      <section className="border-b border-neutral-200" id="top">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20 lg:py-36">
          <div>
            <div className="inline-flex items-center gap-2 border border-neutral-300 bg-[#f9f9f9] px-3 py-2 text-xs font-medium text-neutral-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" aria-hidden="true" /> Currently in pre-launch
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">Hotel Management Consulting</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">HM Business Services provides focused consulting for hospitality owners and operators preparing for their next stage.</p>
            <p className="mt-3 max-w-xl text-lg leading-8 text-neutral-600">We are a newly formed company building our practice across the USA and UK.</p>
            <Link className="mt-9 inline-flex items-center gap-2 bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white hover:bg-neutral-700" href="#contact">Start a conversation <ArrowUpRight size={16} /></Link>
          </div>
          <div className="flex items-end lg:pb-2">
            <div className="border-l-2 border-[#111111] pl-5">
              <p className="text-sm font-semibold">Straightforward by design.</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">A transparent pre-launch company focused on useful, responsible advice—not promises of work we have not yet done.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#f9f9f9]" id="about">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <SectionLabel>About the company</SectionLabel>
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A focused consulting practice, being built carefully.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">HM Business Services LLC is a Wyoming limited liability company offering hotel management consulting. Our work is designed to help hospitality businesses make informed operational and commercial decisions as they prepare to launch or improve.</p>
            <div className="mt-8 flex gap-3 border border-neutral-300 bg-white p-5 text-sm leading-6"><Check className="mt-0.5 shrink-0" size={17} /><span><strong>Disclosure:</strong> Newly formed entity. Does not currently act as manager of record for any hotel properties.</span></div>
            <div className="mt-10 border-t border-neutral-300 pt-6"><SectionLabel>Founder</SectionLabel><p className="mt-3 text-base font-medium">Founder Name</p><p className="mt-1 text-sm text-neutral-600">Founder &amp; Principal</p></div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200" id="services">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><SectionLabel>What we do</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Services for the work before opening day.</h2></div><p className="max-w-xs text-sm leading-6 text-neutral-600">Clear, practical advisory support for the decisions that shape a hospitality operation.</p></div>
          <div className="mt-12 grid border-l border-t border-neutral-200 sm:grid-cols-3">{services.map((service) => <article className="border-b border-r border-neutral-200 p-6 sm:p-8" key={service.number}><span className="text-xs font-semibold text-neutral-400">{service.number}</span><h3 className="mt-16 text-xl font-semibold tracking-tight">{service.title}</h3><p className="mt-4 text-sm leading-6 text-neutral-600">{service.description}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f9f9f9]" id="contact">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionLabel>Contact</SectionLabel><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Let&apos;s talk about what you&apos;re building.</h2><p className="mt-6 max-w-md text-base leading-7 text-neutral-600">Tell us a little about your project or question. We will be in touch as our practice develops.</p><div className="mt-9 space-y-4 text-sm"><p className="flex items-center gap-3"><Mail size={16} /> contact@hmbusinessservices.com</p><p className="flex items-center gap-3"><Phone size={16} /> Phone number to be filled</p></div></div><ContactForm /></div>
      </section>

      <footer className="border-t border-neutral-200 bg-white"><div className="mx-auto max-w-6xl px-5 py-12 sm:px-8"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><p className="text-sm font-semibold">HM Business Services</p><p className="mt-3 text-xs leading-5 text-neutral-500">Hotel management consulting<br />USA &amp; UK · Pre-launch startup</p></div><div className="text-xs leading-6 text-neutral-500"><p><strong className="font-semibold text-neutral-700">Legal Name:</strong> HM Business Services LLC</p><p><strong className="font-semibold text-neutral-700">Entity Type:</strong> Wyoming Limited Liability Company</p><p><strong className="font-semibold text-neutral-700">Formation Date:</strong> [To be filled]</p><p><strong className="font-semibold text-neutral-700">EIN:</strong> [To be filled]</p></div><div className="text-xs leading-6 text-neutral-500"><p className="flex gap-2"><MapPin className="mt-1 shrink-0" size={13} /><span><strong className="font-semibold text-neutral-700">Registered Agent:</strong> [To be filled]</span></p><p className="mt-2"><strong className="font-semibold text-neutral-700">Operating Address:</strong> [To be filled]</p></div><div className="text-xs leading-6 text-neutral-500"><p><strong className="font-semibold text-neutral-700">Email:</strong> contact@hmbusinessservices.com</p><p><strong className="font-semibold text-neutral-700">Phone:</strong> [To be filled]</p><div className="mt-4 flex gap-4 text-neutral-700"><Link className="underline underline-offset-4" href="/privacy">Privacy</Link><Link className="underline underline-offset-4" href="/terms">Terms</Link></div></div></div><div className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-400">© {new Date().getFullYear()} HM Business Services LLC. All rights reserved.</div></div></footer>
    </main>
  )
}
