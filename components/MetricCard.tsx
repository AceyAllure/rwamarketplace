interface MetricCardProps {
  label: string
  value: string
  subtext?: string
  icon?: string
}

export function MetricCard({ label, value, subtext, icon }: MetricCardProps) {
  return (
    <div className="bg-surface-light rounded-lg p-4 border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <span className="text-dim text-xs font-bold uppercase tracking-wider">{label}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <div className="text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">{value}</div>
      {subtext && <div className="text-xs text-dim mt-2">{subtext}</div>}
    </div>
  )
}
