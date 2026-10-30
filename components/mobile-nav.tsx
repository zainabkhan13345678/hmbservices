'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center text-[#111111]"
      >
        {open ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
      </button>
      {open && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-neutral-200 bg-white px-5 py-3 shadow-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-t border-neutral-100 py-3 text-sm text-neutral-700 first:border-t-0">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
