interface StatusBadgeProps {
  status: 'Open' | 'Coming Soon' | 'Reserved'
  className?: string
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium'
  
  const statusClasses = {
    'Open': 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    'Coming Soon': 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
    'Reserved': 'bg-slate-500/20 text-slate-300 border border-slate-500/40',
  }
  
  return (
    <span className={`${baseClasses} ${statusClasses[status]} ${className}`}>
      {status}
    </span>
  )
}
