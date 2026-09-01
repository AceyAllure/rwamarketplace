import Link from 'next/link'
import { PrototypeBadge } from './PrototypeBadge'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base border-b border-surface-light backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <Link href="/rwa" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="text-3xl">⚜️</div>
          <div>
            <h1 className="text-xl font-bold text-cream">KUROGAMI</h1>
            <p className="text-xs text-gold-400">RWA Marketplace</p>
          </div>
        </Link>
        <PrototypeBadge />
      </div>
    </header>
  )
}
