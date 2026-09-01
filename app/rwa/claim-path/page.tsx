import { GoldButton } from '@/components/GoldButton'
import { PrototypeBadge } from '@/components/PrototypeBadge'

export default function ClaimPath() {
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
            Claim Path Explained
          </h1>
          <p className="text-xl text-dim max-w-3xl">
            How real-world assets are packaged, distributed, and tracked through the Kurogami network.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">01</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Asset Packaging</h2>
              <p className="text-dim text-lg leading-relaxed">
                Real-world assets are identified, documented, and structured into participation objects. 
                Each asset undergoes documentation review to establish clear ownership, rights, and economic exposure terms.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl">
                📦
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl order-last md:order-first">
              ⚖️
            </div>
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">02</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Rights & Economics Definition</h2>
              <p className="text-dim text-lg leading-relaxed">
                Participation rights are clearly defined. Claim holders receive defined economic exposure — 
                whether cash distributions, appreciation upside, or other structured payoffs. Terms are transparent and documented.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">03</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Distribution Through Network</h2>
              <p className="text-dim text-lg leading-relaxed">
                Participation claims are made visible and accessible through the Kurogami network. 
                Investors browse, filter, and request participation in assets that match their investment thesis and ticket size.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl">
              🌐
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-64 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center text-7xl order-last md:order-first">
              📊
            </div>
            <div>
              <div className="text-5xl font-bold text-gold-600 mb-4">04</div>
              <h2 className="text-3xl font-bold text-gold-400 mb-4">Ongoing Reporting</h2>
              <p className="text-dim text-lg leading-relaxed">
                Claim holders receive regular updates on asset performance, distribution activity, and market conditions. 
                Reporting cadence depends on asset type and structure (monthly, quarterly, or annual).
              </p>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <section className="mt-16 pt-16 border-t border-surface-light">
          <h2 className="text-3xl font-bold text-gold-400 mb-8">Key Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Transparent Terms',
                desc: 'All rights and economics are clearly documented before participation.'
              },
              {
                icon: '🎯',
                title: 'Defined Exposure',
                desc: 'Each claim provides specific economic participation in the underlying asset.'
              },
              {
                icon: '📈',
                title: 'Structured Distribution',
                desc: 'Cash flows and distributions follow pre-agreed schedules and formulas.'
              },
              {
                icon: '📋',
                title: 'Regular Reporting',
                desc: 'Participants receive systematic updates on asset performance and status.'
              }
            ].map((principle, idx) => (
              <div key={idx} className="bg-surface-light rounded-lg p-6 border border-surface-light hover:border-gold-600/30 transition-all">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-semibold text-gold-400 mb-2">{principle.title}</h3>
                <p className="text-dim">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 pt-16 border-t border-surface-light text-center">
          <h2 className="text-3xl font-bold text-gold-400 mb-4">Ready to Explore?</h2>
          <p className="text-dim text-lg mb-8 max-w-2xl mx-auto">
            Browse the marketplace to see how various asset types are structured and packaged for participation.
          </p>
          <GoldButton size="lg" href="/rwa">
            Browse Assets
          </GoldButton>
        </section>
      </section>

      {/* Info Banner */}
      <section className="bg-surface-light border-y border-surface-light py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-2">🔬 Demonstration Structure</h3>
            <p className="text-dim text-sm">
              This claim path framework is illustrative. Actual structuring depends on asset type, jurisdiction, and regulatory requirements.
              Not an investment offer. All data for prototype demonstration only.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
