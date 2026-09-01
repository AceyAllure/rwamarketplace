import { StatusBadge } from './StatusBadge'
import { RWAAsset } from '@/lib/seed-assets'

interface AssetCardProps {
  asset: RWAAsset
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <div className="bg-surface-light rounded-lg overflow-hidden border border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 hover:shadow-glow-cyan group cursor-pointer">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 flex items-center justify-center overflow-hidden group-hover:from-neon-cyan/20 group-hover:to-neon-purple/20 transition-all duration-300 relative">
        <img 
          src={asset.image} 
          alt={asset.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
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
          <p className="text-sm text-neon-cyan font-bold uppercase tracking-wider">{asset.class}</p>
          <p className="text-xs text-dim">{asset.location}</p>
        </div>
        
        {/* Status */}
        <div className="mb-4">
          <StatusBadge status={asset.status} />
        </div>
        
        {/* Metrics */}
        <div className="space-y-2 mb-4 pb-4 border-b border-neon-cyan/20">
          <div className="flex justify-between items-center text-sm">
            <span className="text-dim">Indicative Value</span>
            <span className="text-neon-cyan font-bold">{asset.indicativeValue}</span>
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
          className="block w-full bg-gradient-to-r from-neon-cyan to-neon-blue hover:shadow-glow-intense-cyan text-black text-center py-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  )
}
