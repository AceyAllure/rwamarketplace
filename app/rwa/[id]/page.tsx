'use client'

import { seedAssets } from '@/lib/seed-assets'
import { notFound } from 'next/navigation'
import { StatusBadge } from '@/components/StatusBadge'
import { MetricCard } from '@/components/MetricCard'
import { GoldButton } from '@/components/GoldButton'
import { WaitlistForm } from '@/components/WaitlistForm'
import { PrototypeBadge } from '@/components/PrototypeBadge'
import { useState } from 'react'

interface AssetDetailPageProps {
  params: {
    id: string
  }
}

export default function AssetDetailPage({ params }: AssetDetailPageProps) {
  const asset = seedAssets.find(a => a.id === params.id)
  const [showWaitlist, setShowWaitlist] = useState(false)

  if (!asset) {
    notFound()
  }

  return (
    <div className="bg-base text-cream">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neon-cyan/30">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
          <div className="mb-8">
            <a href="/rwa" className="text-neon-cyan hover:text-neon-blue text-sm font-medium mb-4 inline-block uppercase tracking-wider">
              ← Back to Marketplace
            </a>
          </div>

          {/* Image Placeholder */}
          <div className="h-64 sm:h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-lg flex items-center justify-center overflow-hidden mb-8 hover:from-neon-cyan/20 hover:to-neon-purple/20 transition-all duration-300 border border-neon-cyan/30 shadow-lg shadow-neon-cyan/20">
            <img 
              src={asset.image}
              alt={asset.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Title & Status */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <PrototypeBadge />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-3 leading-tight">
                {asset.name}
              </h1>
              <p className="text-lg text-gold-500">{asset.class}</p>
            </div>
            <StatusBadge status={asset.status} />
          </div>

          {/* Location */}
          <p className="text-dim text-lg mb-8">📍 {asset.location}</p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-surface-light border-b border-surface-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Indicative Value"
              value={asset.indicativeValue}
              icon="💎"
            />
            <MetricCard
              label="Minimum Participation"
              value={asset.minimumParticipation}
              icon="🎯"
            />
            <MetricCard
              label="Projected Term"
              value={asset.projectedTerm}
              icon="📅"
            />
            <MetricCard
              label="Status"
              value={asset.status}
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Overview</h2>
              <p className="text-dim text-lg leading-relaxed">
                {asset.overview}
              </p>
            </div>

            {/* Structure */}
            <div>
              <h2 className="text-3xl font-bold text-gold-400 mb-6">Structure</h2>
              <div className="space-y-6">
                <div className="bg-surface-light rounded-lg p-6 border border-surface-light">
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Claim Representation</h3>
                  <p className="text-dim">
                    {asset.structure.claimRepresentation}
                  </p>
                </div>

                <div className="bg-surface-light rounded-lg p-6 border border-surface-light">
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Participation Intent</h3>
                  <p className="text-dim">
                    {asset.structure.participationIntent}
                  </p>
                </div>

                <div className="bg-surface-light rounded-lg p-6 border border-surface-light">
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Reporting Cadence</h3>
                  <p className="text-dim">
                    {asset.structure.reportingCadence}
                  </p>
                </div>
              </div>
            </div>

            {/* Liquidity */}
            <div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Liquidity Options</h2>
              <p className="text-dim text-lg leading-relaxed">
                {asset.liquidity}
              </p>
              <div className="mt-6">
                <a href="/rwa/liquidity-path" className="text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-2">
                  Learn about Liquidity Path →
                </a>
              </div>
            </div>

            {/* Risk Disclosure */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">⚠️ Risk Disclosure</h3>
              <p className="text-dim text-sm leading-relaxed">
                {asset.riskDisclosure}
              </p>
            </div>

            {/* Participation Note */}
            <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold-400 mb-3">📌 Participation Note</h3>
              <p className="text-dim text-sm">
                {asset.participationNote}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-surface-light rounded-lg p-8 border border-surface-light sticky top-20 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gold-400 mb-2">Ready to Participate?</h3>
                <p className="text-dim text-sm">
                  {asset.status === 'Open'
                    ? 'Request access to this participation opportunity.'
                    : asset.status === 'Coming Soon'
                    ? 'Join the waitlist to be notified when this asset opens.'
                    : 'This allocation is currently reserved. Join the waitlist for future opportunities.'}
                </p>
              </div>

              {!showWaitlist ? (
                <GoldButton
                  size="lg"
                  className="w-full"
                  onClick={() => setShowWaitlist(true)}
                >
                  {asset.status === 'Open'
                    ? 'Request Access'
                    : 'Join Waitlist'}
                </GoldButton>
              ) : (
                <div>
                  <button
                    onClick={() => setShowWaitlist(false)}
                    className="text-gold-400 hover:text-gold-300 text-sm mb-4 inline-block"
                  >
                    ← Close Form
                  </button>
                  <WaitlistForm />
                </div>
              )}

              {/* Asset Details Box */}
              <div className="space-y-4 pt-6 border-t border-surface">
                <div>
                  <p className="text-xs text-dim uppercase tracking-wider mb-1">Minimum Entry</p>
                  <p className="text-lg font-semibold text-cream">{asset.minimumParticipation}</p>
                </div>
                <div>
                  <p className="text-xs text-dim uppercase tracking-wider mb-1">Term Length</p>
                  <p className="text-lg font-semibold text-cream">{asset.projectedTerm}</p>
                </div>
                <div>
                  <p className="text-xs text-dim uppercase tracking-wider mb-1">Market Status</p>
                  <div className="mt-2">
                    <StatusBadge status={asset.status} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Assets */}
      <section className="bg-surface-light border-t border-surface-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gold-400 mb-8">Explore Other Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seedAssets.filter(a => a.id !== asset.id).slice(0, 3).map(relatedAsset => (
              <a
                key={relatedAsset.id}
                href={`/rwa/${relatedAsset.id}`}
                className="bg-surface rounded-lg overflow-hidden border border-surface-light hover:border-gold-600/50 transition-all duration-200 group"
              >
                <div className="h-32 bg-gradient-to-br from-gold-600/20 to-gold-900/20 flex items-center justify-center text-5xl group-hover:from-gold-600/30 group-hover:to-gold-900/30 transition-all">
                  {relatedAsset.image}
                </div>
                <div className="p-4">
                  <p className="text-sm text-gold-400 mb-1">{relatedAsset.class}</p>
                  <h4 className="font-semibold text-cream mb-2">{relatedAsset.name}</h4>
                  <p className="text-xs text-dim">{relatedAsset.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Banner */}
      <section className="bg-amber-500/10 border-t border-amber-500/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-amber-300 text-sm font-semibold mb-2">🔬 PROTOTYPE ENVIRONMENT</p>
            <p className="text-dim text-sm max-w-2xl mx-auto">
              All metrics and terms shown are illustrative. This is a demonstration interface for marketplace structure exploration. 
              Not a live settlement system. No guaranteed returns. Capital at risk in real deployments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
