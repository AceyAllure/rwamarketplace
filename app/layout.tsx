import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Kurogami RWA Marketplace - Prototype',
  description: 'Real-world asset participation surface. Browse tokenized-style asset listings and claim pathways inside Kurogami.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-base text-cream">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
