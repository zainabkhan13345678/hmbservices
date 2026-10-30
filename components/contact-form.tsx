'use client'

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-black bg-white p-6 sm:p-8" role="status">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Message received</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">Thank you for reaching out.</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
          We will review your message and respond from contact@hmbusinessservices.com.
        </p>
        <button
          className="mt-6 text-sm font-semibold underline underline-offset-4"
          onClick={() => setSubmitted(false)}
          type="button"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-5 border border-neutral-200 bg-white p-6 sm:p-8" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-medium" htmlFor="name">Name</label>
        <input className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm outline-none transition-colors focus:border-black" id="name" name="name" required type="text" />
      </div>
      <div>
        <label className="text-sm font-medium" htmlFor="email">Email</label>
        <input className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm outline-none transition-colors focus:border-black" id="email" name="email" required type="email" />
      </div>
      <div>
        <label className="text-sm font-medium" htmlFor="message">Message</label>
        <textarea className="mt-2 min-h-32 w-full resize-y border border-neutral-300 bg-white px-3 py-3 text-sm outline-none transition-colors focus:border-black" id="message" name="message" required />
      </div>
      <button className="w-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" type="submit">
        Send message
      </button>
    </form>
  )
}
