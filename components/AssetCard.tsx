import { StatusBadge } from './StatusBadge'
import { RWAAsset } from '@/lib/seed-assets'

interface AssetCardProps {
  asset: RWAAsset
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <div className="bg-surface-light rounded-lg overflow-hidden border border-surface-light hover:border-gold-600/50 transition-all duration-200 hover:shadow-lg hover:shadow-gold-600/10 group cursor-pointer">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-gold-600/20 to-gold-900/20 flex items-center justify-center text-6xl group-hover:from-gold-600/30 group-hover:to-gold-900/30 transition-all duration-200">
        {asset.image}
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-2">
            <h3 className="text-lg font-bold text-cream leading-snug">{asset.name}</h3>
          </div>
        </div>
        
        {/* Class and Location */}
        <div className="mb-3 space-y-1">
          <p className="text-sm text-gold-400 font-medium">{asset.class}</p>
          <p className="text-xs text-dim">{asset.location}</p>
        </div>
        
        {/* Status */}
        <div className="mb-4">
          <StatusBadge status={asset.status} />
        </div>
        
        {/* Metrics */}
        <div className="space-y-2 mb-4 pb-4 border-b border-surface/50">
          <div className="flex justify-between items-center text-sm">
            <span className="text-dim">Indicative Value</span>
            <span className="text-gold-400 font-semibold">{asset.indicativeValue}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-dim">Min. Participation</span>
            <span className="text-cream font-semibold">{asset.minimumParticipation}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-dim">Projected Term</span>
            <span className="text-cream font-semibold">{asset.projectedTerm}</span>
          </div>
        </div>
        
        {/* Note */}
        <p className="text-xs text-dim mb-4 italic">{asset.participationNote}</p>
        
        {/* CTA */}
        <a
          href={`/rwa/${asset.id}`}
          className="block w-full bg-gold-600 hover:bg-gold-700 text-black text-center py-2 rounded-lg font-medium transition-all duration-200"
        >
          View Details
        </a>
      </div>
    </div>
  )
}
