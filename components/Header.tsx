import Link from 'next/link'
import { PrototypeBadge } from './PrototypeBadge'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base border-b border-neon-cyan/30 backdrop-blur-sm shadow-lg shadow-neon-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <Link href="/rwa" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <div className="text-3xl group-hover:animate-glow-pulse">⚜️</div>
          <div>
            <h1 className="text-xl font-bold text-cream">KUROGAMI</h1>
            <p className="text-xs bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent font-semibold">RWA Marketplace</p>
          </div>
        </Link>
        <PrototypeBadge />
      </div>
    </header>
  )
}
