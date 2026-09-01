export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-light mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-3">About Kurogami RWA</h3>
            <p className="text-dim text-sm leading-relaxed">
              A prototype marketplace for tokenized real-world asset participation. 
              This is a demonstration interface showing market structure and participation pathways.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/rwa" className="text-dim hover:text-gold-400 transition-colors">
                  All Assets
                </a>
              </li>
              <li>
                <a href="/rwa/claim-path" className="text-dim hover:text-gold-400 transition-colors">
                  Claim Path
                </a>
              </li>
              <li>
                <a href="/rwa/liquidity-path" className="text-dim hover:text-gold-400 transition-colors">
                  Liquidity Options
                </a>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-3">Prototype Status</h3>
            <p className="text-dim text-sm leading-relaxed">
              All data is illustrative. No active settlement system. Not an investment offer where restricted by law.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-light pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-dim text-xs">
            © {currentYear} Kurogami. RWA Marketplace Prototype.
          </p>
          <p className="text-dim text-xs mt-4 md:mt-0">
            🔬 Demonstration Environment
          </p>
        </div>
      </div>
    </footer>
  )
}
