'use client'

import { useState } from 'react'
import { seedAssets, RWAAsset } from '@/lib/seed-assets'
import { AssetCard } from '@/components/AssetCard'
import { FilterChip } from '@/components/FilterChip'
import { MetricCard } from '@/components/MetricCard'
import { GoldButton } from '@/components/GoldButton'
import { PrototypeBadge } from '@/components/PrototypeBadge'

const assetClasses = ['All', 'Real Estate', 'Aviation', 'Watches', 'Carbon', 'Collectibles', 'Private Credit']

export default function RWAMarketplace() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredAssets = activeFilter === 'All'
    ? seedAssets
    : seedAssets.filter(asset => asset.class === activeFilter)

  const openAssets = seedAssets.filter(a => a.status === 'Open').length
  const assetClassesCount = new Set(seedAssets.map(a => a.class)).size
  const totalValue = seedAssets.reduce((sum, a) => {
    const value = parseInt(a.indicativeValue.replace(/[$,M]/g, ''))
    return sum + value
  }, 0)

  return (
    <div className="bg-base text-cream">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neon-cyan/30">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <PrototypeBadge />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6 leading-tight">
            RWA MARKETPLACE
          </h2>
          <p className="text-xl sm:text-2xl text-cream max-w-3xl mb-4 font-light">
            Real-world asset participation surface
          </p>
          <p className="text-lg text-dim max-w-3xl mb-8">
            Browse tokenized-style asset listings and claim pathways inside Kurogami.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <GoldButton size="lg" href="#assets">
              Browse Assets
            </GoldButton>
            <GoldButton size="lg" variant="secondary" href="/rwa/claim-path">
              Understand Claim Path
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-surface-light border-b border-neon-cyan/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <MetricCard
              label="Assets Listed"
              value={seedAssets.length.toString()}
              icon="📊"
            />
            <MetricCard
              label="Asset Classes"
              value={assetClassesCount.toString()}
              icon="🎯"
            />
            <MetricCard
              label="Total Indicative Value"
              value={`$${totalValue}M+`}
              icon="💎"
            />
            <MetricCard
              label="Status"
              value="Prototype"
              subtext="Demo Environment"
              icon="🔬"
            />
          </div>
        </div>
      </section>

      {/* Filters & Assets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div id="assets" className="scroll-mt-20">
          {/* Filter Bar */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-cream mb-4">Filter by Class</h3>
            <div className="flex flex-wrap gap-3">
              {assetClasses.map(cls => (
                <FilterChip
                  key={cls}
                  label={cls}
                  isActive={activeFilter === cls}
                  onClick={() => setActiveFilter(cls)}
                />
              ))}
            </div>
          </div>

          {/* Asset Grid */}
          {filteredAssets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssets.map(asset => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-dim text-lg">No assets in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-surface-light border-t border-neon-purple/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 shadow-lg shadow-neon-purple/20">
            <h3 className="text-lg font-bold text-neon-purple mb-2 uppercase tracking-wider">🔬 Prototype Environment</h3>
            <p className="text-dim text-sm">
              All displayed data is illustrative and for demonstration purposes only. This is not a live settlement system. 
              No guaranteed returns language. Capital at risk in any real-world deployment. Not an investment offer where restricted by law.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
