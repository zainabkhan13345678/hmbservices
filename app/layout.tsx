import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HM Business Services | Hotel Management Consulting',
  description: 'HM Business Services LLC provides focused hotel management consulting across the USA and UK.',
  metadataBase: new URL('https://hmbservices.cc'),
  alternates: { canonical: '/' },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
