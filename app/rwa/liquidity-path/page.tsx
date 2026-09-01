import { GoldButton } from '@/components/GoldButton'
import { PrototypeBadge } from '@/components/PrototypeBadge'

export default function LiquidityPath() {
  return (
    <div className="bg-base text-cream">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-light">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-600/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
          <div className="mb-6">
            <PrototypeBadge />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gold-400 mb-6 leading-tight">
            Liquidity Pathways
          </h1>
          <p className="text-xl text-dim max-w-3xl">
            Owners can seek capital access and maintain marketplace presence without forced immediate sale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {/* Traditional Sale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">01</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Structured Buyback</h2>
              <p className="text-dim text-lg leading-relaxed">
                Most claim structures allow redemption or buyback after a holding period. 
                Owners can exit at a defined price (typically at net asset value or market-based valuation) without forced sale pressure.
              </p>
              <ul className="mt-4 space-y-2 text-dim">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Predictable exit timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Defined valuation methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Liquidity at known intervals</span>
                </li>
              </ul>
            </div>
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl">
              🔄
            </div>
          </div>

          {/* Secondary Trading */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl order-last md:order-first">
              🤝
            </div>
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">02</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Secondary Marketplace</h2>
              <p className="text-dim text-lg leading-relaxed">
                Kurogami marketplace visibility can facilitate peer-to-peer transfers. Claim holders may be able to find other network participants 
                interested in acquiring their positions at mutually agreed valuations, creating secondary market dynamics.
              </p>
              <ul className="mt-4 space-y-2 text-dim">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Flexible exit timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Peer-to-peer discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Market-determined pricing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Portfolio Recycling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">03</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Hold & Recycle Capital</h2>
              <p className="text-dim text-lg leading-relaxed">
                For longer-term exposure, claim holders may participate in sequential distributions without requiring full liquidation. 
                Capital is recycled through new participation opportunities as initial holdings mature.
              </p>
              <ul className="mt-4 space-y-2 text-dim">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Continuous exposure to assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Regular distribution harvesting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1">✓</span>
                  <span>Simplified reinvestment</span>
                </li>
              </ul>
            </div>
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl">
              ♻️
            </div>
          </div>
        </div>

        {/* Liquidity Tiers */}
        <section className="mt-16 pt-16 border-t border-surface-light">
          <h2 className="text-3xl font-bold text-gold-400 mb-8">Liquidity Characteristics by Asset Type</h2>
          <div className="space-y-4">
            {[
              {
                type: 'Real Estate',
                liquidity: 'Typically 12-24 month minimum hold before structured exit',
                secondary: 'Moderate'
              },
              {
                type: 'Aviation',
                liquidity: '6-18 month terms with scheduled buyback windows',
                secondary: 'Moderate to High'
              },
              {
                type: 'Collectibles',
                liquidity: 'Term-based sale, typically 18-36 months',
                secondary: 'Limited initially'
              },
              {
                type: 'Carbon Credits',
                liquidity: 'Rolling market-price redemption available',
                secondary: 'High (market-linked)'
              },
              {
                type: 'Private Credit',
                liquidity: 'Short-term (6M) with redemption rights after term',
                secondary: 'Moderate'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-light rounded-lg p-6 border border-surface-light hover:border-gold-600/30 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gold-400">{item.type}</h3>
                  <span className="text-xs bg-gold-600/20 text-gold-400 px-3 py-1 rounded-full">
                    {item.secondary}
                  </span>
                </div>
                <p className="text-dim">{item.liquidity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Principles */}
        <section className="mt-12 pt-12 border-t border-surface-light">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">Core Concepts</h2>
          <div className="bg-surface-light rounded-lg p-8 border border-surface-light space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-lg font-semibold text-gold-400 mb-2">No Forced Sale Requirement</h3>
                <p className="text-dim">
                  Structured pathways allow capital access without immediate or distressed asset liquidation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📍</div>
              <div>
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Marketplace Visibility</h3>
                <p className="text-dim">
                  Network presence enables peer-to-peer discovery and potential secondary transfers at fair market value.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">⏰</div>
              <div>
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Timing Control</h3>
                <p className="text-dim">
                  Participants can choose to hold, redeem, or transfer based on their investment horizon and capital needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 pt-16 border-t border-surface-light text-center">
          <h2 className="text-3xl font-bold text-gold-400 mb-4">Explore Individual Assets</h2>
          <p className="text-dim text-lg mb-8 max-w-2xl mx-auto">
            Each asset listing details its specific term, liquidity windows, and exit structures.
          </p>
          <GoldButton size="lg" href="/rwa">
            Browse Marketplace
          </GoldButton>
        </section>
      </section>

      {/* Info Banner */}
      <section className="bg-surface-light border-y border-surface-light py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-2">🔬 Illustrative Framework</h3>
            <p className="text-dim text-sm">
              This liquidity framework is conceptual and illustrative. Actual liquidity structures depend on asset type, jurisdictions, 
              and regulatory requirements. Not a guarantee of secondary market liquidity. All data for prototype demonstration only.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
