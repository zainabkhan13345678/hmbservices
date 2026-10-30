import Link from 'next/link'

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link className="text-sm font-semibold tracking-tight" href="/">HM Business Services</Link>
          <Link className="text-sm text-neutral-600 underline-offset-4 hover:underline" href="/">Back to home</Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">HM Business Services LLC</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-8 text-sm leading-7 text-neutral-700">{children}</div>
      </article>
      <footer className="border-t border-neutral-200 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} HM Business Services LLC</span>
          <span>contact@hmbusinessservices.com</span>
        </div>
      </footer>
    </main>
  )
}
