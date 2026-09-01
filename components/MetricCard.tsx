interface MetricCardProps {
  label: string
  value: string
  subtext?: string
  icon?: string
}

export function MetricCard({ label, value, subtext, icon }: MetricCardProps) {
  return (
    <div className="bg-surface-light rounded-lg p-4 border border-surface-light hover:border-gold-600/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-2">
        <span className="text-dim text-sm font-medium">{label}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <div className="text-2xl font-bold text-gold-400">{value}</div>
      {subtext && <div className="text-xs text-dim mt-2">{subtext}</div>}
    </div>
  )
}
